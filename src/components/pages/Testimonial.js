import React from 'react';

const Testimonial = () => {
    return (
        <div className="container" id="testimonial">
            <div class="divider"><span></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span></span></div>
            <h2>Testimonials</h2>
            <div className="row" className={mag}>
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Aaqiel Behardien</h5>
                        <p className="card-text"><i>"Lukhanyo is a great developer to work with. He attacks problems with his power of logic and has a strong sense of dedication. When help is required, he cannot help himself but to assist you."</i></p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Jamie Brown</h5>
                        <p className="card-text"><i>"Lukhanyo shows dedication and passion for the work that he does. He has a fun spirit which he carries through his work. It's clear to me that he truly enjoys what he does and he has inspired me to find joy in my own work."</i></p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Mischa Achmat</h5>
                        <p className="card-text"><i>"Lukhanyo is a very dedicated,  passionate and hardworking individual. He let's no time stand in his way and he is always ahead of things. He tackles every challenge head on and he strive to achieve all his goals that he sets for himself. He is keen on learning new concepts and yet challenging himself to do better and to be better. Lukhanyo will achieve great standards within the workplace and will be a asset to the company."</i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" className={mag}>
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Anam Majikijela</h5>
                        <p className="card-text"><i>"Lukhanyo is an intelligent, enthusiastic individual. His work speaks for itself, any team or employer would be lucky to have him."</i></p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Ariya</h5>
                        <p className="card-text"><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."</i></p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Godwin Dzvapatsva (Head of Curriculum and Learning)</h5>
                        <p className="card-text"><i>"Lukhanyo is intelligent and hard working."</i></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

const mag = {
    margin: "10px"
}

export default Testimonial;
