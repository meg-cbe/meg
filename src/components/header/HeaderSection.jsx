import React,{useEffect} from 'react';
import Header from './Header'
export default function HeaderSection(){

    useEffect(()=>{
        var form = document.querySelector("#search-form");
        var searchbox = document.querySelector(".searchbox");
        let hamIcon = document.querySelector(".meg-ham")
        let mobHeader = document.querySelector('.meg-head-header')
        let topNav = document.querySelector('.meg-topnav')
        let mobLink = document.querySelector('.meg-mob-link-flex')
        let search = document.querySelector('.searchbox')
        
        if(window.location.pathname === "/"){
            search.style.backgroundImage = "url(/assets/search.png)"
        }else{
            search.style.backgroundImage = "url(/assets/search-black.png)"
        }

        hamIcon.addEventListener('click',()=>{
            hamIcon.classList.toggle('isActive')
            if(hamIcon.classList.contains('isActive')){
                mobHeader.classList.add('meg-mob-header')
                mobHeader.style.height = '100vh'
                mobLink.style.display = 'flex'
                topNav.classList.add('meg-gone')

            }else{
                mobHeader.classList.remove('meg-mob-header')
                mobHeader.style.height = '110px'
                mobLink.style.display = 'none'
                topNav.classList.remove('meg-gone')
                        
            }
            
        })

        form.addEventListener("submit", function(e) {
            e.preventDefault();
        });

        searchbox.addEventListener("focus", function(e) {
            searchbox.setAttribute("placeholder", "Search...");
        });

        searchbox.addEventListener("focusout", function(e) {
        searchbox.value = null;
        searchbox.removeAttribute("placeholder");
        });
    })


    return(
          <>
           {window.location.pathname === "/" ? <Header ground="meg-ground-black" header="header-black" 
           url="/assets/logo-min.png" link="link-white" 
           mobLink="mob-link-white" search="meg-color-white" 
           social="meg-head-social-black" hamClass="ham-white"
           cart="/assets/cart.png"
           /> : <Header ground="meg-ground-white" header="header-white" 
           url="/assets/logo-min-black.png" link="link-black" 
           mobLink="mob-link-black" search="meg-color-black"
           social="meg-head-social-white" hamClass="ham-black" cart="/assets/cart-black.png" />}
          </>          
        )
}