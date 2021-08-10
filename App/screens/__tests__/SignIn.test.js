import 'react-native-gesture-handler';
import React from 'react';
import {render,fireEvent} from 'react-native-testing-library';
import AppNavigator from '../../index';
import SignIn from '../SignIn';
import AsyncStorage from '@react-native-community/async-storage';
jest.mock('@react-native-community/async-storage');
jest.mock('react-native-gesture-handler');
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import reducers from '../../reducers';
import initial_state from '../../reducers/initial';
import { createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Home from '../Home';
import { expect, it } from '@jest/globals';

function renderWithredux(
    comp, 
    {initial_state,store=createStore(reducers,applyMiddleware(thunk),initial_state)} = {} )
{
    return{
        ...render(<Provider  store={store}>{comp}</Provider>)
    }
}
// afterEach(cleanup);

it('SignIn UI rendered correct',()=>{
    const  {getAllByText,getByPlaceholder}  = renderWithredux(<SignIn/>)
    expect(getAllByText("Submit").length).toBe(1);
    getByPlaceholder('john.doe@example.com');
    getByPlaceholder('****')
})

it("Validation Empty inputs SignIn  correctly",   ()=>{
    const {getByTestId,getByText} = renderWithredux(<SignIn/>);
    fireEvent.press(getByTestId('SignIn.Button'));
    getByText('Empty inputs not allowed');
    
    
})

it('Validation Correct Email SignIn correctly',()=>{
    const {getByTestId,getByText} = renderWithredux(<SignIn/>)
    fireEvent.changeText(getByTestId('SignIn.email'),'aasdfz3zl')
    fireEvent.changeText(getByTestId('SignIn.password'),'asdf')
    fireEvent.press(getByTestId("SignIn.Button"));
    getByText('Please enter a valid email address!');
    // expect(getByTextId("")).toBe("'Please enter a valid email address!'")
})

it("Success Login",()=>{
    const {getByTestId} = renderWithredux(<SignIn/>)
    fireEvent.changeText(getByTestId('SignIn.email'),'abc@xyz.com')
    fireEvent.changeText(getByTestId('SignIn.password'),'1234567890')
    fireEvent.press(getByTestId("SignIn.Button"))

    const {getByText,queryByText} = renderWithredux(<Home/>)
    expect(queryByText('Submit')).toBeNull();
    getByText('Logged In')
})

