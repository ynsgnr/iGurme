import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

import {getColor} from '../resources'

class LoginRequiredMessage extends Component {

  static defaultProps = {
    onPress:()=>console.log("Pressed on login message")
  }

  render() {
      return (
        <View style={{flex:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center',backgroundColor:getColor('background')}}>
          <Text style={{padding:'5%'}}>Login is required for viewing this page</Text>
          <TouchableOpacity style={{backgroundColor:getColor('mainColor'),padding:'3%',borderRadius:20}}
            onPress={()=>this.props.onPress()}>
            <Text style={{color:getColor('whiteText'),fontWeight: 'bold',paddingLeft:'3%',paddingRight:'3%'}}>
              Press Here to Login
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
}

export {LoginRequiredMessage}
