import React from 'react';
import Image from 'next/image';

const cart = () => {
  const product = {
    name: 'BBQ Pizza TinTin',
    image: '/images/burger.png',
    total: ['$20'],
    Qty: '1',
    size: 'Small',
  };
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center py-10 px-4 space-x-10 h-[90vh]">
      {/* right side */}
      <div className=" h-full lg:px-8">
        <table>
          <tr className=" border-b-2">
            <th className="th-style">Product</th>
            <th className="th-style">Quantity</th>
            <th className="th-style">Size</th>
            <th className="th-style">Total</th>
          </tr>
          <tr className=" border-b-2">
            <th>
              <div className="flex items-center">
                <Image
                  src={product.image}
                  width="100"
                  height="100"
                  alt=""
                  objectFit="contain"
                />
                <p className="text-xs">{product.name}</p>
              </div>
            </th>
            <th>{product.Qty}</th>
            <th>{product.size}</th>
            <th>{product.total}</th>
            <th>
              <button>X</button>
            </th>
          </tr>
        </table>
      </div>
      {/* left side  */}
      <div
        className=" bg-amber-900 text-neutral-200 px-10 
      h-[22rem] space-y-5 flex flex-col items-center py-10 shadow-2xl my-auto"
      >
        <h2 className=" text-4xl font-bold border-b-2 w-full">Payment Info</h2>
        <p className="w-full border-b-2">
          Total Price <span className="pl-4">{product.total}</span>
        </p>
        <p className="w-full">Payment Method</p>
        <div className="flex justify-evenly space-x-2 border-b-2 pb-2 w-full">
          <button className="method-button">Cash On Delivery</button>
          <button className="method-button w-20">PayPal</button>
        </div>
        <button
          className=" bg-neutral-200 text-amber-900 rounded-full
         h-10 w-64"
        >
          Payment
        </button>
      </div>
    </div>
  );
};

export default cart;
