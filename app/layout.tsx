import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // உங்கள் Tailwind CSS மற்றும் பிற ஸ்டைல்கள் இங்கேதான் இருக்கும்
import Navbar from "@/components/Navbar"; // Navbar இறக்குமதி
import Footer from "@/components/Footer"; // Footer இறக்குமதி

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "எமனேரி மீனவன் - புதிய மீன் ஆன்லைன்", // தலைப்பை மாற்றவும்
  description: "புதிய கடல் உணவுகளை நேரடியாகக் கடற்கரையில் இருந்து ஆர்டர் செய்யவும்.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta">{/* தமிழ் மொழிக்காக lang="ta" சேர்க்கப்பட்டுள்ளது */}
      <body className={inter.className}>
        <Navbar /> {/* Navbar ஐ இங்கே சேர்க்கவும் */}
        
        {/* முக்கிய உள்ளடக்கமானது children-இல்தான் இருக்கும் (page.tsx) */}
        <div className="min-h-screen">
            {children}
        </div>

        <Footer /> {/* Footer ஐ இங்கே சேர்க்கவும் */}
      </body>
    </html>
  );
}