import React, { Component } from "react";
import { View,Text ,Button} from "react-native";


class State extends Component{

    constructor() {

        super();
        this.state = {
        data: "HelloWorld"
        }
    }
     
    test(){
        {this.setState({data: "new data"})}
    }
    render()
    {
        console.warn(this.state)
        return( 
            <View>
            <Text style={{fontSize:30}}>
            {this.state.data}
            </Text>

            <Button title="Update State" onPress={()=> {this.setState({data: "hi"})}}/>
            <Button title="State in function" onPress={()=> {this.test()}}/>
            </View>
        )
    }
}

export default State;