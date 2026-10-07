"use client";

import Image from "next/image";

const journeyOptions = [
  {
    title: "I want to Buy Product",
    description:
      "Promotes Overall Wellness For Better Daily Health And Improved Energy Levels.",
  },
  {
    title: "I want to Build a Business",
    description:
      "Promotes Overall Wellness For Better Daily Health And Improved Energy Levels.",
  },
  {
    title: "I am already member",
    description:
      "Promotes Overall Wellness For Better Daily Health And Improved Energy Levels.",
  },
];

export default function ChooseJourney() {
  return (
    <section className="choose-journey-section">

      {/* ================= HEADER ================= */}

      <div className="choose-journey-header">

        <div className="choose-journey-title">
          <h2>Choose Your Journey</h2>
        </div>

        <div className="choose-journey-intro">

          <p>
            Discover the right path for your everyday wellness. Whether
            you’re looking to care for your family, support your personal
            well-being, or embrace a more natural lifestyle, EMAS brings
            thoughtfully crafted herbal products to suit every journey.
          </p>

          <button className="journey-learn-button">
            LEARN MORE
          </button>

        </div>

      </div>


      {/* ================= FEATURE CARDS ================= */}

      <div className="journey-feature-grid">

        {/* LEFT IMAGE */}

        <div className="journey-feature-card journey-product-card">

          <Image
            src="/images/journey-product.png"
            alt="EMAS Herbal Product"
            fill
            className="journey-feature-image"
          />

        </div>


        {/* RIGHT IMAGE + OVERLAY */}

        <div className="journey-feature-card journey-jellybee-card">

          <Image
            src="/images/jellybee.png"
            alt="Jellybee"
            fill
            className="journey-feature-image"
          />

          <div className="journey-overlay">

            <span className="journey-overlay-small">
              JELLYBEE
            </span>

            <h3>
              Promising Results by Experience.
              <br />
              Clean &amp; Trustworthy
            </h3>

            <p>
              Olive keeps your skin soft, smooth, and hydrated.
              Fights signs of aging. Repairs sunburnt skin.
            </p>

            <button className="journey-start-button">
              Get Started
            </button>

          </div>

        </div>

      </div>


      {/* ================= OPTIONS ================= */}

      <div className="journey-options-grid">

        {journeyOptions.map((option, index) => (

          <div
            className="journey-option-card"
            key={index}
          >

            <div className="journey-option-icon">
              🌾
            </div>

            <h3>
              {option.title}
            </h3>

            <p>
              {option.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}