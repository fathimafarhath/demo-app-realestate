import React from 'react'
import Agentbox from './Agentbox'
import agentimage1 from '../images/s1.png'
import agentimage2 from '../images/s2.png'
import agentimage3 from '../images/s3.png'


const Agent= ()=> {
    return (
        <div className="agent">
            <div className="a-heading"> </div>
            <h1>Agents</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>            
        
            <div className="b-container">
                <Agentbox image={agentimage1} name="Sam" />
                <Agentbox image={agentimage2} name="Sam" />
                <Agentbox image={agentimage3} name="Sam" />
                
            </div>
        </div>  
    )
}

export default Agent
