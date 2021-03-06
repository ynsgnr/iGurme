
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions} from 'react-native';

import {Auth,Product} from '../context'

import {getColor} from '../resources'

import {NoItemMessage, LoginRequiredMessage, OrderCompletedMessage, CartObject} from '../components'

class Cart extends Component {

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
              const cartItems = products.cart.map((d,i) => {price+=parseInt(d.price)*d.piece;
                return <CartObject style={{backgroundColor:getColor('white'),width:'100%',height:Dimensions.get("window").height*0.2,borderBottomWidth:2,borderColor:getColor('contrastDark')}} key={i} data={d} buttons={[{text:'Delete',onPress:()=>products.removeFromCart(d)}]}/>})
              return (
                <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:getColor('white')}}>
                  <ScrollView style={{width:Dimensions.get('window').width,padding:'6%'}}>
                    <Text style={{fontWeight:'bold',fontSize:17,padding:'5%'}}>SHOPPING BAG</Text>
                    {cartItems}
                  </ScrollView>
                  <View style={{height:'17%',width:'100%',bottom:0,padding:'6%',backgroundColor:getColor('white'),borderTopWidth:2,borderColor:getColor('contrastDark'),alignItems:'center'}}>
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
