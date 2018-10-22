import React, {Component} from 'react';

const ProductContext = React.createContext()

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
    buyEverything:()=>{this.setState((prevState)=>{prevState.cart=[];return prevState})}
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
      console.log(prevState);
      return prevState
    })
  }

  componentDidMount(){
    //Get data from somewhere, probably smoking hot firebase
    this.setState({products:{
      tea:[
        {key:'1',title:'Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
        {key:'2',title:'Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
        {key:'3',title:'Cascada',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
        {key:'4',title:'Horny Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
        {key:'5',title:'Horny Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
        {key:'6',title:'Test Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
      ]
    },
    categories:[
          {key:'tea',name:'Tea',image:'https://firebasestorage.googleapis.com/v0/b/igurme-9b5a0.appspot.com/o/coffeIcon.png?alt=media&token=025a3a67-6f28-425a-85c0-d74e16c8d92e'},
          {key:'coffee',name:'Coffee',image:'https://firebasestorage.googleapis.com/v0/b/igurme-9b5a0.appspot.com/o/coffeIcon.png?alt=media&token=025a3a67-6f28-425a-85c0-d74e16c8d92e'},
          {key:'accessories',name:'Accessories',image:'https://firebasestorage.googleapis.com/v0/b/igurme-9b5a0.appspot.com/o/coffeIcon.png?alt=media&token=025a3a67-6f28-425a-85c0-d74e16c8d92e'},
          {key:'cups',name:'Cups',image:'https://firebasestorage.googleapis.com/v0/b/igurme-9b5a0.appspot.com/o/coffeIcon.png?alt=media&token=025a3a67-6f28-425a-85c0-d74e16c8d92e'},
        ],
    new:[
      {key:'1',title:'Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
      {key:'2',title:'Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
      {key:'3',title:'Cascada',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
      {key:'4',title:'Horny Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
      {key:'5',title:'Horny Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
      {key:'6',title:'Test Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
    ],
    bestSellers:[
      {key:'1',title:'Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
      {key:'2',title:'Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
      {key:'3',title:'Cascada',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
      {key:'4',title:'Horny Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
      {key:'5',title:'Horny Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
      {key:'6',title:'Test Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts',types:[{title:'50gr',price:1},{title:'100gr',price:2},{title:'150gr',price:3}]},
    ],
    slider:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg','https://www.terbodorecoffee.co.za/wp-content/uploads/2018/08/blog.jpg','https://www.terbodorecoffee.co.za/wp-content/uploads/2018/02/Barista-Parlor.jpg','https://2.bp.blogspot.com/-OWHeqZZAv3c/WpOU0ajXRaI/AAAAAAAE6zs/vzi-VhAmD4g75_ewqJYHKEmNA2xJMPnvwCLcBGAs/s1600/Mood%2B%25281%2529.jpg']
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
