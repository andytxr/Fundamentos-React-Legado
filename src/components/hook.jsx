import React, {Component, useEffect, useState} from "react";

export default props => {

    let [cont, setCont] = useState(0);
    let [status, setStatus] = useState('Par');

    useEffect(() => {

        if(cont % 2 === 0){
            setStatus('Par')
        }else{
            setStatus('Ímpar')
        }

    })

    return(

        <div>
            <h2>{cont}</h2>
            <h2>{status}</h2>
            <button onClick={() => setCont(cont + 1)}>Increment</button>
        </div>

    )

}