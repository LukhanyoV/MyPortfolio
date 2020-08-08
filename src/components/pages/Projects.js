import React from 'react';
import finder from './images/finder.png';
import keeper from './images/keeper.png';
import password from './images/password.jpg';

const Projects = () => {
    return (
        <div className="container" id="projects">
            <div class="divider"><span></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span></span></div>
            <h2>Projects</h2>
            <div className="card-deck">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Github Finder</h5>
                    <div className="containerz">
                        <img src={finder} alt="Avatar" className="imagez"/>
                        <div className="overlayz">
                            <div className="textz">
                                <p className="card-text"><a className="btn btn-primary" href="https://lukhanyo-github-finder.netlify.app/" target="_blank" rel="noopener noreferrer">VIEW</a></p>
                            </div>
                        </div>
                    </div>
                    <p className="card-text">Find contacts on Github just by using a search query.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Contact Keeper</h5>
                    <div className="containerz">
                        <img src={keeper} alt="Avatar" className="imagez"/>
                        <div className="overlayz">
                            <div className="textz">
                                <p className="card-text"><a className="btn btn-primary" href="https://fathomless-basin-62548.herokuapp.com/" target="_blank" rel="noopener noreferrer">VIEW</a></p>
                            </div>
                        </div>
                    </div>
                    <p className="card-text">Safest place to keep your contacts saved online.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Sneaky Pass</h5>
                    <div className="containerz">
                        <img src={password} alt="Avatar" className="imagez"/>
                        <div className="overlayz">
                            <div className="textz">
                                <p className="card-text"><a className="btn btn-primary" href="https://github.com/LukhanyoV/SneakyPass" target="_blank" rel="noopener noreferrer">VIEW</a></p>
                            </div>
                        </div>
                    </div>
                    <p className="card-text">My amazing tool that finds WiFi passwords saved in my windows computer.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;
