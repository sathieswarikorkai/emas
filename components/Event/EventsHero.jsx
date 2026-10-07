"use client";

import Image from "next/image";


export default function EventsHero() {
  return (
    <section className="events-hero">

      {/* =================================================
          HERO CONTENT
      ================================================= */}

      <div className="events-hero-content">

        <h1>
          <span>Good moments.</span>
          <span>Better together.</span>
        </h1>

        <p>
          Discover workshop, wellness session and community experience with EMAS.
        </p>


        {/* =================================================
            BUTTONS
        ================================================= */}

        <div className="events-hero-buttons">

          <button
            type="button"
            className="events-primary-button"
          >
            <span>Explore upcoming events</span>
            <strong>→</strong>
          </button>


          <button
            type="button"
            className="events-secondary-button"
          >
            <span>View passed event</span>
          </button>

        </div>

      </div>


      {/* =================================================
          FEATURED EVENT IMAGE
      ================================================= */}

      <div className="featured-event-image-wrapper">

        <Image
          src="/images/workshop.png"
          alt="Wellness and Nutrition Workshop"
          fill
          priority
          className="featured-event-image"
        />


        {/* =================================================
            FLOATING EVENT CARD
        ================================================= */}

        <div className="featured-event-card">

          <div className="featured-event-details">

            <span className="featured-event-label">
              NEXT UP
            </span>

            <h3>
              Wellness &amp; Nutrition Workshop
            </h3>

            <p>
              10 Oct 2026 - Madurai
            </p>

          </div>


          <button
            type="button"
            className="featured-event-arrow"
            aria-label="View event"
          >
            ↓
          </button>

        </div>

      </div>



    </section>
  );
}