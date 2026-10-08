"use client";

import { useState } from "react";

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      title: "Women’s Leadership Circle",
      description: "Community conversation - Online",
      date: "Dates announced soon",
    },
    {
      title: "Women’s Leadership Circle",
      description: "Community conversation - Online",
      date: "Dates announced soon",
    },
  ];

  const pastEvents = [
    {
      title: "Women’s Leadership Circle",
      description: "Community conversation - Online",
      date: "Completed",
    },
    {
      title: "Women’s Leadership Circle",
      description: "Community conversation - Online",
      date: "Completed",
    },
  ];

  const events =
    activeTab === "upcoming"
      ? upcomingEvents
      : pastEvents;

  return (
    <section className="events-section">

      <div className="events-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="events-header">

          <div className="events-heading-area">

            <div className="events-label">
              EVENTS
            </div>

            <h2>
              Connect. Learn. Be inspired.
            </h2>

          </div>


          {/* =====================================
              TAB SWITCHER
          ===================================== */}

          <div className="events-tabs">

            <button
              type="button"
              className={
                activeTab === "upcoming"
                  ? "events-tab active"
                  : "events-tab"
              }
              onClick={() =>
                setActiveTab("upcoming")
              }
            >
              Upcoming
            </button>

            <button
              type="button"
              className={
                activeTab === "past"
                  ? "events-tab active"
                  : "events-tab"
              }
              onClick={() =>
                setActiveTab("past")
              }
            >
              Past events
            </button>

          </div>

        </div>


        {/* =========================================
            EVENTS LIST
        ========================================= */}

        <div className="events-list">

          {events.map((event, index) => (

            <div
              className="event-row"
              key={index}
            >

              {/* =================================
                  CALENDAR ICON
              ================================= */}

              <div className="event-calendar">

                <div className="calendar-top">

                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>

                </div>

                <div className="calendar-grid">

                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>

                </div>

              </div>


              {/* =================================
                  EVENT INFO
              ================================= */}

              <div className="event-info">

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>

              </div>


              {/* =================================
                  DATE
              ================================= */}

              <div className="event-date">

                {event.date}

              </div>


              {/* =================================
                  REGISTER BUTTON
              ================================= */}

              <button
                type="button"
                className="event-register-button"
              >
                Register interest
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}