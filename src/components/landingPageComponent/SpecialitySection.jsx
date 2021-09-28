import React from "react";
import img1 from "../../images/panchavati2.jpg";

function SpecialitySection() {
  return (
    <div>
      <section className="w3l-index3">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-3">
            <div className="row">
              <div className="col-lg-6 left-wthree-img text-righ">
                <div className="position-relative">
                  <img src={img1} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self">
                    <h6>Discover our Locations</h6>
                    <h3 className="title-big">20 Years of Hotels and Resort Experience</h3>
                        <li><span className="fa fa-check" aria-hidden="true"></span>We make the best for all our customers</li>
                    <ul className="w3l-right-book mt-4">
                        <li><span className="fa fa-check" aria-hidden="true"></span>Follow our Resort Luxury Hotels</li>
                        <li><span className="fa fa-check" aria-hidden="true"></span>Double rooms and family rooms</li>
                        <li><span className="fa fa-check" aria-hidden="true"></span>Enjoy a luxury experience</li>
                    </ul>
                    {/* <a href="about.html" className="btn btn-style btn-primary mt-4">Check all packages</a> */}
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialitySection;
