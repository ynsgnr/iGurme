
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput, ScrollView, Image, Dimensions} from 'react-native';

import {getColor} from '../resources'

import {Product} from '../actions'

class Home extends Component<Props> {
  render() {
    return (
      <View style={{width:'100%',height:'100%',backgroundColor:getColor('background')}}>
        <Product>{(products)=>{
          let imageObjects=[]
          for(i=0;i<products.slider.length;i++){
            imageObjects.push(
              <View key={i} style={{height:'100%',justifyContent:'center'}}>
                <Image source={{uri:products.slider[i]}} style={{width:Dimensions.get("window").width,aspectRatio:1}}/>
              </View>
            )
          }
          return (
            <View>
              <ScrollView style={{flexDirection:'row', height:'40%'}} horizontal showsHorizontalScrollIndicator pagingEnabled>
                {imageObjects}
              </ScrollView>
              <Text>Test</Text>
            </View>
          )}
        }</Product>
      </View>
    );
  }
}

export {Home}
