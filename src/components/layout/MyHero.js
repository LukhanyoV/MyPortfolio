import React from 'react';
import Man from './avatar.png';

const MyHero = () => {
    return (
        <header className="masthead text-white text-center" style={{borderColor: "#374859"}}>
            <div className="container d-flex align-items-center flex-column">
                <h1 className="masthead-heading mb-0">Lukhanyo Vakele</h1>
                <img class="masthead-avatar mb-5" src={Man} alt="" />   
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">PROGRAMMER</div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0"><i>"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry</i></p>
            </div>
        </header>
    )
}

export default MyHero;
