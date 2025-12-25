import React from "react";
import { MOCK_PRODUCTS, Product } from "@/data/products"; // தற்காலிகத் தரவை இறக்குமதி செய்கிறோம்
import ProductCard from "@/components/ProductCard";

// குறிப்பு: முகப்புப் பக்கத்தில் பொதுவாக CreateOrderForm நேரடியாக இருக்காது,
// ஆனால் உங்கள் முந்தைய குறியீட்டின் அடிப்படையில், அதை இங்கே வைத்திருக்கிறேன்.
// அதைத் தனியான '/order' பக்கத்திற்கு நகர்த்துவது சிறந்தது.
import CreateOrderForm from "@/components/CreateOrderForm";

// API அழைக்கத் தேவையில்லை. நேரடியாகத் தரவைப் பெறலாம்.
async function getProductsMock(): Promise<Product[]> {
  // வேண்டுமென்றால், லோடிங் விளைவைக் காட்ட ஒரு சிறிய தாமதத்தை (delay) சேர்க்கலாம்.
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_PRODUCTS;
}

export default async function HomePage() {
  const products = await getProductsMock();

  return (
    <main className="container mx-auto">
      {/* 1. Hero/Banner Section - முகப்புப் பக்கத்தின் பிரதான தலைப்பு */}
      <section className="bg-blue-600 text-white py-20 mt-16 mb-8 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-3">எமனேரி மீனவன்</h1>
          <p className="text-xl">
            கடற்கரையில் இருந்து நேரடியாக உங்கள் சமையலறைக்கு - 100% ஃப்ரெஷ்!
          </p>
          <a
            href="/products"
            className="mt-6 inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300 shadow-xl"
          >
            இன்றைய மீன் வகைகளைப் பார்க்கவும்
          </a>
        </div>
      </section>

      {/* 2. Trust Block (நம்பகத்தன்மைத் தொகுதி) */}
      <section className="container mx-auto p-4 md:p-8 mt-8 mb-8">
        <div className="flex flex-wrap justify-around items-center bg-green-50 p-6 rounded-xl shadow-inner border border-green-200 text-center">
          {/* 1. அனுபவம் */}
          <div className="space-y-1 p-2 w-1/3 md:w-auto">
            <p className="text-3xl font-extrabold text-green-700">25+</p>
            <p className="text-sm text-gray-600 font-semibold">ஆண்டு அனுபவம்</p>
          </div>

          {/* 2. மீனவர் நிலை */}
          <div className="space-y-1 p-2 w-1/3 md:w-auto border-l border-r border-green-200 md:border-none">
            <p className="text-3xl font-extrabold text-green-700">👤</p>
            <p className="text-sm text-gray-600 font-semibold">
              சங்க உறுப்பினர்
            </p>
          </div>

          {/* 3. புத்துணர்ச்சி */}
          <div className="space-y-1 p-2 w-1/3 md:w-auto">
            <p className="text-3xl font-extrabold text-green-700">🌊</p>
            <p className="text-sm text-gray-600 font-semibold">
              நேரடி புத்துணர்ச்சி
            </p>
          </div>
        </div>
      </section>

      {/* 2.5. Fisherman Story Block - மீனவர் கதை (புதியது) */}
      <section className="container mx-auto p-4 md:p-8 my-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          எங்களின் உறுதியின் ஆதாரம்
        </h2>

        <div className="max-w-4xl mx-auto md:flex gap-8 items-center bg-yellow-50 p-6 rounded-xl shadow-lg border border-orange-200">
          {/* இடது புறம்: படம் */}
          <div className="flex-shrink-0 mb-4 md:mb-0 text-center">
            <div className="w-32 h-32 bg-orange-50 border-4 border-orange-300 rounded-full mx-auto flex items-center justify-center text-4xl text-orange-600 font-bold">
              🎣
            </div>
            <p className="mt-2 text-sm font-semibold text-blue-800">நிறுவனர்</p>
          </div>

          {/* வலது புறம்: விவரங்கள் */}
          <div className="flex-grow text-lg text-gray-700 space-y-2">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">
              பொன்முடி துரைசாமி
            </h3>
            <p>
              தலைமுறையாகக் கடலில் வாழும் எமனேரி மீனவக் குடும்பங்களின்
              நம்பிக்கையின் பிரதிநிதி.{" "}
              <span className="font-bold text-blue-700">
                25 ஆண்டுகளுக்கும் மேலான
              </span>{" "}
              அனுபவத்துடன், புத்துணர்ச்சியான மீன்களை நேரடியாக
              வாடிக்கையாளர்களுக்குக் கொண்டு சேர்க்கிறார்.
            </p>
            {/* முழு விவரங்கள் பக்கத்திற்கான இணைப்பு */}
            <a
              href="/about"
              className="text-orange-500 font-medium hover:underline inline-block mt-2"
            >
              முழு வரலாற்றைப் படிக்கவும் →
            </a>
          </div>
        </div>
      </section>

      {/* 3. Products Section - மீன் வகைகள் பட்டியல் (முதல் 4) */}
      <section className="p-4 md:p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800 border-b pb-2">
          இன்றைய சிறப்பான மீன் வகைகள்
        </h2>

        {products.length === 0 ? (
          <p className="text-xl text-gray-500 text-center p-10">
            இன்று மீன் வரத்து இல்லை.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* முகப்புப் பக்கத்தில் முதல் 4 தயாரிப்புகளை மட்டும் காட்டவும் */}
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <a
            href="/products"
            className="inline-block bg-blue-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
          >
            அனைத்து மீன் வகைகளையும் பார்க்கவும்
          </a>
        </div>
      </section>

      {/* 4. Order Call-to-Action Section - ஆர்டர் செய்வதற்கு அழைப்பு */}
      {/* CreateOrderForm பகுதி நீக்கப்பட்டு, ஆர்டர் பக்கத்திற்கான இணைப்பு சேர்க்கப்பட்டுள்ளது */}
      <section className="my-12 p-8 text-center bg-orange-50 rounded-lg shadow-lg border border-orange-200">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">
          இப்போதே ஆர்டர் செய்யத் தயாரா?
        </h2>
        <p className="text-xl text-gray-700 mb-6">
          உங்களுக்குத் தேவையான மீன்களைத் தேர்ந்தெடுத்து, ஆர்டர் படிவத்தைப்
          பூர்த்தி செய்யக் கீழே உள்ள இணைப்பை அழுத்தவும்.
        </p>
        <a
          href="/order" // புதிய ஆர்டர் பக்கத்திற்கான இணைப்பு
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-xl"
        >
          ஆர்டர் படிவத்திற்குச் செல்லவும்
        </a>
      </section>
    </main>
  );
}
