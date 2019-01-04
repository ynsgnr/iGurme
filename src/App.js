
import React, {Component} from 'react';
import {Platform, View, ActivityIndicator, AsyncStorage, PushNotificationIOS} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


import firebase from 'react-native-firebase';

import {
  createBottomTabNavigator,
  createStackNavigator,
  NavigationActions,
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
  ProfileManager,
  ProductManager,
} from  './context'

import {getColor,setColors} from './resources'

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
        const icons = {
          Home:<Icon name="md-home" size={horizontal ? 20 : 25} color={tintColor}/>,
          Categories:<Icon name="ios-list" size={horizontal ? 20 : 25} color={tintColor}/>,
          Cart:<Icon name="ios-cart" size={horizontal ? 20 : 25} color={tintColor}/>,
          Profile:<Icon name="md-person" size={horizontal ? 20 : 25} color={tintColor}/>,
        }
        return (
            <View style={s}>{icons[routeName]}</View>
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
    ProductPage: {
      screen:ProductPage,
      navigationOptions:{
        header:null
      }
    },
    ListingPage: {
      screen:ListingPage,
      navigationOptions:{
        header:null
      }
    }, //Also search page
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

  state = {
   render:false
 }

 notificationHandler(n){
    console.log(n)
    if(n.finish)n.finish("backgroundFetchResultNewData")
 }

 componentDidMount(){

      this.messageListener = firebase.messaging().onMessage((message) => {
        notificationHandler(n)
    });

    //iOS Notification Stuff
    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
      console.log("notifcation displayed")
      this.notificationHandler(notification)
    });
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notification) => {
      console.log("notification opened")
      this.notificationHandler(notification)
    });
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      console.log("on notification")
      this.notificationHandler(notification)
    });
    firebase.notifications().getInitialNotification()
      .then((notificationOpen) => {
        console.log("init notification")
        if(notificationOpen) this.notificationHandler(notificationOpen.notification)
        }
      );
    PushNotificationIOS.addEventListener("notification", this.notificationHandler);

  }

  componentWillUnmount() {
    PushNotificationIOS.removeEventListener("notification", this.notificationHandler);
    this.notificationDisplayedListener()
    this.notificationOpenedListener()
    this.notificationListener()
  }

  render() {
    return (
      <AuthManager>
        <ProfileManager>
          <ProductManager>
            <RootNavigator ref={navigatorRef=>this.RootNavigator=navigatorRef}/>
          </ProductManager>
        </ProfileManager>
      </AuthManager>
    );
  }
}
