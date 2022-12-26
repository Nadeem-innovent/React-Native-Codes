import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button,TextInput, View } from 'react-native';
import ClassComponent from './components/ClassComponent';
import Login from './components/Login';
import Functional from './components/Functional';
import State from './components/State';
import Textinput from './components/Textinput';
import { Component } from 'react/cjs/react.production.min';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { color } from 'react-native-reanimated';


class App extends Component {

  constructor (){

    super();
    this.State = {
      Username : "",
      Password : "",
      Department : "",
    }
  }

  submit(){
    console.log("All values")
    console.log(this.state)
  }

  render() {

    return (
      <View style={{flex : 1}}>
         {/* <Login />
        <ClassComponent />
        <Functional />
        <State />
        <Textinput /> */}
  
  
      <TextInput placeholder={"Enter Name"}
      style = {styles.textBox}
       onChangeText= {(text)=> {this.setState({Username:text})}}>
      </TextInput>

      <TextInput placeholder={"Enter Password"}
      style = {styles.textBox}
      secureTextEntry = {true}
       onChangeText= {(text)=> {this.setState({Password:   text})}}>
      </TextInput>

      <TextInput placeholder={"Enter Department"}
      style = {styles.textBox}
       onChangeText= {(text)=> {this.setState({Department: text})}}>
      </TextInput>
  

      {/* <Button title='Submit' onPress={()=>{this.submit()}}/> */}
      <Button title='Go to profile' onPress={()=> {this.props.navigation.navigate('profile')}}/>
      </View>
    );
  } 
}

const styles= StyleSheet.create({
textBox : {
borderColor : 'skyblue',
borderWidth : 2,
padding     : 10,
marginHorizontal : 20,
marginVertical : 25,
}
})


function profile(props)
 {
   return(
    <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
      <Text style={{fontSize : 50}}>
        profile screen
        </Text>
        <Button title='Go to Home' onPress={()=> {props.navigation.navigate('Home')}}/>
    </View>
   ) 
}
const appNavigator = createStackNavigator ({
  Home : {
    screen : App
  },

  profile: {
    screen : profile
  }
})
export default createAppContainer(appNavigator);