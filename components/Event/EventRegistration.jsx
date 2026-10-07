"use client";

export default function EventRegistration() {
  return (
    <section
      id="event-registration"
      className="event-registration"
    >

      {/* =====================================================
          LEFT DECORATIVE LEAF
      ===================================================== */}

      <img
        src="/images/leaves/event-leaf.png"
        alt=""
        className="registration-leaf registration-leaf-left"
      />


      {/* =====================================================
          RIGHT DECORATIVE LEAF
      ===================================================== */}

      <img
        src="/images/event-leaf.png"
        alt=""
        className="registration-leaf registration-leaf-right"
      />


      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="registration-header">

        <span className="registration-label">
          EVENT REGISTRATION
        </span>

        <h2>
          Save your Spot.
        </h2>

        <p>
          Choose an event and take the next step towards a new expierence
        </p>

      </div>


      {/* =====================================================
          FORM CARD
      ===================================================== */}

      <div className="registration-card">

        <form className="registration-form">

          {/* =================================================
              ROW 1
          ================================================= */}

          <div className="registration-row">

            {/* FULL NAME */}

            <div className="registration-field">

              <label htmlFor="fullName">
                Full Name<span>*</span>
              </label>

              <input
                id="fullName"
                type="text"
                placeholder="Your Name"
              />

            </div>


            {/* EMAIL */}

            <div className="registration-field">

              <label htmlFor="email">
                Email Address<span>*</span>
              </label>

              <input
                id="email"
                type="email"
                placeholder="Your123@Example.com"
              />

            </div>

          </div>


          {/* =================================================
              ROW 2
          ================================================= */}

          <div className="registration-row">

            {/* PHONE */}

            <div className="registration-field">

              <label htmlFor="phone">
                Phone Number<span>*</span>
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="Your Phone Number"
              />

            </div>


            {/* EVENT */}

            <div className="registration-field">

              <label htmlFor="event">
                Select Event<span>*</span>
              </label>

              <select
                id="event"
                defaultValue=""
              >

                <option
                  value=""
                  disabled
                >
                  Select The Event
                </option>

                <option value="wellness">
                  Wellness & Nutrition Workshop
                </option>

                <option value="mindful">
                  Mindful Living Session
                </option>

                <option value="community">
                  Community Wellness Meet
                </option>

              </select>

            </div>

          </div>


          {/* =================================================
              SUBJECT
          ================================================= */}

          <div className="registration-field registration-full">

            <label htmlFor="subject">
              Subject<span>*</span>
            </label>

            <input
              id="subject"
              type="text"
              placeholder="What is your enquiry about ?"
            />

          </div>


          {/* =================================================
              MESSAGE
          ================================================= */}

          <div className="registration-field registration-full">

            <label htmlFor="message">

              Message

              <small>
                (Optional)
              </small>

            </label>

            <textarea
              id="message"
              placeholder="Write your message here..."
            />

          </div>


          {/* =================================================
              TERMS
          ================================================= */}

          <label className="registration-checkbox">

            <input
              type="checkbox"
            />

            <span>
              I agree to the term and condition in the event
              Private policy
            </span>

          </label>


          {/* =================================================
              SUBMIT
          ================================================= */}

          <button
            type="submit"
            className="registration-submit"
          >
            Submit registration
          </button>

        </form>

      </div>

    </section>
  );
}