import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div
      className=" bg-amber-900 text-neutral-200 pt-8 px-4 flex flex-col md:flex-row space-y-4
     md:space-x-4 items-center justify-between lg:px-32"
    >
      <div className=" relative h-72 w-96">
        <Image
          src="/images/burger.jpg"
          layout="fill"
          alt=""
          objectFit="contain"
        />
      </div>
      <div className=" max-w-sm space-y-3">
        <h2>
          address: Gorgonzola, mozzarella, taleggio Red onions, capers, olives
          Porem ipsum dolor sit amet,
        </h2>
        <h2>Contact us: +1 233 454 666</h2>
        <h2>© 2022 All Rights Reserved by Damn Code with Shekib</h2>
      </div>
    </div>
  );
};

export default Footer;
