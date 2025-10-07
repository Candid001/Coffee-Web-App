import * as motion from "motion/react-client";
import { ourSnacks, specialCoffee } from "./data";

const Products = () => {
  return (
    <>
      <div className="bg-[#FFF3E0] h-fit flex flex-col gap-10 lg:gap-16 w-auto px-[10px] pb-15">
        {/* Coffee */}
        <div className="flex flex-col gap-2 lg:gap-6">
          <div className="">
            <h1 className="text-2xl font-bold font-serif4 content-center justify-self-center">
              Our Special Coffee
            </h1>
          </div>

          <div className="flex flex-col gap-2 h-auto w-auto px-[60px] md:px-1 md:grid md:grid-cols-3 md:gap-2 md:h-fit lg:flex lg:flex-row lg:gap-12 lg:px-[100px]">
            {specialCoffee.map((coffee) => (
              <motion.div
                key={coffee.id}
                className="flex p-2 flex-col items-start gap-2 rounded-xl bg-[#8B451321] w-60 h-fit lg:w-70 lg:h-auto"
                whileHover={{
                  scale: [null, 1.1, 1.1],
                  transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                  },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <img src={coffee.img} alt={coffee.name} />

                <div className="flex w-fit h-auto space-x-9">
                  <div className="">
                    <p className="text-[#4B2C20] font-serif4 text-xl">
                      {coffee.name}
                    </p>
                    <p className="text-[#4B2C20] font-serif4 text-xl">
                      {coffee.price}
                    </p>
                  </div>

                  <button className="bg-[#8B4513] p-2 rounded-2xl text-white font-serif4 text-sm font-bold lg:w-fit lg:h-fit self-center">
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Snacks */}
        <div className="flex flex-col gap-2 lg:gap-6">
          <div className="">
            <h1 className="text-2xl font-bold font-serif4 content-center justify-self-center">
              Our Snacks
            </h1>
          </div>

          <div className="flex flex-col gap-2 h-auto w-auto px-[60px] md:px-1 md:grid md:grid-cols-3 md:gap-1 md:h-fit lg:flex lg:flex-row lg:gap-12 lg:px-[100px]">
            {ourSnacks.map((snacks) => (
              <motion.div
                key={snacks.id}
                className="flex p-2 flex-col items-start gap-2 rounded-xl bg-[#8B451321] w-60 h-fit lg:w-70 lg:h-auto"
                whileHover={{
                  scale: [null, 1.1, 1.1],
                  transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                  },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <img src={snacks.img} alt={snacks.name} />

                <div className="flex w-fit h-auto space-x-14">
                  <div className="">
                    <p className="text-[#4B2C20] font-serif4 text-xl">
                      {snacks.name}
                    </p>
                    <p className="text-[#4B2C20] font-serif4 text-xl">
                      {snacks.price}
                    </p>
                  </div>
                  <button className="bg-[#8B4513] p-2 rounded-2xl text-white font-serif4 text-sm font-bold lg:w-auto lg:h-fit self-center">
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
