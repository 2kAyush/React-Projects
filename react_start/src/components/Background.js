import React from 'react';

import bgimg from '../images/bg.jpg';
import '../style/background.css';

export default function Background(){
    return(
        <div className="background" >
            <img src={bgimg} alt="background" />
        </div>
    );
}