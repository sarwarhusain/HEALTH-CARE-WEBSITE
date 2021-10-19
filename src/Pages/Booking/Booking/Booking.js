import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
  const { consultantname } = useParams();
  return (
    <div>
      <h2>{consultantname}</h2>
    </div>
  );
};

export default Booking;