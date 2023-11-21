import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:"2px solid green", margin:"20px", padding:"20px"}}>
            <h2>knoc Components</h2>
            <p>Steps is here: {props.steps}</p>
        </div>
    );
};

export default Knob;