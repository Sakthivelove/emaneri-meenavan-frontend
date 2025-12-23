// Footer.tsx

import React from 'react';
import Link from 'next/link'; // <--- இந்த வரி கட்டாயம் தேவை!

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white mt-12 p-8 border-t border-blue-700">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* நிறுவனம் பற்றிய விவரம் */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-yellow-400">🎣 எமனேரி மீனவன்</h4>
          <p className="text-sm text-gray-300">
            கடல் புத்துணர்ச்சியுடன் கூடிய புதிய மீன் மற்றும் கடல் உணவுகளை நேரடியாகக் கடற்கரையில் இருந்து உங்கள் வீட்டிற்குக் கொண்டுவருகிறோம்.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            தமிழ்நாட்டில் உள்ள மீனவர்களின் பாரம்பரியத்தை ஆதரிப்போம்.
          </p>
        </div>
        
        {/* விரைவு இணைப்புகள் */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-yellow-400">உதவி மற்றும் இணைப்புகள்</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/faq" className="hover:text-white transition duration-300">அடிக்கடி கேட்கப்படும் கேள்விகள்</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition duration-300">தனியுரிமைக் கொள்கை</Link></li>
            <li><Link href="/terms" className="hover:text-white transition duration-300">விதிமுறைகள் & நிபந்தனைகள்</Link></li>
            <li><Link href="/contact" className="hover:text-white transition duration-300">எங்களைத் தொடர்பு கொள்ள</Link></li>
          </ul>
        </div>
        
        {/* சமூக ஊடகங்கள் */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-yellow-400">சமூக ஊடகங்கள்</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-white transition duration-300">📘</a> {/* Facebook */}
            <a href="#" className="hover:text-white transition duration-300">📸</a> {/* Instagram */}
            <a href="#" className="hover:text-white transition duration-300">▶️</a> {/* YouTube */}
          </div>
        </div>
      </div>
      
      {/* காப்புரிமை தகவல் */}
      <div className="mt-8 pt-4 border-t border-blue-700 text-center text-sm text-gray-400">
        &copy; {currentYear} எமனேரி மீனவன். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
      </div>
    </footer>
  );
}