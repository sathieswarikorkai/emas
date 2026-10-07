"use client";

import Image from "next/image";


export default function TrainingSection() {
  return (
    <section className="training-hero">

      {/* =========================================
          LEFT CONTENT
      ========================================= */}
      <div className="training-content">

        <h1>
          TRAINING &amp;
          <br />
          KNOWLEDGE CENTER
        </h1>

        <h2>
          Learn. Lead. Grow.
        </h2>

        <p>
          Access practical resources, build your skills, and stay updated with
          the latest knowledge to grow in your journey with EMAS.
        </p>

        <button className="training-button">
          <span>Explore Learning</span>
          <strong>→</strong>
        </button>

      </div>


      {/* =========================================
          RIGHT IMAGE
      ========================================= */}
      <div className="training-image-wrapper">

        <Image
          src="/images/training-books.png"
          alt="Training and Knowledge Center"
          fill
          priority
          sizes="55vw"
          className="training-image"
        />

      </div>

    </section>
  );
}