import React from 'react';
import ot from '../../../images/specilized/operation-theater.png';
import mri1 from '../../../images/specilized/mri 1.png';
import mri2 from '../../../images/specilized/mri2.png'
import { Link } from 'react-router-dom';


const Valu = () => {
  return (
    <div className="ps-3 mx-3">
      <h2 className=" text-opacity-50 mt-5">OUR SPECIALIZED </h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="">
            <img src={ot} className="card-img-top w-25" alt="..." />
            <div className="">
              <h4>SPECIALIZED OT</h4>
              <p className="card-text text-lg-start">We have a spacious Operation Theater complex which comprises of five modular operation theaters, with a total floor space of up to 11,000 sq. ft. There are separate Post-Operative Wards for males and females. We also boast of having the most ultra-modern anaesthetic workstation. We have OT tables made in Brazil, all OT lighting has been sourced from Canada and anaesthesia workstation from Germany.
                (Ultra-modern Emergency OT, Orthopedic OT, General OT, GyNAe OT, Special & Neuro OT)
              </p>
              <Link to='/services'> <h3 className="btn btn-success">Details</h3></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="">
            <img src={mri2} className="card-img-top w-25" alt="..." />
            <div className="">
              <h4>MRI/CT SCANE</h4>
              <p className="card-text text-lg-start">MRI is used to a great extent in modern hospitals and clinics for medical diagnosis, staging of disease and follow-up without exposing the body to ionizing radiation. It is painless and does not involve X-ray radiation. The images and resolution produced by MRI are extremely detailed and can detect tiny changes of structures within the body.
                Our Radiology and Imaging Department Consist of the world’s latest models from USA (Ingenia 3.0T) 3 Tesla MRI (World class Philips 3 Tesla MRI ) which have revolutionized the medical imaging world.</p>
              <Link to='/services'> <h3 className="btn btn-success">Details</h3></Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="">
            <img src={mri1} className="card-img-top w-25" alt="..." />
            <div className="">
              <h4>CCU</h4>
              <p className="card-text text-lg-start">Our Critical Care Units (CCU) cater to patients with severe and life-threatening illnesses and injuries which require close, constant monitoring and support through specialist equipment and medication to ensure normalcy in bodily functions. Al Haramain Hospital has spacious critical care units (ICU, HDU, NICU, PICU) spanning up to 11,000 sq. ft. Our CCU equipment is sourced from the best manufacturers such as Drager (Germany), Philips (Netherlands) and Jian Yuan (China).

              </p>
              <Link to='/services'> <h3 className="btn btn-success">Details</h3></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valu;