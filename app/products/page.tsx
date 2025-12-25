import React from "react";
import { Metadata } from "next";
import { MOCK_PRODUCTS, Product } from "@/data/products"; // தற்காலிகத் தரவை இறக்குமதி செய்கிறோம்
import ProductCard from "@/components/ProductCard";
// பக்கத்திற்கான தலைப்பு மற்றும் மெட்டா விவரங்கள்
export const metadata: Metadata = {
  title: "மீன் வகைகள் மற்றும் கடல் உணவுகள் | எமனேரி மீனவன்",
  description:
    "இன்று கிடைக்கும் அனைத்து வகையான புதிய மீன், நண்டு மற்றும் பிற கடல் உணவுகளின் பட்டியல்.",
};

// API அழைக்கத் தேவையில்லை. நேரடியாகத் தரவைப் பெறலாம்.
async function getAllProductsMock(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return MOCK_PRODUCTS;
}



export default async function ProductsPage() {
  const products = await getAllProductsMock();

  return (
    <main className="container mx-auto p-4 md:p-8">
      {/* தலைப்புப் பகுதி */}
      <header className="text-center py-10 mb-10 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-800">
          🎣 மொத்த மீன் வகைகள்
        </h1>
        <p className="text-lg mt-2 text-gray-700">
          நேரடியாகக் கடற்கரையில் இருந்து கிடைக்கும் அனைத்துப் புதிய கடல்
          உணவுகளையும் ஆராயுங்கள்.
        </p>
      </header>

      {/* வடிகட்டி மற்றும் வரிசைப்படுத்துதல் (Placeholder) */}
      <section className="mb-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-semibold text-gray-700">
          வகை வாரியாக வடிகட்டவும்:
        </h2>
        <div className="flex flex-wrap gap-3 mt-3">
          <span className="px-4 py-2 bg-orange-500 text-white rounded-full cursor-pointer shadow-md">
            அனைத்தும்
          </span>
          <span className="px-4 py-2 bg-white text-gray-800 rounded-full border cursor-pointer hover:bg-gray-100">
            மீன்
          </span>
          <span className="px-4 py-2 bg-white text-gray-800 rounded-full border cursor-pointer hover:bg-gray-100">
            நண்டு
          </span>
          <span className="px-4 py-2 bg-white text-gray-800 rounded-full border cursor-pointer hover:bg-gray-100">
            இறால்
          </span>
        </div>
      </section>

      {/* தயாரிப்புப் பட்டியல் */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2 text-blue-700">
          கிடைக்கும் பொருட்கள் ({products.length})
        </h2>

        {products.length === 0 ? (
          <p className="text-xl text-gray-500 text-center p-10">
            இன்று மீன் வரத்து இல்லை. விரைவில் புதுப்பிக்கப்படும்.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* ஒவ்வொரு தயாரிப்புக்கும் ஒரு கார்டு உருவாக்குதல் */}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
