"use client";

import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { allProducts } from "../../../sanity/lib/queries";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Review {
  reviewerName: string;
  rating: number; // 1 to 5
  comment: string;
}

interface Product {
  _id: string;
  productName: string;
  price: number;
  image?: string;
  reviews?: Review[]; // Reviews field
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const addReview = (productId: string, review: Review) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId
          ? {
              ...product,
              reviews: product.reviews
                ? [...product.reviews, review]
                : [review],
            }
          : product
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Our New Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h2 className="text-lg font-semibold mt-4">
              {product.productName}
            </h2>
            <p className="text-gray-500 mt-2">
              {product.price ? `$${product.price}` : "Price not available"}
            </p>
            <div className="mt-4">
              <h3 className="text-md font-bold">Reviews:</h3>
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div key={index} className="mt-2">
                    <p className="text-sm font-semibold">{review.reviewerName}</p>
                    <p className="text-sm text-yellow-500">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </p>
                    <p className="text-sm">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No reviews yet.</p>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-md font-bold">Add a Review:</h3>
              <AddReviewForm
                productId={product._id}
                onAddReview={addReview}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AddReviewForm = ({
  productId,
  onAddReview,
}: {
  productId: string;
  onAddReview: (productId: string, review: Review) => void;
}) => {
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = { reviewerName, rating, comment };
    onAddReview(productId, newReview);
    setReviewerName("");
    setRating(5);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <input
        type="text"
        value={reviewerName}
        onChange={(e) => setReviewerName(e.target.value)}
        placeholder="Your Name"
        className="border w-full p-2 mb-2 rounded"
        required
      />
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border w-full p-2 mb-2 rounded"
      >
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>
            {r} Star{r > 1 && "s"}
          </option>
        ))}
      </select>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your Review"
        className="border w-full p-2 mb-2 rounded"
        rows={3}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ShopPage;
