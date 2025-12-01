// Shop.jsx
import React, { useEffect, useState } from "react";
import "../Pages/shop.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import data from "../Component/api.json";
import { Helmet } from "react-helmet";

function Shop() {
  const [clicked, setClicked] = useState("showAll");
  const navigate = useNavigate();
  const location = useLocation();

  const linkfile = (e) => {
    navigate("/product", { state: { cardData: e } });
  };

  const [shopdata, setShopdata] = useState([]);

  // LOAD DATA ON PAGE OPEN  
  useEffect(() => {
    if (location.state && location.state.allProducts) {
      // Coming from Trending → View All
      setShopdata(location.state.allProducts);
    } else {
      // Default load
      const defaultData = data.filter((e) => e.common === "yes");
      setShopdata(defaultData);
    }
  }, [location.state]);

  // SHOW ALL
  const handleFilterBtn = () => {
    setClicked("showAll");
    setShopdata(data); // all products
  };

  const adventurebtn = () => {
    setClicked("ADVENTURE");
    const filtered = data.filter((e) => e.category === "Adventure");
    setShopdata(filtered);
  };

  const actionbtn = () => {
    setClicked("ACTION");
    const filtered = data.filter((e) => e.category === "Action");
    setShopdata(filtered);
  };

  const racingbtn = () => {
    setClicked("RACING");
    const filtered = data.filter((e) => e.category === "Racing");
    setShopdata(filtered);
  };

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=1200" />
      </Helmet>
      <div className="shop_main">
        <h3 className="ourshop">Our Shop</h3>
        <div className="breadcrumb">
          <span className="home">
            <Link to="/" className="color">
              Home
            </Link>
            &gt; Our Shop
          </span>
        </div>
      </div>

      <div className="shop_button">
        <button
          className={clicked === "showAll" ? "clickbtn" : "regular"}
          onClick={handleFilterBtn}
        >
          SHOW ALL
        </button>

        <button
          className={clicked === "ADVENTURE" ? "clickbtn" : "regular"}
          onClick={adventurebtn}
        >
          ADVENTURE
        </button>

        <button
          className={clicked === "ACTION" ? "clickbtn" : "regular"}
          onClick={actionbtn}
        >
          ACTION
        </button>

        <button
          className={clicked === "RACING" ? "clickbtn" : "regular"}
          onClick={racingbtn}
        >
          RACING
        </button>
      </div>

      <div className="shop-cards">
        {shopdata.map((e) => (
          <div key={e.id} className="shop-main_cards">
            <div className="shop-img_card">
              <img src={e.img} alt={e.name} />
            </div>
            <div className="shop-price">
              <p className="shop-fake">{e.fake_price}</p>
              <p className="shop-real">{e.real_price}</p>
            </div>
            <div className="shop-left_side">
              <div className="shop-name_games">
                <h6>{e.category}</h6>
                <h5>{e.name}</h5>
              </div>
              <div className="shop-bag">
                <FaShoppingBag
                  className="shop-bags"
                  onClick={() => linkfile(e)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;
