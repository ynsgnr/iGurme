
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput} from 'react-native';

class LoginBoxy extends Component<Props> {

  static defaultProps = {
    onLogin:()=>{console.log("Add on login prop to get username and password");}
  }

  render() {
    return (
      <Text>LoginBoxy</Text>
    );
  }
}

export {LoginBoxy}
