import React from 'react';

const Sarvices = () => {

  return (
    <div className="mt-5">
      <hr />
      <hr />
      <h2 className="text-opacity-75 text-black fw-bold">Our Services</h2>
      <hr />
      <div className="row row-cols-1 col-lg-12 row-cols-md-2 g-4 ">
        <div className="col">
          <img src="https://i.ibb.co/KDFW1Y6/bed.jpg" className="card-img-top" alt="..." />
        </div>
        <div className="col">
          <div className="card-body mt-5">
            <h5 className="card-title fw-bold fs-1 text-opacity-60 text-info">250 BED</h5>
            <p className="card-text fs-5 text-opacity-50 fw-semi-bold">Al Haramain Hospital Pvt. Ltd. is a hospital designed to provide quality health care services to the people of Sylhet in particular, and people of the division and beyond in general. Presently it is a 250 Bed hospital, with an expansion plan to increase it to 500 beds.</p>
          </div>
        </div>
        <div className="col">
          <div className="card-body mt-5">
            <h5 className="card-title card-title fw-bold fs-5 text-opacity-60 text-info">MODULAR OPERATION THEATRE</h5>
            <p className="card-text card-text fs-4 text-opacity-50 fw-semi-bold">Most modern well well equipped Modular Operation theater Covering total 10,500 sq.ft with Orthopedic OT, General OT, Gyane OT, Special Neuro OT, Ultramodern Emergency OT.</p>
          </div>
        </div>
        <div className="col">
          <img src="https://i.ibb.co/xhzsqzb/img-0472.jpg" className="card-img-top" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Sarvices;



// https://i.ibb.co/xhzsqzb/img-0472.jpg
// https://i.ibb.co/7JjH8nG/15930417572-11162b4557.jpg
// https://i.ibb.co/KDFW1Y6/bed.jpg
// https://i.ibb.co/TggQ1xd/diagnostics.jpg