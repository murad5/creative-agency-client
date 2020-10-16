import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section className="footer " >
            <div className="container text-md-left text-center ">
                <div className="row py-5  my-5">
                    <div className="col-md-4 ">
                        <h2>Let us handle your <br/> project, professionally.</h2>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="ml-auto col-md-6 mr-10">
                            < form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject *"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group ">
                                <button type="button" className="btn btn-dark"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
               
                    <div className="copyRight text-center ">
                        <p>copyright Orange labs {(new Date()).getFullYear()}</p>
                    </div>
            </div>   
        </section>
    );
};

export default Footer;