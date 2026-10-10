"use client";

import Image from "next/image";
import { useState } from "react";

const ProductGallery = () => {
  const images = [
    "/images/product1.png",
    "/images/product2.png",
    "/images/product3.png",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-gallery">
      {/* Main Product Image */}
      <div className="main-image">
        <Image
          src="/images/product-thumbnail.png"
          alt="Product"
          fill
          priority
          className="main-product-img"
        />
      </div>

      <div className="thumbnail-list">
        {images.map((image, index) => (
          <button
            key={index}
            className={`thumbnail ${selectedImage === image ? "active" : ""}`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Product ${index + 1}`}
              width={80}
              height={80}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
