import React, {Fragment} from 'react';

const About = () => {
    return (
        <Fragment>
        <div className="container" id="about">
        <div class="divider"><span></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span></span></div>
            <h2>About</h2>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Overview</h5>
                        <div class="card-text">
                            <div>
                                <strong>Full Name: </strong>
                                <p>Lukhanyo Vakele</p>
                            </div>
                            <div>
                                <strong>Date of Birth:</strong>
                                <p>30/06/2000</p>
                            </div>
                            <div>
                                <strong>Gender:</strong>
                                <p>Male</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end col  */}
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Student Bio</h5>
                        <div class="card-text">
                        <p>I am a committed aspiring computer programmer and web developer. I have a passion for designing
and building new and innovative projects, particularly focusing on projects which support the less
fortunate. Working with computing devices and developing new software is my calling, my life’s fuel. </p>
                        <p></p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end col */}
            </div>
            {/* end row */}
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title"><strong>Education</strong></div>
                            <div className="card-text">
                                <p>Matric (year and school): 2017 – Harry Gwala High School</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title"><strong>Hobies</strong></div>
                            <div className="card-text">
                                <ul>
                                    <li>Reading</li>
                                    <li>Gaming</li>
                                    <li>Jogging</li>
                                    <li>Programming</li>
                                    <li>Mind Games</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title"><strong>Working Experience</strong></div>
                            <div className="card-text">
                                <p>Company: Promta Technologies</p>
                                <p>Period: March 2019 - August 2019</p>
                                <p>Role: Volunteer</p>
                                <p>Technologies used: HTML, CSS, PHP</p>
                                <p>Duties:</p>
                                <ul>
                                    <li>Worked on file image upload </li>
                                    <li>Handled some form request </li>
                                    <li>Did some front-end</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end of about */}
        </Fragment>
    )
}

export default About;
