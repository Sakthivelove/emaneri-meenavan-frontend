import { MOCK_PRODUCTS, Product } from '@/data/products'; // தற்காலிகத் தரவை இறக்குமதி செய்கிறோம்

// தனிப்பட்ட தயாரிப்புக் கார்டு கூறு (Component)
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden transition transform hover:scale-[1.02] bg-white">
      <img
        src={product.imageUrl}
        alt={product.nameTamil}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-700">{product.nameTamil}</h3>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="text-lg font-mono text-green-600">₹{product.pricePerKg.toFixed(2)} / கி.கி</p>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300">
          வண்டியில் சேர்க்க
        </button>
      </div>
    </div>
  );
};

export default ProductCard

// ஒரு தனித் தயாரிப்பைக் காண்பிப்பதற்கான கூறு
const ProductCardinproducts: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border rounded-xl shadow-lg overflow-hidden bg-white transition transform hover:scale-[1.02] hover:shadow-2xl">
      <img
        src={product.imageUrl}
        alt={product.nameTamil}
        className="w-full h-56 object-cover" // அட்டையின் உயரத்தை சற்று அதிகரித்துள்ளோம்
      />
      <div className="p-5">
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700">
          {product.category}
        </span>
        <h3 className="text-2xl font-bold text-orange-600 mt-2">
          {product.nameTamil}
        </h3>

        <p className="text-xl font-mono text-green-600 mt-1 mb-3">
          ₹{product.pricePerKg.toFixed(2)} / கி.கி
        </p>

        <p className="text-sm text-gray-500 line-clamp-3 mb-4">
          {product.description}
        </p>

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
          வண்டியில் சேர்க்க (Buy)
        </button>
      </div>
    </div>
  );
};