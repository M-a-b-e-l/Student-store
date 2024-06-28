import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import SubNavbar from "../SubNavbar/SubNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import { removeFromCart, addToCart, getQuantityOfItemInCart, getTotalItemsInCart } from "../../utils/cart";
import "./App.css";

function App() {

  // State variables
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", id: ""});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);
  const baseUrl = "http://localhost:3000";

  // Toggles sidebar
  const toggleSidebar = () => setSidebarOpen((isOpen) => !isOpen);

  // Functions to change state (used for lifting state)
  const handleOnRemoveFromCart = (item) => setCart(removeFromCart(cart, item));
  const handleOnAddToCart = (item) => setCart(addToCart(cart, item));
  const handleGetItemQuantity = (item) => getQuantityOfItemInCart(cart, item);
  const handleGetTotalCartItems = () => getTotalItemsInCart(cart);

  const handleOnSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

    // Fetch products on mount
    useEffect(() => {
      const fetchProducts = async () => {
        setIsFetching(true);
        try {
          const response = await axios.get(`${baseUrl}/products`);
          setProducts(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setIsFetching(false);
        }
      };
      fetchProducts();
    }, []);

  const handleOnCheckout = async () => {
    //Setting isCheckingOut to true 
    setIsCheckingOut(true);

    try {
      const order = {
        customer_id: parseInt(userInfo.name), 
        total_price: 6, 
        status: "completed", 
      }

      console.log("order is being processed ")

      //make a post request to the localhost:3000/orders
      let response = await axios.post(`${baseUrl}/orders`, order);
      const orderid = response.data.order_id;
      console.log(orderid);

          //create an order with the cart items
      const orderItems = Object.entries(cart).map(key => ({
        product_id: parseInt(key[0]),
        quantity: key[1],
      }));
      console.log(orderItems);

      await axios.post(`${baseUrl}/orders/${orderid}/items`, {items: orderItems});
      // await axios.put(`${baseUrl}/orders/${orderid}`, {status: "completed"});
      response = await axios.get(`${baseUrl}/orders/${orderid}`);

      //reset the cart
      setOrder(response.data);
      setCart({});
      setUserInfo({name: "", id: ""});

      //handle success and error responses 
    } catch (error) {
      console.error('Error checking out:', error);
      setError(error.message);
    } finally {
      // console.log("Checkout sucessfull")
      setIsCheckingOut(false);
    }

    

    
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar
          cart={cart}
          error={error}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          isOpen={sidebarOpen}
          products={products}
          toggleSidebar={toggleSidebar}
          isCheckingOut={isCheckingOut}
          addToCart={handleOnAddToCart}
          removeFromCart={handleOnRemoveFromCart}
          getQuantityOfItemInCart={handleGetItemQuantity}
          getTotalItemsInCart={handleGetTotalCartItems}
          handleOnCheckout={handleOnCheckout}
          order={order}
          setOrder={setOrder}
        />
        <main>
          <SubNavbar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            searchInputValue={searchInputValue}
            handleOnSearchInputChange={handleOnSearchInputChange}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  error={error}
                  products={products}
                  isFetching={isFetching}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  addToCart={handleOnAddToCart}
                  searchInputValue={searchInputValue}
                  removeFromCart={handleOnRemoveFromCart}
                  getQuantityOfItemInCart={handleGetItemQuantity}
                />
              }
            />
            <Route
              path="/:productId"
              element={
                <ProductDetail
                  cart={cart}
                  error={error}
                  products={products}
                  addToCart={handleOnAddToCart}
                  removeFromCart={handleOnRemoveFromCart}
                  getQuantityOfItemInCart={handleGetItemQuantity}
                />
              }
            />
            <Route
              path="*"
              element={
                <NotFound
                  error={error}
                  products={products}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
 