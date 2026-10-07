"use client";

import Image from "next/image";

const plans = [
  {
    id: 1,
    title: (
      <>
        EQUIVANTA
        <br />
        Binary Business Plan
      </>
    ),
    description:
      "Explore the plan and discover how it works, from eligibility requirements to key benefits and important details. Understand each step clearly and learn how the plan can support your personal and business growth journey with EMAS.",
    image: "/images/growth-plant.png",
  },
  {
    id: 2,
    title: (
      <>
        ASCEND 360
        <br />
        Repurchase & Leadership Plan
      </>
    ),
    description:
      "Discover how the plan works, understand who can participate, and explore the details designed to support your growth journey. Learn about the opportunities available, the steps involved, and the requirements you need to meet. With clear information at every stage, you can understand the plan better and move forward with confidence.",
    image: "/images/success-flag.png",
  },
];

export default function ChoosePath() {
  return (
    <section className="choose-path-section">

      {/* HEADER */}
      <div className="choose-path-header">
        <h2>Choose Your Path to Grow</h2>

        <p>
          experience the perfect blend of luxury, quality,and design in every piece.
        </p>
      </div>

      {/* PLANS */}
      <div className="choose-path-container">

        {plans.map((plan) => (
          <div className="growth-plan-card" key={plan.id}>

            {/* IMAGE */}
            <div className="growth-plan-image">
              <Image
                src={plan.image}
                alt="Growth Plan"
                fill
                className="growth-plan-image-element"
              />
            </div>

            {/* CONTENT */}
            <div className="growth-plan-content">

              <h3>{plan.title}</h3>

              <p>{plan.description}</p>

              <button className="growth-plan-button">
                EXPLORE
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}