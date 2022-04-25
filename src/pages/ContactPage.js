import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <main>
        <h1>Contact Us</h1>
        <div className="contact-main-content container-fluid">
          <div className="row">
            <div className="col">
              <h3>Mailing Address</h3>
            </div>
            <div className="col">
              <h3>Email Address</h3>
            </div>
            <div className="col">
              <h3>Phone Number</h3>
            </div>
            <div className="row">
              <div className="col">
                <h3>Share Your Thoughts</h3>
                <div>
                  <textarea />
                  <button>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
