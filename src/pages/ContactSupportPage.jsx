import React from 'react';

const SupportPage = () => {
    return (  
 <section className="w3l-contact-1 py-5">
    <div className="contacts-9 py-lg-5 py-sm-4">
        <div className="container">
            <div className="d-grid contact-view">
                <div className="cont-details">
                    <p>Get in touch</p>
                    <h3 className="title-big">Contact for Support</h3>
                </div>
                <div className="map-content-9">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore sapiente, distinctio
                        perferendis voluptas consequatur quaerat incidunt. Similique, officia! Dolorum fugiat et aliquam
                        necessitatibus quas reiciendis, totam voluptatibus deleniti tempore doloribus.</p>
                </div>
            </div>
            <div className="d-grid contact-view">
                <div className="cont-details">
                    <div className="cont-top">
                        <div className="cont-left text-center">
                            <span className="fa fa-phone text-primary"></span>
                        </div>
                        <div className="cont-right">
                            <h6>Call Us</h6>
                            <p><a href="tel:+44 99 555 42">+123 45 67 89</a></p>
                        </div>
                    </div>
                    <div className="cont-top margin-up">
                        <div className="cont-left text-center">
                            <span className="fa fa-envelope-o text-primary"></span>
                        </div>
                        <div className="cont-right">
                            <h6>Email Us</h6>
                            <p><a href="mailto:example@mail.com" className="mail">example@mail.com</a></p>
                        </div>
                    </div>
                    <div className="cont-top margin-up">
                        <div className="cont-left text-center">
                            <span className="fa fa-map-marker text-primary"></span>
                        </div>
                        <div className="cont-right">
                            <h6>Address</h6>
                            <p>Address Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="map-content-9 mt-lg-0 mt-4">
                    <form>
                        <div className="twice-two">
                            <input type="text" className="form-control" name="w3lName" id="w3lName" placeholder="Name"
                                required="" />
                            <input type="email" className="form-control" name="w3lSender" id="w3lSender" placeholder="Email"
                                required="" />
                        </div>
                        <div className="twice">
                            <input type="text" className="form-control" name="w3lSubject" id="w3lSubject"
                                placeholder="Subject" required="" />
                        </div>
                        <textarea name="w3lMessage" className="form-control" id="w3lMessage" placeholder="Message"
                            required="" ></textarea>
                        <button type="submit" className="btn btn-contact">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}
 
export default SupportPage;