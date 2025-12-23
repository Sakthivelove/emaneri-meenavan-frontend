// Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
  // உங்கள் புதிய வணிகப் பெயரைப் பயன்படுத்துகிறோம்
  const siteName = "🎣 எமனேரி மீனவன்"; 

  return (
    <nav className="bg-blue-800 text-white p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* தளத்தின் பெயர் (Brand Name) */}
        <Link href="/" className="text-3xl font-extrabold tracking-wider hover:text-yellow-400 transition duration-300">
          {siteName}
        </Link>
        
        {/* மெனு இணைப்புகள் */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/products" className="text-lg hover:text-yellow-400 transition duration-300">
            மீன் வகைகள்
          </Link>
          <Link href="/orders" className="text-lg hover:text-yellow-400 transition duration-300">
            எனது ஆர்டர்கள்
          </Link>
          <Link href="/about" className="text-lg hover:text-yellow-400 transition duration-300">
            எங்களைப் பற்றி
          </Link>
        </div>
        
        {/* ஷாப்பிங் வண்டி (Cart Icon - வெறுமனே ஒரு உதாரணம்) */}
        <div className="relative">
          <button className="text-2xl hover:text-yellow-400 transition duration-300">
            🛒 
          </button>
          <span className="absolute top-[-8px] right-[-8px] bg-red-600 rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
            0 {/* இங்கு Cart Item Count காட்டப்படும் */}
          </span>
        </div>
      </div>
    </nav>
  );
}