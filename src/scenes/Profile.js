
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions} from 'react-native';

import {getColor} from '../resources'

import {ProfileData,Auth} from '../context'

import {LoginRequiredMessage,Picker} from '../components'


class Profile extends Component {

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
              <ScrollView  style={{width:'100%'}}>
              <View style={{width:'100%', alignItems:'center', justifyContent: 'center',backgroundColor:getColor('background')}}>
                <View style={{width:'87%',alignItems:'center', justifyContent: 'flex-start'}}>
                  <View style={styles.spacer}/>
                  <Text style={{color:getColor('black'),fontSize:20,fontWeight:'bold'}}>PROFILE INFO</Text>
                  <View style={{height:Dimensions.get("window").height*0.04}}/>
                  <View style={{height:Dimensions.get("window").height*0.1,justifyContent:'center',width:'100%'}}>
                    <TextInput style={[styles.textInput,styles.shadow]} multiline={false} onChangeText={(text)=>this.setState({name:text})} placeholder={profile.name ? profile.name : 'name'}/>
                  </View>
                  <View style={styles.spacer}/>
                  <View style={{height:Dimensions.get("window").height*0.12,justifyContent:'center',width:'100%'}}>
                    <TextInput style={[styles.textInput,styles.shadow]} multiline={false} onChangeText={(text)=>this.setState({city:text})} placeholder={profile.city ? profile.city : 'city'}/>
                  </View>
                  <View style={styles.spacer}/>
                  <View style={{height:Dimensions.get("window").height*0.12,justifyContent:'center',width:'100%'}}>
                    <TextInput style={[styles.textInput,styles.shadow]} multiline={false} onChangeText={(text)=>this.setState({age:text})} placeholder={profile.age ? profile.age : 'age'} keyboardType='numeric'/>
                  </View>
                  <View style={styles.spacer}/>
                  <View style={{height:Dimensions.get("window").height*0.12,justifyContent:'center',width:'100%'}}>
                    <View style={[styles.pickerContainer,styles.shadow]}>
                      <Picker
                        selectedValue={this.state.gender}
                        onValueChange={(itemValue)=>{this.setState({gender:itemValue})}}>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other" />
                      </Picker>
                    </View>
                  </View>
                  <View style={styles.spacer}/>
                  <TouchableOpacity onPress={()=>{profile.setState({name:this.state.name,city:this.state.city,age:this.state.age,gender:this.state.gender})}
                  } style={{borderRadius:25,width:'100%',height:Dimensions.get("window").height*0.1,alignItems:'center',justifyContent:'center',backgroundColor:getColor('mainColor')}}>
                    <Text style={{color:getColor('whiteText'),fontSize:20,fontWeight:'bold'}}>SAVE CHANGES</Text>
                  </TouchableOpacity>
                  <View style={styles.spacer}/>
                  <TouchableOpacity onPress={()=>auth.logout()} style={{borderRadius:25,width:'100%',height:Dimensions.get("window").height*0.1,alignItems:'center',justifyContent:'center',backgroundColor:getColor('itemBackgroundLigth'),borderColor:getColor('mainColor'),borderWidth:3}}>
                    <Text style={{color:getColor('darkText'),fontSize:20,fontWeight:'bold'}}>LOG OUT</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={{fontSize:7,padding:10}}>{"\n"} Copyright 2018 Insider {"\n"} App Icon made by freepik from www.flaticon.com {"\n"}  App Icons Provided By Ionicons https://ionicons.com/ {"\n"} THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  </Text>
                </View>
              </View>
              </ScrollView>
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

const styles = StyleSheet.create({
  shadow:{
    shadowOffset:{width:5,height:0},
    shadowColor: 'rgb(20,20,20)',
    shadowOpacity:0.1,
    shadowRadius:4,
    elevation:2,
  },
  textInput: {
    backgroundColor:getColor('itemBackgroundLigth'),
    borderRadius:25,
    width:'100%',
    paddingLeft:'3%',
    paddingTop:'5%',
    paddingBottom:'5%',

  },
  pickerContainer:{
    backgroundColor:getColor('itemBackgroundLigth'),
    borderRadius:25,
    width:'100%',
    paddingLeft:'3%',
    flex:1,
    justifyContent:'center'
  },
  spacer:{
    height:Dimensions.get("window").height*0.03
  }
});

export {Profile}
