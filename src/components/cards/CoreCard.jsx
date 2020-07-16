import React from 'react';

export default function CoreCard(props){
    return(
        <>
        <div className="core-container">
            <div className="flex-icon">
                <div className="meg-icon">
                    <img src={props.url} alt="money"/>
                </div>
                <h3>{props.no}</h3>
            </div>
            <div className="core-content">
                <h3>{props.head}</h3>
                <p>{props.content}</p>
            </div>
        </div>
        </>
    )
}