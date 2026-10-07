"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    text: "At EMAS, we believe women are powerful drivers of change. Through knowledge, opportunity, and confidence, we support women in creating meaningful lives, leading with purpose, and inspiring the communities around them.",
    image: "/images/women-leadership.png",
    name: "Brayen Stevano",
    role: "Verified Customer",
  },
  {
    text: "We empower women with the confidence, knowledge, and opportunities they need to grow. Together, we create stronger communities and meaningful possibilities.",
    image: "/images/women-leadership.png",
    name: "Priya Sharma",
    role: "Verified Customer",
  },
  {
    text: "Every woman has the power to create change. EMAS provides the support, guidance, and community to help turn that potential into real progress.",
    image: "/images/women-leadership.png",
    name: "Ananya Kumar",
    role: "Verified Customer",
  },
  {
    text: "Leadership begins with confidence and grows through opportunity. We are committed to helping women discover their strengths and build a better future.",
    image: "/images/women-leadership.png",
    name: "Divya Raj",
    role: "Verified Customer",
  },
  {
    text: "When women grow, families and communities grow with them. EMAS is building a platform where every woman can learn, lead, and thrive.",
    image: "/images/women-leadership.png",
    name: "Meena Devi",
    role: "Verified Customer",
  },
];

export default function WomenLeadership() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="women-leadership-section">

      {/* ================= HEADER ================= */}

      <div className="women-leadership-header">
        <h2>EMAS Women Leadership</h2>

        <p>
          Together, we nurture leadership, celebrate achievements, and
          <br />
          create opportunities for every woman to grow and thrive.
        </p>
      </div>


      {/* ================= SLIDER ================= */}

      <div className="women-leadership-slider">

        {/* LEFT CONTENT */}

        <div className="women-leadership-content">

          <div className="women-quote">
            “
          </div>

          <p className="women-testimonial">
            {slides[currentSlide].text}
          </p>

          {/* DOTS */}

          <div className="women-slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`women-dot ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>


        {/* RIGHT IMAGE */}

        <div className="women-leadership-image">

          <Image
            src={slides[currentSlide].image}
            alt="EMAS Women Leadership"
            fill
            className="women-leadership-image-element"
          />

          {/* IMAGE DETAILS */}

          <div className="women-image-info">
            <h4>{slides[currentSlide].name}</h4>
            <span>{slides[currentSlide].role}</span>
          </div>

        </div>

      </div>

    </section>
  );
}