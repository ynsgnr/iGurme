
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

import {getColor} from '../resources'

class LoginSoftly extends Component {

  state={
    email:'',
    password:''
  }

  static defaultProps = {
    onLogin:(username,password)=>{console.log("Add on login prop to get username and password");}
  }

  render() {
    return (
      <View style={{width:'100%', alignItems:'center', justifyContent: 'center'}}>
        <View style={{width:'87%',paddingTop:'7%',paddingBottom:'7%',alignItems:'flex-start', justifyContent: 'flex-start'}}>
          <Text style={{paddingTop:'8%',paddingBottom:'8%',color:getColor('black'),fontSize:35,fontWeight:'bold'}}>WEL... {"\n"}COME</Text>
          <View style={{padding:'2%',width:'100%'}}>
            <TextInput style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',paddingTop:'5%',paddingBottom:'5%'}} multiline={false} onChangeText={(text)=>this.setState({username:text})} placeholder='e-mail'/>
          </View>
          <View style={{padding:'2%',width:'100%'}}>
            <TextInput style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',paddingTop:'5%',paddingBottom:'5%'}} multiline={false} onChangeText={(text)=>this.setState({password:text})} placeholder='password' secureTextEntry/>
          </View>
          <TouchableOpacity onPress={()=>this.props.onLogin(this.state.username,this.state.password)} style={{borderRadius:25,width:'100%',marginTop:'5%',padding:'5%',alignItems:'center',backgroundColor:getColor('black')}}>
            <Text style={{color:getColor('whiteText'),fontSize:20,fontWeight:'bold'}}>LOG IN</Text>
          </TouchableOpacity>
          <View style={{width:'100%',alignItems:'center',marginTop:'3%',padding:'4%'}}>
            <Text style={{color:getColor('darkText')}}>Forgot password?</Text>
          </View>
        </View>
      </View>
    );
  }
}

export {LoginSoftly}
