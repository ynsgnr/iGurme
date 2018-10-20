
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

import {getColor} from '../resources'

class ProductObject extends Component {

  static defaultProps = {
    data:{},
  }

  render() {
      return (
        <View style={{paddingBottom:'10%',adding:'1%',width:'50%'}}>
          <TouchableOpacity onPress={this.props.onPress} style={{flexDirection:'column',alignItems:'center'}}>
            <Image source={{uri:this.props.data.images[0]}} style={{width:'90%',aspectRatio:1}}/>
            <View style={{width:'90%',paddingTop:'1%',flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>{this.props.data.title}</Text>
                <Text style={{fontSize:12}}>{this.props.data.subTitle}</Text>
              </View>
              <Text style={{color:getColor('mainColor'), fontWeight:'bold', fontSize:18}}>{this.props.data.price+'$'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
}

export {ProductObject}
