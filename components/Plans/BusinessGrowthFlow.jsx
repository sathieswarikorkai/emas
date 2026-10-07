"use client";


const steps = [
  {
    number: "01",
    title: "Product",
    text: "Explore quality EMAS products and understand their benefits.",
  },
  {
    number: "02",
    title: "Customer",
    text: "Build trust by connecting with customers and understanding their needs.",
  },
  {
    number: "03",
    title: "Referral",
    text: "Introduce EMAS products and business opportunities to interested people.",
  },
  {
    number: "04",
    title: "Network",
    text: "Develop meaningful relationships and grow your network through shared learning.",
  },
  {
    number: "05",
    title: "Performance",
    text: "Focus on product sales, customer service and consistent business development.",
  },
  {
    number: "06",
    title: "Performance",
    text: "Focus on product sales, customer service and consistent business development.",
  },
];

export default function BusinessGrowthFlow() {
  return (
    <section className="business-growth-flow">
      <h2>BUSINESS GROWTH FLOW</h2>

      <div className="growth-flow">

        {/* 01 */}
        <div className="growth-card card-1">
          <div className="growth-number">{steps[0].number}</div>
          <h3>{steps[0].title}</h3>
          <p>{steps[0].text}</p>
        </div>

        {/* 02 */}
        <div className="growth-card card-2">
          <div className="growth-number">{steps[1].number}</div>
          <h3>{steps[1].title}</h3>
          <p>{steps[1].text}</p>
        </div>

        {/* 03 */}
        <div className="growth-card card-3">
          <div className="growth-number">{steps[2].number}</div>
          <h3>{steps[2].title}</h3>
          <p>{steps[2].text}</p>
        </div>

        {/* 06 */}
        <div className="growth-card card-6">
          <div className="growth-number">{steps[5].number}</div>
          <h3>{steps[5].title}</h3>
          <p>{steps[5].text}</p>
        </div>

        {/* 05 */}
        <div className="growth-card card-5">
          <div className="growth-number">{steps[4].number}</div>
          <h3>{steps[4].title}</h3>
          <p>{steps[4].text}</p>
        </div>

        {/* 04 */}
        <div className="growth-card card-4">
          <div className="growth-number">{steps[3].number}</div>
          <h3>{steps[3].title}</h3>
          <p>{steps[3].text}</p>
        </div>

{/* TOP ARROWS */}

<img
  src="/images/curve-right.png"
  alt=""
  className="curve-arrow arrow-1"
/>

<img
  src="/images/curve-right.png"
  alt=""
  className="curve-arrow arrow-2"
/>


{/* MIDDLE ARROW */}

<img
  src="/images/curve-down.png"
  alt=""
  className="curve-arrow arrow-3"
/>


{/* BOTTOM ARROWS */}

<img
  src="/images/curve-left.png"
  alt=""
  className="curve-arrow arrow-4"
/>

<img
  src="/images/curve-left.png"
  alt=""
  className="curve-arrow arrow-5"
/>

      </div>
    </section>
  );
}