import { MenuIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';

const MobileMenu = () => {
  const [menu, setMenu] = useState(false);
  const menuAppear = useSpring({
    transform: menu ? 'translate3D(0,0,0)' : 'translate3D(-500px,0,0)',
    opacity: menu ? 1 : 0,
  });
  const menuback = useSpring({
    opacity: menu ? 1 : 0,
  });
  return (
    <div>
      {!menu ? (
        <div
          style={menuAppear}
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <MenuIcon className="h-12 text-neutral-200 cursor-pointer" />
        </div>
      ) : (
        <>
          <animated.div
            style={menuAppear}
            className="h-screen w-2/3 absolute top-0 left-0 bg-amber-900 z-[100] text-neutral-200"
          >
            <div className="p-5 pt-10">
              <div className="relative h-28 w-32 mb-10">
                <Image
                  src="/images/capture.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <p className="menu-item menu-text">Home</p>
              <p className="menu-item menu-text">Menu</p>
              <p className="menu-item menu-text">Page</p>
              <p className="menu-item menu-text">Blog</p>
              <p className="menu-item menu-text">Shop</p>
            </div>
            <div className="text-white flex items-center justify-center space-x-2 md:space-x-7 pt-20">
              <p className="text-lg md:text-3xl">Follow us:</p>
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
          <animated.div
            style={menuback}
            className=" h-screen w-screen backdrop-blur-lg z-[50] absolute top-0 left-0"
            onClick={() => {
              setMenu(!menu);
            }}
          ></animated.div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
