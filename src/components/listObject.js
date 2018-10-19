
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

import {getColor} from '../resources'

class ListObject extends Component {

  static defaultProps = {
    data:{}
  }

  render() {
      return (
        <View style={{paddingTop:'2%',paddingBottom:'2%'}}>
          <View style={{padding:'5%',width:'100%',backgroundColor:getColor('itemBackgroundLigth'),borderRadius:20}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',padding:0}}>
              <Image source={{uri:this.props.data.image}} style={{width:'20%',aspectRatio:1}}/>
              <View style={{height:'100%',width:1,backgroundColor:getColor('contrast'),padding:0,marginLeft:'5%',marginRight:'5%'}}/>
              <Text style={{color:getColor('darkText'),fontWeight:'bold',fontSize:27}}>{this.props.data.name}</Text>
            </View>
          </View>
        </View>
      )
    }
}

export {ListObject}
