"use client";

import Image from "next/image";
import { useState } from "react";

const filters = [
  "All events",
  "Workshops",
  "Online",
  "Community",
];

const events = [
  {
    id: 1,
    category: "Workshop",
    filter: "Workshops",
    day: "10",
    month: "OCT",
    title: "Wellness & Nutrition Workshop",
    date: "10 Oct 2026",
    location: "Madurai",
    time: "10:00 AM - 12:00 PM",
    image: "/images/workshop.png",
  },
  {
    id: 2,
    category: "Online session",
    filter: "Online",
    day: "18",
    month: "OCT",
    title: "Mindful Living Session",
    date: "18 Oct 2026",
    location: "online",
    time: "10:00 AM - 12:00 AM",
    image: "/images/event-2.png",
  },
  {
    id: 3,
    category: "Community",
    filter: "Community",
    day: "10",
    month: "NOV",
    title: "Community Wellness Meet",
    date: "10 Nov 2026",
    location: "Madurai",
    time: "10:00 AM - 12:00 PM",
    image: "/images/event-3.png",
  },
];

export default function UpcomingEvents() {
  const [activeFilter, setActiveFilter] = useState("All events");

  const filteredEvents =
    activeFilter === "All events"
      ? events
      : events.filter(
          (event) => event.filter === activeFilter
        );

  const handleRegister = () => {
    const registrationSection =
      document.getElementById("event-registration");

    if (registrationSection) {
      registrationSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="upcoming-events">

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="upcoming-events-container">

        {/* =================================================
            TOP SECTION
        ================================================= */}

        <div className="upcoming-events-header">

          <div className="upcoming-events-heading">

            <span className="upcoming-events-label">
              UPCOMING EVENTS
            </span>

            <h2>
              Find your next experience.
            </h2>

          </div>

          {/* =================================================
              FILTERS
          ================================================= */}

          <div className="upcoming-events-filters">

            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? "upcoming-event-filter active"
                    : "upcoming-event-filter"
                }
                onClick={() =>
                  setActiveFilter(filter)
                }
              >
                {filter}
              </button>
            ))}

          </div>

        </div>

        {/* =================================================
            EVENT CARDS
        ================================================= */}

        <div className="upcoming-events-grid">

          {filteredEvents.length > 0 ? (

            filteredEvents.map((event) => (

              <article
                className="upcoming-event-card"
                key={event.id}
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="upcoming-event-image">

                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="upcoming-event-image-img"
                  />

                  {/* DATE BADGE */}

                  <div className="event-date-badge">

                    <strong>
                      {event.day}
                    </strong>

                    <span>
                      {event.month}
                    </span>

                  </div>

                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="upcoming-event-content">

                  {/* CATEGORY */}

                  <span className="event-category">
                    {event.category}
                  </span>

                  {/* TITLE */}

                  <h3>
                    {event.title}
                  </h3>

                  {/* DATE */}

                  <div className="event-info">

                    <span className="event-info-icon">
                      □
                    </span>

                    <span>
                      {event.date}
                    </span>

                  </div>

                  {/* LOCATION */}

                  <div className="event-info">

                    <span className="event-info-icon">
                      ♧
                    </span>

                    <span>
                      {event.location}
                    </span>

                  </div>

                  {/* TIME */}

                  <div className="event-info">

                    <span className="event-info-icon">
                      ◷
                    </span>

                    <span>
                      {event.time}
                    </span>

                  </div>

                  {/* =================================================
                      REGISTER BUTTON
                  ================================================= */}

                  <button
                    type="button"
                    className="register-event-button"
                    onClick={handleRegister}
                  >

                    <span>
                      Register Now
                    </span>

                    <strong>
                      ↗
                    </strong>

                  </button>

                </div>

              </article>

            ))

          ) : (

            <div className="upcoming-events-empty">
              No events found.
            </div>

          )}

        </div>

      </div>

    </section>
  );
}