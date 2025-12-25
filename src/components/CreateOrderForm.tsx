"use client";

import { CreateOrderInputSchema } from "@/data/schemas"; // Zod Schema-வை இறக்குமதி செய்கிறோம்
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// Zod Schema-விலிருந்து TypeScript வகையைப் பெறுகிறது
type CreateOrderFormInputs = z.infer<typeof CreateOrderInputSchema>;

// மீன் விற்பனை தளத்தின் தற்காலிகத் தயாரிப்பு ID (Mocking purposes)
// நிஜத்தில், இதை ஆர்டர் வண்டியில் இருந்து பெற வேண்டும்.
// தற்காலிகத் தயாரிப்புத் தரவை இறக்குமதி செய்கிறோம் (உண்மையில், இது API-இல் இருந்து வர வேண்டும்)
import { MOCK_PRODUCTS } from "@/data/products";
const DEMO_PRODUCT_ID = "prod-101"; // "வஞ்சிரம் மீன்" ID
// DEMO தயாரிப்பை இங்கே கண்டுபிடிக்கவும்
const demoProduct = MOCK_PRODUCTS.find((p) => p.id === DEMO_PRODUCT_ID);

export default function CreateOrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // React Hook Form மற்றும் Zod Resolver அமைப்புகள்
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateOrderFormInputs>({
    resolver: zodResolver(CreateOrderInputSchema),
    // சோதனைக்காக ஒரு மாதிரி தரவை வழங்குகிறோம்
    defaultValues: {
      customer: {
        name: "",
        phoneNumber: "",
        email: "",
      },
      deliveryAddress: "",
      pincode: "",
      paymentMethod: "COD",
      items: [
        {
          productId: DEMO_PRODUCT_ID,
          quantityGrams: 500, // அரை கிலோ
          cuttingOption: "CURRY_CUT",
        },
      ],
    },
  });

  const onSubmit = async (data: CreateOrderFormInputs) => {
    setIsSubmitting(true);
    setStatusMessage(null);

    // ⚠️ Mock API Call: நிஜ API அழைப்பிற்குப் பதிலாக, இங்கு ஒரு தாமதத்தைப் பயன்படுத்துகிறோம்.
    // இது நெட்வொர்க் தாமதத்தை (network latency)ப் பிரதிபலிக்கும்.
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // வெற்றிகரமான Mock Response-க்கான லாஜிக்
    const mockOrderId =
      "MOCK-" + Math.random().toString(36).substring(2, 9).toUpperCase();

    // பின்கோடு 600001 என்றால் தோல்வி என்று காட்ட, ஒரு நிபந்தனையைச் சேர்க்கலாம்.
    if (data.pincode === "600001") {
      setStatusMessage(
        `❌ இந்த 600001 பின்கோடிக்கு டெலிவரி சேவை இல்லை. உங்கள் பின்கோடைச் சரிபார்க்கவும்.`
      );
    } else {
      setStatusMessage(
        `✅ ஆர்டர் வெற்றிகரமாகச் செய்யப்பட்டது! (Mock) Order ID: ${mockOrderId}`
      );
      // ஆர்டர் வெற்றி பெற்றால், ஃபார்மை ரீசெட் செய்கிறோம்.
      reset();
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-xl max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-orange-600">
        ஆர்டரைச் செய்யவும்
      </h2>

      {/* நிலை செய்தி */}
      {statusMessage && (
        <p
          className={`p-3 mb-4 rounded ${
            statusMessage.startsWith("✅")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {statusMessage}
        </p>
      )}

      {/* ⚠️ புதிய பகுதி: ஆர்டர் செய்யப்படும் பொருள் விவரங்கள் */}
      <fieldset className="border p-4 rounded mb-6 bg-yellow-50">
        <legend className="text-lg font-semibold text-blue-800 px-1">
          ஆர்டர் செய்யும் பொருள்
        </legend>
        {demoProduct ? (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-green-700">
              {demoProduct.nameTamil}
            </h4>
            <p className="text-sm text-gray-600">
              விலை: ₹{demoProduct.pricePerKg.toFixed(2)} / கி.கி
            </p>

            {/* அளவு (Quantity) Input */}
            <div className="flex items-center space-x-4">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 w-1/3"
              >
                தேவைப்படும் அளவு (கிராம்)
              </label>
              <input
                id="quantity"
                type="number"
                min="250"
                step="100" // 100 கிராம் படி அதிகரித்தல்
                {...register("items.0.quantityGrams", { valueAsNumber: true })}
                className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2"
              />
              {errors.items?.[0]?.quantityGrams && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.items[0].quantityGrams?.message}
                </p>
              )}
            </div>

            {/* வெட்டுதல் விருப்பம் (Cutting Option) */}
            <div className="flex items-center space-x-4">
              <label
                htmlFor="cutting"
                className="block text-sm font-medium text-gray-700 w-1/3"
              >
                வெட்டுதல் விருப்பம்
              </label>
              <select
                id="cutting"
                {...register("items.0.cuttingOption")}
                className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="WHOLE">முழு மீன் (Whole)</option>
                <option value="CURRY_CUT">கறி வெட்டு (Curry Cut)</option>
                <option value="FILLET">சதை (Fillet)</option>
              </select>
              {errors.items?.[0]?.cuttingOption && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.items[0].cuttingOption?.message}
                </p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-red-500">
            தயாரிப்பு விவரங்களைக் காட்ட முடியவில்லை.
          </p>
        )}
        <input type="hidden" {...register("items.0.productId")} />{" "}
        {/* Hidden Field-ஐ இன்னும் வைத்திருக்கிறோம் */}
      </fieldset>

      {/* வாடிக்கையாளர் விவரங்கள் */}
      <fieldset className="border p-4 rounded mb-6">
        <legend className="text-lg font-semibold text-blue-800 px-1">
          உங்கள் விவரங்கள்
        </legend>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            பெயர்
          </label>
          <input
            id="name"
            type="text"
            {...register("customer.name")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.customer?.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.customer.name.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            தொலைபேசி எண்
          </label>
          <input
            id="phone"
            type="tel"
            {...register("customer.phoneNumber")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.customer?.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">
              {errors.customer.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            மின்னஞ்சல் (விரும்பினால்)
          </label>
          <input
            id="email"
            type="email"
            {...register("customer.email")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.customer?.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.customer.email.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* டெலிவரி விவரங்கள் */}
      <fieldset className="border p-4 rounded mb-6">
        <legend className="text-lg font-semibold text-blue-800 px-1">
          டெலிவரி முகவரி
        </legend>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            முகவரி
          </label>
          <textarea
            id="address"
            rows={3}
            {...register("deliveryAddress")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.deliveryAddress && (
            <p className="text-red-500 text-xs mt-1">
              {errors.deliveryAddress.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="pincode"
            className="block text-sm font-medium text-gray-700"
          >
            பின்கோடு
          </label>
          <input
            id="pincode"
            type="text"
            {...register("pincode")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.pincode && (
            <p className="text-red-500 text-xs mt-1">
              {errors.pincode.message}
            </p>
          )}
        </div>
      </fieldset>

      {/* கட்டண முறை */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-blue-800 mb-2">
          கட்டண முறை
        </label>
        <select
          {...register("paymentMethod")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option value="COD">
            பணம் செலுத்தும் போது பணம் (Cash on Delivery - COD)
          </option>
          <option value="UPI">UPI (Google Pay/PhonePe)</option>
          <option value="CARD">அட்டை (Card)</option>
        </select>
        {errors.paymentMethod && (
          <p className="text-red-500 text-xs mt-1">
            {errors.paymentMethod.message}
          </p>
        )}
      </div>

      {/* தற்காலிகமாக ஆர்டர் ஐட்டம்ஸ் விவரங்களை ஃபார்மில் இருந்து மறைக்கிறோம்.
          நிஜத்தில், இதை ஷாப்பிங் வண்டியில் இருந்து லாஜிக்காகக் கையாள வேண்டும். 
          ஆனால் Zod validation-க்கு இது தேவைப்படுகிறது.
      */}
      {/* <div>
        <input type="hidden" {...register("items.0.productId")} />
        <input type="hidden" {...register("items.0.quantityGrams")} />
        <input type="hidden" {...register("items.0.cuttingOption")} />
      </div> */}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-green-600 transition duration-300 disabled:bg-gray-400"
      >
        {isSubmitting ? "ஆர்டர் அனுப்பப்படுகிறது..." : "ஆர்டரை உறுதிப்படுத்துக"}
      </button>
    </form>
  );
}
