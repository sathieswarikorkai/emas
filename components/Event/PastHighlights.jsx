"use client";

import Image from "next/image";


const highlights = [
  {
    id: 1,
    title: "Wellness Awareness Day",
    date: "6 Oct 2026",
    location: "Madurai",
    image: "/images/past1.png",
  },
  {
    id: 2,
    title: "Health Habits Workshop",
    date: "10 Aug 2026",
    location: "Madurai",
    image: "/images/past2.png",
  },
];

export default function PastHighlights() {
  return (
    <section className="past-highlights">

      {/* =====================================================
          CURVED TOP
      ===================================================== */}

      <div className="past-highlights-top-curve"></div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="past-highlights-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="past-highlights-header">

          <div className="past-highlights-heading">

            <span className="past-highlights-label">
              UPCOMING EVENTS
            </span>

            <h2>
              A little look back.
            </h2>

            <p>
              Shared experiences Lasting connection
            </p>

          </div>


          <button
            type="button"
            className="view-highlights-button"
          >
            View all highlights
          </button>

        </div>


        {/* =================================================
            HIGHLIGHT CARDS
        ================================================= */}

        <div className="past-highlights-grid">

          {highlights.map((item) => (

            <article
              className="past-highlight-card"
              key={item.id}
            >

              {/* IMAGE */}

              <div className="past-highlight-image">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="past-highlight-image-img"
                />

              </div>


              {/* CONTENT */}

              <div className="past-highlight-content">

                <h3>
                  {item.title}
                </h3>

                <p className="past-highlight-date">
                  {item.date} - {item.location}
                </p>

                <button
                  type="button"
                  className="past-highlight-register"
                >
                  Register Now
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}