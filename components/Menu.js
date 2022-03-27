import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const menuAppear = useSpring({
    transform: menu ? 'translate3D(0,0,0)' : 'translate3D(0,-800px,0)',
    opacity: menu ? 1 : 0,
    delay: 200,
  });
  return (
    <div
      className="flex items-center justify-center bg-amber-900/50 backdrop-blur-xl h-20
     z-50"
    >
      <div
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <MenuIcon className="h-16 text-amber-900 cursor-pointer" />
      </div>
      {menu && (
        <animated.div
          style={menuAppear}
          className=" bg-amber-900/90 absolute top-0 left-0 h-screen w-screen"
        >
          <div
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <XIcon className=" h-20 text-neutral-200 ml-auto pr-8 pt-5 cursor-pointer" />
          </div>
          <div className="p-10">
            <p className="menu-item menu-text">Home</p>
            <p className="menu-item menu-text">Menu</p>
            <p className="menu-item menu-text">Page</p>
            <p className="menu-item menu-text">Blog</p>
            <p className="menu-item menu-text">Shop</p>
          </div>

          <div className="text-white flex items-center justify-center space-x-7 pt-16">
            <p className=" text-3xl">Follow us:</p>
            <div className=" cursor-pointer">
              <Image
                src="/svgs/facebook.svg"
                alt=""
                width="40"
                height="40"
                objectFit="contain"
              />
            </div>
            <div className=" cursor-pointer">
              <Image
                src="/svgs/instagram.svg"
                alt=""
                width="40"
                height="40"
                objectFit="contain"
              />
            </div>
            <div className=" cursor-pointer">
              <Image
                src="/svgs/telegram.svg"
                alt=""
                width="40"
                height="40"
                objectFit="contain"
              />
            </div>
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default Menu;
