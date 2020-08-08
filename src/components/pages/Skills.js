import React from 'react';

const Skills = () => {
    return (
        <div className="container" id="skills">
            <div class="divider"><span></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span></span></div>
            <h2>Skills</h2>
            <ul className="card skills-bar-container" style={{padding: "10px"}}>
                <li>
                    <div className="progressbar-title">
                        <h3>HTML5</h3>
                        <span className="percent" id="html-pourcent"></span>
                    </div>
                    <div class="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                </li>
                <li>
                    <div className="progressbar-title">
                        <h3>CSS3</h3>
                        <span className="percent" id="css-pourcent"></span>
                    </div>
                    <div class="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">55%</div>
                    </div>
                </li>
                <li>
                    <div className="progressbar-title">
                        <h3>JavaScript</h3>
                        <span className="percent" id="javascript-pourcent"></span>
                    </div>
                    <div class="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '45%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">45%</div>
                    </div>
                </li>
                <li>
                    <div className="progressbar-title">
                        <h3>Python</h3>
                        <span className="percent" id="php-pourcent"></span>
                    </div>
                    <div class="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
                    </div>
                </li>
                <li>
                    <div className="progressbar-title">
                        <h3>PHP</h3>
                        <span className="percent" id="php-pourcent"></span>
                    </div>
                    <div class="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Skills;
