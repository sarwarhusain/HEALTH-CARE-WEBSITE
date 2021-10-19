import React, { useEffect, useState } from 'react';
import Consultant from '../Consultant/Consultant';
import './Consultant.css'

const Consultants = () => {

  const [consultants, setConsultants] = useState([]);
  useEffect(() => {
    fetch('/consultants.json')
      .then(res => res.json())
      .then(data => setConsultants(data));
  }, [])
  return (
    <div>
      <h2 className="mt-5 text-opacity-75 text-black fw-bold ">OUR CONSULTANTS</h2>
      <hr /><hr />
      <br />
      <div className="consultant-container">
        {
          consultants.map(consultant => <Consultant
            key={consultant.name}
            consultant={consultant}
          ></Consultant>)
        }

      </div>
    </div>
  );
};

export default Consultants;