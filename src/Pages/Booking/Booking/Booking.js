import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
  const { consultantname } = useParams();
  return (
    <div className="'Andada Pro', serif">
      <h2>{consultantname}</h2>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default Booking;