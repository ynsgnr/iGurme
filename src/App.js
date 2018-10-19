
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

import {
  AuthManager,
  ProfileManager
} from  './actions'

import {getColor} from './resources'

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
      activeTintColor:getColor('mainColor'),
      inactiveColor:getColor('contrastDark'),
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
    AuthPage:{
      screen:AuthPage,
      navigationOptions:{
        header:null
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
)

export default class App extends Component {
  render() {
    return (
      <AuthManager>
        <ProfileManager>
          <RootNavigator ref={navigatorRef=>this.RootNavigator=navigatorRef}/>
        </ProfileManager>
      </AuthManager>
    );
  }
}
