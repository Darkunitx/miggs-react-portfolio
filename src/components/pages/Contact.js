import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gq9m7kf', 'template_47dj2v4', form.current, 'AWwf_OKTKb2IvXvoZ')
      .then((result) => {
          console.log(result.text);
          setSubmissionStatus('success');
      }, (error) => {
          console.log(error.text);
          setSubmissionStatus('error');
      });
      e.target.reset();
  };
    
  return (
    <section>
      <div className="container">
        <h2 className='text-center'>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="form-control card">
          <input type="text" placeholder="Full Name" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {submissionStatus === 'success' && (
          <p className="text-success">Your message has been sent.</p>
        )}
        {submissionStatus === 'error' && (
          <p className="text-danger">There was an error sending your message. Please try again later.</p>
        )}
      </div>
    </section>
  )
}