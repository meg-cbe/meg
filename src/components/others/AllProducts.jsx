import React from 'react'
import SimpleCard from '../cards/SimpleCard'

export default function AllProducts(props){
    let {data} = props
    let renderedProducts = data && data.products.map(pro=>{
        return <SimpleCard key={pro.name} id={data.id} name={pro.name} url={pro.url} brand={pro.bike} price={pro.price} />
    })
    return(
        <>
            <div className="meg-allproducts-con">
                <div className="meg-allproducts-grid">
                    {data && renderedProducts}
                </div>
            </div>
        </>
    )
}