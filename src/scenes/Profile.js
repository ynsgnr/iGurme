
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';

import {Auth} from '../actions'

import {getColor} from '../resources'

class Profile extends Component<Props> {

  render() {
    return (
      <Auth>{(auth)=>{
          if(auth.isLogedIn){return (
              <View style={{width:'100%', alignItems:'center', justifyContent: 'center'}}>
                <View style={{width:'87%',alignItems:'center', justifyContent: 'flex-start'}}>
                  <Text style={{paddingTop:'8%',paddingBottom:'8%',color:getColor('black'),fontSize:20,fontWeight:'bold'}}>PROFILE INFO</Text>
                  <View style={{padding:'2%',width:'100%'}}>
                    <TextInput style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',paddingTop:'5%',paddingBottom:'5%'}} multiline={false} onChangeText={(text)=>this.setState({name:text})} placeholder='name'/>
                  </View>
                  <View style={{padding:'2%',width:'100%'}}>
                    <TextInput style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',paddingTop:'5%',paddingBottom:'5%'}} multiline={false} onChangeText={(text)=>this.setState({city:text})} placeholder='city'/>
                  </View>
                  <TouchableOpacity onPress={()=>console.log('save profile data')} style={{borderRadius:25,width:'100%',marginTop:'10%',padding:'5%',alignItems:'center',backgroundColor:getColor('mainColor')}}>
                    <Text style={{color:getColor('whiteText'),fontSize:20,fontWeight:'bold'}}>SAVE CHANGES</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>console.log('log out')} style={{borderRadius:25,width:'100%',marginTop:'5%',padding:'5%',alignItems:'center',backgroundColor:getColor('itemBackgroundLigth'),borderColor:getColor('mainColor'),borderWidth:3}}>
                    <Text style={{color:getColor('darkText'),fontSize:20,fontWeight:'bold'}}>LOG OUT</Text>
                  </TouchableOpacity>
                </View>
              </View>
          )}
          this.props.navigation.navigate('AuthPage')
          return(
            <View style={{flex:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Text style={{padding:'5%'}}>Login is required for viewing profile page</Text>
              <TouchableOpacity style={{backgroundColor:getColor('mainColor'),padding:'3%',borderRadius:20}}
                onPress={()=>this.props.navigation.navigate('AuthPage')}>
                <Text style={{color:getColor('whiteText'),fontWeight: 'bold',paddingLeft:'3%',paddingRight:'3%'}}>
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

export {Profile}
