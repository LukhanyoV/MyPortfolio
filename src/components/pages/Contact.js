import React, {useState} from 'react';
import axios from 'axios';

const Contact = () => {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
        submitting: false,
        status: { ok, msg }
        });
        if (ok) {
        form.reset();
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
        method: "POST",
        url: "https://formspree.io/mdowwdqq",
        data: new FormData(form)
        })
        .then(r => {
            handleServerResponse(true, "Message Sent!", form);
        })
        .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
        });
    };

    return (
        <div className="container" id="contact">
            <div class="divider"><span></span><span><i class="fa fa-star" aria-hidden="true"></i></span><span></span></div>
            <div className="row">
                <aside className="col-sm-6">
                <h2 style={{margin: "10px"}}>Contact Form</h2>
                    <article className="card">

                        <div className="card-body p-5">

                            <p className="alert alert-info">
                                <i className="fa fa-info-circle"></i> {" "}
                                Use the form below to send me an email
                            </p>

                            <form onSubmit={handleOnSubmit}>
                                {serverState.status && (
                                    <div className={!serverState.status.ok ? "text-light bg-danger" : "text-light bg-success"} align="center">
                                        {serverState.status.msg}
                                    </div>
                                )}

                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name:</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" name="fullName" placeholder="" required/>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="reply_email">Email:</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-envelope-open"></i></span>
                                        </div>
                                        <input type="email" className="form-control" name="reply_email" placeholder="" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                        </div>
                                        <textarea className="form-control" name="message" placeholder="" required></textarea>
                                    </div>
                                </div>

                                <button class="subscribe btn btn-primary btn-block" name="send_mail" type="submit" disabled={serverState.submitting}> MAIL  </button>

                            </form>

                        </div>

                    </article>

                </aside>

                
                <aside className="col-sm-6">
                    <h2 style={{margin: "10px"}}>Contact Details</h2>
                    <article className="card">
                        <div className="card-body p-5">
                            <h2>CONTACT ME</h2>
                            <div style={{backgroundColor: "lightgray", padding: "10px"}} >
                                <div className="form-group">
                                    <a href="mailto:lukhanyovakele@gmail.com">
                                        <i className="fa fa-envelope-open"></i>
                                        {" "}
                                        Email: LukhanyoVakele@gmail.com
                                    </a>
                                </div>
                                <div className="form-group">
                                    <a href="tel:+27812434929">
                                        <i className="fa fa-phone"></i>
                                        {" "}
                                        Cell: +27812434929
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                </aside>
                

            </div>
        
        </div>
    )
}

export default Contact;
