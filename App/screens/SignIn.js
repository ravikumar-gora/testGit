import React,{useEffect,useState} from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Keyboard
} from "react-native";
import { useDispatch ,useSelector} from 'react-redux';
import {connect} from 'react-redux';
import { ReasolveAuth } from "../actions";
import { TextField, ErrorText } from "../components/Form";
import { Button, } from "../components/Button";
import {SignAccount} from '../actions';

const styles = StyleSheet.create({
  textBlock: {
    marginTop: 20
  },
  text: {
    fontSize: 18,
    color: "#969696",
    textAlign: "center",
    marginBottom: 2
  },
  link: {
    textDecorationLine: "underline"
  }
});

const SignIn= (props)=>{
    const dispatch = useDispatch();
    const [username, setU] = useState("")
    const [password, setP] = useState("")
    const [error,setError] = useState('')

    useEffect(() => {
      ReasolveAuth(); 
    })

  const handleSubmit = () => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  if (!username || !password) {
     setError('Empty inputs not allowed')
      setU(''), setP('')
  }

  else if(!pattern.test(username)) {
    setError('Please enter a valid email address!');
    setU(''), setP('')
  }
  else  {
      Keyboard.dismiss()
      dispatch(SignAccount(username, password))
      setError('Loading...');
      setU(''), setP('')
  }
  };
    return (
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20 }}
        style={{ backgroundColor: "#fff" }}>
          
        <TextField
          label="Email"
          placeholder="john.doe@example.com"
          onChangeText={
          text => setU(text)}
          value={username}
          autoCapitalize="none"
          testID = "SignIn.email"
        />
        <TextField
          label="Password"
          placeholder= "****"
          secureTextEntry
          onChangeText={
          text => setP(text)
          }
          value={password}
          autoCapitalize="none"
          testID = "SignIn.password"
        />
       <ErrorText testID="ErrorId.SignIn" text={error}></ErrorText>
        <Button testID="SignIn.Button" text="Submit" onPress={handleSubmit} />
        <View style={styles.textBlock}>
          <Text style={styles.text}>Don't have an account?</Text>
          <TouchableOpacity onPress={() =>props.navigation.navigate("CreateAccount")}>
            <Text style={[styles.text, styles.link]}>Register here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
}

export default (SignIn);
