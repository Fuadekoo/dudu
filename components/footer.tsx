"use client";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#222] text-white py-8 text-center border-t-4 border-[#00C896] font-sans">
      <div className="mb-4 text-2xl font-bold tracking-wider">Prime Rental</div>
      <div className="mb-2">
        <a
          href="#about"
          className="text-[#00C896] mx-4 no-underline hover:underline"
        >
          About Us
        </a>
        <a
          href="#contact"
          className="text-[#00C896] mx-4 no-underline hover:underline"
        >
          Contact
        </a>
        <a
          href="#terms"
          className="text-[#00C896] mx-4 no-underline hover:underline"
        >
          Terms
        </a>
      </div>
      <div className="text-sm text-[#aaa]">
        &copy; {new Date().getFullYear()} Prime Rental. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
