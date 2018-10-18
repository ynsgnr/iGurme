/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 /*

 navigationOptions:{
   tabBarIcon:({ tintColor }) => (
       <Icon name="newspaper" size={20} color={tintColor} solid/>
     ),
   tabBarOptions: {
     showIcon: true
   },
 }
 tabBarComponent: (props) =>
 <View>
 {(firebase.auth().currentUser!=null && firebase.auth().currentUser.isAnonymous==false) ?
 <View style={{flexDirection:'row'}}>
   <ScannerButton  style={{width:'15%'}}/>
   <BottomTabBar style={{width:'70%'}} {...props}/>
   <LogOutButton style={{width:'15%'}}/>
 </View>
 :
 <BottomTabBar {...props}/>
 }
 </View>

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

import {colors} from './resources'

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
    tabBarOptions: {
      activeTintColor:colors.mainColor,
      inactiveColor:colors.contrastDark,
      showLabel:false,
      showIcon:true,
      indicatorStyle:{borderColor:'red',borderWidth:2}
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const focusStyle = focused ? {borderBottomWidth:2,borderColor:tintColor} : {}
        const defaultStyle = {flex:1,width:"100%",alignItems:'center',justifyContent: 'center'}
        const s = {...focusStyle,...defaultStyle}
        //return <Icon name={routeName} size={horizontal ? 20 : 25} color={tintColor}/>;
        return (
            <View style={s}><Text>{routeName}</Text></View>
        )
      },
    }),
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
    initialRouteName: 'Home',
  }
)

export default class App extends Component {
  render() {
    return (
      <RootNavigator ref={navigatorRef=>this.RootNavigator=navigatorRef}/>
    );
  }
}
