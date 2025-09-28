import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "./ProductsData";
import SnacksDetails from "./SnacksDetails";

const ProductDetails = () => {
  const { title } = useParams();
  const product = products.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );


  //  Allowed categories for this design
  const allowedCategories = ["Hot Coffee", "Iced Coffee", "Special Drinks"];

  //  If it's Snacks → load SnacksDetails instead
if (product.category === "Snacks") {
  return <SnacksDetails product={product} />;
}


  //  State for customization
  const [milk, setMilk] = useState("");
  const [sweetener, setSweetener] = useState("");
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff3e0] px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full items-start">
        
        {/* Left Section: Customization */}
        <div>
          <h2 className="font-SourceSerifPro font-bold text-2xl text-center mb-4">
            Make Your Own {product.title}
          </h2>

          {/* Milk */}
          <select
            className="w-[230px] text-[#8b4513] border-3 border-[#8b4513] mb-4 p-2 mx-auto block"
            onChange={(e) => setMilk(e.target.value)}
          >
            <option value="">Milk</option>
            <option value="Whole">Whole</option>
            <option value="Skimmed">Skimmed</option>
            <option value="Soy">Soy</option>
          </select>

          {/* Sweetener */}
          <select
            className="w-[230px] text-[#8b4513] border-3 border-[#8b4513] mb-4 p-2 mx-auto block"
            onChange={(e) => setSweetener(e.target.value)}
          >
            <option value="">Sweetener</option>
            <option value="Sugar">Sugar</option>
            <option value="Honey">Honey</option>
            <option value="Stevia">Stevia</option>
          </select>

          {/* Quantity */}
          <select
            className="w-[230px] text-[#8b4513] border-3 border-[#8b4513] mb-4 p-2 mx-auto block"
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="">Quantity</option>
            {[1, 2, 3, 4, 5,].map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>

          <p className="text-2xl text-[#4b2c20] font-SourceSerifPro font-bold mb-2 text-center">
            ${product.price * quantity}
          </p>
          <button className="w-[150px] bg-[#8b4513] text-white font-SourceSerifPro font-regular px-4 py-2 rounded-md mb-2 mx-auto block">
            Order
          </button>
          <button className="w-[150px] bg-[#8b4513] font-SourceSerifPro font-regular text-white px-4 py-2 rounded-md mb-2 mx-auto block">
            Add to Cart
          </button>
        </div>

        {/* Middle Section: Description + Sizes */}
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-2xl text-center font-bold font-SourceSerifPro mb-4">{product.title}</h1>
          <p className="text-[#8b4513] mb-6 text-center">{product.description}</p>

          <h3 className="font-SourceSerifPro font-bold text-xl text-center mt-20 mb-3">Size Options</h3>
          <div className="flex gap-8 justify-center mt-5">
            <div className="flex flex-col items-center">
            <img src="/assets/Coffe cup.svg" alt="small" className="w-4 mt-3" />
            <p className="text-[12px] mt-1 font-SourceSerifPr font-regulat">8 fl</p>
            <p className="text-sm mt-1">Small</p>
            </div>

            <div className="flex flex-col items-center">
            <img src="/assets/Coffe cup.svg" alt="small" className="w-5 mt-2" />
            <p className="text-[12px] font-SourceSerifPr font-regulal mt-1">12 fl</p>
            <p className="text-sm mt-1">Medium</p>
            </div>

            <div className="flex flex-col items-center">
            <img src="/assets/Iced.svg" alt="small" className="w-8" />
            <p className="text-[12px] mt-1 font-SourceSerifPr font-regular">16 fl</p>
            <p className="text-sm mt-1 font-SourceSerifPr font-regula">Large</p>
            </div>

            
            
            
            
            
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center items-start h-full ">
          <div className="bg-[#f0dcc5] p-2  rounded-lg ">
            <img
              src={product.image}
              alt={product.title}
              className="w-70 h-70 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
