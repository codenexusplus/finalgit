'use client'

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function About() {
  return (
    <> 
    <Header/>
    <div className="flex flex-col items-center px-6 py-12 lg:px-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl">
        Welcome to <span>Ecomerce</span>! Were passionate about bringing you the best products from around the world. Our mission is to deliver high-quality, affordable, and unique items that fit your lifestyle and make shopping an enjoyable experience.
      </p>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-[#1D1743] mb-4">Our Story</h2>
          <p className="text-gray-600">
            Founded in 2022, Ecommerce started as a small family business and has grown into a well-loved e-commerce platform. We believe in building a community of like-minded shoppers who value quality, affordability, and style.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-[#1D1743] mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to connect people with products they love, while maintaining exceptional customer service and creating an inclusive, enjoyable shopping experience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-[#1D1743] mb-4">Quality & Value</h2>
          <p className="text-gray-600">
            We carefully select our products to ensure quality and value. Whether you're looking for fashion, home decor, or tech accessories, we guarantee satisfaction with every purchase.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Makes Us Different?</h2>
        <ul className="text-lg text-gray-600 space-y-4 list-disc list-inside">
          <li>Curated collections that align with current trends.</li>
          <li>Personalized recommendations to enhance your shopping experience.</li>
          <li>Responsive and friendly customer support available 24/7.</li>
          <li>Fast and reliable shipping with hassle-free returns.</li>
        </ul>
      </section>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-[#1D1743] mb-4">Join Our Community</h3>
        <p className="text-gray-600 mb-6">
          Follow us on social media and subscribe to our newsletter to stay updated on new arrivals, promotions, and more!
        </p>
        <button className="bg-[#1D1743] text-white py-2 px-6 rounded-lg hover:bg-[#0A0830] transition duration-300">
          Subscribe Now
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
}
