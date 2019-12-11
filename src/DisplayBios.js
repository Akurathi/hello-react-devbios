import React from 'react';
import DeveloperBio from './DeveloperBio';

export default function DisplayBios(props){
    return(
        props.developers.map(
            (dev)=><DeveloperBio developer={dev} key={dev.id} />             
        )
    )
}