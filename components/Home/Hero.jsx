"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100vh",
        background: "#061b13",
        color: "white",
        overflow: "hidden",
      }}
    >

   


      {/* ================= HERO ================= */}
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div
          className="hero-content"
          style={{
            width: "60%",
          }}
        >

          <h1
            style={{
              fontSize: "60px",
              lineHeight: "1.15",
              fontWeight: "800",
              letterSpacing: "-1px",
              marginBottom: "25px",
              whiteSpace: "nowrap",
            }}
          >
            TURN YOUR DREAMS
            <br />
            INTO TOMORROW’S REALITY
          </h1>

          <p
            style={{
              maxWidth: "700px",
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "35px",
            }}
          >
            With the right opportunities and thoughtful financial
            choices, every step today can bring you closer to the
            future you imagine.
          </p>

          <div className="hero-buttons">

            <button className="primary-button">
              EXPLORE PRODUCT
            </button>

            <button className="secondary-button">
              JOIN ON OPPORTUNITY
            </button>

          </div>

        </div>


        {/* RIGHT PRODUCT IMAGE */}
        <div
          className="hero-product"
          style={{
            right: "0%",
            bottom: "50px",
            width: "45%",
          }}
        >

          <Image
            src="/images/product-bottle.png"
            alt="EMAS Product"
            width={550}
            height={480}
            className="product-image"
            priority
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />

        </div>

      </div>

    </section>
  );
}