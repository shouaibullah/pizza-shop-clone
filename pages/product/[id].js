import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [price, setPrice] = useState(0);
  const product = {
    name: 'BBQ Pizza TinTin',
    disc: 'Gorgonzola, mozzarella, taleggio Red onions, capers, olives Porem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla faciNullama urna sit amet tellus pellentesque egestas in in ante.',
    image: '/images/burger.png',
    prices: ['20', '30', '50'],
    options: ['Small', 'Medium', 'Larg'],
  };
  return (
    <section>
      {/* banner */}
      <div className=" relative min-h-[20rem]">
        <Image
          src="/images/banner.png"
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div className=" absolute top-1/3 left-[45%] space-y-5 flex flex-col justify-center items-center">
          <h2 className=" text-4xl font-bold">Shop</h2>
          <h3 className=" text-xl">BBQ Pizza TinTin</h3>
          <Link href="/" passHref>
            <span className=" text-gray-500 hover:underline hover:text-gray-700">
              Back to Home Page
            </span>
          </Link>
        </div>
      </div>
      {/* cart start here */}
      <cart className="flex flex-col md:flex-row items-center max-w-5xl mx-auto md:space-x-20">
        {/* left side */}
        <div>
          <Image
            src={product.image}
            alt=""
            width="400"
            height="400"
            objectFit="contain"
          />
        </div>
        {/* right side */}
        <div className="w-96 space-y-4">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <h2 className=" text-xl font-bold">{product.prices[price]}</h2>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={
                  index <= (hover || rating)
                    ? 'text-amber-900'
                    : ' text-neutral-400'
                }
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
          <p>{product.disc}</p>
          <div className=" space-x-4 w-72">
            <input
              type="radio"
              id="double"
              name="double"
              onClick={() => {
                setPrice(0);
              }}
            />{' '}
            {product.options[0]}
            <input
              type="radio"
              id="double"
              name="double"
              onClick={() => {
                setPrice(1);
              }}
            />{' '}
            {product.options[1]}
            <input
              type="radio"
              id="double"
              name="double"
              onClick={() => {
                setPrice(2);
              }}
            />{' '}
            {product.options[2]}
          </div>
          <div className="flex space-x-3">
            <div
              className=" bg-amber-900  text-neutral-200 flex justify-center items-center h-12 
            w-72 cursor-pointer"
            >
              Add to Cart
            </div>
            <div className="bg-amber-900 border-2">
              <input
                type="number"
                defaultValue={0}
                className=" w-11 h-11 text-gray-100 bg-amber-900 text-center focus:outline-none"
              />
            </div>
          </div>
        </div>
      </cart>
    </section>
  );
};

export default Cart;
