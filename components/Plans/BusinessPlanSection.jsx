"use client";

export default function BusinessPlanSection() {
  const steps = [
    {
      number: "01.",
      title: "Product",
      text: "Start with genuine product value.",
      image: "/images/product-icon.png",
    },
    {
      number: "02.",
      title: "Customer",
      text: "Build relationships through product awareness.",
      image: "/images/customer-icon.png",
    },
    {
      number: "03.",
      title: "Referral",
      text: "Introduce the opportunity to people who are interested.",
      image: "/images/referral-icon.png",
    },
    {
      number: "04.",
      title: "Team",
      text: "Develop and support your network.",
      image: "/images/team-icon.png",
    },
    {
      number: "05.",
      title: "Performance",
      text: "Progress according to the applicable EMAS business.",
      image: "/images/performance-icon.png",
    },
  ];

  return (
    <section className="business-plan-section">

      {/* INTRO */}
      <div className="business-plan-intro">
        <h2>BUSINESS PLAN — 1</h2>

        <h1>Understand. Build. Grow.</h1>

        <p>
          A simple and transparent framework designed to help you understand
          the EMAS business journey.
        </p>

        <button className="business-plan-btn">
          Explore the Business Plan
          <span>→</span>
        </button>
      </div>

      {/* HOW PLAN WORKS */}
      <div className="plan-works">
        <h2>How the Plan Works</h2>

        <div className="plan-steps">
          {steps.map((step, index) => (
            <div className="plan-step-wrapper" key={step.number}>

              <div className="plan-step">
                <div className="plan-step-icon">
                  <img src={step.image} alt={step.title} />
                </div>

                <h3>
                  {step.number} {step.title}
                </h3>

                <p>{step.text}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="plan-divider"></div>
              )}

            </div>
          ))}
        </div>
      </div>


    </section>
  );
}