import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/login/login";
import Allproducts from "./components/Allproducts";
import Signup from "./pages/signup/signup";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseAuth/FirebaseAuth";
import SingleProductPage from "./pages/singleProduct/singleProduct";
import Contact from "./components/Contact";
import About from "./components/About";
import PaymentPage from "./components/PaymentPage";

function App() {
  const [cart, setCart] = useState([]);

  const [promocode, setpromoCode] = useState("");

  const [discount, setDiscount] = useState(0);

  const [userName, setUserName] = useState("");

  //function for add to cart feature with increasing quantity for similar products instead of adding seperately
  const AddToCart = (products) => {
    const isProductExist = cart.find((findItem) => findItem.id === products.id);
    if (isProductExist) {
      const upDateCart = cart.map((item) =>
        item.id === products.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(upDateCart);
    } else {
      setCart([...cart, { ...products, quantity: 1 }]);
    }
  };

  //function for increasing quantity using increase button
  const handleInc = (id) => {
    const incQuantity = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCart(incQuantity);
  };

  //function for decreasing quantity using decrease button
  const handleDec = (id) => {
    const decQuantity = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(decQuantity);
  };

  //function for remvoing items from cart
  const handleRemove = (id) => {
    const updateByFilter = cart.filter((filteritem) => filteritem.id !== id);
    setCart(updateByFilter);
  };

  //function for calculating total price of items in the cart
  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price * cartReduceItem.quantity;
    }, 0);
    return totalPrice - discount;
  };

  //function for applying promocode

  const applyPromoCode = () => {
    if (promocode === "SAIFI15") {
      setDiscount(getTotalPrice() * 0.15);
      setpromoCode("");
    } else {
      alert("Invalid promo code");
    }
  };

  //username display
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar cart={cart} userName={userName} />
          <Routes>
            <Route path="/" element={<Home AddToCart={AddToCart} />} />
            <Route
              path="/Cart"
              element={
                <Cart
                  cart={cart}
                  handleInc={handleInc}
                  handleDec={handleDec}
                  handleRemove={handleRemove}
                  getTotalPrice={getTotalPrice}
                  applyPromoCode={applyPromoCode}
                  promocode={promocode}
                  setpromoCode={setpromoCode}
                />
              }
            />
            <Route
              path="/allproducts"
              element={<Allproducts AddToCart={AddToCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/paymentPage" element={<PaymentPage />} />
            <Route
              path="/singleProduct/:ProId"
              element={<SingleProductPage AddToCart={AddToCart} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Signup />} />
          </Routes>
          <Toaster />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
