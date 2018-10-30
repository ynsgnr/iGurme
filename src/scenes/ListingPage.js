
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, ActivityIndicator, ScrollView} from 'react-native';

import {Product} from '../context'

import {ProductObject} from '../components'

import {getColor} from '../resources'

import Icon from 'react-native-vector-icons/FontAwesome5';

class ListingPage extends Component<Props> {

  state={
    category:{name:'',products:[]}
  }

  componentDidMount(){
    this.setState({category:this.props.navigation.getParam("category", "0")})
  }

  render() {
      return (
        <ScrollView style={{width:'100%',height:'100%',paddingLeft:'3%',paddingRight:'3%',backgroundColor:getColor('white')}}>
          <View style={{width:'100%',alignItems:'center'}}>
            <Text style={{fontSize:30,fontWeight:'bold',padding:'5%'}}>{this.state.category.name.toUpperCase()}</Text>
          </View>
          <View style={{width:'98%',flexDirection:'row',justifyContent:'space-around',borderColor:getColor('contrastDark'),borderTopWidth:2,borderBottomWidth:2}}>
            <Text style={{fontSize:22}}>Sort</Text>
            <Text style={{fontSize:22}}>Filter</Text>
          </View>
          <View style={{paddingTop:'5%'}}>
            <FlatList
              scrollEnabled={false}
              data={this.state.category.products}
              numColumns={2}
              renderItem={(item) => <ProductObject onProductPress={()=>this.props.navigation.navigate('ProductPage',{data:item.item})} style={{width:'50%',paddingBottom:'10%',padding:'1%'}} data={item.item}/>}
            />
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.pop()} style={{width:'6%',aspectRatio:1,position:'absolute',left:'4%',top:'4%'}}>
            <Icon name="angle-left" color={getColor('contrast')} size={20} light/>
          </TouchableOpacity>
        </ScrollView>
      )

  }
}

export {ListingPage}
