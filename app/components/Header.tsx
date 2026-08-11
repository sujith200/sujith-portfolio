import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
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
              >
                About
              </Link>
            </li>
            <li className="m-0 p-0">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 border border-violet-400/40 hover:border-violet-400 hover:text-violet-300 text-white/90 px-4 py-1.5 rounded-full text-sm transition-colors">
                Resume
              </a>
            </li>
          </ul>
          {/* for mobile */}
          <div>
           <button className="md:hidden">
            ☰
           </button>
          </div>
        </div>
      </nav>
      
    </header>
  );
}

