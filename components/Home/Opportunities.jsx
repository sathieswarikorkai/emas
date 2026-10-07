"use client";

import Image from "next/image";

export default function Opportunities() {
  return (
    <section className="opportunities-section">

      {/* LEFT IMAGE */}
      <div className="opportunities-image">
        <Image
          src="/images/opportunities.png"
          alt="EMAS Opportunities"
          fill
          priority
          className="opportunities-image-element"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="opportunities-content">

        <span className="opportunities-small-title">
          OPPORTUNITIES
        </span>

        <h2>
          A Real Opportunity
          <br />
          For A Better Tomorrow
        </h2>

        <p>
          Get to know EMAS, our purpose, and the people behind our journey.
          Discover the values, vision, and commitment that shape who we are and
          what we stand for. From wellness-focused products to meaningful
          opportunities, we believe in creating a community where people can
          learn, grow, and succeed together. Explore our story and see how EMAS
          is building a better tomorrow, one step at a time.
        </p>

        <button className="opportunities-button">
          OUR STORY
        </button>

      </div>

    </section>
  );
}