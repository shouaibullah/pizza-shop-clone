import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import MobileMenu from './MobileMenu';
import Menu from './Menu';
import { useSpring, animated } from 'react-spring';

const Header = () => {
  const [nav, setNav] = useState(false);

  const navAnimation = useSpring({
    transform: nav ? 'translate3D(0,0,0)' : 'translate3D(0,-800px,0)',
  });

  const setMenuIcon = () => {
    if (window.scrollY > 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', setMenuIcon);
  }, []);
  return (
    <>
      {!nav ? (
        <section className=" h-20 flex justify-between items-center px-4 lg:px-16 bg-amber-900">
          {/* left side */}
          <div className="space-x-5 hidden lg:flex">
            <p className="menu-item">Home</p>
            <p className="menu-item">Menu</p>
            <p className="menu-item">Page</p>
            <p className="menu-item">Blog</p>
            <p className="menu-item">Shop</p>
          </div>
          {/* middle side */}
          <div className="relative h-20 w-32 hidden lg:inline-block">
            <Image
              src="/images/capture.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          {/* mobile menu components */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
          {/* right side */}
          <div
            className=" relative h-12 w-12 rounded-full bg-neutral-200 hover:bg-yellow-600 
            duration-300 flex items-center justify-center cursor-pointer group"
          >
            <div
              className="h-6 w-6 rounded-full bg-amber-900 absolute -top-1 -right-1 flex 
              items-center justify-center text-neutral-200 group-hover:animate-pulse"
            >
              2
            </div>
            <ShoppingCartIcon className="menu-icon group-hover:text-neutral-200" />
          </div>
        </section>
      ) : (
        <animated.div style={navAnimation} className=" sticky top-0 z-[1000]">
          <Menu setNav={setNav} />
        </animated.div>
      )}
    </>
  );
};

export default Header;
