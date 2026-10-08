"use client";

import Image from "next/image";

export default function SuccessStories() {
  const stories = [
    {
      image: "/images/success-story-1.png",
      title: "From an idea to a new beginning",
      description:
        "Discover a journey of learning, growth and new possibilities.",
    },
    {
      image: "/images/success-story-2.png",
      title: "The confidence to step forward",
      description:
        "Discover a journey of learning, growth and new possibilities.",
    },
  ];

  return (
    <section className="success-stories-section">

      <div className="success-stories-container">

        {/* =========================================
            SECTION LABEL
        ========================================= */}

        <div className="success-stories-label">
          SUCCESS STORIES
        </div>


        {/* =========================================
            HEADING
        ========================================= */}

        <h2 className="success-stories-heading">
          Her journey. your inspiration.
        </h2>


        {/* =========================================
            STORIES GRID
        ========================================= */}

        <div className="success-stories-grid">

          {stories.map((story, index) => (

            <article
              className="success-story-card"
              key={index}
            >

              {/* =====================================
                  IMAGE
              ===================================== */}

              <div className="success-story-image">

                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="success-story-image-img"
                />

              </div>


              {/* =====================================
                  CONTENT
              ===================================== */}

              <div className="success-story-content">

                <h3>
                  {story.title}
                </h3>

                <p>
                  {story.description}
                </p>


                {/* =================================
                    LINK
                ================================= */}

                <button
                  type="button"
                  className="success-story-link"
                >
                  <span>
                    Explore This Track
                  </span>

                  <span className="success-story-arrow">
                    ↗
                  </span>
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}