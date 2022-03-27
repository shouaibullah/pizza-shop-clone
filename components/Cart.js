import React from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'BBQ Pizza TinTin',
      image: '/images/burger-1.png',
      disc: 'Gorgonzola, mozzarella, taleggio Red oniones, capres,olives',
      price: '$5',
    },
    {
      id: 2,
      name: 'BBQ Pizza TinTin',
      image: '/images/pizza-2.png',
      disc: 'Gorgonzola, mozzarella, taleggio Red oniones, capres,olives',
      price: '$25',
    },
    {
      id: 3,
      name: 'BBQ Pizza TinTin',
      image: '/images/pizza-3.png',
      disc: 'Gorgonzola, mozzarella, taleggio Red oniones, capres,olives',
      price: '$30',
    },
    {
      id: 4,
      name: 'BBQ Pizza TinTin',
      image: '/images/pizza-slider.png',
      disc: 'Gorgonzola, mozzarella, taleggio Red oniones, capres,olives',
      price: '$25',
    },
    {
      id: 5,
      name: 'BBQ Pizza TinTin',
      image: '/images/burger.png',
      disc: 'Gorgonzola, mozzarella, taleggio Red oniones, capres,olives',
      price: '$20',
    },
    {
      id: 6,
      name: 'BBQ Pizza TinTin',
      image: '/images/chips.png',
      disc: 'Gorgonzola, mozzarella, taleggio Red oniones, capres,olives',
      price: '$2',
    },
  ];
  return (
    <>
      <div className=" max-w-md mx-auto flex flex-col items-center space-y-8 py-10">
        <h2 className="font-bold">FRESH FROM PIZZA SHOP</h2>
        <h1 className=" text-4xl font-bold text-center">
          We Offer People Best Way To Eat Best Food
        </h1>
      </div>
      <main className=" max-w-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {cartItems.map((cartItem) => (
          <CartItem result={cartItem} key={cartItem.id} />
        ))}
      </main>
    </>
  );
};

export default Cart;
