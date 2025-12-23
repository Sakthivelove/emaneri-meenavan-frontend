// Backend ஒப்பந்தங்களைப் போலவே இருக்கும் ஒரு மாதிரி வகை (Type)
export type Product = {
  id: string;
  nameTamil: string;
  category: string;
  pricePerKg: number;
  imageUrl: string;
  description: string;
  // மற்ற தேவைப்படும் புலங்கள்...
};

// தற்காலிக தயாரிப்பு பட்டியல்
export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod-101",
    nameTamil: "வஞ்சிரம் மீன்",
    category: "மீன்",
    pricePerKg: 750.00,
    // imageUrl: "/images/vanjiram.jpg", // இந்தப் படங்களை public/images-இல் சேர்க்கவும்
    imageUrl: "/images/Scomberomorus_guttatus.jpg", // இந்தப் படங்களை public/images-இல் சேர்க்கவும்
    description: "அதிக சுவை கொண்ட பிரீமியம் ரக வஞ்சிரம். வறுவல் மற்றும் குழம்புக்கு சிறந்தது.",
  },
  {
    id: "prod-102",
    nameTamil: "சங்கரா மீன்",
    category: "மீன்",
    pricePerKg: 320.00,
    imageUrl: "/images/sankara.jpeg",
    description: "சின்ன மீன்களில் அதிக சதைப்பற்று கொண்டது. குழம்புக்கு ஏற்றது.",
  },
  {
    id: "prod-103",
    nameTamil: "நண்டு (கடல் நண்டு)",
    category: "நண்டு",
    pricePerKg: 850.00,
    imageUrl: "/images/crab.jpg",
    description: "புதிதாகப் பிடிக்கப்பட்ட பெரிய அளவிலான கடல் நண்டு. கிரேவிக்கு சிறந்தது.",
  },
  // மேலும் சில தயாரிப்புகளைச் சேர்க்கலாம்...
];