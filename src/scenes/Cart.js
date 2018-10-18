
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';

import {Auth} from '../actions'

import {colors} from '../resources'

class Cart extends Component<Props> {

  render() {
    return (
      <Auth>{(auth)=>{
          if(auth.isLogedIn){return (
              <Text>Cart</Text>
          )}
          this.props.navigation.navigate('AuthPage')
          return(
            <View style={{flex:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Text style={{padding:'5%'}}>Login is required for viewing cart page</Text>
              <TouchableOpacity style={{backgroundColor:colors.mainColor,padding:'3%',borderRadius:20}}
                onPress={()=>this.props.navigation.navigate('AuthPage')}>
                <Text style={{color:colors.whiteText,fontWeight: 'bold',paddingLeft:'3%',paddingRight:'3%'}}>
                  Press Here to Login
                </Text>
              </TouchableOpacity>
            </View>
          )
        }
      }
      </Auth>
    );
  }
}

export {Cart}
