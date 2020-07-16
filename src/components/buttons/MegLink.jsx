import React from 'react';

export default function MegLink(props){
    return(
    <a href={props.link} className={props.class}>{props.title}</a>
    )
}