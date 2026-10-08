"use client";

import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-container">
        {/* Left Side */}

        <div className="hero-left-wrapper">
          <div className="hero-left">
            <div className="hero-text">
              <h1>
                Let's talk.
                <br />
                We're listening.
              </h1>

              <p>
                Questions, feedback or a little guidance we're here to help.
              </p>
            </div>

            <div className="hero-image">
              <Image
                src="/images/Headset-Chat.png"
                alt="Customer Support"
                width={260}
                height={260}
                priority
              />
            </div>
          </div>

          {/* Customer Support Card */}
          <div className="support-card">
            <h3>Customer Support</h3>

            <p>For order, returns and product enquiries.</p>

            <div className="support-item">✉ support@3mesa.in</div>

            <div className="support-item">☎ +91 9043222888</div>

            <div className="support-item">🕒 Mon - Sat 9.00 A.M - 6.00 P.M</div>

            <div className="leaf-bg">
              <Image
                src="/images/Outline-Leaf.png"
                alt=""
                width={160}
                height={200}
              />
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="enquiry-card">
          <div className="form-header">
            <div className="icon-circle">✉</div>

            <div>
              <h2>Send An Enquiry</h2>
              <span>Tell how we can help</span>
            </div>
          </div>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name*</label>
                <input type="text" placeholder="Your Name" />
              </div>

              <div className="form-group">
                <label>Email Address*</label>
                <input type="email" placeholder="Your Email" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number*</label>
                <input type="text" placeholder="Your Phone Number" />
              </div>

              <div className="form-group">
                <label>Enquiry Type*</label>
                <select>
                  <option>Select Topic</option>
                  <option>Support</option>
                  <option>Sales</option>
                  <option>Career</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Subject*</label>
              <input type="text" placeholder="What is your enquiry about?" />
            </div>

            <div className="form-group">
              <label>Message*</label>
              <textarea rows="4" placeholder="Write your message here..." />
            </div>

            <div className="checkbox-row">
              <input type="checkbox" />
              <span>I agree to the Privacy Policy</span>
            </div>

            <div className="submit-row">
              <button type="submit">Send a Message →</button>

              <span>*Required Field</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
