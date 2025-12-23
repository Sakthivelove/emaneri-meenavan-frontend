import React from 'react';
import { MOCK_PRODUCTS, Product } from '@/data/products'; // தற்காலிகத் தரவை இறக்குமதி செய்கிறோம்
import CreateOrderForm from '@/components/CreateOrderForm'; // உங்கள் ஃபார்ம்

// API அழைக்கத் தேவையில்லை. நேரடியாகத் தரவைப் பெறலாம்.
async function getProductsMock(): Promise<Product[]> {
  // வேண்டுமென்றால், லோடிங் விளைவைக் காட்ட ஒரு சிறிய தாமதத்தை (delay) சேர்க்கலாம்.
  await new Promise(resolve => setTimeout(resolve, 500)); 
  return MOCK_PRODUCTS;
}

export default async function HomePage() {
  const products = await getProductsMock();

  return (
    <main className="container mx-auto p-4">
      {/* ... (Header Section) */}
      <header className="py-8 text-center bg-blue-500 text-white rounded-lg mb-8">
        <h1 className="text-4xl font-bold">🐟 இன்றைய புதிய மீன்கள்</h1>
        <p className="text-xl mt-2">நேரடியாகக் கடலில் இருந்து உங்கள் வீட்டிற்கு!</p>
      </header>
      
      {/* ... (Products Section) */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">மீன் வகைகள் ({products.length})</h2>
        
        
        {products.length === 0 ? (
          <p className="text-xl text-gray-500">இன்று மீன் வரத்து இல்லை.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ஒவ்வொரு தயாரிப்புக்கும் ஒரு கார்டு உருவாக்குதல் */}
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden transition transform hover:scale-[1.02]">
                <img 
                  src={product.imageUrl} 
                  alt={product.nameTamil} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-blue-700">{product.nameTamil}</h3>
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  <p className="text-lg font-mono text-green-600">₹{product.pricePerKg.toFixed(2)} / கி.கி</p>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                  <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300">
                    வண்டியில் சேர்க்க
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ... (Order Form Section) */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold mb-6 text-center border-b pb-2">ஆர்டர் செய்து மகிழுங்கள்</h2>
        <CreateOrderForm /> 
      </section>
    </main>
  );
}