"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* =====================================================
          LOGO
      ===================================================== */}

      <div className="logo-wrapper">
        <Link href="/Home">
          <Image
            src="/images/emas-logo.png"
            alt="EMAS"
            width={170}
            height={70}
            className="logo"
            priority
          />
        </Link>
      </div>


      {/* =====================================================
          DESKTOP NAVIGATION
      ===================================================== */}

      <nav className="nav-menu">

        <Link
          href="/Home"
          className={pathname === "/Home" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          href="/About"
          className={pathname === "/About" ? "active" : ""}
        >
          About Us
        </Link>

        <Link href="#products">
          Products
        </Link>

        <Link href="/Opportunities"
        className={pathname === "/Opportunities" ? "active" : ""}
        >
          Opportunities
        </Link>

        <Link href="/Plans"
         className={pathname === "/Plans" ? "active" : ""}>
          Plan
        </Link>

        <Link href="/Training"
         className={pathname === "/Training" ? "active" : ""}>
          Training
        </Link>

        <Link href="/Event"
         className={pathname === "/Event" ? "active" : ""}>
          Events
        </Link>

        <Link href="/Contact"
         className={pathname === "/Contact" ? "active" : ""}>
          Contact us
        </Link>

      </nav>


      {/* =====================================================
          RIGHT ACTIONS
      ===================================================== */}

      <div className="nav-actions">

        {/* LANGUAGE */}

        <div className="language-container">

          <button
            type="button"
            className="language-button"
            onClick={() => setLanguageOpen(!languageOpen)}
          >
            ENG

            <span
              className={`arrow ${
                languageOpen ? "arrow-up" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {languageOpen && (
            <div className="language-dropdown">

              <button type="button">
                ENG
              </button>

              <button type="button">
                TAM
              </button>

            </div>
          )}

        </div>


        {/* JOIN BUTTON */}

        <button
          type="button"
          className="join-button"
        >
          Join now
        </button>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {mobileMenuOpen && (
        <nav className="mobile-nav-menu">

          <Link
            href="/Home"
            className={pathname === "/Home" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <Link
            href="/About"
            className={pathname === "/About" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            About Us
          </Link>

          <Link
            href="/products"
            onClick={closeMobileMenu}
          >
            Products
          </Link>

          <Link
            href="/Opportunities"
             className={pathname === "/Opportunities" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            Opportunities
          </Link>

          <Link
            href="/Plans"
             className={pathname === "/Plans" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            Plan
          </Link>

          <Link
            href="/Training"
             className={pathname === "/Training" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            Training
          </Link>

          <Link
            href="/Event"
             className={pathname === "/Event" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            Events
          </Link>

          <Link
            href="/Contact"
             className={pathname === "/Contact" ? "active" : ""}
            onClick={closeMobileMenu}
          >
            Contact us
          </Link>

          {/* Mobile language */}

          <div className="mobile-language">

            <button
              type="button"
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              ENG
              <span className="mobile-language-arrow">
                ▼
              </span>
            </button>

            {languageOpen && (
              <div className="mobile-language-dropdown">

                <button type="button">
                  ENG
                </button>

                <button type="button">
                  TAM
                </button>

              </div>
            )}

          </div>

        </nav>
      )}

    </header>
  );
}