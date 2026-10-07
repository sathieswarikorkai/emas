"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "All",
  "Health",
  "Herbal",
  "Beverages",
  "Honey",
  "Edible Oils",
  "Milk",
  "Natural",
  "Organic",
  "Grains",
];

const products = [
  {
    id: 1,
    name: "Herbal Tablet Supplements",
    category: "Health",
    image: "/images/triphala.png",
    description:
      "Discover natural wellness solutions designed to support your everyday needs. Find the right path for your health, lifestyle, and well-being.",
  },

  {
    id: 2,
    name: "Herbal Tablet Supplements",
    category: "Edible Oils",
    image: "/images/oils.png",
    description:
      "Discover natural wellness solutions designed to support your everyday needs. Find the right path for your health, lifestyle, and well-being.",
  },

  {
    id: 3,
    name: "Herbal Tablet Supplements",
    category: "Honey",
    image: "/images/honey.png",
    description:
      "Discover natural wellness solutions designed to support your everyday needs. Find the right path for your health, lifestyle, and well-being.",
  },

  {
    id: 4,
    name: "Herbal Tablet Supplements",
    category: "Herbal",
    image: "/images/pink-product.png",
    description:
      "Discover natural wellness solutions designed to support your everyday needs. Find the right path for your health, lifestyle, and well-being.",
  },

  {
    id: 5,
    name: "Herbal Tablet Supplements",
    category: "Natural",
    image: "/images/triphala.png",
    description:
      "Discover natural wellness solutions designed to support your everyday needs. Find the right path for your health, lifestyle, and well-being.",
  },

  {
    id: 6,
    name: "Herbal Tablet Supplements",
    category: "Edible Oils",
    image: "/images/oils.png",
    description:
      "Discover natural wellness solutions designed to support your everyday needs. Find the right path for your health, lifestyle, and well-being.",
  },


];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section className="products-section" id="products">

      {/* ================= HEADER ================= */}

      <div className="products-header">

        <h2>OUR PRODUCTS</h2>

        <p>
          experience the perfect blend of luxury, quality,and design in every piece.
        </p>

      </div>


      {/* ================= CATEGORIES ================= */}

      <div className="category-wrapper">

        <div className="category-list">

          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}

        </div>

      </div>


      {/* ================= PRODUCT GRID ================= */}

      <div className="products-grid">

        {filteredProducts.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            {/* IMAGE */}

            <div className="product-image-box">

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="product-card-image"
              />

            </div>


            {/* ================= SLIDING GREEN PANEL ================= */}

            <div className="product-slide-panel">

              <div className="product-slide-content">

                <h2>
                  {product.name}
                </h2>

                <h3>
                  {product.description}
                </h3>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* ================= VIEW ALL ================= */}

      <div className="products-button-wrapper">

        <button className="view-products-button">
          VIEW ALL PRODUCT
        </button>

      </div>

    </section>
  );
}