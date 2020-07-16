import React from 'react';
import './components/styles/style.css';
import FooterSection from './components/footer/FooterSection';
import Landing from './components/pages/Landing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import HeaderSection from './components/header/HeaderSection';
import './components/styles/single.css'
import Error from './components/pages/Error';
import About from './components/pages/About'
import Accessories from './components/pages/Accessories'
import ContactUs from './components/pages/ContactUs'
import Product from './components/pages/Product'
import Cart from './components/pages/Cart'
import Data from './bikes.json'
import ProductDetails from './components/pages/ProductDetails'
import ScrollTop from './components/helper/ScrollToTop'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = { bikes : Data }
    }

    render(){

        let bikes = this.state.bikes.bikes

        return(
            <>        
                <Router >  
                    <ScrollTop>
                <HeaderSection/>   
                        <Switch>
                            <Route exact path='/' component={()=> <Landing data={this.state.bikes} />} />
                            <Route path='/about' component={About} />
                            <Route path='/accessories' component={()=> <Accessories bikes={bikes} />} />
                            <Route path='/contactus' component={ContactUs} />
                            <Route path='/cart' component={Cart}/>
                            <Route path='/productDetail/:id/:name' component={(props)=><ProductDetails data={bikes} {...props} />}/>
                            <Route path='/products/:id' component={(props)=> <Product data={bikes} {...props} />} />
                            <Route component={Error} />      
                        </Switch>
                        <FooterSection/> 
                        </ScrollTop>   
                </Router>
            
            </>

        )
    }
}