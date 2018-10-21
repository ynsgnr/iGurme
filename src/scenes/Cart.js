
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';

import {Auth} from '../context'

import {getColor} from '../resources'

import {NoItemMessage, LoginRequiredMessage, CartObject, OrderCompletedMessage} from '../components'

class Cart extends Component<Props> {

  render() {
    return (
      <Auth>{(auth)=>{
          if(auth.isLogedIn){return (
              <Text>Cart</Text>
          )}
          this.props.navigation.navigate('AuthPage')
          return <LoginRequiredMessage onPress={()=>this.props.navigation.navigate('AuthPage')}/>
        }
      }
      </Auth>
    );
  }
}

export {Cart}
