
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ActivityIndicator, ScrollView, Dimensions} from 'react-native';

import {getColor} from '../resources'

import {ProductObject} from '../components'

class ProductSwiper extends Component {

  static defaultProps = {
    data:[],
  }

  state={
    loading:true,
    productObjects:[]
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.data && nextProps.data.length!=0 && nextProps.data.length!==prevState.productObjects.length){
      let productObjects=[]
      for(i=0;i<nextProps.data.length;i++){
        productObjects.push(
          <ProductObject key={i} textSize={0.9} style={{width:Dimensions.get("window").width*0.4}} data={nextProps.data[i]}/>
        )
      }
      return {productObjects: productObjects,loading:false};
    }else return null;
    //Looking only for length is logical in this specific case
    //Don't do this everywhere else you will get software gods angry
    //And then you will see a lot of blue screens, kernel panics and hyptozing rainbows (last one is for mac)
  }


  render() {
    console.log(this.state);
    if(this.state.loading)return <View style={{flex:1}}><ActivityIndicator/></View>
    return (
      <ScrollView style={[this.props.style,{flexDirection:'row'}]} horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
        {this.state.productObjects}
      </ScrollView>
    )
    }
}

export {ProductSwiper}
