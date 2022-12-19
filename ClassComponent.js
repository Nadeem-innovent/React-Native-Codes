import React, { Component } from "react";
import { View,Text ,Button} from "react-native";


class ClassComponent extends Component{
    render()
    {
        return(
            <View>
            <Text style={{fontSize:30}}>Hi, Innovent</Text>
            <Button onPress={()=>alert("Hi, Innovent")} title="Login" />
            </View>
        )
    }
}

export default ClassComponent;