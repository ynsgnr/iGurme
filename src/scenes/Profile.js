
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

import {getColor} from '../resources'

import {ProfileData,Auth} from '../context'

import {LoginRequiredMessage,Picker} from '../components'

class Profile extends Component<Props> {

  state={
    name:'',
    city:'',
    age:'',
    gender:'male',
  }

  render() {
    return (
      <Auth>{(auth)=>{
          if(auth.isLogedIn){return (
            <ProfileData>{(profile)=>
              <View style={{width:'100%', height:'100%', alignItems:'center', justifyContent: 'center',backgroundColor:getColor('background')}}>
                <View style={{width:'87%',alignItems:'center', justifyContent: 'flex-start'}}>
                  <View style={{height:'3%'}}/>
                  <Text style={{color:getColor('black'),fontSize:20,fontWeight:'bold'}}>PROFILE INFO</Text>
                  <View style={{height:'4%'}}/>
                  <View style={{height:'10%',justifyContent:'center',width:'100%'}}>
                    <TextInput style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',paddingTop:'5%',paddingBottom:'5%'}} multiline={false} onChangeText={(text)=>this.setState({name:text})} placeholder={profile.name ? profile.name : 'name'}/>
                  </View>
                  <View style={{height:'3%'}}/>
                  <View style={{height:'12%',justifyContent:'center',width:'100%'}}>
                    <TextInput style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',paddingTop:'5%',paddingBottom:'5%'}} multiline={false} onChangeText={(text)=>this.setState({city:text})} placeholder={profile.city ? profile.city : 'city'}/>
                  </View>
                  <View style={{height:'3%'}}/>
                  <View style={{height:'12%',justifyContent:'center',width:'100%'}}>
                    <TextInput style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',paddingTop:'5%',paddingBottom:'5%'}} multiline={false} onChangeText={(text)=>this.setState({age:text})} placeholder={profile.age ? profile.age : 'age'} keyboardType='numeric'/>
                  </View>
                  <View style={{height:'3%'}}/>
                  <View style={{height:'12%',justifyContent:'center',width:'100%'}}>
                    <View style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',flex:1,justifyContent:'center'}}>
                      <Picker
                        selectedValue={this.state.gender}
                        onValueChange={(itemValue)=>{console.log(itemValue);this.setState({gender:itemValue})}}>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other" />
                      </Picker>
                    </View>
                  </View>
                  <View style={{height:'3%'}}/>
                  <TouchableOpacity onPress={()=>profile.setState({name:this.state.name,city:this.state.city,age:this.state.age,gender:this.state.gender})} style={{borderRadius:25,width:'100%',height:'10%',alignItems:'center',justifyContent:'center',backgroundColor:getColor('mainColor')}}>
                    <Text style={{color:getColor('whiteText'),fontSize:20,fontWeight:'bold'}}>SAVE CHANGES</Text>
                  </TouchableOpacity>
                  <View style={{height:'3%'}}/>
                  <TouchableOpacity onPress={()=>auth.logout()} style={{borderRadius:25,width:'100%',height:'10%',alignItems:'center',justifyContent:'center',backgroundColor:getColor('itemBackgroundLigth'),borderColor:getColor('mainColor'),borderWidth:3}}>
                    <Text style={{color:getColor('darkText'),fontSize:20,fontWeight:'bold'}}>LOG OUT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }</ProfileData>
          )}
          this.props.navigation.navigate('AuthPage')
          return <LoginRequiredMessage onPress={()=>this.props.navigation.navigate('AuthPage')}/>
        }
      }
      </Auth>
    );
  }
}

export {Profile}
