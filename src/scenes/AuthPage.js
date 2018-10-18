
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput, ImageBackground} from 'react-native';

import {Auth} from '../actions'

import {LoginBoxy, LoginSoftly} from '../components'

class AuthPage extends Component<Props> {

  render() {
    const layoutDesign = 2
    const resizeMode = 'center'
    return (
      <ImageBackground style={{flex:1,width:'100%',height:'100%',position:'absolute',justifyContent:'center'}}
        source={{uri:'https://firebasestorage.googleapis.com/v0/b/igurme-9b5a0.appspot.com/o/Splash.png?alt=media&token=808335a6-6ad7-42b5-a36c-251a9d9a0567'}}
     >
       <Auth>{(auth)=>{
          if(layoutDesign==1) return (<LoginBoxy onLogin={(username,password)=>{auth.login(username,password)}}/>)
          return(<LoginSoftly onLogin={(username,password)=>{auth.login(username,password)}}/>)
         }
       }
       </Auth>
     </ImageBackground>
    )
  }
}

export {AuthPage}
