"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextData from "../../components/TextData";
import Image from "next/image";

const Cart = () => {
  return (
    <div>
        <Header/>

        <div>
        <Image src="/assets/imgs/cart.png"  layout="responsive"
        width={100}
         height={500} alt="" />
      </div>
        <div className="min-h-screen flex flex-col bg-gray-50 my-20">
     
      <main className="flex-grow max-w-6xl mx-auto px-4 py-8  my-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Shopping Cart
            </h2>
            <table className="w-full border-collapse">
              <thead className="bg-[#fff9e5] border-b">
                <tr>
                  <th className="text-left p-3 text-gray-600 font-medium">
                    Product
                  </th>
                  <th className="text-right p-3 text-gray-600 font-medium">
                    Price
                  </th>
                  <th className="text-center p-3 text-gray-600 font-medium">
                    Quantity
                  </th>
                  <th className="text-right p-3 text-gray-600 font-medium">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    image: "/assets/imgs/img1.png",
                    price: 1000,
                    quantity: 2,
                    subtotal: 2000,
                  },
                  {
                    id: 2,
                    image: "/assets/imgs/img2.png",
                    price: 500,
                    quantity: 1,
                    subtotal: 500,
                  },
                ].map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3 text-gray-700"><Image src={item.image} height={100} width={100} alt="" /></td>
                    <td className="p-3 text-right text-gray-700">PKR {item.price}</td>
                    <td className="p-3 text-center text-gray-700">{item.quantity}</td>
                    <td className="p-3 text-right text-gray-700">
                      PKR {item.subtotal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="bg-[#fff9e5] p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cart Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Subtotal:</span>
                <span className="text-gray-800 font-bold">PKR 2500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Shipping:</span>
                <span className="text-gray-800 font-bold">PKR 200</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold ">
                <span>Total:</span>
                <span className="text-gray-900">PKR 2700</span>
              </div>
              <button className="w-full  px-4 py-2 bg-[#fff9e5] text-black font-medium rounded-lg shadow hover:bg-white text-black transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
     
    </div>

        <TextData/>
        <Footer/>
    </div>
  );
};

export default Cart;
