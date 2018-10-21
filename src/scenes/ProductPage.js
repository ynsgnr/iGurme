
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions, Image} from 'react-native';

import {getColor} from '../resources'

import Icon from 'react-native-vector-icons/FontAwesome5';

import {Product} from '../context'

class ProductPage extends Component<Props> {

  state={
      imageObjects:[],
      data:{}
  }

  componentDidMount(){
    let data = this.props.navigation.getParam("data", {})
    if(data.images){
      let images = data.images
      let imageObjects = []
      for(i=0;i<images.length;i++){
        imageObjects.push(
          <View key={i} style={{height:'100%',justifyContent:'center'}}>
            <Image source={{uri:images[i]}} style={{width:Dimensions.get("window").width,aspectRatio:1}}/>
          </View>
        )
      }
      this.setState({imageObjects:imageObjects,data:data})
    }
  }

  render() {
    const layoutDesign = 2
    if(layoutDesign==1)  return (
      <ScrollView style={{width:'100%',height:'100%'}}>
        <ScrollView style={{flexDirection:'row', height:Dimensions.get("window").height*0.5}} horizontal showsHorizontalScrollIndicator pagingEnabled>
          {this.state.imageObjects}
        </ScrollView>
        <View style={{marginTop:'15%',width:'100%',paddingLeft:'6%',paddingRight:'6%',flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'column', alignItems:'flex-start'}}>
            <Text style={{fontWeight:'bold',fontSize:18}}>{this.state.data.title}</Text>
            <Text style={{fontSize:12}}>{this.state.data.subTitle}</Text>
          </View>
          <Text style={{color:getColor('mainColor'), fontWeight:'bold', fontSize:18}}>{this.state.data.price+'$'}</Text>
        </View>
        <View style={{padding:'6%'}}>
          <Text>{this.state.data.desc}</Text>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.pop()} style={{width:'6%',aspectRatio:1,position:'absolute',left:'4%',top:'4%'}}>
          <Icon name="times" color={getColor('contrast')} size={20} light/>
        </TouchableOpacity>
        <Product>{(products)=>
          <TouchableOpacity onPress={()=>products.addToCart(this.state.data)} style={{width:'20%',aspectRatio:1,position:'absolute',right:'3%',top:'55%',alignItems:'center',justifyContent:'center',backgroundColor:getColor('mainColor'),borderRadius:50}}>
            <Icon name="shopping-cart" color={getColor('white')} size={30}/>
          </TouchableOpacity>
        }
        </Product>
      </ScrollView>
    )
    return(
      <ScrollView style={{width:'100%',height:'100%'}}>
        <ScrollView style={{flexDirection:'row', height:Dimensions.get("window").height*0.4}} horizontal showsHorizontalScrollIndicator pagingEnabled>
          {this.state.imageObjects}
        </ScrollView>
        <View style={{marginTop:'15%',width:'100%',paddingLeft:'6%',paddingRight:'6%',flexDirection:'column', alignItems:'flex-start'}}>
          <Text style={{fontWeight:'bold',fontSize:18}}>{this.state.data.title}</Text>
          <Text style={{fontSize:12}}>{this.state.data.subTitle}</Text>
          <Text style={{color:getColor('mainColor'), fontWeight:'bold', fontSize:18}}>{this.state.data.price+'$'}</Text>
        </View>
        <View style={{marginTop:'3%',padding:'6%'}}>
          <Product>{(products)=>
            <TouchableOpacity onPress={()=>products.addToCart(this.state.data)} style={{width:'50%',height:Dimensions.get("window").height*0.07,alignItems:'center',justifyContent:'center',backgroundColor:getColor('mainColor'),borderRadius:20}}>
               <Text style={{color:getColor('white'),fontWeight:'bold',fontSize:18}}>BUY NOW</Text>
            </TouchableOpacity>
          }
          </Product>
        </View>
        <View style={{padding:'6%'}}>
          <Text>{this.state.data.desc}</Text>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.pop()} style={{width:'6%',aspectRatio:1,position:'absolute',left:'4%',top:'4%'}}>
          <Icon name="times" color={getColor('contrast')} size={20} light/>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export {ProductPage}
