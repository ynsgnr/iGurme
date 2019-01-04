
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

import Swipeout from 'react-native-swipeout';

import {getColor} from '../resources'

class CartObject extends Component {

  static defaultProps = {
    data:{},
    buttons:[{text:'Delete',onPress:()=>console.log('Pressed on button')}]
  }

  render() {
    return (
      <Swipeout right={this.props.buttons}>
          <View style={[this.props.style, {flexDirection:'row'}]}>
            <Image source={{uri:this.props.data.images[0]}} style={{width:'25%',aspectRatio:1}}/>
            <View style={{flex:1,flexDirection:'column'}}>
              <Text style={{fontWeight:'bold',fontSize:17,color:getColor('darkText'),paddingLeft:'3%',paddingTop:'1%',paddingBottom:'1%'}}>{this.props.data.title}</Text>
              <Text style={{fontSize:15,color:getColor('grayText'),paddingLeft:'3%',paddingTop:'1%',paddingBottom:'1%'}}>{this.props.data.subTitle}</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{padding:'3%',fontSize:15,color:getColor('darkText')}}>{
                  (this.props.data.selectedType) ? this.props.data.types[this.props.data.selectedType].title+' '+this.props.data.piece+' piece' : this.props.data.piece+' piece'
                }</Text>
                <Text style={{padding:'3%',fontSize:17,color:getColor('darkText')}}>{(this.props.data.price*this.props.data.piece)+'$'}</Text>
              </View>
            </View>
          </View>
      </Swipeout>
    )
  }
}

export {CartObject}
