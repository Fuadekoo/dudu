import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
// import AddisAbeba from "../public/addis1.jpg";
import Addisabeba2 from "../public/key.jpg";
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

function animateBackground() {
  const colors = ["#FF5733", "#33FF57", "#3357FF"];
  let currentIndex = 0;

  setInterval(() => {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
  }, 2000);
}

function Home() {
  return (
    <div className="grid lg:grid-cols-2 max-lg:grid-rows-2 gap-1 ">
      <div className="flex flex-col items-center justify-center py-8">
        <Image src="/logo.png" alt="" width={200} height={200} />
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
        <AnimatedText words={["Your prime choice for rental property!"]} />
      </div>
      <div className="grid place-items-center  p-1 text-secondary-900">
        <div className="flex flex-col items-center w-full">
          {/* <h1 className="text-2xl font-bold mb-4 text-white text-center">
            Rent and Buy a Property in Addis Abeba
          </h1> */}
          <div className="grid grid-cols-1 gap-2">
            <div className="grid items-center">
              <Image
                src={Addisabeba2}
                alt="Addis Abeba 2"
                width={150}
                height={90}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-center text-secondary-900">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore obcaecati blanditiis laudantium. Aliquid fuga adipisci
                aut ipsam, corporis consectetur suscipit esse rerum, natus quia
                possimus placeat dignissimos totam necessitatibus cum!
              </p>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span>
                  <AnimatedText words={["Sell", "rent"]} infinite />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
