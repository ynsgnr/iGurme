/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import {
  Home,
  Categories,
  Cart,
  Profile,
  ProductPage,
  ListingPage,
  AuthPage
} from './scenes'

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Categories:{
      screen:Categories,
    },
    Cart:{
      screen:Cart,
    },
    Profile:{
      screen:Profile,
    },
  },
  {
    initialRouteName : 'Home', //Starting screen
  },
);

const RootNavigator = createStackNavigator (
  {
    Home:{
      screen:TabNavigator,
      navigationOptions:{
        header:null
      }
    },
    ProductPage: ProductPage,
    ListingPage: ListingPage, //Also search page
    AuthPage: AuthPage,
  },
  {
    initialRouteName: 'Home'
  }
)

export default class App extends Component {
  render() {
    return (
      <RootNavigator ref={navigatorRef=>this.RootNavigator=navigatorRef}/>
    );
  }
}
