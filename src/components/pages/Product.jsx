import React from 'react'
import AllProducts from '../others/AllProducts'

export default function Product(props){
    
        let data=props.data
        let prod = data.find(bike=>bike.id === props.match.params.id)

        return(
            <> 
             {prod && <>
                        <div className="meg-quick-head justify-center">
                            <h2>{prod.alt}</h2>    
                            <h3 className="text-center">Products of <br/> <span>{prod.alt}</span></h3>
                        </div>
                        <div className="fat-arrow-rappa">
                            <div className="fat-arrow"><a className="inner" href='/'>Home</a></div>
                            <div className="fat-arrow"><a  className="inner" href='/accessories' >Accessories</a></div>
                            <div className="fat-arrow"><div  className="inner" >{prod.name}</div></div>
                        </div>
                        <AllProducts data={prod}/></>}
            </>
        )
}