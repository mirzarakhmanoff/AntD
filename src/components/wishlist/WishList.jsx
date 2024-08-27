import React from "react";
import { Card } from "antd";
import { useStateValue } from "@/context";
import { FaHeart } from "react-icons/fa";

const { Meta } = Card;

const WishList = () => {
  const [{ wishlist }] = useStateValue();
  console.log(wishlist);

  return (
    <div className="flex justify-start items-start">
      {wishlist?.map((product) => (
        <div
          key={product.id}
          className="relative w-max container mx-auto flex items-center justify-center"
        >
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

export default WishList;
