import React from 'react';
import { useParams } from 'react-router-dom';

const Greeting = (props) => {
    // color1 is the letters
    // color2 is the background of that given div

    // parameters that will be used for each route
    const { greet, color1, color2 } = useParams();

    return (
        // main div where we will output info - setting background of the entire div to color2
        <div className="mainDiv"style={{backgroundColor: `${color2}`}} >
            {/* this conditional will check if the route is not a number, if not ... */}
            {isNaN(+greet) ? (
                // this will output a word ...
                <h3>
                    <span style={{ color: `${color1}` }}>The word is: {greet}</span>
                </h3>
            ) : (
                // but if it is in fact a number, then it will output the following message
                <h3>
                    <span style={{ color: `${color1}` }}>The number is: {greet}</span>
                </h3>)}
        </div>
    );
}
export default Greeting;