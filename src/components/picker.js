
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ActionSheetIOS} from 'react-native';
import {Picker as RNPicker} from 'react-native'

class Picker extends Component {

  static defaultProps = {
    selectedValue:'',
    onValueChange:(changedValue)=>console.log("Selected value "+changedValue),
  }

  state={
    items:[],
    itemValues:{}
  }

  componentDidMount(){
    if(Platform.OS==='ios'){
      items=[]
      itemValues={}
      for(i=0;i<this.props.children.length;i++){
        items.push(this.props.children[i].props.label)
        itemValues[i]=this.props.children[i].props.value
      }
      this.setState({items:items,itemValues:itemValues})
    }
  }

  render() {
    if(Platform.OS==='ios')
      return (
        <TouchableOpacity style={{padding:'1%'}} onPress={()=>{
            ActionSheetIOS.showActionSheetWithOptions({
              options:this.state.items ,
            },
            (buttonIndex) => this.props.onValueChange(buttonIndex)
          )
        }}>
          <Text>{this.state.items[this.props.selectedValue]!=undefined && this.state.items[this.props.selectedValue]}</Text>
        </TouchableOpacity>
      )
    return(
      <RNPicker
        selectedValue={this.props.selectedValue}
        onValueChange={(itemValue)=>this.props.onValueChange(itemValue)}
      >
        {this.props.children}
      </RNPicker>
    )
  }
}

Picker.Item = ()=>null
export {Picker}
