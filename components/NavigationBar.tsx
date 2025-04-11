"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link
          href="#hero"
          className="text-xl font-bold flex items-center gap-2"
        >
          <span className="text-[#80ed99]">Ayesha</span>Madhuwanthi
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="hover:text-[#80ed99] transition-colors"
          >
            About
          </Link>
          <Link
            href="#education"
            className="hover:text-[#80ed99] transition-colors"
          >
            Education
          </Link>
          <Link
            href="#projects"
            className="hover:text-[#80ed99] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="hover:text-[#80ed99] transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#activities"
            className="hover:text-[#80ed99] transition-colors"
          >
            Activities
          </Link>
          <Link href="#contact" className="btn-primary">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md">
          <div className="flex flex-col items-center py-4 gap-4">
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#80ed99] transition-colors"
            >
              About
            </Link>
            <Link
              href="#education"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#80ed99] transition-colors"
            >
              Education
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#80ed99] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#80ed99] transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#activities"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#80ed99] transition-colors"
            >
              Activities
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
