// Navbar.tsx
"use client"; // <-- இதைச் சேர்க்கவும்

import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- இதை இறக்குமதி செய்யவும்
import { useState } from "react"; // <-- useState இறக்குமதி

export default function Navbar() {
  const pathname = usePathname(); // <-- இதைச் சேர்க்கவும்
  const [isOpen, setIsOpen] = useState(false); // <-- மெனு நிலையை நிர்வகிக்க
  // உங்கள் புதிய வணிகப் பெயரைப் பயன்படுத்துகிறோம்
  const siteName = "🎣 எமனேரி மீனவன்";

  // இணைப்பு வகுப்பு செயல்பாட்டை உருவாக்குதல்
  // இணைப்பு வகுப்பு செயல்பாட்டை உருவாக்குதல்
  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    // block, w-full மற்றும் சுற்றியுள்ள இடைவெளி (my-1) சேர்க்கப்பட்டுள்ளது
    return `block w-full px-3 py-2 my-1 rounded-md text-base font-medium transition duration-300 text-center ${
      isActive
        ? "bg-yellow-400 text-blue-800 font-bold" // செயலில் உள்ள மெனுவுக்கு அழுத்தமான நிறம்
        : "text-white hover:bg-blue-700"
    }`;
  };

  const navLinks = [
    { href: "/products", label: "மீன் வகைகள்" },
    { href: "/orders", label: "எனது ஆர்டர்கள்" },
    { href: "/order", label: "ஆர்டர்" },
    { href: "/about", label: "எங்களைப் பற்றி" },
  ];

  return (
    <nav className="bg-blue-800 text-white p-4 shadow-md sticky top-0 z-20">
      {" "}
      {/* z-index 20 க்கு மாற்றப்பட்டது */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* 1. தளத்தின் பெயர் */}
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-wider hover:text-yellow-400 transition duration-300"
          >
            {siteName}
          </Link>

          {/* 2. டெஸ்க்டாப் மெனு */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg transition duration-300 ${
                  pathname === link.href
                    ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
                    : "hover:text-yellow-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 3. Cart மற்றும் Hamburger Icon (மொபைலுக்காக) */}
          <div className="flex items-center">
            {/* Cart Icon - டெஸ்க்டாப் மற்றும் மொபைலில் காட்டப்படும் */}
            <div className="relative mr-4">
              <button className="text-2xl hover:text-yellow-400 transition duration-300">
                🛒
              </button>
              <span className="absolute top-[-8px] right-[-8px] bg-red-600 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                0
              </span>
            </div>

            {/* Hamburger Button (மொபைலில் மட்டும்) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {/* Close அல்லது Menu Icon காட்டப்படும் */}
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 4. மொபைல் மெனு உள்ளடக்கம் (விரிவடையும் போது மட்டும் காட்டப்படும்) */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        {/* இடைவெளியைச் சரிசெய்ய px-4 py-3 மற்றும் bg-blue-700 சேர்க்கப்பட்டுள்ளது */}
        <div className="px-4 py-3 space-y-1 bg-blue-700 rounded-b-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkClasses(link.href)}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
