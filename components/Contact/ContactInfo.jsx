"use client";

import Image from "next/image";

const ContactInfoSection = () => {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        {/* Left Card */}

        <div className="left-section">
          {/* Pincode Section */}
          <div className="pincode-section">
            <h4>Enter the Pincode to find nearest location</h4>

            <div className="pincode-form">
              <input type="text" placeholder="Enter Pincode" />

              <button>CHECK</button>
            </div>
          </div>

          {/* Office Card */}
          <div className="office-card">
            <div className="office-content">
              <div className="location-icon">
                <Image
                  src="/images/location-icon.png"
                  alt="Location"
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <h3>Our Office</h3>

                <p>
                  info@mymesa.in
                  <br />
                  Chennai, Tamil Nadu
                </p>

                <button>Send a Message →</button>
              </div>
            </div>

            <div className="map-bg">
              <Image src="/images/Office-Map.png" alt="Map" fill />
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="grievance-card">
          <div className="shield-icon">
            <Image
              src="/images/shield-icon.png"
              alt="Grievance Redressal"
              width={60}
              height={50}
            />
          </div>

          <div>
            <h3>Grievance Redressal</h3>

            <p>
              Have an unresolved concern? We're here to listen. Include your
              order ID or previous support reference.
            </p>

            <button>Submit a Grievance →</button>
          </div>

          <div className="leaf-image">
            <Image
              src="/images/Filled-Leaf-Decoration.png"
              alt="Leaf"
              width={140}
              height={140}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
