import React from "react";

const ProductCard = ({ product }) => {
  console.log("Iterating over Products:", product);
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] gap-3 p-4 mt-10 ml-5 rounded-xl group   hover:shadow-[0px_-50px_100px_80px_rgba(0,0,0,0.08)]">
      <div className="h-[180px]">
        <img
          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          className="h-full w-full"
        />
      </div>
      <div>
        <p className="text-gray-700 font-semibold font-mono text-lg text-left truncate w-40 mt-1">
          {product.name}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {product.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className="flex justify-between gap-20 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold text-[15px]">
            ${product.price}
          </p>
        </div>

        <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1
            uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in tracking-wide"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
