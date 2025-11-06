import React, { useState } from "react";
import "./App.css";

function App() {
  const [category, setCategory] = useState("tshirts");
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    addressLine: "",
    city: "",
    pincode: "",
  });

  const products = {
    tshirts: [
      { id: 1, name: "Blue T-Shirt", price: 499, image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTtDA4NL9UswGXZLzI6po2njEcbXnwZYnE_61iYBcBCAI0NhEgtxjsjbZUy_Eq_lahivJz_dwN3IPkGbS_i99xlNXhCBCJz3RfLsayjr0PiwIHWzNlMiRlALg"},
      { id: 2, name: "Red T-Shirt", price: 599, image: "https://iruve.in/cdn/shop/files/Round_Neck_T-Shirt_Mockup_-_baloo_aparauapa_-_red.png?v=1719074585"},
      { id: 3, name: "White T-Shirt", price: 699, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIY969YenTvHsgWRjmSsFWgpWdnRS0aEaYw&s"},
      {id :4, name:"Black T-Shirt" ,price:500,image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStJrQjQADSncmAGGFMLTGXXQ2RsnX_getyL9s1U6hgzhyRhDyAir3keBh3FfaDuJPjWmBhknQZw8ElTY22ritntAmRpzgE2pklvYa8NWJ6AUJWTzsXrWnafDU"},
    ],
    jeans: [
      { id: 5, name: "Blue Jeans", price: 1299, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzpT0xK6NdcBEgrroxOVae7GS2CrNt797ky9L1W-zK6IT7aS5L8FZYDmqDBj3NXMHtVDYy-iPA6UYkDuq82uIjOiR8DcTp6ePoj6kKPtvwauN0B_V6ruaa"},
      { id: 6, name: "Black Jeans", price: 1399, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGlqNLTbj03UdNOM-1uoMSrOl8wAcxdZwRXDQH3GLQtU_2RAdPoE5vBE7xtf7GcUbMUfE1wR-3UlxhkRY3FV_RNDRSUH9u2xkZpcaAuV84myzAyuBZVWSI"},
      { id: 7, name: "Grey Jeans", price: 1499, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDMKpjfj7Hav8SGxQHMr1YldkT8CslAT6Hdx8fU9lJT-jP6HbuatIigN_mkHClJaxGEVg1bmY3ibPi5UF3LTjQ0_hX0vGMsc444QdlCU_9nS95OdJzFcoE"},
      { id: 8, name: "Denim Jeans", price: 1599, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVcg6XAwQz3Q6uI0Dsc86LIvfQG5gbblBV2jy-OXKYgwW5sS1VgvG8jTsyLtUCAZ2ZWNN5fb-qa-cFyXQemTaP8DKhG1Tkh7hjpijTiQ-NW45ZyVVnsAFpNWk"},
    ],
    kurtis: [
      { id: 9, name: "Red Kurti", price: 999, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTX561sS_6iKzJUdsw-EKrRgF2JR6lq_R0cYaGM--5KF_JBNfQzIYzax1pwEtMnqngkNc6KRO4PU8fmlzTmHn8a07DSEqjW8n7Xb8e0u2zAWNtuV9JE2KrAew"},
      { id: 10, name: "Blue Kurti", price: 1099, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRl9cH3qZVkBZER21LKDtnNGfqtcewVd_kx00eGbotpqqAOT6pfuVwDfU_9bD3luph-QFJ8L46wVQvlWskMwf0mqpsILLaDqEwAXmQS4ctM"},
      { id: 11, name: "Yellow Kurti", price: 899, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS8C6DjScubZTMjSg6prLUQk9to3m4hrVDgNar6uZ4weI47MmK7FgnHTI40Gx52LD10TFoCyGlAgPD6-CKQVIV5YabzOcJr2HyBEEGDY41uF5h7g58SmLLpvQ"},
      { id: 12, name: "Green Kurti", price: 1199, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDUAZ5GdlIeXm8yf6HVjsK6U72Fb4M-bTHG-nNpA9UXZqtXtmAcdDLIWUaCvqtmPwFsn5OyKTop75zqJKKjmJbleekKvBgxWTjexSIGbU-iQXYd3GfhDYCFA"},
    ],
    sneakers: [
      { id: 13, name: "White Sneakers", price: 1999, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRVC0QkEyzbeu0LinjWJkDYORh-SdKnNx1pgABRRgMxTFrQoSPcNjKlBirfqOh631xjPl6wa5la_orWf7XsD_4YqO8L5BGJMtN1Fm_c197fTEmXVo9f1BjBMA"},
      { id: 14, name: "Black Sneakers", price: 2099, image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSXNTK_ocxkTP3ZnQCuZCrNnID-7CpLlTPt1N-cPLV6xL_bpaRhfiuubQ6kiy7s_by7sznukHPG-J5tOBTvHvbeWKJ3hgNLRX9uKXWen32jvPU4XD7iv9cNHQ"},
      { id: 15, name: "Red Sneakers", price: 1899, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_Sp7zX2WaorZUpS04rgG_9NRnHove-wswJaPJ2GWclTXnAfLYef_ld4AX4rOgfdnfKN6PSBWEWnBWkrdlG4HWNsHLDEzeZx7z-fdX0BlChBLfE7JOh6p7"},
      { id: 16, name: "Blue Sneakers", price: 2199, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRY0HPLAO1tredMZW5uFIpBYrDo9uVnUSCqbPm8zIVlfmxjy1U7LthgbtUYfCz2GNXE4Dxbd_KAI14El0hfwP2pykSHY6tKTAA3fJqqOuh_mqYMi4ED4GUp"},
    ],
    watches: [
      { id: 17, name: "Classic Watch", price: 2999, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRshJ9I8WCQa2-JB2JDzOR5aNZUBlohdbYOuslNs-kDe3PlXIRsoxD2aAQuDL443F9kgw6TPFciRxvr7Ql9p5JN4RgnwfCHPo-TzG05xWHuFeIV2zT6awpRBA"},
      { id: 18, name: "Digital Watch", price: 2599, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTJXhNTQXmhKIJE-jnvtAbz1hOBxVLgiBMq_gpQAW_u8m90f8diJh1iNL_Q43RcFH1QfmBhPaaO3vZ6dft5xmVT6Fj8nT-eWljkrVnkc5zYUuAJfUSM9YmWBA"},
      { id: 19, name: "Leather Watch", price: 3499, image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQhCZaZ4Xqlkjf1_sHsCQ2ynnhrEbKOXzODY9eJvz93byHaR_cQORw5dGIV_fQ5ZWMQTb3N0IyT3RCkhUXGHxkwtV4kuKEZ72h4Ew1YGZp6LtRw1XXFT3yhg"},
      { id: 20, name: "Modern Watch", price: 3299, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQaj77u2Z7FmEiIUkaiaisGT2Miy3pZQsOA_cIGXqQd1pUVMSR22DRUpKeLOVRCWlh5CPfXwJBOllgmGEC7V2VBIy70yRPazIgDrurxBDqsKyo5RtJ1oGms"},
    ],
  };

  const addToCart = (product) => setCart([...cart, product]);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setCheckout(true);
  };

  const placeOrder = (e) => {
    e.preventDefault();
    if (!address.name || !address.addressLine || !address.city || !address.pincode) {
      alert("Please fill all address details!");
      return;
    }
    setOrderPlaced(true);
    setCart([]);
    setCheckout(false);
  };

  return (
    <div className="app-container">
      <h1 className="title">🛍️ Mock E-Commerce</h1>

      {/* Category Buttons */}
      <div className="category-buttons">
        {Object.keys(products).map((cat) => (
          <button
            key={cat}
            className={`category-btn ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products[category].map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-img" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button className="add-btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        <h2>🛒 Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <p key={index}>
                {item.name} - ₹{item.price}
              </p>
            ))}
            <h3>Total: ₹{total}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </>
        )}
      </div>

      {/* Checkout Form */}
      {checkout && (
        <div className="checkout-form">
          <h2>🏠 Enter Delivery Address</h2>
          <form onSubmit={placeOrder}>
            <input
              type="text"
              placeholder="Full Name"
              value={address.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={address.phone}
              onChange={(e) => setAddress({ ...address, phone: e.target.value })}
              required
            />
            <textarea
              placeholder="Address Line"
              value={address.addressLine}
              onChange={(e) => setAddress({ ...address, addressLine: e.target.value })}
              required
            ></textarea>
            <input
              type="text"
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Pin Code"
              value={address.pincode}
              onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
              required
            />
            <button type="submit" className="placeorder-btn">
              Place Order
            </button>
          </form>
        </div>
      )}

      {/* Order Confirmation */}
      {orderPlaced && (
        <div className="order-success">
          <h2>✅ Order Placed Successfully!</h2>
          <p>Thank you for shopping with us 💖</p>
        </div>
      )}
    </div>
  );
}

export default App;