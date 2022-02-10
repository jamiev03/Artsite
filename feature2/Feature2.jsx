import React from 'react';
import "./feature2.css";
import Bloom001 from '../../assets/Bloom001.png'
import Flame002 from '../../assets/Flame002.png'
import Genesis010 from '../../assets/Genesis010.png'

const Feature2 = () => {
    return (
        <div className='container'>
            <div className="feature2__container">
            <img src={Genesis010} alt="genesis blob"/>
            <img src={Flame002} alt="Flame blob"/>
            <img src={Bloom001} alt="Bloom blob"/>
            </div>
            
        </div>
    )
}

export default Feature2
