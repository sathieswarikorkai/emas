"use client";

import Image from "next/image";

export default function SmallSteps() {
  return (
    <section className="small-steps-section">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="small-steps-header">

        <h2>
          Small steps.
          <br />
          <span>Meaningful progress.</span>
        </h2>

        <p>
          An idea grows through curiosity, collaboration and continuous learning
        </p>

      </div>


      {/* =========================================
          TIMELINE
      ========================================= */}

      <div className="small-steps-timeline">

        <div className="small-steps-line"></div>


        {/* STEP 01 */}

        <div className="small-step">

          <div className="small-step-dot"></div>

          <h3>
            The question
          </h3>

          <p>
            A real need
            <br />
            Sparks the idea
          </p>

        </div>


        {/* STEP 02 */}

        <div className="small-step">

          <div className="small-step-dot"></div>

          <h3>
            The first concept
          </h3>

          <p>
            A real need
            <br />
            Sparks the idea
          </p>

        </div>


        {/* STEP 03 */}

        <div className="small-step">

          <div className="small-step-dot"></div>

          <h3>
            Learning together
          </h3>

          <p>
            Conversations
            <br />
            help us improve
          </p>

        </div>


        {/* STEP 04 */}

        <div className="small-step">

          <div className="small-step-dot"></div>

          <h3>
            The next chapter
          </h3>

          <p>
            A clearer vision
            <br />
            for what’s ahead
          </p>

        </div>

      </div>


      {/* =========================================
          STORY CONTENT
      ========================================= */}

      <div className="small-steps-story">

        {/* IMAGE */}

        <div className="small-steps-story-image">

          <Image
            src="/images/story-main.png"
            alt="EMAS product development"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="small-steps-image"
          />

        </div>


        {/* CONTENT */}

        <div className="small-steps-story-content">

          <span>
            The product idea
          </span>

          <h3>
            Our story is still growing.
          </h3>

          <p>
            We want to build a brand that stays curious,
            listens closely and puts people at the heart
            of every decision.
          </p>

        </div>

      </div>


      {/* =========================================
          NEXT CHAPTER CTA
      ========================================= */}

      <section className="next-chapter-section">

        <h2>
          Be part of our next chapter.
        </h2>

        <p>
          Discover the product idea. Meet the people behind it.
        </p>


        {/* CTA BUTTONS */}

        <div className="next-chapter-actions">

          <button
            type="button"
            className="next-chapter-primary"
          >
            <span>
              Explore our products
            </span>

            <span className="next-chapter-arrow">
              ↗
            </span>
          </button>


          <button
            type="button"
            className="next-chapter-link"
          >
            Get in touch
          </button>

        </div>

      </section>

    </section>
  );
}