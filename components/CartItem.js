import React from 'react';
import Image from 'next/image';

const CartItem = ({ result }) => {
  return (
    <section
      className=" relative border-2 flex flex-col justify-center items-center h-[28rem] w-[27rem] mx-auto hover:shadow-lg
      border-amber-700/30 duration-300 mb-10 hover:bg-neutral-100 group"
    >
      <Image
        src={result.image}
        alt=""
        width="200"
        height="200"
        objectFit="contain"
      />
      <div
        className="absolute top-36 left-[35%] opacity-0 -mt-10 group-hover:opacity-100 duration-500
      group-hover:mt-0 bg-amber-700 px-5 py-2 rounded-full cursor-pointer shadow-lg shadow-amber-400"
      >
        <button className=" text-neutral-200">View Options</button>
      </div>

      <div className="flex flex-col items-center w-64 space-y-2">
        <h3 className="text-xl font-bold">{result.name}</h3>
        <p className="text-black">{result.disc}</p>
      </div>
      <div className="flex justify-between w-60 pt-10">
        <button>Add to Cart</button>
        <h2 className=" text-lg font-bold">{result.price}</h2>
      </div>
    </section>
  );
};

export default CartItem;
