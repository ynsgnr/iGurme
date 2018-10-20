
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput, ScrollView, Image, Dimensions} from 'react-native';

import {getColor} from '../resources'

import {Product} from '../actions'

import {ProductSwiper} from '../components'

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
            <ScrollView style={{backgroundColor:getColor('white')}}>
              <ScrollView style={{flexDirection:'row', height:Dimensions.get("window").height*0.3}} horizontal showsHorizontalScrollIndicator pagingEnabled>
                {imageObjects}
              </ScrollView>
              <View style={{paddingTop:'10%'}}>
                <View style={{paddingTop:'5%',paddingLeft:'5%',paddingRight:'5%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
                   <Text style={{color:getColor('darkText'),fontSize:25,fontWeight:'bold'}}>BEST SELLERS</Text>
                   <Text style={{color:getColor('lightText'),fontSize:17}}>See All</Text>
                </View>
                <ProductSwiper style={{height:Dimensions.get("window").height*0.35}} data={products.bestSellers}/>
                <View style={{paddingTop:'5%',paddingLeft:'5%',paddingRight:'5%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
                   <Text style={{color:getColor('darkText'),fontSize:25,fontWeight:'bold'}}>NEW</Text>
                   <Text style={{color:getColor('lightText'),fontSize:17}}>See All</Text>
                </View>
                <ProductSwiper style={{height:Dimensions.get("window").height*0.35}} data={products.new}/>

              </View>
            </ScrollView>
          )}
        }</Product>
      </View>
    );
  }
}

export {Home}
