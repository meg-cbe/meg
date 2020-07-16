import React from 'react';

export default function MegButton(props){
    return(
    <button onClick={props.onclick} className={props.class}>{props.title}</button>
    )
}