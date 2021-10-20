import React from 'react';
import about from '../../images/about/alharamainhospital.jpg'
const ContactUs = () => {
  return (
    <div className="row row-cols-1 col-lg-12 row-cols-md-2 justify-content-center mx-auto ">
      <h2 className="text-black text-opacity-50 mx-auto mb-5">KNOW WHO WE ARE!</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <img src={about} className="mx-auto card-img-top" alt="..." />
        </div>
        <div className="col">
          <div className="card-body justify-content-start">
            <h6>Address:-<span className="text-opacity-50 text-secondary ">Kazi Tower, samato-30, Chali Bandar, Bishwa Road, Subhani Ghat, Sylhet-3100, Bangladesh </span></h6>
            <h6>
              phone:<span className="text-opacity-50 text-secondary">+88 0821 729981, +88 019 3122 5555, Hotline: 10607</span>
            </h6>
            <h6>
              Email:<span className="text-opacity-50 text-secondary">info@haramainhospital.com</span>
            </h6>
          </div>

        </div>

      </div>
      
    </div>
  );
};

export default ContactUs;
