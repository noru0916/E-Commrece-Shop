import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, NavBar, Cart } from "./components";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCard = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCard();
  }, []);

  return (
    <div>
      <NavBar totalItems={cart.total_items} />
      {/*<Products products={products} onAddToCart={handleAddToCart} />*/}
      <Cart cart={cart} />
    </div>
  );
};

export default Index;
