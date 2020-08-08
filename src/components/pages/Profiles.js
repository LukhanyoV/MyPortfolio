import React from 'react';

const Profiles = () => {
    return (
        <div className="container" id="profiles">
            <div class="divider"><span></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span></span></div>
                <h2>Profile pages</h2>
                <div className="row" style={mag}>

                        <div className="card col-sm-12">
                            
                            <div className="card-body">

                                <h5 className="card-title">
                                    <i className="fa fa-github roundz"></i>
                                    <strong>Github:</strong>
                                </h5>
                                <p><a href="https://github.com/LukhanyoV/" rel="noopener noreferrer" target="_blank">LukhanyoV</a></p>

                            
                                <h5 className="card-title">
                                    <i className="fa fa-codepen roundz"></i>
                                    <strong>Codepen:</strong>
                                </h5>
                                <p><a href="https://codepen.io/LukhanyoV/" rel="noopener noreferrer" target="_blank">LukhanyoV</a></p>

                            
                                <h5 className="card-title">
                                    <i className="fa fa-linkedin roundz"></i>
                                    <strong>LinkedIn:</strong>
                                </h5>
                                <p><a href="https://linkedin.com/in/LukhanyoV/" rel="noopener noreferrer" target="_blank">LukhanyoV</a></p>

                            </div>

                        </div>

            </div>

        </div>
    )
}

const mag = {
    margin: "10px"
}

export default Profiles;
