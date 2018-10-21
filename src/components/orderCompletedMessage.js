import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

import {getColor} from '../resources'

import Icon from 'react-native-vector-icons/FontAwesome5';

class OrderCompletedMessage extends Component {

  render() {
      return (
        <View style={{flex:1,padding:'6%',alignItems:'center',justifyContent:'center',color:getColor('white')}}>
          <Icon style={{margin:'5%',padding:'3%',borderColor:getColor('contrast'),border:1,borderRadius:20}} name='check' light/>
          <Text style={{color:getColor('darkText'),fontSize:20,fontWeight:'bold',padding:'3%',textAlign: 'center'}}>Cogratulations!{'\n'}Your order is accepted.</Text>
          <Text style={{marginTop:'3%',color:getColor('grayText'),fontSize:17,padding:'3%',textAlign: 'center'}}>Thank you for your purchase. Your items{'\n'}are on the way and should arrive shortly.</Text>
        </View>
      )
    }
}

export {OrderCompletedMessage}
