"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

export default function WhyEmas() {

  const router = useRouter();
  return (
    <section className="why-emas-section">

      {/* ================= LEFT CONTENT ================= */}

      <div className="why-emas-content">

        <div className="why-emas-text">

          <span className="why-emas-small-title">
            WHY EMAS
          </span>

          <h2>
            Good products.
            <br />
            Shared possibilities.
          </h2>

          <p>
            Get to know EMAS, our purpose, and the people behind our
            journey. Discover the values that guide us, our commitment to
            wellness, and the vision that shapes everything we do. From
            quality products to meaningful opportunities, we are focused
            on creating experiences that bring value to everyday lives.
            We believe in continuous learning, shared growth, and building
            strong communities through trust and collaboration.
          </p>

       <button
  className="why-emas-button"
  onClick={() => router.push("/About")}
>
  OUR STORY
</button>

        </div>

        {/* Decorative leaves */}

        <div className="why-emas-leaves">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>


      {/* ================= RIGHT IMAGE ================= */}

      <div className="why-emas-image">

        <Image
          src="/images/emas-store.png"
          alt="EMAS Store"
          fill
          priority
          className="why-emas-image-element"
        />

      </div>

    </section>
  );
}