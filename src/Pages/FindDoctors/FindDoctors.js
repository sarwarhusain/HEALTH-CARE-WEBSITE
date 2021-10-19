import React from 'react';
import { Link } from 'react-router-dom';

const FindDoctors = () => {
  return (
    <div className="">
      <form>
        <div className="mx-auto w-50">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label fw-bold text-success">Dr.Name:</label>
            <input type="name" className="form-control" id="" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label fw-bold text-success">Department:</label>
            <input type="name" className="form-control" id="" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fw-bold text-success">Email address:</label>
            <input type="" className="form-control" id="" />
          </div>
          <br />
          <Link to='/'><button type="submit" className="btn btn-primary">Submit</button></Link>
        </div>
      </form>
    </div>
  );
};

export default FindDoctors;
