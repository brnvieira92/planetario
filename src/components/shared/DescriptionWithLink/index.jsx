import React from 'react';
import '../gray_img/style.css';

export const DescriptionWithLink = (props)=>{

    if(!props.description)
    return null;

    if(props.link){
        return(
            <>
                <p>{props.description}</p>
                <div><a href={props.link}>Saiba mais</a></div>

            </>
        )
    } else{
        return(
        <>
            <p><u>{props.description}</u></p>
        </>

    )}
}