import React,{useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {SignOut} from '../actions';
import { useDispatch,useSelector } from 'react-redux';


const Home = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);

    return (
     
        <View style={{ justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
        <TouchableOpacity style={{}} onPress={()=>{   
              dispatch(SignOut())
          }}>
           <Text testID="SignOut.Button" style={{color:'brown'}}>Signout</Text>
        </TouchableOpacity>
            <View  style={{flex:1, justifyContent:'center'}}>
            <Text>
               Logged In 
            </Text>
            </View>
            </View>
        

    )
}

export default Home

const styles = StyleSheet.create({})
