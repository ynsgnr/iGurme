
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput,Picker} from 'react-native';

import {getColor} from '../resources'

import {ProfileData,Auth} from '../actions'

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
              <View style={{width:'100%', alignItems:'center', justifyContent: 'center'}}>
                <View style={{width:'87%',alignItems:'center', justifyContent: 'flex-start'}}>
                  <Text style={{paddingTop:'8%',paddingBottom:'8%',color:getColor('black'),fontSize:20,fontWeight:'bold'}}>PROFILE INFO</Text>
                  <View style={{padding:'2%',width:'100%'}}>
                    <TextInput style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',paddingTop:'5%',paddingBottom:'5%'}} multiline={false} onChangeText={(text)=>this.setState({name:text})} placeholder={profile.name ? profile.name : 'name'}/>
                  </View>
                  <View style={{padding:'2%',width:'100%'}}>
                    <TextInput style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',paddingTop:'5%',paddingBottom:'5%'}} multiline={false} onChangeText={(text)=>this.setState({city:text})} placeholder={profile.city ? profile.city : 'city'}/>
                  </View>
                  <View style={{padding:'2%',width:'100%'}}>
                    <TextInput style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%',paddingTop:'5%',paddingBottom:'5%'}} multiline={false} onChangeText={(text)=>this.setState({age:text})} placeholder={profile.age ? profile.age : 'age'} keyboardType='numeric'/>
                  </View>
                  <View style={{padding:'1%',width:'100%'}}>
                    <View style={{backgroundColor:getColor('itemBackgroundLigth'),borderRadius:25,width:'100%',paddingLeft:'3%'}}>
                      <Picker
                        selectedValue={this.state.gender}
                        onValueChange={(itemValue)=>this.setState({gender:itemValue})}>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other" />
                      </Picker>
                    </View>
                  </View>
                  <TouchableOpacity onPress={()=>profile.setState({name:this.state.name,city:this.state.city})} style={{borderRadius:25,width:'100%',marginTop:'10%',padding:'5%',alignItems:'center',backgroundColor:getColor('mainColor')}}>
                    <Text style={{color:getColor('whiteText'),fontSize:20,fontWeight:'bold'}}>SAVE CHANGES</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>auth.logout()} style={{borderRadius:25,width:'100%',marginTop:'5%',padding:'5%',alignItems:'center',backgroundColor:getColor('itemBackgroundLigth'),borderColor:getColor('mainColor'),borderWidth:3}}>
                    <Text style={{color:getColor('darkText'),fontSize:20,fontWeight:'bold'}}>LOG OUT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }</ProfileData>
          )}
          this.props.navigation.navigate('AuthPage')
          return(
            <View style={{flex:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Text style={{padding:'5%'}}>Login is required for viewing profile page</Text>
              <TouchableOpacity style={{backgroundColor:getColor('mainColor'),padding:'3%',borderRadius:20}}
                onPress={()=>this.props.navigation.navigate('AuthPage')}>
                <Text style={{color:getColor('whiteText'),fontWeight: 'bold',paddingLeft:'3%',paddingRight:'3%'}}>
                  Press Here to Login
                </Text>
              </TouchableOpacity>
            </View>
          )
        }
      }
      </Auth>
    );
  }
}

export {Profile}
