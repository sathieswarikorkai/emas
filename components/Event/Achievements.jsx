"use client";

import Image from "next/image";


const achievements = [
  {
    id: 1,
    image: "/images/member-1.png",
    name: "Member Name",
    rank: "Approved rank title",
    date: "20 Sep 2026",
  },
  {
    id: 2,
    image: "/images/member-2.png",
    name: "Member Name",
    rank: "Approved rank title",
    date: "20 Sep 2026",
  },
];

export default function Achievements() {
  return (
    <section className="achievements-section">

      {/* =====================================================
          ACHIEVEMENTS CONTAINER
      ===================================================== */}

      <div className="achievements-container">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="achievements-header">

          <span className="achievements-label">
            Approved Achievements
          </span>

          <h2>
            Celebrating our community
          </h2>

          <p>
            Recognition previews
          </p>

        </div>


        {/* ===================================================
            ACHIEVEMENT CARDS
        =================================================== */}

        <div className="achievements-grid">

          {achievements.map((achievement) => (

            <article
              className="achievement-card"
              key={achievement.id}
            >

              {/* =================================================
                  MEMBER IMAGE
              ================================================= */}

              <div className="achievement-member-image">

                <Image
                  src={achievement.image}
                  alt={achievement.name}
                  fill
                  className="achievement-member-img"
                />

              </div>


              {/* =================================================
                  ACHIEVEMENT CONTENT
              ================================================= */}

              <div className="achievement-content">

                {/* MEDAL */}

                <div className="achievement-medal">

                  <div className="medal-ribbon">
                    <span></span>
                    <span></span>
                  </div>

                  <div className="medal-circle">
                    <span>★</span>
                  </div>

                </div>


                {/* DETAILS */}

                <div className="achievement-details">

                  <div className="achievement-status">
                    Submit registration
                    <span>✓</span>
                  </div>


                  <span className="achievement-rank-label">
                    Rank achievement
                  </span>


                  <h3>
                    {achievement.name}
                  </h3>


                  <p className="achievement-rank">
                    {achievement.rank}
                  </p>


                  <div className="achievement-date">

                    <span className="achievement-calendar">
                      ▣
                    </span>

                    <strong>
                      Achieved on {achievement.date}
                    </strong>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <div className="achievement-cta">

          <h3>
            Your experience can inspire.
          </h3>

          <p>
            Share your story. Testimonials are reviewed and approved
            before published
          </p>

        </div>

      </div>

    </section>
  );
}