import React from 'react';
import {render} from 'react-native-testing-library';
// import 'react-native-gesture-handler';
import CreateAccount from '../CreateAccount';

it('it renders all inputs as expected',()=>{
  const {toJSON} =render(<CreateAccount/>);
    expect(toJSON()).toMatchSnapshot();
})

// import SignIn from '../SignIn';

// test('it renders all inputs as expected',()=>{
//   const {toJSON} =render(<SignIn/>);
//     // expect(toJSON()).toMatchSnapshot();
//     exepect(true).toBeTruthy();
// })