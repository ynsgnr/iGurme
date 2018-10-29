
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

import {getColor} from '../resources'

class ProductObject extends Component {

  static defaultProps = {
    data:{},
    textSize:1,
    onProductPress:()=>console.log('Pressed on product')
  }

  render() {
      return (
        <View style={this.props.style}>
          <TouchableOpacity onPress={()=>this.props.onProductPress()} style={{flexDirection:'column',alignItems:'center'}}>
            <View style={{backgroundColor:getColor('white'),
              shadowOffset:{width:0,height:2},
              shadowColor: 'rgb(200,200,200)',
              shadowOpacity:0.5,
              shadowRadius:3,
              elevation:2,}}>
            <Image source={{uri:this.props.data.images[0]}} style={{width:'90%',aspectRatio:1}}/>
            </View>
            <View style={{width:'90%',paddingTop:'1%',flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                <Text style={{fontWeight:'bold',fontSize:18*this.props.textSize}}>{this.props.data.title}</Text>
                <Text style={{fontSize:12*this.props.textSize}}>{this.props.data.subTitle}</Text>
              </View>
              <Text style={{color:getColor('mainColor'), fontWeight:'bold', fontSize:18*this.props.textSize}}>{this.props.data.price+'$'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
}

export {ProductObject}
