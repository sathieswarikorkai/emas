"use client";

import Image from "next/image";

export default function EmasStory() {
  return (
    <section className="emas-story">

      {/* =========================================
          LEFT CONTENT
      ========================================= */}

      <div className="emas-story-content">

        <span className="emas-story-label">
          The EMAS Story
        </span>

        <h2>
          It started with
          <br />
          a simple
          <br />
          what if.
        </h2>

        <p>
          A company built around people.A product idea
          <br />
          shaped everyday life.
        </p>

        <button
          type="button"
          className="emas-story-button"
        >
          Discover our beginning
        </button>

      </div>


      {/* =========================================
          RIGHT IMAGE AREA
      ========================================= */}

      <div className="emas-story-images">

        {/* Main image */}

        <div className="emas-story-main-image">

          <Image
            src="/images/story-main.png"
            alt="The EMAS story"
            fill
            className="emas-story-main-img"
          />

        </div>


        {/* Small overlapping image */}

        <div className="emas-story-small-image">

          <Image
            src="/images/story-main1.png"
            alt="EMAS beginning"
            fill
            className="emas-story-small-img"
          />

        </div>

      </div>

    </section>
  );
}