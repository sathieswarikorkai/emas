"use client";

import { useState } from "react";

export default function ConversationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry submitted:", formData);
  };

  return (
    <section className="conversation-section">

      <div className="conversation-container">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="conversation-content">

          <div className="conversation-label">
            EVENTS
          </div>

          <h2>
            Your next step starts
            <br />
            with a conversation
          </h2>

          <p className="conversation-description">
            Have a question about program, training or joining?
          </p>


          {/* =====================================
              SUPPORT LINKS
          ===================================== */}

          <div className="conversation-support">

            {/* PROGRAM GUIDANCE */}

            <div className="support-item">

              <div className="support-icon">

                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="10"
                    width="48"
                    height="34"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />

                  <path
                    d="M20 44L25 53L32 44"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="22"
                    cy="27"
                    r="2"
                    fill="currentColor"
                  />

                  <circle
                    cx="32"
                    cy="27"
                    r="2"
                    fill="currentColor"
                  />

                  <circle
                    cx="42"
                    cy="27"
                    r="2"
                    fill="currentColor"
                  />
                </svg>

              </div>

              <span>
                Program guidance
              </span>

            </div>


            {/* MENTOR SUPPORT */}

            <div className="support-item">

              <div className="support-icon">

                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="22"
                    cy="18"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />

                  <circle
                    cx="43"
                    cy="22"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />

                  <path
                    d="M8 48C8 39.7 14.3 34 22 34C29.7 34 36 39.7 36 48"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M35 48C35 41.4 39.7 37 45 37C50.3 37 54 41.4 54 48"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                </svg>

              </div>

              <span>
                Mentor support
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            RIGHT FORM
        ========================================= */}

        <div className="conversation-form-card">

          <form onSubmit={handleSubmit}>

            {/* =====================================
                NAME + EMAIL
            ===================================== */}

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Full Name<span>*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email Address<span>*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your123@Example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* =====================================
                INTEREST
            ===================================== */}

            <div className="form-group">

              <label htmlFor="interest">
                I’m Interested<span>*</span>
              </label>

              <div className="select-wrapper">

                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select The Event
                  </option>

                  <option value="leadership">
                    Women’s Leadership Circle
                  </option>

                  <option value="training">
                    Training Program
                  </option>

                  <option value="mentorship">
                    Mentorship Program
                  </option>

                  <option value="community">
                    Community Events
                  </option>

                </select>

              </div>

            </div>


            {/* =====================================
                MESSAGE
            ===================================== */}

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              />

            </div>


            {/* =====================================
                SUBMIT
            ===================================== */}

            <div className="form-submit-wrapper">

              <button
                type="submit"
                className="conversation-submit"
              >
                <span>
                  Submit enquiry
                </span>

                <span className="submit-arrow">
                  →
                </span>
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}