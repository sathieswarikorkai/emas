"use client";

import Image from "next/image";


const quickAccessData = [
  {
    title: "Product",
    description:
      "Get to know our products, features, benefits, and how they create value for customers.",
    icon: "/images/product.png",
  },
  {
    title: "Business",
    description:
      "Learn about our business model, market, customers, and growth opportunities.",
    icon: "/images/business.png",
  },
  {
    title: "Leadership",
    description:
      "Learn about our business model, market, customers, and growth opportunities.",
    icon: "/images/leadership.png",
  },
  {
    title: "Complaints",
    description:
      "Understand the complaint process, common concerns, and best practices for handling them.",
    icon: "/images/complaints.png",
  },
  {
    title: "Videos & Downloads",
    description:
      "Watch training videos and access useful guides, documents, and downloadable resources.",
    icon: "/images/videos-downloads.png",
  },
];

export default function QuickAccess() {
  return (
    <section className="quick-access">

      <div className="quick-access-container">

        {/* =========================================
            SECTION TITLE
        ========================================= */}

        <h2 className="quick-access-title">
          QUICK ACCESS
        </h2>


        {/* =========================================
            CARDS
        ========================================= */}

        <div className="quick-access-grid">

          {quickAccessData.map((item) => (
            <div
              className="quick-access-card"
              key={item.title}
            >

              {/* ICON */}

              <div className="quick-access-icon">

                <Image
                  src={item.icon}
                  alt={item.title}
                  width={55}
                  height={55}
                  className="quick-access-icon-image"
                />

              </div>


              {/* TITLE */}

              <h3 className="quick-access-card-title">
                {item.title}
              </h3>


              {/* DESCRIPTION */}

              <p className="quick-access-card-description">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}