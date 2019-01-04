
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput, FlatList,ScrollView} from 'react-native';

import {getColor} from '../resources'

import Icon from 'react-native-vector-icons/Ionicons';

import {ListObject} from '../components'

import {Product} from '../context'

class Categories extends Component {

  search(text){
    console.log('searched: '+text);
  }

  render() {
    return (
      <ScrollView style={{paddingTop:'3%',paddingLeft:'3%',paddingRight:'3%',backgroundColor:getColor('background')}}>
        <Text style={{paddingTop:'15%',paddingBottom:'10%',color:getColor('black'),fontSize:35,fontWeight:'bold'}}>What are you{"\n"}looking for?</Text>
        <View style={[{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',alignItems:'center',justifyContent:'flex-start',flexDirection:'row'},styles.shadow]}>
          <Icon style={{paddingLeft:'5%',paddingRight:'5%',paddingTop:'5%',paddingBottom:'5%'}} name="ios-search" size={20} color={getColor('contrast')} solid/>
          <TextInput style={{width:'80%'}} placeholder='find products' onEndEditing={(t)=>this.search(t)}/>
        </View>
        <Product>{(products)=>
          <FlatList
            scrollEnabled={false}
            data={products.categories}
            renderItem={(item) => <ListObject data={item.item} onPress={()=>{this.props.navigation.navigate('ListingPage',{category:{name:item.item.name,products:products.products[item.item.key]}})}}/>}
          />
        }
        </Product>
        <View style={{height:20}}/>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  shadow:{
    shadowOffset:{width:5,height:0},
    shadowColor: 'rgb(20,20,20)',
    shadowOpacity:0.1,
    shadowRadius:4,
    elevation:1,
  }
});


export {Categories}
