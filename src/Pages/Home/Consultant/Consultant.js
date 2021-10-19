import React from 'react';

const Consultant = ({ consultant }) => {
  // const {consultant} =props;
  const { name, Position, department, Qualification, description, img } = consultant;
  return (
    <div className="mt-5">
      <div className="row row-cols-1 col-lg-12 row-cols-md-3 pb-4 ">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body bg-gradient">
          <h5 className="card-name">Name:{name}</h5>
          <h5 className="card-Position">Position:{Position}</h5>
          <h5 className="card-department">department:{department}</h5>
          <h5 className="card-Qualification">Qualification:{Qualification}</h5>
          <span className="card-description">Description:{description}</span>
          <br />
          <button className="btn btn-warning">Request To Appointment</button>
        </div>
      </div>
    </div>

  );
};

export default Consultant;



//  