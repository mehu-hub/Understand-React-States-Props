import React, { useEffect, useState } from 'react';
import DIal from '../Dial/DIal';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () =>{
        const nextSteps = steps + 1;
        setSteps(nextSteps);
    }

    useEffect(()=>{
        console.log(steps)      
    }, [])
    return (
        <div style={{border:"2px solid red", margin:"20px", padding:"20px"}}>
            <h2>This is My Smart Watch !</h2>
            <p>Steps: {steps}</p>
            <button onClick={increaseSteps}>Increase...</button>
            <DIal steps={steps}></DIal>
        </div>
    );
};

export default Watch;