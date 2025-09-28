import React, { useState } from "react";

const SnacksDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff3e0] px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl w-full items-start">
        
        {/* Left Section: Quantity + Buttons */}
        <div>
          <select
            className="w-[230px] border-3 border-[#8b4513] text-[#8b4513] rounded-md mb-4 p-2 mx-auto block"
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            <option value="">Quantity</option>
            {[1, 2, 3, 4, 5].map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>

          <p className="text-xl text-[#4b2c20] text-center font-bold mb-2">
            ${product.price * quantity}
          </p>

          <button className="bg-[#8b4513] text-white px-4 py-2 rounded-md w-[150px] mb-2 mx-auto block">
            Order
          </button>
          <button className="bg-[#8b4513] text-white px-4 py-2 rounded-md w-[150px] mx-auto block">
            Add to Cart
          </button>
        </div>

        {/* Middle Section: Title & Description */}
        <div className="flex flex-col text-center md:text-left justify-center mt-10">
          <h1 className="text-2xl font-SourceSerifPro font-bold mb-4 text-center">{product.title}</h1>
          <p className="text-[#4b2c20] text-center">{product.description}</p>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center items-start h-full">
          <div className="bg-[#f0dcc5] p-2 rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-60 h-60 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnacksDetails;
