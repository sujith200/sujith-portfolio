"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        {/* for desktop */}
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link 
            href="/" 
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
          >
          <Image src="/logo/logo0.png" alt="Logo" width={100} height={100} style={{ width: "auto", height: "auto" }} />
          </Link>
          <ul className="hidden md:flex items-center gap-8">
           {/* home */}
            <li className="m-0 p-0">
              <Link 
                href="#home" 
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Home
              </Link>
            </li>
            {/* experience */}
             <li className="m-0 p-0">
              <Link 
                href="#experience" 
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Experience
              </Link>
            </li>
            {/* projects */}
            <li className="m-0 p-0">
              <Link 
                href="#projects" 
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Projects
              </Link>
            </li>
            {/* about */}
            <li className="m-0 p-0">
              <Link 
                href="#about" 
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >git
                About
              </Link>
            </li>
            <li className="m-0 p-0add">
              <a
              href="/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-violet-400/40 hover:border-violet-400 hover:text-violet-300 text-white/90 px-4 py-1.5 rounded-full text-sm transition-colors"
            >
              Resume
            </a>
            </li>
          </ul>
          {/* for mobile */}
          <div>
           <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
                    </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed top-[73px] right-0 w-72 max-w-[85vw] px-6 pb-6 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
            <ul className="flex flex-col gap-4 bg-[#110720]/95 rounded-xl p-5 border border-white/10 shadow-xl">
              <li>
                <Link
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#experience"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  Experience
                </Link>
              </li>

              <li>
                <Link
                  href="#projects"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <a
                  href="/assets/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block border border-violet-400/40 hover:border-violet-400 hover:text-violet-300 text-white/90 px-4 py-1.5 rounded-full text-sm transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
        </div>
      </nav>
      
    </header>
  );
}

