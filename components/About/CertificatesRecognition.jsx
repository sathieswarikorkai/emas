export default function CertificatesRecognition() {
  const certificates = [
    {
      id: 1,
      title: "Certificate 1",
      file: "/certificates/certificate-1.pdf",
    },
    {
      id: 2,
      title: "Certificate 2",
      file: "/certificates/certificate-2.pdf",
    },
    {
      id: 3,
      title: "Certificate 3",
      file: "/certificates/certificate-3.pdf",
    },
  ];

  return (
    <section className="certificates-section">

      {/* Heading */}
      <div className="certificates-heading">
        <h2>CERTIFICATES &amp; RECOGNITION</h2>

        <p>
          Our products meet strict quality standards and are tested for your
          safety and well-being.
        </p>
      </div>

      {/* Certificate Cards */}
      <div className="certificates-container">

        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>

            {/* Certificate Icon */}
            <div className="certificate-icon">
              <svg
                viewBox="0 0 100 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Certificate paper */}
                <rect
                  x="15"
                  y="8"
                  width="62"
                  height="100"
                  fill="none"
                  stroke="#000"
                  strokeWidth="6"
                />

                {/* Inner border */}
                <rect
                  x="24"
                  y="18"
                  width="44"
                  height="80"
                  fill="none"
                  stroke="#000"
                  strokeWidth="3"
                />

                {/* Top line */}
                <rect
                  x="28"
                  y="28"
                  width="36"
                  height="10"
                  fill="none"
                  stroke="#000"
                  strokeWidth="4"
                />

                {/* Text lines */}
                <line
                  x1="28"
                  y1="49"
                  x2="63"
                  y2="49"
                  stroke="#000"
                  strokeWidth="4"
                />

                <line
                  x1="28"
                  y1="60"
                  x2="63"
                  y2="60"
                  stroke="#000"
                  strokeWidth="4"
                />

                <line
                  x1="28"
                  y1="71"
                  x2="55"
                  y2="71"
                  stroke="#000"
                  strokeWidth="4"
                />

                <line
                  x1="28"
                  y1="82"
                  x2="55"
                  y2="82"
                  stroke="#000"
                  strokeWidth="4"
                />

                {/* Certificate badge */}
                <circle
                  cx="76"
                  cy="76"
                  r="17"
                  fill="#fff"
                  stroke="#000"
                  strokeWidth="5"
                />

                <circle
                  cx="76"
                  cy="76"
                  r="7"
                  fill="none"
                  stroke="#000"
                  strokeWidth="3"
                />

                {/* Badge rays */}
                <path
                  d="M76 54 L76 59
                     M76 93 L76 98
                     M54 76 L59 76
                     M93 76 L98 76
                     M60 60 L64 64
                     M88 88 L92 92
                     M92 60 L88 64
                     M64 88 L60 92"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Download Button */}
            <a
              href={certificate.file}
              download
              className="certificate-download"
            >
              Download
              <span className="download-arrow">↓</span>
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}