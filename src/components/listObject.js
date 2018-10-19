
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

import {getColor} from '../resources'

class ListObject extends Component {

  static defaultProps = {
    data:{},
    onPress:()=>{console.log("Pressed on:");console.log(this.props.data);}
  }

  render() {
      return (
        <View style={{paddingTop:'1.5%'}}>
          <TouchableOpacity onPress={this.props.onPress} style={{padding:'5%',width:'100%',backgroundColor:getColor('itemBackgroundLigth'),borderRadius:15}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',padding:0}}>
              <Image source={{uri:this.props.data.image}} style={{width:'20%',aspectRatio:1}}/>
              <View style={{height:'100%',width:1,backgroundColor:getColor('contrast'),padding:0,marginLeft:'5%',marginRight:'5%'}}/>
              <Text style={{color:getColor('darkText'),fontWeight:'bold',fontSize:27}}>{this.props.data.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
}

export {ListObject}
