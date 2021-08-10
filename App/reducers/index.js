import initial_state from "./initial"

const reducers = (state=initial_state,action)=>{
    switch (action.type) {

        case 'LOGIN_USER':
          return { ...state, loading: true, error: '' }
    
        case 'LOGIN_USER_SUCCESS':
          return { ...state, loading:false,token: action.payload[0], id: action.payload[1] }
    
        case 'LOGIN_USER_FAIL':
          return { ...state, error: 'Incorrect Username or password', loading: false}

        case 'SIGN_OUT':
          return { state: initial_state }

        default:
          return state;
    }
  }

  export default reducers;