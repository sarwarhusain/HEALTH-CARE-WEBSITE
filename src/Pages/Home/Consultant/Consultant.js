import React from 'react';
import { Link } from 'react-router-dom';

const Consultant = ({ consultant }) => {
  // const {consultant} =props;
  const { name, Position, department, Qualification, description, img } = consultant;
  return (
    <div className="mt-5">
      <div className="row row-cols-1 col-lg-12 row-cols-md-3 mx-auto pb-3 rounded-start bg-light border border-5">
        <img src={img} className=" card-img-top w-75 rounded-circle mx-auto" alt="img" />
        <div className="card-body bg-gradient">
          <h5 className="card-name text-success">Name:{name}</h5>
          <h5 className="card-Position">Position:{Position}</h5>
          <h5 className="card-department">Department:{department}</h5>
          <p className="card-Qualification">Qualification:{Qualification}</p>
          <span className="card-description">Description:{description}</span>
          <br />
          <Link to='/gettingAppoint'><button className="btn btn-info mt-3">Appointment</button></Link>
          <br />
          <Link to={`/booking/${name}`}><button className="btn btn-info mt-3">View Profile</button></Link>
        </div>
      </div>
    </div>

  );
};

export default Consultant;

// Consultant end