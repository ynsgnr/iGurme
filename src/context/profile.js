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
    const keys = ['name','city','age','gender']
    let data={}
    for(i=0;i<keys.length;i++){
      try{
        const value = await AsyncStorage.getItem(keys[i])
          if (value !== null) {
            data[keys[i]]=value
          }
       } catch (error) {
         console.log(error);
       }
    }
    this.setState(data)
  }

  async modifyState(newState){
    const keys = Object.keys(newState)
    this.setState(newState)
    for(i=0;i<keys.length;i++){
      try {
        await AsyncStorage.setItem(keys[i], newState[keys[i]])
        this.setState(updatedState)
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
