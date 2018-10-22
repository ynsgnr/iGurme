
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

import Swipeout from 'react-native-swipeout';

import {getColor} from '../resources'

class CartObject extends Component {

  static defaultProps = {
    data:{},
    buttons:[{text:'Delete',onPress:()=>console.log('Pressed on button')}]
  }

  render() {
    console.log(this.props);
      return (
        <Swipeout right={this.props.buttons}>
          <View>
            <Text>Swipe me left</Text>
          </View>
        </Swipeout>
      )
    }
}

export {CartObject}
