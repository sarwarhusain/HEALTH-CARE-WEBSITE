import React from 'react';
import { Link } from 'react-router-dom';
import notFounde from '../../images/notFound/notFound.jpg'
const NotFounde = () => {
  return (
    <div>
      <div>
        <img style={{ width: '50%' }} src={notFounde} alt="" />
        <Link to="/"> <button className="text-success rounded-3">Go Back</button></Link>
      </div>
    </div>
  );
};

export default NotFounde;