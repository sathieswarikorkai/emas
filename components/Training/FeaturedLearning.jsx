"use client";

import Image from "next/image";
import { useState } from "react";



const categories = [
  "All",
  "Product",
  "Business",
  "Leadership",
  "Complaints",
  "Media",
];


const learningData = [
  {
    category: "Product",
    title: "Product Knowledge",
    description:
      "Understand our products, features, and how we create value for our customers.",
    icon: "/images/product-knowledge.png",
  },
  {
    category: "Business",
    title: "Business Plan",
    description:
      "Learn the fundamentals of our business plan, goals and growth strategy.",
    icon: "/images/business-plan1.png",
  },
  {
    category: "Leadership",
    title: "Leadership Skills",
    description:
      "Build the mindset and skills to lead, inspire and make an impact.",
    icon: "/images/leadership-skills.png",
  },
];


export default function FeaturedLearning() {

  const [activeCategory, setActiveCategory] = useState("All");

  const [searchText, setSearchText] = useState("");


  const filteredLearning = learningData.filter((item) => {

    const matchesCategory =
      activeCategory === "All" ||
      item.category === activeCategory;


    const search = searchText.toLowerCase().trim();


    const matchesSearch =
      !search ||
      item.title.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search);


    return matchesCategory && matchesSearch;
  });


  return (
    <section className="featured-learning">

      <div className="featured-learning-container">


        {/* =========================================
            HEADING
        ========================================= */}

        <h2 className="featured-learning-title">
          FEATURED LEARNING
        </h2>


        {/* =========================================
            SEARCH + FILTERS
        ========================================= */}

        <div className="featured-learning-toolbar">


          {/* SEARCH */}

          <div className="learning-search">

            <input
              type="text"
              placeholder="Search Training & Knowledge center"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button
              type="button"
              aria-label="Search"
            >
              <span>⌕</span>
            </button>

          </div>


          {/* FILTER BUTTONS */}

          <div className="learning-filters">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "learning-filter active"
                    : "learning-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>

            ))}

          </div>

        </div>


        {/* =========================================
            LEARNING CARDS
        ========================================= */}

        <div className="featured-learning-grid">

          {filteredLearning.length > 0 ? (

            filteredLearning.map((item) => (

              <div
                className="featured-learning-card"
                key={item.title}
              >


                {/* ICON */}

                <div className="featured-learning-icon">

                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={58}
                    height={58}
                  />

                </div>


                {/* TITLE */}

                <h3>
                  {item.title}
                </h3>


                {/* DESCRIPTION */}

                <p>
                  {item.description}
                </p>


                {/* BUTTON */}

                <button
                  type="button"
                  className="learning-more-button"
                >
                  <span>Learn more</span>
                  <strong>→</strong>
                </button>


              </div>

            ))

          ) : (

            <div className="learning-no-results">
              No learning resources found.
            </div>

          )}

        </div>


      </div>




    </section>
  );
}