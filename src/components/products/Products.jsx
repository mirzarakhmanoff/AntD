import React, { useState } from "react";
import { Card } from "antd";
import { FaHeart } from "react-icons/fa";
import { useStateValue } from "@/context";

const { Meta } = Card;

const Products = ({ data, loading }) => {
  const [liked, setLiked] = useState({});
  const [state, dispatch] = useStateValue();

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((product) => (
        <div key={product.id} className="relative group">
          <Card
            hoverable
            className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
            cover={
              <img
                alt="product"
                className="w-full object-cover h-64"
                src={product.images[0]}
              />
            }
          >
            <Meta title={product.title} description={`$${product.price}`} />
          </Card>
          <div className="absolute top-3 right-3">
            <button
              onClick={() =>
                dispatch({ type: "TOGGLE_WISHLIST", payload: product })
              }
            >
              <FaHeart
                className={`w-8 h-8 cursor-pointer transition transform duration-200 text-gray-300 hover:scale-110 hover:text-red-500`}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
