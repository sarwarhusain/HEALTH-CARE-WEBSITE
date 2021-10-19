import React from 'react';

const ContactUs = () => {
  return (
    <div className="d-flex ">
      <div>
        <p className='fw-bold '>Address:<span>House-06,Road-04,Sylhet,Bngladesh</span></p>
        <p className='fw-bold'>Phone:<span>017***********</span></p>
        <p className='fw-bold'>Email:<span>sarwar*****8@gmail.com</span></p>
        <p className='fw-bold'><span>Mobile:01788888888</span></p>
        <p className='fw-bold'><span>Customer Care:01766666666</span></p>
      </div>
      <button  >View Our Location</button>
      <div>
        <h1 className='fw-bold'>Contact Us</h1>
        <form action="">
          <input placeholder="Enter Your Name" type=" Name" />
          <input placeholder="Enter Your Email" type="Email" />
          <input placeholder="Enter Your PhoneNumber" type="Phone" />
          <input placeholder="Enter Your Password" type="Password" />
        </form>
      </div>

    </div>
  );
};

export default ContactUs;