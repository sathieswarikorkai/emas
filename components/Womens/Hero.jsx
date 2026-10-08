"use client";

import Image from "next/image";


export default function Hero() {
  return (
    <section className="home-hero">

      {/* =========================================
          LEFT CONTENT
      ========================================= */}

      <div className="home-hero-content">

        <div className="home-hero-text">

          <h1>
            <span className="hero-black">
              Find your voice.
            </span>

            <span className="hero-green">
              Lead with purpose
            </span>

            <span className="hero-black">
              Grow together.
            </span>
          </h1>

          <p>
            Build the confidence, skills and connections to
            shape your next chapter
          </p>

          {/* BUTTONS */}

          <div className="home-hero-buttons">

            <button
              type="button"
              className="hero-primary-button"
            >
              Explore upcoming events
            </button>

            <button
              type="button"
              className="hero-secondary-button"
            >
              See how it work
            </button>

          </div>

        </div>

      </div>


      {/* =========================================
          RIGHT IMAGE
      ========================================= */}

      <div className="home-hero-image">

        <Image
          src="/images/hero-image.png"
          alt="Women growing together"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="home-hero-image-img"
        />

      </div>


      {/* =========================================
          DECORATIVE LEAF
      ========================================= */}

      <img
        src="/images/leaves/hero-leaf.png"
        alt=""
        className="home-hero-leaf"
      />

    </section>
  );
}