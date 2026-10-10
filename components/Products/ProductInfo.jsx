"use client";

import Image from "next/image";
import { useState } from "react";

const ProductInfo = () => {
  const [selectedSize, setSelectedSize] = useState("100ML");
  const [selectedPack, setSelectedPack] = useState(1);
  const [pincode, setPincode] = useState("");

  const packOptions = [
    {
      id: 1,
      title: "1 Bottle",
      price: "₹799",
      image: "/images/bottle1.png",
    },
    {
      id: 2,
      title: "2 Bottle",
      price: "₹1,499",
      oldPrice: "₹1,700 each",
      save: "Save 6%",
      image: "/images/bottle2.png",
    },
    {
      id: 3,
      title: "3 Bottle",
      price: "₹2,099",
      oldPrice: "₹700 each",
      save: "Save 6%",
      image: "/images/bottle3.png",
    },
  ];

  return (
    <div className="product-info">
      {/* Breadcrumb */}
      <div className="product-breadcrumb">
        <span>Home</span>
        <span>›</span>
        <span>Women`s Wellness</span>
        <span>›</span>
        <span>Pinky Pro +</span>
      </div>

      {/* Product Name */}
      <h1>Pinky Pro+ Advance Capsule</h1>

      <p className="product-subtitle">
        Active Special for Female Immunity Care
      </p>

      {/* Rating */}
      <div className="product-rating">
        <strong>4.8</strong>

        <div className="stars">
          ★★★★★
        </div>

        <span>128 Reviews</span>
      </div>

      {/* Benefits */}
      <div className="product-tags">
        <span className="pink-tag">
          Female Immunity
        </span>

        <span className="green-tag">
          Intimate Wellness
        </span>

        <span className="blue-tag">
          pH Balance
        </span>

        <span className="green-tag">
          Natural Botanicals
        </span>
      </div>

      {/* Size */}
      <div className="product-section">
        <h3>Size</h3>

        <div className="size-options">
          {["100ML", "150ML", "200ML"].map((size) => (
            <button
              key={size}
              className={
                selectedSize === size ? "selected-size" : ""
              }
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Pack */}
      <div className="product-section">
        <h3>Select Pack</h3>

        <div className="pack-options">
          {packOptions.map((pack) => (
            <div
              key={pack.id}
              className={`pack-card ${
                selectedPack === pack.id ? "selected-pack" : ""
              }`}
              onClick={() => setSelectedPack(pack.id)}
            >

              <div className="pack-image">
                <Image
                  src={pack.image}
                  alt={pack.title}
                  width={100}
                  height={80}
                />
              </div>

           
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Checker */}
      <div className="delivery-section">
        <h3>Get lightning-fast delivery</h3>

        <div className="delivery-form">
          <input
            type="text"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />

          <button type="button">
            CHECK
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="product-actions">
        <button className="add-cart-btn">
          🛒 ADD TO CART
        </button>

        <button className="buy-now-btn">
          ⚡ BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;