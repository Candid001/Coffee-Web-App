import React, { useRef } from "react";
import { Link } from "react-router-dom";
import products from "./ProductsData";


const categoryImages = {
  "Hot Coffee": "/assets/hot coffee.svg",
  "Iced Coffee": "/assets/Iced.svg",
  "Snacks": "/assets/Snacks logo.svg",
  "Special Drinks": "/assets/special drink.svg",
};

// Card for each product
function ProductCard({ id, image, title, price }) {
  return (
    <Link
      to={`/products/${title}`}
      className="bg-[#f0dcc5] h-auto rounded-xl shadow-md hover:shadow-lg transition p-2 flex flex-col"
    >
      <img
        src={image}
        alt={title}
        className="mb-2 w-full h-auto object-contain"
      />
      <h3 className="font-SourceSerifPro font-regular text-[#4b2c20] text-[16px]">
        {title}
      </h3>
      <p className="text-[#4b2c20] font-SourceSerifPro font-regular text-[19px]">
        ${price}
      </p>
    </Link>
  );
}

const Menu = () => {
  // find all unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  // refs for scrolling to each section
  const sectionRefs = {};
  categories.forEach((cat) => {
    sectionRefs[cat] = useRef(null);
  });

  // function to scroll
  const scrollToSection = (cat) => {
    sectionRefs[cat].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-full mx-auto px-6 py-10 bg-[#fff3e0]">
      <h1 className="text-2xl font-SourceSerifPro font-bold text-center mb-8">
        Order Now
      </h1>

      {/* Category Navigation */}
      <div className="flex justify-center gap-15 mb-10 flex-wrap">
        {categories.map((cat) => (
          <div
            key={cat}
            className="cursor-pointer text-center text-[#4b2c20]"
            onClick={() => scrollToSection(cat)}
          >
            <img
              src={categoryImages[cat]}
              alt={cat}
              className="w-16 h-16 object-contain mx-auto mb-2 hover:scale-110 transition"
            />
            <p className="text-2xl font-SourceSerifPro font-semibold">{cat}</p>
          </div>
        ))}
      </div>

      {/* Category Sections */}
      {categories.map((cat) => {
        const filtered = products.filter((p) => p.category === cat);

        return (
          <div key={cat} ref={sectionRefs[cat]} className="mb-12">
            <h2 className="text-2xl font-SourceSerifPro font-bold mb-6 pt-15 text-center">
              {cat}
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
                {filtered.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;