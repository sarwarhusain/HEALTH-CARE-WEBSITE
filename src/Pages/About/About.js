import React from 'react';
import about from '../../images/about/alharamainhospital.jpg'
const About = () => {
  return (
    <div>
      <h2 className="text-black text-opacity-50 mx-auto mb-5">KNOW WHO WE ARE!</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card-body justify-content-start">
            <p className="card-text">
              Al Haramain Hospital is a 250-bed multi-disciplinary hospital in Sylhet, Bangladesh, that confidently and capably provides comprehensive health care with the latest medical, surgical and diagnostic equipment and facilities. These services are provided by expert medical professionals, skilled nurses and technologists using state-of- the-art technology.

              Al Haramain Hospital is an eleven storey building built on one acre of land, and has 120,000 square feet of total floor space. The Hospital is a sister concern of the world renowned perfume brand Al Haramain. Al Haramain Hospital has all the characteristics of a world-class hospital with a wide range of services and a diversity of specialists, equipment and technology. The Hospital showcases a synergy of medical technology and advances in IT through paperless medical records. The skilled nurses, technologists and administrators of Al Haramain Hospital, aided by state-of- the-art equipment, provide a congenial infrastructure for the medical professionals in providing healthcare to international standards.</p>
            <h1>Vision</h1>
            <p>The vision of Al Haramain Hospital is to lead the evolution of healthcare and be the most trusted health service provider in Bangladesh.</p>
            <h1>Mission</h1>
            <p>The mission of Al Haramain Hospital is to provide quality health services and facilities for the community, to promote wellness, torelieve suffering and to restore health as swiftly, safely, and humanely as possible, consistent with the best service we can give and at the highest value.</p>
          </div>
        </div>
        <div className="col">
          <img src={about} className="card-img-top" alt="..." />

        </div>
      </div>

    </div>
  );
};

export default About;