
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

import {getColor} from '../resources'

class LoginBoxy extends Component {

  state={
    username:'',
    password:''
  }

  static defaultProps = {
    onLogin:(username,password)=>{console.log("Add on login prop to get username and password");}
  }

  render() {
    return (
      <View style={{width:'100%', alignItems:'center', justifyContent: 'center', paddingTop:'5%'}}>
        <View style={{width:'87%',backgroundColor:getColor('itemBackgroundLigth'),paddingLeft:'14%',paddingRight:'14%',paddingTop:'7%',paddingBottom:'7%',alignItems:'center', justifyContent: 'center'}}>
          <Text style={{padding:'5%',paddingTop:'8%',paddingBottom:'8%',color:getColor('lightText'),fontSize:18}}>Log in to your account</Text>
          <View style={{padding:'4%',width:'100%'}}>
            <Text style={{color:getColor('lightText'),fontSize:17,padding:0}}>E-mail</Text>
            <TextInput style={{borderColor:getColor('contrastLight'),borderBottomWidth:1,padding:0}} multiline={false} onChangeText={(text)=>this.setState({username:text})}/>
          </View>
          <View style={{padding:'4%',width:'100%'}}>
            <Text style={{width:'100%',color:getColor('lightText'),fontSize:17,padding:0}}>Password</Text>
            <TextInput style={{width:'100%',borderColor:getColor('contrastLight'),borderBottomWidth:1,padding:0}} multiline={false} onChangeText={(text)=>this.setState({password:text})} secureTextEntry/>
          </View>
          <TouchableOpacity onPress={()=>this.props.onLogin(this.state.username,this.state.password)} style={{width:'100%', marginTop:'15%',padding:'5%',alignItems:'center',borderColor:getColor('black'),borderWidth:1}}>
            <Text style={{color:getColor('darkText'),fontSize:20}}>LOG IN</Text>
          </TouchableOpacity>
          <View style={{marginTop:'3%',padding:'4%'}}>
            <Text style={{color:getColor('darkText')}}>Forgot password?</Text>
          </View>
        </View>
      </View>
    );
  }
}

export {LoginBoxy}
