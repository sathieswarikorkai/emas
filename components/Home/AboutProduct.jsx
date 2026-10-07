"use client";

import Image from "next/image";

const productPoints = [
  {
    number: "01",
    title: "Quality Product People Need",
    description: "Explore exclusive properties tailored to your need",
  },
  {
    number: "02",
    title: "Earn Extra Income Build Your Future",
    description: "Get expert guidance from our global team",
  },
  {
    number: "03",
    title: "Guidance & Training",
    description: "Enjoy a secure purchasing process",
  },
  {
    number: "04",
    title: "Be a Part of a Growing Community",
    description: "Enjoy a secure purchasing process",
  },
];

export default function AboutProduct() {
  return (
    <section className="about-product-section">

      <div className="about-product-container">

        {/* ================= LEFT IMAGE ================= */}

        <div className="about-product-image">

          <Image
            src="/images/about-product.png"
            alt="About EMAS Product"
            fill
            priority
            className="about-product-image-element"
          />

        </div>


        {/* ================= RIGHT CONTENT ================= */}

        <div className="about-product-content">

          {/* Small heading */}

          <div className="about-product-label">
            <span>⋮⋮</span>
            ABOUT THE PRODUCT
          </div>


          {/* Main heading */}

          <h2>
            Real Opportunity For a
            <br />
            Better Tomorrow
          </h2>


          {/* Description */}

          <p className="about-product-description">
            Our herbal products are made from carefully selected natural
            ingredients, processed with modern technology to preserve their
            quality and efficacy.
          </p>


          {/* Points */}

          <div className="about-product-points">

            {productPoints.map((item) => (

              <div
                className="about-product-point"
                key={item.number}
              >

                {/* Number */}

                <div className="about-product-number">
                  {item.number}
                </div>


                {/* Text */}

                <div className="about-product-point-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}