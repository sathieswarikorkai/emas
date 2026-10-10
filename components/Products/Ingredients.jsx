
"use client";
import Image from "next/image";

const benefits = [
  {
    image: "/images/free-shipping.png",
    title: "Free Shipping",
    subtitle: "On orders above ₹999",
  },
  {
    image: "/images/genuine.png",
    title: "100% Genuine",
    subtitle: "Quality You Can Trust",
  },
  {
    image: "/images/secure-payment.png",
    title: "Secure Payments",
    subtitle: "Multiple Payment Options",
  },
  {
    image: "/images/support.png",
    title: "Dedicated Support",
    subtitle: "We're Always Here",
  },
];

const ingredients = [
  {
    name: "Ashwagandha",
    description: "Stress Relief & Hormonal Balance",
    image: "/images/ingredients-1.png",
  },
  {
    name: "Shatavari",
    description: "Female Reproductive Health",
    image: "/images/ingredients-2.png",
  },
  {
    name: "Manjistha",
    description: "Blood Purification & Skin Health",
    image: "/images/ingredients-3.png",
  },
  {
    name: "Lodhra",
    description: "Hormonal Health & Uterine Wellness",
    image: "/images/ingredients-4.png",
  },
  {
    name: "Amla",
    description: "Immunity Boost & Antioxidant",
    image: "/images/ingredients-5.png",
  },
  {
    name: "Tulsi",
    description: "Respiratory Health & Antioxidant",
    image: "/images/ingredients-6.png",
  },
];


const usageSteps = [
  "Take 1 capsule twice daily after meals.",
  "Use consistently for better results.",
  "Stay Hydrated and follow a healthy lifestyle.",
  "Consult your doctor if you are pregnant, nursing or on medication.",
];

export default function Ingredients() {
  return (
    <>
    <section className="ingredients-page">
      {/* Shipping benefits */}
      <div className="product-benefits">
        {benefits.map((benefit, index) => (
          <div className="product-benefit" key={benefit.title}>
            <img
              src={benefit.image}
              alt={benefit.title}
              className="benefit-icon"
            />

            <div className="benefit-text">
              <h3>{benefit.title}</h3>
              <p>{benefit.subtitle}</p>
            </div>

            {index !== benefits.length - 1 && (
              <span className="benefit-divider" />
            )}
          </div>
        ))}
      </div>

      {/* Product introduction */}
      <div className="ingredient-product-intro">
        <Image
          src="/images/Product-intro.png"
          alt="Pinky Pro+ Advance Capsule"
          className="ingredient-product-image"
          width={230}
          height={230}
        />

        <div className="ingredient-product-description">
          <h2>Pinky Pro+ Advance Capsule</h2>

          <p>
            Pinky Pro+ is a specially formulated capsule designed to support
            female immunity, intimate wellness, pH balance and overall health.
            Made with natural botanicals and essential nutrients, it helps you
            stay fresh, confident and active every day.pH balance and overall
            health. Made with natural botanicals and essential nutrients
          </p>
        </div>
      </div>

      {/* Ingredients */}
      <div className="ingredients-content">
        <div className="ingredients-heading">
          <img
            src="/images/ingredients-header.png"
            alt="Ingredients"
            className="ingredients-heading-icon"
          />

          <div>
            <h2>Ingredients</h2>
            <p>Pure botanical product</p>
          </div>
        </div>

        <div className="ingredients-list">
          {ingredients.map((ingredient) => (
            <div className="ingredient-item" key={ingredient.name}>
              <div className="ingredient-image-wrapper">
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="ingredient-image"
                />
              </div>

              <h3>{ingredient.name}</h3>
              <p>{ingredient.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section className="product-usage-section">
      {/* Section heading */}
      <div className="usage-heading">
        <img
          src="/images/how-to-use.png"
          alt="Use"
          className="usage-heading-icon"
        />
        <div>
          <h2>Use</h2>
          <p>How to use</p>
        </div>
      </div>

      <div className="usage-enquiry-grid">
        {/* Usage instructions */}
        <div className="usage-card">
          <h3>Pinky Pro+ Advance Capsule</h3>

          <ul>
            {usageSteps.map((step, index) => (
              <li key={index}>
                <span className="usage-check">✓</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Enquiry form */}
        <form
          className="enquiry-card"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Enquiry submitted!");
          }}
        >
          <h3>Enquiry</h3>

          <label className="enquiry-input">
            <span>♟</span>
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              required
            />
          </label>

          <label className="enquiry-input">
            <span>♧</span>
            <input
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              required
            />
          </label>

          <label className="enquiry-message">
            <span>✉</span>
            <textarea
              placeholder="Your Message"
              aria-label="Your Message"
              required
            />
          </label>

          <button type="submit" className="enquiry-submit">
            <span>➤</span> Send Message
          </button>
        </form>
      </div>
    </section>

</>

  );
}
