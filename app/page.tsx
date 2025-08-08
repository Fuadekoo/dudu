"use client";
import { Button } from "@heroui/react";
import { ScrollShadow } from "@heroui/react";
import React from "react";
import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Contact from "@/components/contact";
import About from "@/components/about";
import Footer from "@/components/footer";

function page() {
  return (
    <ScrollShadow>
      <div className="grid grid-cols-1 gap-4 min-h-svh">
        {/* this is a navbar */}
        <div className="sticky top-0 z-10 p-0">
          <Navbar />
        </div>
        <main className="grid grid-cols-1 gap-4">
          <div className="border-2 rounded h-[calc(100vh-4rem)] grid">
            <Home />
          </div>
          <div className="border-2 rounded h-[calc(100vh-4rem)] grid">
            <About />
          </div>
          {/* <div className="border-2 rounded h-[calc(100vh-4rem)]">
          <Skills />
        </div>
        <div className="border-2 rounded h-[calc(100vh-4rem)]">
          <Work />
        </div>
        <div className="border-2 rounded h-[calc(100vh-4rem)]">
          <Testimonial />
        </div> */}
          <div className="border-2 rounded h-[calc(100vh-4rem)] grid">
            <Contact />
          </div>
        </main>
        <div className="border-2 rounded">
          <Footer />
        </div>
      </div>
    </ScrollShadow>
  );
}

export default page;
