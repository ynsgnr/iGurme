
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, TextInput, FlatList} from 'react-native';

import {getColor} from '../resources'

import Icon from 'react-native-vector-icons/FontAwesome5';

import {ListObject} from '../components'

class Categories extends Component<Props> {

  state={
    categories :[
      {key:'1',name:'Tea',image:'https://firebasestorage.googleapis.com/v0/b/igurme-9b5a0.appspot.com/o/coffeIcon.png?alt=media&token=025a3a67-6f28-425a-85c0-d74e16c8d92e'},
      {key:'2',name:'Coffee',image:'https://firebasestorage.googleapis.com/v0/b/igurme-9b5a0.appspot.com/o/coffeIcon.png?alt=media&token=025a3a67-6f28-425a-85c0-d74e16c8d92e'},
    ]
  }

  render() {
    return (
      <View style={{width:'100%',height:'100%',padding:'3%'}}>
        <Text style={{paddingTop:'3%',paddingBottom:'8%',color:getColor('black'),fontSize:35,fontWeight:'bold'}}>What are you{"\n"}looking for?</Text>
        <View style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',alignItems:'center',justifyContent:'flex-start',flexDirection:'row'}}>
          <Icon style={{paddingLeft:'5%',paddingRight:'5%',paddingTop:'1%',paddingBottom:'1%'}} name="search" size={20} color={getColor('contrast')} solid/>
          <TextInput placeholder='find products'/>
        </View>
        <FlatList
          style={{paddingTop:'4%'}}
          data={this.state.categories}
          renderItem={(item) => <ListObject data={item.item} onPress={()=>{this.props.navigation.navigate('ListingPage',{category:item.item.key})}}/>}
        />
      </View>
    );
  }
}

export {Categories}
