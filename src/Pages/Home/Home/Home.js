import React from 'react';
import Banner from '../Banner/Banner';
import Consultants from '../Consultants/Consultants';
import Sarvices from '../Sarvices/Sarvices';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Sarvices></Sarvices>
      <Consultants></Consultants>
    </div>
  );
};

export default Home;