import React from 'react';

const Sarvices = () => {

  return (
    <div className="mt-5">
      <h2 className="text-opacity-75 text-black fw-bold">Our Services</h2>
      <hr />
      <div className="row row-cols-1 col-lg-12 row-cols-md-2 g-4 ">
        <div className="col">
          <img src="https://i.ibb.co/KDFW1Y6/bed.jpg" className="card-img-top" alt="..." />
        </div>
        <div className="col">
          <div className="card-body mt-5">
            <h5 className="card-title fw-bold fs-1 text-opacity-60 text-info">250 BED</h5>
            <p className="fw-semi-bold">Al Haramain Hospital has a fully functional, well-equipped and highly responsive Accident & Emergency Centre, which deals with all kinds of emergencies under one roof 24 hours a day and 7 days a week. The Centre is managed by qualified and experienced Emergency Medical Personnel. In case of any emergency, one call is enough to avail our ambulance pick-up round-the-clock. Our fleet of ambulances is well-equipped and manned by trained emergency technicians and paramedics..</p>
          </div>
        </div>
        <div className="col">
          <div className="card-body mt-5">
            <h5 className="card-title card-title fw-bold fs-3 text-opacity-60 text-info">MODULAR OPERATION THEATRE</h5>
            <p className="">We have a spacious Operation Theater complex which comprises of five modular operation theaters, with a total floor space of up to 11,000 sq. ft. There are separate Post-Operative Wards for males and females. We also boast of having the most ultra-modernanaesthetic work station. We have OT tables from Brazil, all OT lighting has been sourced from Canada and anaesthesia workstation from Germany (Ultra-modern Emergency OT, Orthopedic OT, General OT, GyNAe OT, Special & Neuro OT)
            In order to provide our patients with the best treatment, we have taken the initiative to invest in the latest and most advanced OT technology. We have sourced our equipment from the most reputable global suppliers such as Philips (Netherlands) and DV Lab (USA) with full back-up service to ensure 24/7 reliability in the services that we provide.</p>
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
