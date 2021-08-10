
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
import { it } from '@jest/globals';

function renderWithredux(
    comp, 
    {initial_state,store=createStore(reducers,applyMiddleware(thunk),initial_state)} = {})
{
    return{
        ...render(<Provider  store={store}>{comp}</Provider>)
    }
}

it("Signout Working",()=>{
    const {getByText} = renderWithredux(<Home/>)
    fireEvent.press(getByText("Signout"))
    const {getByTestId} = renderWithredux(<SignIn/>)
    getByTestId("SignIn.Button");

})