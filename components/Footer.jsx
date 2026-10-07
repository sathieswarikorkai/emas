"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="emas-footer">

      {/* ================= TOP FOOTER ================= */}
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <Image
            src="/images/emas-logo.png"
            alt="EMAS"
            width={165}
            height={70}
            className="footer-logo"
          />

          <p>info@myemas.in</p>
          <p>+91 9043222888</p>
          <p>Chennai, Tamil Nadu</p>
        </div>


        {/* QUICK LINKS */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <div className="footer-link-columns">

            <div>
              <a href="/Home">Home</a>
              <a href="/About">About Us</a>
              <a href="/Products">Products</a>
              <a href="/Opportunities">Opportunities</a>
            </div>

            <div>
              <a href="/Training">Training</a>
              <a href="/Event">Events</a>
              <a href="/Contact">Contact Us</a>
            </div>

            <div>
              <a href="#">Our Mission</a>
              <a href="#">Vision</a>
              <a href="/Plans">Plan</a>
            </div>

          </div>

        </div>

      </div>


      {/* ================= DIVIDER ================= */}

      <div className="footer-divider"></div>


      {/* ================= BOTTOM FOOTER ================= */}

      <div className="footer-bottom">

        <p className="footer-copyright">
          © Copyright All Rights Reserved 2010 © EMAS
        </p>


        {/* SOCIAL ICONS */}

        <div className="footer-social">

          <a href="#" aria-label="Facebook">
            f
          </a>

          <a href="#" aria-label="YouTube">
            ▶
          </a>

          <a href="#" aria-label="Instagram">
            I
          </a>

          <a href="#" aria-label="LinkedIn">
            in
          </a>

        </div>

      </div>

    </footer>
  );
}