import React, { Component } from "react";
import { View,Text ,Button} from "react-native";


const Functional = () =>{
 
        function login (){
            alert("Hi, Nadeem")
        }
    
        return(
            <View>
            <Text style={{fontSize:30}}>Hi, Innovent</Text>
            <Button onPress={login} title="Login" />
            </View>
        )
    
}

export default Functional;