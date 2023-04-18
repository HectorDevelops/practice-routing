import React from 'react';
import { useParams } from 'react-router-dom';

// creating this function for the plain output info 
const PlainGreeting = (props) => {
    // creating this greet variable to use as a parameter 
    const {greet} = useParams();

    return (
        // this ternary operator checks if the greet input is a num, and if so...
        isNaN(+greet) ? 
        // outputs this info with the word greet
        <h3>The word is: {greet} </h3> 
        : 
        // otherwise, it outputs this with the number greet
        <h3>The number is {greet}</h3>

    )
}

export default PlainGreeting;