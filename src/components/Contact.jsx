import React from 'react';
import './css/Contact.css';

function Contact() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>123 Bakery Street, New Delhi, India</p>
            <p>Email: info@bakeology.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="col-md-6">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 8am - 6pm</p>
            <p>Saturday: 9am - 5pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">&copy; {new Date().getFullYear()} Bakeology. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
