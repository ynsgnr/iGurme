
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput} from 'react-native';

class LoginSoftly extends Component<Props> {

  static defaultProps = {
    onLogin:()=>{console.log("Add on login prop to get username and password");}
  }

  componentDidMount(){
    this.props.onLogin('test','test')
  }

  render() {
    return (
      <Text>LoginSoftly</Text>
    );
  }
}

export {LoginSoftly}
