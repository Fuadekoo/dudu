import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import key from "../public/v3.png";
import Logo from "../public/logo.png";
import { useState, useEffect } from "react";
function AnimatedText({
  words,
  infinite = false,
}: {
  words: string[];
  infinite?: boolean;
}) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const currentWord = words[wordIndex];

    interval = setInterval(() => {
      if (forward) {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentWord.length) {
          if (infinite) {
            setTimeout(() => setForward(false), 600);
            clearInterval(interval);
          } else if (wordIndex < words.length - 1) {
            setTimeout(() => {
              setWordIndex((prev) => prev + 1);
              setCharIndex(0);
            }, 600);
            clearInterval(interval);
          } else {
            clearInterval(interval);
          }
        }
      } else {
        setDisplayed(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 < 0) {
          setForward(true);
          setWordIndex((prev) => (prev + 1) % words.length);
          setCharIndex(0);
        }
      }
    }, 40);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, forward, wordIndex, words, infinite]);

  return <span>{displayed}</span>;
}

function AnimatedBlob() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <svg
        className="w-full h-full animate-pulse"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d="M120,-150C160,-120,200,-80,210,-30C220,20,200,80,160,120C120,160,60,180,10,170C-40,160,-80,120,-120,80C-160,40,-200,0,-190,-40C-180,-80,-120,-120,-80,-160C-40,-200,40,-180,120,-150Z"
            fill="#0f4c3a"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
}
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 grid lg:grid-cols-2 max-lg:grid-rows-2 gap-6 px-6 py-10">
      <div className="flex flex-col items-center justify-center relative py-8">
        <div className="relative w-[180px] h-[180px] mb-6 drop-shadow-xl">
          <Image
            src={key}
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="z-10 rounded-full border-4 border-emerald-200 bg-white"
          />
          <AnimatedBlob />
        </div>
        <Button
          className="mt-4 px-8 py-3 rounded-full shadow-lg text-lg font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition"
          variant="solid"
          color="primary"
          onClick={() => {
            window.location.href = "#contact";
          }}
        >
          Hello, we are Prime Rentals
        </Button>
        <h1 className="text-2xl font-extrabold mt-4 text-emerald-900 drop-shadow-sm text-center">
          <AnimatedText words={["Your prime choice for rental property!"]} />
        </h1>
        <div className="mt-6 text-lg font-medium text-emerald-800 bg-white/80 rounded-xl p-5 shadow-md max-w-xl text-center">
          <p className="mb-4 text-emerald-700">
            Prime rentals are high-quality, well-located properties with great
            amenities, comfort, and convenience—ideal for both renters and
            owners.
          </p>
          <h2 className="font-semibold text-emerald-900">
            The services we provide:&nbsp;
            <span className="text-emerald-600 font-bold">
              <AnimatedText
                words={[
                  "House Sell",
                  "House Rent",
                  "Compound House Sell",
                  "Compound House Rent",
                  "Apartment Sell",
                  "Apartment Rent",
                  "Villa Sell",
                  "Villa Rent",
                  "Short-term Rental",
                  "Long-term Rental",
                ]}
                infinite
              />
            </span>
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-md">
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Property"
              width={200}
              height={140}
              className=""
            />
          </div>
          <h1 className="text-2xl font-bold mb-6 text-emerald-800 text-center">
            Rent and Buy a Property in Addis Ababa
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
