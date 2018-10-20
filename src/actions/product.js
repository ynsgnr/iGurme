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
    addToCart:(product)=>this.state.cart.push(product),
    removeFromCart:(productIndex)=>this.state.cart.spice(productIndex,1)
  }

  componentDidMount(){
    //Get data from somewhere, probably smoking hot firebase
    this.setState({products:{
      tea:[
        {key:'1',title:'Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
        {key:'2',title:'Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
        {key:'3',title:'Cascada',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
        {key:'4',title:'Horny Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
        {key:'5',title:'Horny Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
        {key:'6',title:'Test Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
      ]
    },
    categories:[
          {key:'tea',name:'Tea',image:'https://firebasestorage.googleapis.com/v0/b/igurme-9b5a0.appspot.com/o/coffeIcon.png?alt=media&token=025a3a67-6f28-425a-85c0-d74e16c8d92e'},
          {key:'coffee',name:'Coffee',image:'https://firebasestorage.googleapis.com/v0/b/igurme-9b5a0.appspot.com/o/coffeIcon.png?alt=media&token=025a3a67-6f28-425a-85c0-d74e16c8d92e'},
          {key:'accessories',name:'Accessories',image:'https://firebasestorage.googleapis.com/v0/b/igurme-9b5a0.appspot.com/o/coffeIcon.png?alt=media&token=025a3a67-6f28-425a-85c0-d74e16c8d92e'},
          {key:'cups',name:'Cups',image:'https://firebasestorage.googleapis.com/v0/b/igurme-9b5a0.appspot.com/o/coffeIcon.png?alt=media&token=025a3a67-6f28-425a-85c0-d74e16c8d92e'},
        ],
    new:[
      {key:'1',title:'Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
      {key:'2',title:'Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
      {key:'3',title:'Cascada',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
      {key:'4',title:'Horny Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
      {key:'5',title:'Horny Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
      {key:'6',title:'Test Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
    ],
    bestSellers:[
      {key:'1',title:'Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
      {key:'2',title:'Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
      {key:'3',title:'Cascada',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
      {key:'4',title:'Horny Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
      {key:'5',title:'Horny Coffee',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
      {key:'6',title:'Test Tea',subTitle:'Bedirhan Quality',price:'420',images:['http://cdna1.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/http://s3.amazonaws.com/zcom-media/sites/a0iE000000KcZRpIAN/media/catalog/product/p/r/prc-belaroma-case_opt.jpg','https://www.coffeesuppliesdirect.co.uk/ekmps/shops/coffeesupplies/images/taylors-of-harrogate-french-roast-coffee-beans-case-2-x-1kg-2996-p.jpg'],desc:'This tea is so awesome, Bedirhan wants this app to be real just to buy this tea. So awesome that batman drinks this in breakfasts'},
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
