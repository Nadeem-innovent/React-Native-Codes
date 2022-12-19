import React, { Component } from "react";
import { View,Text ,Button, TextInput} from "react-native";


class Textinput extends Component{

    constructor() {

        super();
        this.state = {
        data: ""
        }
    }
     
    render()
    {
        return( 
            <View>
                <Text>
                    {this.state.data}
                </Text>

            <TextInput placeholder= {"Enter your Name"}
            onChangeText= {(e)=> {this.setState({data:(e)})}}
            >
            </TextInput>

            <Button title = 'Submit' onPress={()=>{alert(this.state.data)}}/>
            </View>
        )
    }
}

export default Textinput;