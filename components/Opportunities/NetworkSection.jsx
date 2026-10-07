"use client";



export default function NetworkSection() {
  return (
    <section className="network-section">

      {/* Store Image */}
      <div className="network-image">
        <img
          src="/images/emas-store.png"
          alt="EMAS Store"
        />
      </div>

      {/* Statistics Cards */}
      <div className="network-cards">

        <div className="network-card">
          <h2>15+</h2>

          <div className="card-info">
            <h3>Years of<br />Experience</h3>

            <p>
              Established in 2009 with extensive expertise
              across wellness and FMCG products.
            </p>
          </div>
        </div>


        <div className="network-card">
          <h2>4+</h2>

          <div className="card-info">
            <h3>Units Manufacturing<br />Facilities</h3>

            <p>
              Modern manufacturing units equipped to
              support efficient, consistent, and
              quality-focused production.
            </p>
          </div>
        </div>


        <div className="network-card">
          <h2>450+</h2>

          <div className="card-info">
            <h3>Products</h3>

            <p>
              A diverse portfolio of high-quality products
              across Organic, Herbal, Ayurveda, Healthcare,
              FMCG, and Agro-based categories.
            </p>
          </div>
        </div>


        <div className="network-card">
          <h2>GLOBAL</h2>

          <div className="card-info">
            <h3>From India to the World</h3>

            <p>
              EMAS brings quality wellness products to
              international markets, connecting the
              goodness of nature with customers across
              the globe.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}