import React, {Component} from 'react';

import { AsyncStorage } from "react-native"

const ProfileContext = React.createContext()

class ProfileManager extends Component{

  state={
    name:'',
    city:'',
    age:'',
    gender:'',
    setState:(newState)=>this.modifyState(newState),
  }

  componentDidMount(){
    this.init()
  }

  async init(){
    let data={
      name:await AsyncStorage.getItem('name'),
      city:await AsyncStorage.getItem('city'),
      age:await AsyncStorage.getItem('age'),
      gender:await AsyncStorage.getItem('gender'),
    }
    this.setState(data)
  }

  async modifyState(newState){
    const keys = Object.keys(newState)
    this.setState(newState)
    for(i=0;i<keys.length;i++){
      let key = keys[i]
      let object = newState[keys[i]]
      try {
        await AsyncStorage.setItem(key, object)
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    return <ProfileContext.Provider value={this.state}>
      {this.props.children}
    </ProfileContext.Provider>
  }

}

export {ProfileManager}
export const ProfileData = ProfileContext.Consumer
