"use client";



export default function PlanHero() {
  return (
    <section className="plan-hero">

      <div className="plan-hero-image">
        <img
          src="/images/business-plan.png"
          alt="Business Plan"
        />
      </div>

      <div className="plan-hero-content">

        <div className="plan-text">

          <h2>Business Plan</h2>

          <h1>Plan. Build. Grow.</h1>

          <p>
            Explore business opportunities, access practical resources,
            and gain the knowledge and insights needed to strengthen your
            business and achieve sustainable growth with EMAS.
          </p>

          <button>
            <span>Explore Plan</span>
            <b>→</b>
          </button>

        </div>

      </div>

    </section>
  );
}