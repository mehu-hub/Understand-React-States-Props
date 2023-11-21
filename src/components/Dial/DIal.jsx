import React from 'react';
import Knob from '../Knob/Knob';

const DIal = (props) => {
    return (
        <div style={{border:"2px solid purple", margin:"20px", padding:"20px"}}>
            Your steps count: {props.steps}
            <Knob steps={props.steps}></Knob>
        </div> 
    );
};

export default DIal;