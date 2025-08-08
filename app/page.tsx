"use client";
import { Button } from "@heroui/react";
import { ScrollShadow } from "@heroui/react";
import React, { useRef } from "react";
import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Contact from "@/components/contact";
import About from "@/components/about";
import Footer from "@/components/footer";

function Page() {
  const homeRef = useRef<HTMLDivElement>(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollShadow>
      <div className="grid grid-cols-1 gap-4 min-h-dvh">
        {/* this is a navbar */}
        <div className="sticky top-0 z-10 p-0">
          <Navbar />
        </div>
        <main className="grid grid-cols-1 gap-4">
          <div ref={homeRef} className=" grid">
            <Home />
          </div>
          <div className="grid">
            <About />
          </div>
          <div className="grid">
            <Contact />
          </div>
        </main>
        <div className="">
          <Footer />
        </div>
        {/* Scroll to top button */}
        <button
          onClick={scrollToHome}
          className="fixed bottom-8 right-8 bg-primary rounded-full shadow-lg p-2 z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 15l-7-7-7 7"
            />
          </svg>
        </button>
      </div>
    </ScrollShadow>
  );
}

export default Page;
