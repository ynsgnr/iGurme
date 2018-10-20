
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput, FlatList, ActivityIndicator, ScrollView} from 'react-native';

import {Product} from '../actions'

import {ProductObject} from '../components'

import {getColor} from '../resources'

class ListingPage extends Component<Props> {

  state={
    category:{name:''}
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
            <Product>{(productsData)=>
              <FlatList
                data={productsData.products[this.state.category.key]}
                numColumns={2}
                renderItem={(item) => <ProductObject data={item.item}/>}
              />
            }</Product>
          </View>
        </ScrollView>
      )

  }
}

export {ListingPage}
