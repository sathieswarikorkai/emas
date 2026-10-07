"use client";


export default function WhoCanJoin() {
  return (
    <section className="who-can-join">

      <h2>WHO CAN JOIN ?</h2>

      <h3>Your Journey Starts With You.</h3>

      <p className="join-subtitle">
        An opportunity for people interested in wellness,
        entrepreneurship and personal growth.
      </p>

      <div className="join-grid">

        <div className="join-item">
          <div className="join-icon">
            <img
              src="/images/students.png"
              alt="Students"
            />
          </div>
          <h4>Students</h4>
        </div>

        <div className="join-item">
          <div className="join-icon">
            <img
              src="/images/working-professionals.png"
              alt="Working Professionals"
            />
          </div>
          <h4>Working Professionals</h4>
        </div>

        <div className="join-item">
          <div className="join-icon">
            <img
              src="/images/homemaker.png"
              alt="Homemaker"
            />
          </div>
          <h4>Homemaker</h4>
        </div>

        <div className="join-item">
          <div className="join-icon">
            <img
              src="/images/entrepreneurs.png"
              alt="Entrepreneurs"
            />
          </div>
          <h4>Entrepreneurs</h4>
        </div>

        <div className="join-item">
          <div className="join-icon">
            <img
              src="/images/students.png"
              alt="Wellness Enthusiasts"
            />
          </div>
          <h4>Wellness Enthusiasts</h4>
        </div>

      </div>

    </section>
  );
}