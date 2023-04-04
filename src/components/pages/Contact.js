import React from 'react';
import { useState } from 'react';

export default function Contact() {
  const formInitialDetails = {
    name: '',
    email: '',
    message: '',
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [formSubmitted, setFormSubmitted] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (catefory, value) => {
    setFormDetails({
      ...formDetails,
      [catefory]: value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted('Sending...');
    const response = await fetch('https://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDetails),
    });
    setFormSubmitted('Send');
    const data = response.json();
    setFormDetails(formInitialDetails);
    if (data.status === 'success') {
      setStatus({ type: 'success', message: 'Message Sent' });
    } else {
      setStatus({ type: 'error', message: 'Message Not Sent' });
    }
  };


  return (
    <div  className=" container contact align-items-center" id="connect">
      <div className="row align-items-center">
        <div className="col-md-6">
          {/* <img src={} alt="contact" className="img-fluid" /> */}
        </div>
        <div className="col-md-6">
          <h1 className="display-4">Contact Me</h1>
          <form onSubmit={onFormSubmit}>
            <div className="row">
              <div className="col-md-6">
                <input type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
              </div>
              <div className="col-md-6">
                <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
              </div>
              <div>
                <textarea name="message" id="message" cols="30" rows="10" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
              <button type="submit"><span>{formSubmitted}</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
