import React from 'react';
import './Card.css';

//function Card(props){
const Card = (props) => {
    {/** In this case passing all the name of the other components into this one */}
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;