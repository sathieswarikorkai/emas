"use client";

import Image from "next/image";

export default function ProductIdea() {
  return (
    <section className="product-idea-section">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="product-idea-header">

        <span className="product-idea-label">
          The product idea
        </span>

        <h2>
          A thoughtful idea,
          <br />
          <span>Shaped around everyday life.</span>
        </h2>

      </div>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="product-idea-content">

        {/* LEFT IMAGE */}

        <div className="product-idea-image-wrapper">

          <Image
            src="/images/product-idea.png"
            alt="The idea behind EMAS products"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="product-idea-image"
          />

        </div>


        {/* RIGHT CONTENT */}

        <div className="product-idea-info">

          <h3>
            The idea behind our product
          </h3>

          <p className="product-idea-description">
            Bring simplicity, care and thoughtful design into
            <br />
            one everyday experience
          </p>


          {/* =====================================
              STEP 01
          ===================================== */}

          <div className="product-idea-step">

            <div className="product-step-number">
              01
            </div>

            <div className="product-step-content">

              <h4>
                Listen first
              </h4>

              <p>
                Understand everyday routines
              </p>

            </div>

          </div>


          {/* =====================================
              STEP 02
          ===================================== */}

          <div className="product-idea-step">

            <div className="product-step-number">
              02
            </div>

            <div className="product-step-content">

              <h4>
                Shape the idea
              </h4>

              <p>
                Explore useful, practical possibilities.
              </p>

            </div>

          </div>


          {/* =====================================
              STEP 03
          ===================================== */}

          <div className="product-idea-step">

            <div className="product-step-number">
              03
            </div>

            <div className="product-step-content">

              <h4>
                Refine with care
              </h4>

              <p>
                Learn from feedback and improve.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}