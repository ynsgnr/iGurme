
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput} from 'react-native';

import {ProductList} from '../components'

class ListingPage extends Component<Props> {
  state={
    categoryKey:'0'
  }

  componentDidMount(){
    this.setState({categoryKey:this.props.navigation.getParam("category", "0")})
  }

  render() {
    return (
      <Text>{this.state.categoryKey}</Text>
    );
  }
}

export {ListingPage}
