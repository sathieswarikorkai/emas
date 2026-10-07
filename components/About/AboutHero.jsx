"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="about-hero">

      {/* Background Image */}
      <div className="about-hero-image">
        <Image
          src="/images/about-products.png"
          alt="EMAS Products"
          fill
          priority
          className="about-bg-image"
        />
      </div>

      {/* Left Content */}
      <div className="about-hero-content">

        <div className="about-small-title">
          ABOUT EMAS
          <span></span>
        </div>

        <h1>
          <span>The Goodness</span>
          <span>Of Nature</span>
        </h1>

        <p>
          At EMAS, we believe everyday wellness begins with nature.
          We create thoughtfully crafted products using trusted
          ingredients and simple formulations, designed to fit
          seamlessly into everyday living. With a focus on quality,
          care, and consistency.
        </p>

        <button className="about-story-button">
          Our Story
          <span>→</span>
        </button>

      </div>

    </section>
  );
}