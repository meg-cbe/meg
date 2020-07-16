import React from 'react'
import Slider from "react-slick";
import '../styles/details.css'

export default class ProductDetails extends React.Component{
      
    toggleClass=(e)=>{
        let classes = 'li';
        let els = document.getElementsByClassName('li active');
        if(els){
            while (els[0]) {
                els[0].classList.remove('active')
            }
        }
        if(e.target.classList.contains('li')){
            e.target.className = classes.replace('li','li active');
        }else{
            e.target.parentElement.className=classes.replace('li','li active');
        }
    }
       render(){

        let data=this.props.data
        let bike = data.find(bike=>bike.id === this.props.match.params.id)
        let prod = bike.products.find(pro=> pro.name === this.props.match.params.name)
        
        const settings = {
            customPaging: function(i) {
              return (
                  <img src={prod.otherUrl[i]} alt="product"/>
                
              );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            arrows:false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        
          let renderThumbnails = prod.otherUrl && prod.otherUrl.map((a,index)=>{
            return <div key={index}>
                    <img src={a} alt="products" />
                    </div>
          })

          let renderColors = prod.colors && prod.colors.map((c,index)=>{
              return    <li id="color-black-bord" className="li" onClick={(e) =>this.toggleClass(e)}>
                            <span className={`meg-colors-span ${c}`}></span>
                        </li>
          })
          
        return(
            <>
            <h2 className=" meg-accessories-head">PRODUCT DETAILS</h2>
            <div className="fat-arrow-rappa">
                            <div className="fat-arrow"><a className="inner" href='/'>Home</a></div>
                            <div className="fat-arrow"><a  className="inner" href='/accessories' >Accessories</a></div>
                            <div className="fat-arrow"><a  className="inner" href={`/products/${bike.id}`} >{bike.name}</a></div>
                            <div className="fat-arrow"><div  className="inner" >{prod.name}</div></div>

            </div>
            <div className="meg-detail-slick">
                <div>
                <Slider {...settings}>
                    {prod.otherUrl && renderThumbnails}    
                </Slider>
                </div>
                <div className="meg-detail-prod">
                    <h2 >{prod.name}</h2>
                    <p><span className="meg-detail-prod-span">Price :</span>{prod.price}</p>
                    <p>Pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circles</p>
                    {prod.colors && <><h3 className="meg-detail-subs">Colors</h3>
                    <ul className="meg-product-colors">
                        {renderColors}
                    </ul></> }   
                </div>
            </div>
            </>
        )
       }

}