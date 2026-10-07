"use client";

import Image from "next/image";

export default function OpportunitySection() {
  return (
    <section className="opportunity-section">

      <div className="opportunity-image">
        <Image
          src="/images/opportunity-hero.png"
          alt="EMAS Opportunity"
          fill
          priority
          className="opportunity-bg-image"
        />
      </div>

      <div className="opportunity-content">

        <div className="opportunity-title">
          <span>OPPORTUNITY</span>
          <div className="title-line"></div>
        </div>

        <h1>
          More Than A Business
          <br />
          It’s A Healthier Future
        </h1>

        <p>
          At EMAS, we believe everyday wellness begins with nature.
          <br />
          We create thoughtfully crafted products using trusted ingredients
          and simple
          <br className="desktop-break" />
          formulations, designed for everyday living.
        </p>

        <button className="opportunity-button">
          Explore the opportunity
          <span>→</span>
        </button>

      </div>

    </section>
  );
}