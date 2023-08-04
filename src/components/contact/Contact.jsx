import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p>If I had Selected, I will Give My Best.</p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user" />
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">Janakrishnamooorthy Rajasekaran</div>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <i className="fas fa-map-marker-alt" />
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">
                                            42/A, Subramaniya Swamy kovil North Street, Bodinayakanur,
                                            Theni(Dt)-625513
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <i className="fas fa-envelope" />
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title">janakrishnan3580@gmail.com</div>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <i className="fas fa-phone" />
                                    <div className="info">
                                        <div className="head">Contact</div>
                                        <div className="sub-title">+91-8883521093</div>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <i className="fa fa-linkedin-square" />
                                    <div className="info">
                                        <div className="head">Linkedin</div>
                                        <div className="sub-title">
                                            {" "}
                                            <a href="https://www.linkedin.com/in/janakrishnamoorthy-r-b64608212">
                                                Visit
                                            </a>{" "}
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Message me</div>
                            <form className="contact-form" action="#" method="POST">
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" className="fullname" placeholder="Name" />
                                    </div>
                                    <div className="field email">
                                        <input type="text" className="email-input" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" className="subject" placeholder="Subject" />
                                </div>
                                <div className="field textarea">
                                    <textarea
                                        className="message"
                                        cols={30}
                                        rows={10}
                                        placeholder="Message.."
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="button-area">
                                    <button className="send-msg" type="submit" name="send">
                                        Send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact