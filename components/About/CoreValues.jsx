export default function CoreValues() {
  const values = [
    {
      title: "Nature First",
      description:
        "We respect the power of nature and its role in everyday wellness.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51 8C29 10 14 20 10 38C8 47 13 55 21 56C39 58 51 38 51 8Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 52C19 40 28 30 42 23"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },

    {
      title: "Quality",
      description:
        "Trusted ingredients, careful processes & consistent quality.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 6L51 14V29C51 41 43 51 32 57C21 51 13 41 13 29V14L32 6Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          <path
            d="M23 31L29 37L41 24"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },

    {
      title: "Integrity",
      description:
        "Transparent, responsible, and honest in all we do.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 24L19 15L31 27L25 33L10 24Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          <path
            d="M54 24L45 15L33 27L39 33L54 24Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          <path
            d="M25 33L31 39C34 42 39 42 42 39L47 34"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M18 30L26 38"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M46 30L38 38"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },

    {
      title: "Simplicity",
      description:
        "Making wellness simple, clear, and accessible.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32"
            cy="24"
            r="9"
            stroke="currentColor"
            strokeWidth="4"
          />

          <path
            d="M32 33V48"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M32 39C24 36 17 40 17 47"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M32 39C40 36 47 40 47 47"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M23 49C27 53 37 53 41 49"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },

    {
      title: "Responsibility",
      description:
        "Making thoughtful choices for people and the planet.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="21"
            r="8"
            stroke="currentColor"
            strokeWidth="4"
          />

          <circle
            cx="45"
            cy="24"
            r="7"
            stroke="currentColor"
            strokeWidth="4"
          />

          <path
            d="M9 50C9 40 15 34 24 34C33 34 39 40 39 50"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M39 37C42 35 45 34 48 35C54 37 57 42 57 49"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="core-values-section">

      {/* ================= HEADING ================= */}
      <div className="core-values-heading">
        <h2>OUR CORE VALUES</h2>
        <h3>Values That Guide Us</h3>
      </div>

      {/* ================= VALUE BOXES ================= */}
      <div className="core-values-container">

        {values.map((value) => (
          <div
            className="core-value-card"
            key={value.title}
          >

            {/* Icon */}
            <div className="core-value-icon">
              {value.icon}
            </div>

            {/* Title */}
            <h4>{value.title}</h4>

            {/* Description */}
            <p>{value.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}