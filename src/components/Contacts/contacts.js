import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', form);
  };

  return (
    <div>
      <div className="banner-top">
        <div className="container">
          <h3>Contact</h3>
          <h4><a href="index.html">Home</a><label>/</label>Contact</h4>
          <div className="clearfix"></div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="spec">
            <div className="ser-t">
              <b></b>
              <span><i></i></span>
              <b className="line"></b>
            </div>
          </div>
          <div className="contact-w3">
            <div className="contact-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2482.432383990807!2d0.028213999961443994!3d51.52362882484525!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1423469959819"
                style={{ border: 0 }}
                title="Google Map"
              ></iframe>
            </div>
            <div className="contact-left">
              <h4>Contact Information</h4>
              <p>
                Hello world 
                Contact message
                Balle balle 
                Shaba shaba
              </p>
              <ul className="contact-list">
                <li><i className="fa fa-map-marker" aria-hidden="true"></i> 756 Global Place, New York.</li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:example@mail.com">mail@example.com</a></li>
                <li><i className="fa fa-phone" aria-hidden="true"></i>+123 2222 222</li>
              </ul>

              <Tabs>
                <TabList>
                  <Tab><i className="fa fa-envelope" aria-hidden="true"></i></Tab>
                  <Tab><i className="fa fa-map-marker" aria-hidden="true"></i></Tab>
                  <Tab><i className="fa fa-phone" aria-hidden="true"></i></Tab>
                </TabList>

                <TabPanel>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                    <textarea
                      value={form.message}
                      onChange={handleChange}
                      name="message"
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <input type="submit" value="Send" />
                  </form>
                </TabPanel>

                <TabPanel>
                  <div className="map-grid">
                    <ul>
                      <li><i className="fa fa-map-marker" aria-hidden="true"></i> 756 Global Place, New York.</li>
                      <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:example@mail.com">mail@example.com</a></li>
                      <li><i className="fa fa-phone" aria-hidden="true"></i>+123 2222 222</li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="contact-info">
                    <ul>
                      <li><i className="fa fa-map-marker" aria-hidden="true"></i> 756 Global Place, New York.</li>
                      <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:example@mail.com">mail@example.com</a></li>
                      <li><i className="fa fa-phone" aria-hidden="true"></i>+123 2222 222</li>
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
