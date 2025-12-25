import React from 'react';
import { Metadata } from 'next';
import { Order, OrderStatus, getOrdersMock } from '@/data/orders';

export const metadata: Metadata = {
    title: "எனது ஆர்டர்கள் | எமனேரி மீனவன்",
    description: "உங்கள் ஆர்டரின் நிலை மற்றும் விவரங்களைப் பார்க்கவும்.",
};

// ஆர்டர் நிலைக்கு வண்ணங்களைத் தீர்மானிக்கும் செயல்பாடு
const getStatusColor = (status: OrderStatus) => {
    switch (status) {
        case 'DELIVERED':
            return 'bg-green-100 text-green-800 border-green-400';
        case 'SHIPPED':
            return 'bg-blue-100 text-blue-800 border-blue-400';
        case 'PROCESSING':
            return 'bg-yellow-100 text-yellow-800 border-yellow-400';
        case 'NEW':
            return 'bg-purple-100 text-purple-800 border-purple-400';
        case 'CANCELLED':
            return 'bg-red-100 text-red-800 border-red-400';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-400';
    }
};

// ஆர்டர் நிலையின் தமிழ்ப் பெயரைத் தீர்மானிக்கும் செயல்பாடு (புதியது)
const getStatusNameTamil = (status: OrderStatus): string => {
    switch (status) {
        case 'DELIVERED':
            return 'டெலிவரி செய்யப்பட்டது';
        case 'SHIPPED':
            return 'அனுப்பி வைக்கப்பட்டது';
        case 'PROCESSING':
            return 'செயலாக்கத்தில் உள்ளது';
        case 'NEW':
            return 'புதிய ஆர்டர்';
        case 'CANCELLED':
            return 'ரத்து செய்யப்பட்டது';
        default:
            return 'தெரியாத நிலை';
    }
};

// ஒரு தனி ஆர்டரைக் காண்பிப்பதற்கான கூறு
const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
    const date = new Date(order.date).toLocaleDateString('ta-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    
    // நிலைக்கு ஏற்ற வண்ணம் மற்றும் தமிழ்ப் பெயரைப் பெறுகிறோம்
    const statusClasses = getStatusColor(order.status);
    const statusTamil = getStatusNameTamil(order.status);

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            {/* தலைப்பு மற்றும் நிலை */}
            <div className="flex justify-between items-start mb-4 border-b pb-3">
                <h3 className="text-xl font-bold text-blue-700">ஆர்டர் #{order.id}</h3>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full border ${statusClasses}`}>
                    {statusTamil} {/* தமிழ்ப் பெயரைப் பயன்படுத்துதல் */}
                </span>
            </div>

            {/* சுருக்கமான விவரங்கள் */}
            <div className="text-gray-600 space-y-1 mb-4">
                <p><strong>தேதி:</strong> {date}</p>
                <p><strong>மொத்தத் தொகை:</strong> ₹{order.totalAmount.toFixed(2)}</p>
                <p><strong>பொருட்கள்:</strong> {order.items.length} பொருட்கள்</p>
            </div>

            {/* ஆர்டர் பொருட்களின் பட்டியல் */}
            <div className="border-t pt-4">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">ஆர்டர் விவரங்கள்:</h4>
                <ul className="space-y-2 text-sm">
                    {order.items.map((item, index) => (
                        <li key={index} className="flex justify-between border-b border-dashed pb-1">
                            <span className="font-medium text-gray-800">{item.productName} ({item.quantityGrams / 1000} கி.கி)</span>
                            <span className="text-blue-600">₹{item.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* கூடுதல் செயல்பாடு */}
            <div className="mt-6 text-right">
                {/* இங்கே ஆர்டர் விவரப் பக்கத்திற்கான இணைப்பு வரும், தற்காலிகமாக ஒரு பட்டன் உள்ளது */}
                <button className="text-orange-600 font-medium hover:text-orange-800 transition duration-300">
                    ஆர்டர் விவரங்களைப் பார்க்கவும்
                </button>
            </div>
        </div>
    );
};


// முக்கியப் பக்கம் (Server Component)
export default async function MyOrdersPage() {
    // Mock செயல்பாடு மூலம் ஆர்டர்களைப் பெறுகிறது
    const orders = await getOrdersMock(); 

    return (
        <main className="container mx-auto p-4 md:p-8">
            <header className="text-center py-8 mb-10 bg-blue-50 rounded-lg shadow-sm">
                <h1 className="text-4xl font-extrabold text-blue-800">
                    📦 எனது ஆர்டர்கள்
                </h1>
                <p className="text-lg mt-2 text-gray-600">
                    உங்கள் சமீபத்திய ஆர்டர்களின் நிலையைச் சரிபார்க்கவும்.
                </p>
            </header>

            {/* ஆர்டர் பட்டியல் */}
            <section>
                {orders.length === 0 ? (
                    <div className="text-center p-12 bg-white rounded-lg shadow-lg">
                        <p className="text-xl text-gray-500 mb-4">
                            நீங்கள் இதுவரை எந்த ஆர்டரும் செய்யவில்லை.
                        </p>
                        <a href="/" className="text-lg text-orange-600 hover:underline">
                            இன்றைய மீன்களை ஆர்டர் செய்ய இங்கே கிளிக் செய்யவும்
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {orders.map(order => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}