import React from 'react';
import hero from './hero.png';

const Hero = () => {
    return (
        <section id="home" className="d-flex align-items-center position-relative vh-200 cover hero" style={{backgroundImage: "url("+{hero}+")"}}>
            <div className="container-fluid container-fluid-max">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <h1 className="text-white">Lukhanyo Vakele</h1>
                        <div className="mt-3">
                            <p className="text-black">I am just a guy who is a programmer for fun.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
