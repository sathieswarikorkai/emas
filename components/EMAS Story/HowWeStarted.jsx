"use client";

import Image from "next/image";

export default function HowWeStarted() {
  return (
    <section className="how-started-section">

      {/* =========================================
          HERO IMAGE
      ========================================= */}

      <div className="how-started-image">

        <Image
          src="/images/how-we-started.png"
          alt="How EMAS started"
          fill
          priority
          sizes="100vw"
          className="how-started-image-img"
        />

      </div>


      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="how-started-content">

        <h2>
          How we{" "}
          <span>started</span>
        </h2>


        <p>
          A simple belief brought us together: everyday welling should
          <br />
          feel more approachable.
        </p>


        <p>
          We began by listening, asking question and exploring what
          <br />
          people needed in their daily routines
        </p>


        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <div className="how-started-message">

          <span className="how-started-line"></span>

          <strong>
            People first. Purpose always.
          </strong>

        </div>

      </div>

    </section>
  );
}