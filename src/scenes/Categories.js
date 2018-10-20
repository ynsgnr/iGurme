
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput, FlatList,ScrollView} from 'react-native';

import {getColor} from '../resources'

import Icon from 'react-native-vector-icons/FontAwesome5';

import {ListObject} from '../components'

import {Product} from '../actions'

class Categories extends Component<Props> {

  render() {
    return (
      <ScrollView style={{width:'100%',height:'100%',paddingTop:'3%',paddingLeft:'3%',paddingRight:'3%',backgroundColor:getColor('background')}}>
        <Text style={{paddingTop:'3%',paddingBottom:'8%',color:getColor('black'),fontSize:35,fontWeight:'bold'}}>What are you{"\n"}looking for?</Text>
        <View style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
          <Icon style={{paddingLeft:'5%',paddingRight:'5%',paddingTop:'1%',paddingBottom:'1%'}} name="search" size={20} color={getColor('contrast')} solid/>
          <TextInput placeholder='find products'/>
        </View>
        <Product>{(products)=>
          <FlatList
            style={{paddingTop:'4%',paddingBottom:'8%'}}
            data={products.categories}
            renderItem={(item) => <ListObject data={item.item} onPress={()=>{this.props.navigation.navigate('ListingPage',{category:{name:item.item.name,products:products.products[item.item.key]}})}}/>}
          />
        }
        </Product>
      </ScrollView>
    );
  }
}

export {Categories}
