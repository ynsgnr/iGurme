
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions} from 'react-native';

import {Auth,Product} from '../context'

import {getColor} from '../resources'

import {NoItemMessage, LoginRequiredMessage, OrderCompletedMessage} from '../components'

class Cart extends Component<Props> {

  state={
    isOrderCompleted:false
  }

  buyEverything(products){
    this.setState({isOrderCompleted:true});
    if(this.interval)clearInterval(this.interval)
    this.interval=setInterval(()=>{
      this.setState({isOrderCompleted:false})
    },10000);
    products.buyEverything();
  }

  render() {
    return (
      <Auth>{(auth)=>{
          if(auth.isLogedIn){
            if(this.state.isOrderCompleted) return <OrderCompletedMessage onPress={()=>{if(this.interval)clearInterval(this.interval);this.setState({isOrderCompleted:false})}}/>
            return (
            <Product>{(products)=>{
              if(products.cart.length==0){
                return <NoItemMessage onPress={()=>this.props.navigation.navigate('Home')}/>
              }
              let price=0
              const cartItems = products.cart.map((d) => {price+=parseInt(d.price); return <Text key={d.key}>{d.title}</Text>})
              return (
                <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                  <ScrollView style={{padding:'6%'}}>
                    <Text style={{fontWeight:'bold',fontSize:17,padding:'5%'}}>SHOPPING BAG</Text>
                    {cartItems}
                  </ScrollView>
                  <View style={{position:'absolute',height:'17%',width:'100%',bottom:0,padding:'6%',backgroundColor:getColor('white'),borderTop:1,borderColor:getColor('contrastDark'),alignItems:'center'}}>
                    <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{color:getColor('grayText'),fontSize:15}}>Subtotal</Text>
                      <Text style={{color:getColor('darkText'),fontWeight:'bold',fontSize:17}}>{price+' $'}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{this.buyEverything(products)}} style={{borderRadius:25,width:'60%',marginTop:'2%',padding:'2%',alignItems:'center',backgroundColor:getColor('mainColor')}}>
                      <Text style={{color:getColor('whiteText'),fontWeight:'bold',fontSize:18}}>PLACE ORDER</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }}</Product>
          )}
          this.props.navigation.navigate('AuthPage')
          return <LoginRequiredMessage onPress={()=>this.props.navigation.navigate('AuthPage')}/>
        }
      }
      </Auth>
    );
  }
}

export {Cart}
