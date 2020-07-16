import React from 'react';
import MegLink from '../buttons/MegLink'
import MegButton from '../buttons/MegButton';
import QuickCard from '../cards/QuickCard'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight ,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Contact from '../others/Contact'
import HeadText from '../others/HeadText'
import CoreCard from '../cards/CoreCard'

export default class Landing extends React.Component{

  constructor(props){
    super(props);
    this.state = {bikeNo:1}
  }

  changeId =()=>{
    if( this.state.bikeNo > 23 || this.state.bikeNo === 23 ){
      this.setState({ bikeNo : 1 })
    }else{
      this.setState({ bikeNo : this.state.bikeNo + 1 })
    }  
  }

    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            height:420,
            arrows:true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow:<FontAwesomeIcon className='meg-fa-right' icon={faArrowRight} />,
            prevArrow:<FontAwesomeIcon className='meg-fa-right' icon={faArrowLeft} />,
            responsive: [
                {
                  breakpoint: 1295,
                  settings: {
                    autoplay:true,
                    autoplaySpeed: 3000,
                    arrows:true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 965,
                  settings: {
                    autoplay:true,
                    autoplaySpeed: 3000,
                    arrows:true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 650,
                  settings: {
                    arrows:false,
                    autoplaySpeed: 3000,
                    autoplay:true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };

          let singleProduct = this.props.data.bikes.find((bike)=>bike.no === this.state.bikeNo.toString())
          const quickShow = singleProduct.products.map((data,index)=>{
            return <div key={index}>
                    <QuickCard url={data.url} brand={data.bike} id={singleProduct.id} name={data.name} price={data.price} />
                  </div> 
          })
        return(
            <>
            <section className="meg-land">
                <div className="meg-land-first">
                <h2>NEW DESIGNED PRODUCTS <br/> & BUILD</h2>
                <h1>MEG</h1>
                <p className="meg-para">All premium quality product are now available for you and you can buy this product from here any time any where so shop now </p>
                <MegLink class="meg-btn-orange" link="/accessories" title="SHOP NOW"/>
                </div>
                <div className="meg-land-second">
                    <img src="/assets/dominar-one.jpg" alt="bike"/>
                </div>
            </section>
            <section className="meg-row-products">
              <div className="meg-quick-head justify-between">
                {singleProduct && <><h2 className="left-0">{singleProduct.alt}</h2>    
                <h3>Products of <br/> <span>{singleProduct.alt}</span></h3></>}
                <MegButton class="meg-btn-orange" title="NEXT" onclick={this.changeId}/>    
                </div>
              <div className="meg-quick-row-container">
               <div className="meg-carousel-div">
               <div>
               <Slider {...settings}>
                 {singleProduct.products && quickShow}
                
            </Slider>
               </div>
               </div>
                </div>
            </section>

            <section className="meg-core">
            <HeadText title="CORE-VALUE" 
              sub2="WE CARE AND GIVE BACK" 
              classAbs="color-black"
              contentClass="meg-brand black-top" 
              absTextClass="meg-contact-container black-rel"/>
            <p className="meg-core-p">We simplify complexity without compromising outcomes.We speak the truth and assume best intent.</p>
            <div className="meg-core-flex-main">
                <CoreCard no="01" head="Secure Payments" url="/assets/money.png" content="Payments with us are trustful and secure"/>
                <CoreCard no="02" head="Quality Products" url="/assets/medal.png" content="We ensure our product quality all times"/>
                <CoreCard no="03" head="Online Support" url="/assets/support.png" content="To satisfy our customer we try to give support online"/>
            </div>  
            </section>
            <section className='meg-discount'>
              <div className="meg-discount-flex">
                <div className="meg-discount-img">
                  <img src="/assets/apache.png" alt="dominar"/>
                </div>
                <div className="meg-discount-content">
                  <h2>HURRY UP!!!</h2>
                  <h4>PLACE YOUR ORDER FOR DOMINAR 400 AND APACHE 310RR TO GET 10% DISCOUNT. <br/>
                  <span className="meg-full-kit">(Only on full kit order)</span>
                  </h4>
                  <MegLink class="meg-btn-orange" link="/accessories" title="SHOP NOW"/>
                </div>
              </div>
            </section>
            <section id="contact" className="meg-contact">
              <Contact />
            </section>
            </>
        )
    }
    
}