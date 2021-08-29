import React from 'react'
import img1 from '../../images/panchavati2.jpg';

function SpecialitySection() {
    return (
        <div>
             <section class="w3l-index3">
    <div class="midd-w3 py-5">
        <div class="container py-lg-5 py-md-3">
            <div class="row">
                <div class="col-lg-6 left-wthree-img text-righ">
                    <div class="position-relative">
                        <img src={img1} alt="" class="img-fluid" />
                    </div>
                </div>
                <div class="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self">
                    <h6>Discover our Locations</h6>
                    <h3 class="title-big">20 Years of Hotels and Resort Experience</h3>
                    <p class="mt-3">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                        ultrices in ligula. Semper at tempufddfel.</p>
                    <ul class="w3l-right-book mt-4">
                        <li><span class="fa fa-check" aria-hidden="true"></span>We make the best for all our customers</li>
                        <li><span class="fa fa-check" aria-hidden="true"></span>Follow our Resort Luxury Hotels</li>
                        <li><span class="fa fa-check" aria-hidden="true"></span>Double rooms and family rooms</li>
                        <li><span class="fa fa-check" aria-hidden="true"></span>Enjoy a luxury experience</li>
                    </ul>
                    <a href="about.html" class="btn btn-style btn-primary mt-4">Check all packages</a>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default SpecialitySection


