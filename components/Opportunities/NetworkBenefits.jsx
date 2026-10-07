"use client";

export default function NetworkBenefits() {
  return (
    <section className="network-benefits">

      <h2>NETWORK MARKETING BENEFITS</h2>

      <p className="network-subtitle">
        Network marketing allows you to build a business through product
        awareness, customer relationships and team development.
      </p>

      <div className="benefits-grid">

        {/* 01 */}
        <div className="benefit-card">
          <div className="benefit-icon">
            <img src="/images/flexible-journey.png" alt="" />
          </div>

          <h3>Flexible Journey</h3>

          <p>
            Build your business around your
            <br />
            available time and goals.
          </p>
        </div>


        {/* 02 */}
        <div className="benefit-card">
          <div className="benefit-icon">
            <img src="/images/skill-development.png" alt="" />
          </div>

          <h3>Skill Development</h3>

          <p>
            Promote products that have a
            <br />
            clear consumer purpose.
          </p>
        </div>


        {/* 03 */}
        <div className="benefit-card">
          <div className="benefit-icon">
            <img src="/images/community-support.png" alt="" />
          </div>

          <h3>Community Support</h3>

          <p>
            Grow with a supportive network.
          </p>
        </div>


        {/* 04 */}
        <div className="benefit-card">
          <div className="benefit-icon">
            <img src="/images/growth-opportunities.png" alt="" />
          </div>

          <h3>Growth Opportunities</h3>

          <p>
            Develop customers, referrals
            <br />
            and leadership.
          </p>
        </div>

      </div>

    </section>
  );
}