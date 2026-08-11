"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["UI/UX Designer","Frontend Developer","React Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden  -top-150 z-10">
                <div className="relative inline-block ">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <p className="text-white text-lg whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-purple-400">SUJITH J</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>
              <Image
                src="/assets/its me.png"
                alt="SUJITH J - React developer and Designer"
                width={300}
                height={300}
                className=" max-w-md absolute"
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <Image
                src="/assets/me-glow.png"
                alt="SUJITH J - React developer and Designer"
                width={300}
                height={300}
                className="max-w-md "
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          </div>
          <div className="flex-1 space-y-2 text-center lg:text-left">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute "
                style={{ left: "-100px", top: "auto", width: "auto", height: "auto" }}
              />
              <div>
                <p className="text-white text-lg">
                  Hello! I Am{" "}
                  <span className="text-purple-400">SUJITH J</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
            <div className="">
              <p className="text-2xl"> I design and build </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Beautiful digital 
                <br /> experiences for{" "}
                <span className="relative inline-block">
                  <Image src="/assets/circle.png" alt="Circle" width={200} height={200} className="absolute mt-2" />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    You
                  </span>
                </span>
                ...
              </h1>
              <p className="text-md text-white/80">
                Clean interfaces. Responsive websites. User-focused design.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 border border-purple-400/40 hover:border-purple-400 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Download CV
              </a>
            </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-5xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>MCA Graduate • UI/UX Designer • Frontend Developer</span>
            <span className="flex items-center gap-2">
              {/* company logo
              <Image src="/assets/webhr.webp" alt="WebHR" width={20} height={20} className="w-5 h-5" style={{ width: "auto", height: "auto" }} />
              <span className="text-blue-400 font-semibold">WebHR,</span> */}
            </span>
          </p>
          <p className="text-lg text-white/80 max-w-4xl mx-auto lg:mx-0">
            I'm passionate about designing intuitive user interfaces and building responsive web applications using 
            React, Next.js, HTML, CSS, JavaScript and Figma. I enjoy transforming ideas into modern digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
