import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import key from "../public/l.png";
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
    <div className="grid lg:grid-cols-2 max-lg:grid-rows-2 gap-1 ">
      <div className="flex flex-col items-center justify-center py-8">
        <div className="relative w-[200px] h-[200px]">
          <Image
            src="/logo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
          <AnimatedBlob />
        </div>
        <Button
          className="mt-6"
          variant="ghost"
          color="primary"
          onClick={() => {
            window.location.href = "#contact";
          }}
        >
          Contact Us
        </Button>
        <h1 className="text-xl font-bold mt-1 text-secondary-900">
          <AnimatedText words={["Your prime choice for rental property!"]} />
        </h1>
      </div>
      <div className="grid place-items-center  p-1 text-secondary-900">
        <div className="flex flex-col items-center w-full">
          {/* <h1 className="text-2xl font-bold mb-4 text-white text-center">
            Rent and Buy a Property in Addis Abeba
          </h1> */}
          <div className="grid grid-cols-1 gap-2">
            <div className="grid items-center justify-center">
              <Image
                src={key}
                alt="Key"
                width={150}
                height={90}
                className="object-cover"
              />
            </div>
            <div className="m-2">
              <h1 className="">
                The Service we provide is{" "}
                <AnimatedText
                  words={[
                    "House Sell",
                    "House Rent",
                    "Compound house sell",
                    "Compound house rent",
                    "apartment sell",
                    "apartment rent",
                    "vila sell",
                    "villa rent",
                    "short-tert rental",
                    "Long term rental",
                  ]}
                  infinite
                />
              </h1>
              <p className="text-xl font-bold text-center text-secondary-900">
                Prime rentals are high-quality, well-located properties with
                great amenities, comfort, and convenience—ideal for both renters
                and owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
