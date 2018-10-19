
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput} from 'react-native';

import {getColor} from '../resources'

import Icon from 'react-native-vector-icons/FontAwesome5';

class Categories extends Component<Props> {
  render() {
    return (
      <View style={{width:'100%',height:'100%',padding:'3%'}}>
        <Text style={{paddingTop:'3%',paddingBottom:'8%',color:getColor('black'),fontSize:35,fontWeight:'bold'}}>What are you{"\n"}looking for?</Text>
        <View style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
          <Icon style={{paddingLeft:'5%',paddingRight:'5%',paddingTop:'1%',paddingBottom:'1%'}} name="search" size={20} color={getColor('contrast')} solid/>
          <TextInput placeholder='find products'/>
        </View>
      </View>
    );
  }
}

export {Categories}
