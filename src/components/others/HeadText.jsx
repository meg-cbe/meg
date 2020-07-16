import React from 'react';

export default function HeadText(props){
    return(
        <div>
            <div className={props.absTextClass}>
                <div className="product">
                    <h1 className={props.classAbs}>{props.title}</h1>
                </div>
                <div className={props.contentClass}>
                    <h2 className="red-top">{props.title}</h2>
                    <h4>{props.sub1}</h4>
                    <h3 className={props.classHead}>{props.sub2}</h3>
                </div>
            </div>
        </div> )
}