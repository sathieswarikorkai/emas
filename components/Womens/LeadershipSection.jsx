"use client";

import Image from "next/image";
import { useState } from "react";

export default function LeadershipSection() {
  const [openItem, setOpenItem] = useState(null);

  const skills = [
    {
      number: "01",
      title: "Confidence & Communication",
    },
    {
      number: "02",
      title: "Decision-making & teamwork",
    },
    {
      number: "03",
      title: "Business & digital skills",
    },
    {
      number: "04",
      title: "Your leadership action plan",
    },
  ];

  return (
    <section className="leadership-section">

      {/* =========================================
          SECTION CONTAINER
      ========================================= */}

      <div className="leadership-container">

        {/* =========================================
            HEADING
        ========================================= */}

        <h2 className="leadership-heading">
          Find your voice.
        </h2>


        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div className="leadership-content">

          {/* =====================================
              LEFT IMAGE
          ===================================== */}

          <div className="leadership-image-wrapper">

            <Image
              src="/images/leadership-section.png"
              alt="Women developing leadership skills"
              fill
              className="leadership-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

          </div>


          {/* =====================================
              RIGHT CONTENT
          ===================================== */}

          <div className="leadership-right">

            {/* =================================
                SKILLS LIST
            ================================= */}

            <div className="leadership-skills">

              {skills.map((item, index) => (

                <div
                  className={`leadership-item ${
                    openItem === index
                      ? "leadership-item-open"
                      : ""
                  }`}
                  key={item.number}
                >

                  <button
                    type="button"
                    className="leadership-item-button"
                    onClick={() =>
                      setOpenItem(
                        openItem === index ? null : index
                      )
                    }
                  >

                    <span className="leadership-number">
                      {item.number}
                    </span>

                    <span className="leadership-title">
                      {item.title}
                    </span>

                    <span className="leadership-plus">
                      +
                    </span>

                  </button>


                  {openItem === index && (
                    <div className="leadership-item-description">
                      Build practical skills and confidence
                      through guided learning, activities and
                      real-world experiences.
                    </div>
                  )}

                </div>

              ))}

            </div>


            {/* =================================
                FEATURES
            ================================= */}

            <div className="leadership-features">

              {/* LIVE WORKSHOPS */}

              <div className="leadership-feature">

                <div className="feature-icon workshop-icon">
                  <span></span>
                </div>

                <span>
                  Live Workshops
                </span>

              </div>


              {/* PRACTICE SESSIONS */}

              <div className="leadership-feature">

                <div className="feature-icon practice-icon">
                  <span></span>
                </div>

                <span>
                  Practice sessions
                </span>

              </div>


              {/* MENTOR CHECK */}

              <div className="leadership-feature">

                <div className="feature-icon mentor-icon">
                  ✓
                </div>

                <span>
                  Mentor check
                </span>

              </div>

            </div>


            {/* =================================
                BUTTON
            ================================= */}

            <button
              type="button"
              className="leadership-button"
            >
              Explore upcoming events
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}