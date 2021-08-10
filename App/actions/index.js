import { baseUrl } from '../baseUrl/baseUrl';
import AsyncStorage from '@react-native-community/async-storage';

export const ReasolveAuth = () => {
    return async (dispatch) => {
        console.log("Hey ResolveAuth")
        let token = await AsyncStorage.getItem('Token');
        let id = await AsyncStorage.getItem('Id');
        if (token && id) {
            dispatch({ type:'LOGIN_USER_SUCCESS', payload: [token, id] });
        }
    }
}

export const SignOut = () => {
    return async (dispatch) => {
        dispatch({type:'SIGN_OUT'});
        console.log("SignOut Action")
        await AsyncStorage.removeItem('Token');
        await AsyncStorage.removeItem('Id');
    }
}

export const SignAccount = (username, password) => {

    return async (dispatch) => {
        dispatch({ type: 'LOGIN_USER' })
        const formData = new FormData();
        formData.append('server_key', '5bda6652fe66a3e69331fb4d655db3ba');
        formData.append('email', username);
        formData.append('password', password);
        console.log("FormData")
        console.log(formData)
        console.log("FormData")
        await baseUrl.post('/login', formData)
            .then(async (res) => {
                if (res.data.status == 200) {
                    await AsyncStorage.setItem('Token', res.data.data.Token);
                    await AsyncStorage.setItem('Id', res.data.data.Id);
                    dispatch({ type: 'LOGIN_USER_SUCCESS', payload: [res.data.data.Token, res.data.data.Id] })
                    console.log(res.data);
                    console.log(res.data.data.Id)
                    alert(res.data.data.Message)
                }
                else {
                    // ToastAndroid.show(res.data.data, ToastAndroid.SHORT);
                    dispatch({ type: 'LOGIN_USER_FAIL' })
                    console.log(res);
                }
            })
            .catch((res) => {
                // ToastAndroid.show('Network error', ToastAndroid.SHORT);
                dispatch({ type: 'LOGIN_USER_FAIL' })
                console.log(res);
            })
    }
}
