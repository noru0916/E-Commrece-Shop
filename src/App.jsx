import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, NavBar, Cart } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
    <BrowserRouter>
      <div>
        <NavBar totalItems={cart.total_items} />
        <Switch>
          <Route exact path={"/"}>
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path={"/cart"}>
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Index;
