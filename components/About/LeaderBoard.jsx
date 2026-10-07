export default function LeaderBoard() {
  const leaders = [
    {
      image: "/images/aravind-kumar.png",
      name: "ARAVIND KUMAR",
      designation: "Founder & Director",
      description:
        "With a vision for better living, he leads EMAS with purpose and passion.",
    },
    {
      image: "/images/priya-nair.png",
      name: "PRIYA NAIR",
      designation: "Co-Founder & Director",
      description:
        "Brings expertise in product development and a deep focus on quality.",
    },
    {
      image: "/images/nair.png",
      name: "NAIR",
      designation: "Team Director",
      description:
        "Brings a commitment to maintaining the highest quality standards.",
    },
  ];

  return (
    <section className="leaderboard-section">

      {/* ================= HEADING ================= */}
      <div className="leaderboard-heading">
        <h2>OUR LEADERBOARD</h2>
        <h3>
          Guided by Purpose,
          <br />
          Driven by People.
        </h3>

        <p>
          At EMAS, we believe everyday wellness begins with nature.
          <br />
          We create thoughtfully crafted products using trusted ingredients
          and simple formulations, designed for everyday living.
        </p>
      </div>

      {/* ================= LEADERS ================= */}
      <div className="leaders-container">

        {leaders.map((leader, index) => (
          <div className="leader-card" key={index}>

            {/* Image */}
            <div className="leader-image-wrapper">
              <img
                src={leader.image}
                alt={leader.name}
                className="leader-image"
              />
            </div>

            {/* Name */}
            <h4>{leader.name}</h4>

            {/* Designation */}
            <h5>{leader.designation}</h5>

            {/* Description */}
            <p>{leader.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}