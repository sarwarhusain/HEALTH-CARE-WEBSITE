import React from 'react';

const Consultant = ({ consultant }) => {
  // const {consultant} =props;
  const { name, Position, department, Qualification, description, img } = consultant;
  return (
    <div className="mt-5">
      <div class="row row-cols-1 row-cols-md-3 pb-4 ">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body bg-gradient">
          <h5 class="card-name">Name:{name}</h5>
          <h5 class="card-Position">Position:{Position}</h5>
          <h5 class="card-department">department:{department}</h5>
          <h5 class="card-Qualification">Qualification:{Qualification}</h5>
          <span class="card-description">Description:{description}</span>
          <br />
          <button className="btn btn-warning">Request To Appointment</button>
        </div>
      </div>
    </div>

  );
};

export default Consultant;



