
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions, Image} from 'react-native';

import {getColor} from '../resources'

import Icon from 'react-native-vector-icons/FontAwesome5';

import {Product} from '../context'

import {Picker} from '../components'

class ProductPage extends Component<Props> {

  state={
      imageObjects:[],
      data:{}
  }

  componentDidMount(){
    let data = this.props.navigation.getParam("data", {})
    if(data.images){
      const imageObjects = data.images.map((image,index) => (
        <View key={index} style={{height:'100%',justifyContent:'center'}}>
          <Image source={{uri:image}} style={{width:Dimensions.get("window").width,aspectRatio:1}}/>
        </View>
      ))
      data.price=data.types[0].price
      this.setState({imageObjects:imageObjects,data:data})
    }
  }

  render() {
    const layoutDesign = 1
    if(layoutDesign==1)  return (
      <View style={{width:'100%',height:'100%',backgroundColor:getColor('white')}}>
        <ScrollView style={{backgroundColor:getColor('white')}}>
          <View style={{
            shadowOffset:{width:0,height:2},
            shadowColor: 'rgb(200,200,200)',
            shadowOpacity:0.5,
            shadowRadius:3,
            elevation:3,
            backgroundColor:getColor('white')
          }}>
            <ScrollView style={{flexDirection:'row', height:Dimensions.get("window").height*0.5}} horizontal showsHorizontalScrollIndicator pagingEnabled>
              {this.state.imageObjects}
            </ScrollView>
          </View>
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
            <TouchableOpacity onPress={()=>{let p=this.state.data;products.addToCart(p);this.props.navigation.navigate('Cart');}}
            style={{width:'20%',aspectRatio:1,position:'absolute',right:'3%',top:'55%',alignItems:'center',justifyContent:'center',backgroundColor:getColor('mainColor'),borderRadius:50,
            shadowOffset:{width:0,height:2},
            shadowColor: 'rgb(200,200,200)',
            shadowOpacity:0.7,
            shadowRadius:3,
            elevation:4,
          }}>
              <Icon name="shopping-cart" color={getColor('white')} size={30}/>
            </TouchableOpacity>
          }
          </Product>
        </ScrollView>
      </View>
      )
      return(
        <View style={{width:'100%',height:'100%',backgroundColor:getColor('white')}}>
          <ScrollView style={{backgroundColor:getColor('white')}}>
            <ScrollView style={{flexDirection:'row', height:Dimensions.get("window").height*0.4}} horizontal showsHorizontalScrollIndicator pagingEnabled>
              {this.state.imageObjects}
            </ScrollView>
            <View style={{marginTop:'15%',width:'100%',paddingLeft:'6%',paddingRight:'6%',flexDirection:'column', alignItems:'flex-start'}}>
              <Text style={{fontWeight:'bold',fontSize:18}}>{this.state.data.title}</Text>
              <Text style={{fontSize:12}}>{this.state.data.subTitle}</Text>
              <Text style={{color:getColor('mainColor'), fontWeight:'bold', fontSize:18}}>{this.state.data.price+'$'}</Text>
            </View>
            <View style={{marginTop:'3%',padding:'6%'}}>
              <Product>{(products)=>{
                if (this.state.data.types){
                  const types = this.state.data.types.map((t,i) => <Picker.Item key={i} label={t.title} value={i}/>)
                  return(
                    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                      <View style={{width:'35%',borderRadius:30,borderColor:getColor('mainColor'),borderWidth:2,justifyContent:'center'}}>
                        <Picker
                          selectedValue={this.state.data.selectedType}
                          onValueChange={(itemValue)=>this.setState((prevState)=>{
                            prevState.data.selectedType=itemValue
                            prevState.data.price=prevState.data.types[itemValue].price
                            console.log(prevState.data);
                            return prevState
                          })}>
                          {types}
                        </Picker>
                      </View>
                      <TouchableOpacity onPress={()=>{let p=this.state.data;products.addToCart(p);this.props.navigation.navigate('Cart');}} style={{width:'50%',height:Dimensions.get("window").height*0.1,alignItems:'center',justifyContent:'center',backgroundColor:getColor('mainColor'),borderRadius:30}}>
                         <Text style={{color:getColor('white'),fontWeight:'bold',fontSize:18}}>BUY NOW</Text>
                      </TouchableOpacity>
                    </View>
                )}
                return(
                  <TouchableOpacity onPress={()=>{let p=this.state.data;products.addToCart(p);this.props.navigation.navigate('Cart');}} style={{width:'50%',height:Dimensions.get("window").height*0.1,alignItems:'center',justifyContent:'center',backgroundColor:getColor('mainColor'),borderRadius:30}}>
                     <Text style={{color:getColor('white'),fontWeight:'bold',fontSize:18}}>BUY NOW</Text>
                  </TouchableOpacity>
                )}}
              </Product>
            </View>
            <View style={{padding:'6%'}}>
              <Text>{this.state.data.desc}</Text>
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.pop()} style={{width:'6%',aspectRatio:1,position:'absolute',left:'4%',top:'4%'}}>
              <Icon name="times" color={getColor('contrast')} size={20} light/>
            </TouchableOpacity>
          </ScrollView>
      </View>
    )
  }
}

export {ProductPage}
