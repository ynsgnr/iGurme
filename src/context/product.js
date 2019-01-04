import React, {Component} from 'react';

const ProductContext = React.createContext()

import RNInsider from 'react-native-insider';

import firebase from 'react-native-firebase';

class ProductManager extends Component{

  state={
    products:{},
    categories:[],
    cart:[],
    bestSellers:[],
    new:[],
    slider:[],
    addToCart:(product)=>{this.addToCart(product)},
    removeFromCart:(product)=>{this.removeFromCart(product)},
    buyEverything:()=>{this.buyEverything()}
  }

  buyEverything(){
    this.state.cart.forEach((product)=>{
      console.log(product)
      if(product.selectedType!=undefined){
        productSubCategory = product.types[product.selectedType].title
      }else {
        productSubCategory=""
      }
    })
    this.setState((prevState)=>{
      prevState.cart=[];
      return prevState
    })
  }

  removeFromCart(product){
    this.setState((prevState)=>{
      let index=-1
      for(i=0;i<prevState.cart.length;i++){
        if(prevState.cart[i].key==product.key){
          index=i
          i=prevState.cart.length
        }
      }
      prevState.cart.splice(index,1)
      return prevState
    })
  }

  addToCart(p){
    var product = JSON.parse(JSON.stringify(p)) //clone object avoid weird stuff
    if(product.selectedType!=undefined){product.key=product.key+'-'+product.selectedType}
    this.setState((prevState)=>{
      let index=-1
      for(i=0;i<prevState.cart.length;i++){
        if(prevState.cart[i].key==product.key){
          index=i
          i=prevState.cart.length
        }
      }
      if(index<0){
        product['piece']=1
        prevState.cart.push(product)
      } else prevState.cart[index]['piece']++
      return prevState
    })
  }

  componentDidMount(){

    firebase.firestore().collection('categories').get().then((catSnapshot)=>{
      //Get categories
      categoryList=[]
      productsPromiseArray=[]
      catSnapshot.forEach((doc)=>{
        categoryList.push(doc.data())
      })
      this.setState({categories:categoryList})
    })

    firebase.firestore().collection('products').get().then((productsList)=>{

      productsByKey={}
      productsList.forEach((p)=>{
        product=p.data()
        if(productsByKey[product.key]==undefined)   productsByKey[product.key]=product
      })

      firebase.firestore().collection('new').get().then((newSnapshot)=>{
        //Get new products
        newProductList=[]
        newProductKeyList=[]
        newSnapshot.forEach((doc)=>{ newProductKeyList=doc.data() }) //There is only one
        newListId=0
        for(i=0;i<newProductKeyList[newListId].length;i++){
            newProductList.push(productsByKey[newProductKeyList[newListId][i]])
          }
        this.setState({new:newProductList})
      })

      firebase.firestore().collection('best').get().then((bestSnapshot)=>{
        //Get best products
        bestProductList=[]
        bestProductKeyList=[]
        bestSnapshot.forEach((doc)=>{ bestProductKeyList=doc.data() }) //There is only one
        bestListId=0
        for(i=0;i<bestProductKeyList[bestListId].length;i++){
          bestProductList.push(productsByKey[bestProductKeyList[bestListId][i]])
        }
        this.setState({bestSellers:bestProductList})
      })

      //Get products
      products={}
      productsList.forEach((p)=>{
        product=p.data()
        if(products[product.category]==undefined)products[product.category]=[]
        products[product.category].push(product)
      })
      this.setState({products:products})
    })

    firebase.firestore().collection('slider').get().then((sliderSnapshot)=>{
      sliderList=[]
      sliderSnapshot.forEach((doc)=>{sliderList.push(doc.data())})
      slider=[]
      sliderListId=0
      for(i=0;i<sliderList[0][sliderListId].length;i++){
        slider.push(sliderList[0][sliderListId][i])
      }
      this.setState({slider:slider})
      })
  }

  render() {
    return <ProductContext.Provider value={this.state}>
      {this.props.children}
    </ProductContext.Provider>
  }

}

export {ProductManager}
export const Product = ProductContext.Consumer
