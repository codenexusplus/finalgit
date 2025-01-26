
"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextData from "../../components/TextData";
import Image from "next/image";

const Checkout = () => {
  return (
    <div>
        <Header/>
        <div>
       <Image src="/assets/imgs/checkout.png"  layout="responsive"
        width={100}
         height={500} alt="" />
      </div>
<div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow py-4">
      
      </header>
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping Details */}
            <div className="lg:col-span-2 space-y-6 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Shipping Details
              </h2>
              <div className="space-y-4">
                {[
                  { label: "First Name", name: "firstName" },
                  { label: "Last Name", name: "lastName" },
                  { label: "Country/Region", name: "country" },
                  { label: "Street Address", name: "streetAddress" },
                  { label: "Town/City", name: "townCity" },
                  { label: "Province", name: "province" },
                  { label: "ZIP Code", name: "zipCode" },
                  { label: "Phone", name: "phone" },
                  { label: "Email", name: "email" },
                  { label: "Additional Information", name: "additionalInfo" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-gray-600 mb-1"
                    >
                      {field.label}
                    </label>
                    {field.name === "additionalInfo" ? (
                      <textarea
                        id={field.name}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    ) : (
                      <input
                        type={field.name === "email" ? "email" : "text"}
                        id={field.name}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary & Payment */}
            <div className="space-y-6 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Order Summary
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sample Item 1</span>
                  <span>1 x PKR 1000</span>
                </div>
                <div className="flex justify-between">
                  <span>Sample Item 2</span>
                  <span>2 x PKR 500</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold mt-4">
                  <span>Sub Total:</span>
                  <span className="text-gray-800">PKR 2000</span>
                </div>
                <div className="flex justify-between font-semibold mt-4">
                  <span>Shipping Charges</span>
                  <span>PKR 200</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold mt-4">
                  <span>Total:</span>
                  <span className="text-gray-800">PKR 2200</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Payment Method
                </h3>
                <div className="space-y-2">
                  {["Cash on Delivery", "EasyPaisa", "JazzCash"].map(
                    (method) => (
                      <label
                        key={method}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method}
                          className="h-4 w-4"
                        />
                        <span>{method}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
    <TextData/>
      <Footer/>

    </div>
  
  );
};

export default Checkout;
