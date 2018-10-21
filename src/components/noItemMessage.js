import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

import {getColor} from '../resources'

class NoItemMessage extends Component {

  static defaultProps = {
    onPress:()=>console.log("Pressed on no item message")
  }

  render() {
      return (
        <TouchableOpacity onPress={()=>this.props.onPress()} style={{flex:1,padding:'6%',alignItems:'center',justifyContent:'center',color:getColor('white')}}>
          <Text style={{color:getColor('darkText'),fontSize:20,fontWeight:'bold',padding:'3%',textAlign: 'center'}}>Seems like you{'\n'}Haven't added anything to{'\n'}Your cart</Text>
          <Text style={{marginTop:'3%',color:getColor('grayText'),fontSize:17,padding:'3%',textAlign: 'center'}}>To start shoping, touch anywhere!</Text>
        </TouchableOpacity>
      )
    }
}

export {NoItemMessage}
