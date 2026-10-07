"use client";


export default function PlanBenefits() {
  const benefits = [
    {
      title: "Product Benefits",
      text: "Enjoy and promote EMAS products.",
      image: "/images/product-benefits.png",
    },
    {
      title: "Business Benefits",
      text: "Develop your customer network.",
      image: "/images/business-benefits.png",
    },
    {
      title: "Learning Benefits",
      text: "Training, product knowledge and business skills.",
      image: "/images/learning-benefits.png",
    },
    {
      title: "Growth Benefits",
      text: "Progress through applicable performance levels and incentives.",
      image: "/images/growth-benefits.png",
    },
  ];

  return (
    <section className="plan-benefits">
      <h2>PLAN BENEFITS</h2>

      <div className="benefits-list">
        {benefits.map((benefit) => (
          <div className="plan-benefit-item" key={benefit.title}>
            <div className="plan-benefit-icon">
              <img src={benefit.image} alt={benefit.title} />
            </div>

            <h3>{benefit.title}</h3>

            <p>{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}