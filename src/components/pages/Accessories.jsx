import React from 'react';
import { Link } from 'react-router-dom';

export default class Accessories extends React.Component{

    render(){

        let {bikes} = this.props

        const renderedComponents = bikes.map(bikes=>{
            return  <Link key={bikes.id} to={'/products/'+bikes.id}>
                        <div id={bikes.id} href="/products" className="meg-bike-con" >
                            <img src={bikes.url} alt={bikes.alt}/>
                            <h2 className="meg-bike-name">{bikes.name}</h2>
                        </div>
                    </Link>
        })
        
        return(
            <>
            <div><h2 className="meg-accessories-head">ACCESSORIES</h2></div>
            <div className="fat-arrow-rappa">
                <div className="fat-arrow"><a className="inner" href='/'>Home</a></div>
                <div className="fat-arrow"><div  className="inner" >Accessories</div></div>
            </div>
            <div className="meg-accessories-con">
                <div className="meg-accessories-grid">
                   {renderedComponents}
                </div>
            </div>
            </>
        )
    }
}