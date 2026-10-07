"use client";

import Image from "next/image";


const announcements = [
  {
    id: 1,
    image: "/images/announcement-1.png",
    category: "Member Name",
    title: "New product announcement",
    date: "20 Sep 2026",
  },
  {
    id: 2,
    image: "/images/announcement-2.png",
    category: "Policy Update",
    title: "Important announcement",
    date: "20 Sep 2026",
  },
  {
    id: 3,
    image: "/images/announcement-3.png",
    category: "Member Name",
    title: "Up coming",
    date: "20 Sep 2026",
  },
  {
    id: 4,
    image: "/images/announcement-4.png",
    category: "Maintained",
    title: "New product announcement",
    date: "20 Sep 2026",
  },
];

export default function Announcements() {
  return (
    <section className="announcements-section">

      <div className="announcements-container">

        {/* ================================================
            HEADER
        ================================================= */}

        <div className="announcements-header">

          <span className="announcements-label">
            Approved Achievements
          </span>

          <h2>
            Latest news & announcements.
          </h2>

          <p>
            Announcement previews
          </p>

        </div>


        {/* ================================================
            ANNOUNCEMENT GRID
        ================================================= */}

        <div className="announcements-grid">

          {announcements.map((item) => (

            <article
              className="announcement-card"
              key={item.id}
            >

              {/* IMAGE */}

              <div className="announcement-image">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="announcement-image-img"
                />

              </div>


              {/* CONTENT */}

              <div className="announcement-content">

                <span className="announcement-category">
                  {item.category}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p className="announcement-date">
                  Posted on {item.date}
                </p>

              </div>


              {/* READ UPDATE */}

              <button
                type="button"
                className="announcement-read"
              >
                Read update
              </button>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}