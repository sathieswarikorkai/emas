"use client";

import Image from "next/image";

export default function UpcomingEvents() {
  const tracks = [
    {
      id: 1,
      image: "/images/wellness-awareness.png",
      title: "Wellness Awareness Day",
      description:
        "Build self-awareness, confidence and a clear personal vision.",
    },
    {
      id: 2,
      image: "/images/career-enterprise.png",
      title: "Career & Enterprise",
      description:
        "Strengthen business thinking, communication and professional skills.",
    },
    {
      id: 3,
      image: "/images/community-leadership.png",
      title: "Community Leadership",
      description:
        "Learn to bring people together and turn ideas into action.",
    },
  ];

  return (
    <section className="upcoming-events">

      {/* =========================================
          SECTION HEADER
      ========================================= */}

      <div className="upcoming-events-header">

        <span className="upcoming-events-label">
          UPCOMING EVENTS
        </span>

        <h2>
          Find your voice.
        </h2>

        <p>
          Support for every stage of your leadership journey
        </p>

      </div>


      {/* =========================================
          TRACK CARDS
      ========================================= */}

      <div className="upcoming-events-grid">

        {tracks.map((track) => (
          <div
            className="event-track-card"
            key={track.id}
          >

            {/* IMAGE */}

            <div className="event-track-image">

              <Image
                src={track.image}
                alt={track.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />

            </div>


            {/* CONTENT */}

            <div className="event-track-content">

              <h3>
                {track.title}
              </h3>

              <p>
                {track.description}
              </p>


              {/* LINK */}

              <button
                type="button"
                className="event-track-link"
              >
                <span>
                  Explore This Track
                </span>

                <span className="event-track-arrow">
                  ↗
                </span>
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}