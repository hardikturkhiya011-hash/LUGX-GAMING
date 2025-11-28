import React, { useEffect, useState } from "react";
import "../Pages/shop.css";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import data from "../Component/api.json";
import { Helmet } from "react-helmet";

function Shop() {
  const [clicked, setClicked] = useState("showAll");
  const navigate = useNavigate();

  const linkfile = (e) => {
    console.log("clicked");
    navigate("/product", { state: { cardData: e } });
  };

  const [shopdata, setShopdata] = useState([]);

  console.log("data is ", data);

  const filterData = () => {
    console.log("get filterdata");
    const shopdata = data.filter((e) => e.common == "yes");
    console.log(shopdata);
    setShopdata(shopdata);
  };

  useEffect(() => {
    filterData();
  }, []);

  const handleFilterBtn = (e) => {
    console.log(e);
    setClicked(e)
    const shopdata = data.filter((e) => e.common == "yes");
    setShopdata(shopdata);
  };
  const adventurebtn = (e) => {
    console.log(e);
    setClicked(e)
    const shopdata = data.filter((e) => e.category == "Adventure");
    console.log(shopdata);
    setShopdata(shopdata);
  };

  const actionbtn = (e) => {
    setClicked(e)
    const shopdata = data.filter((e) => e.category == "Action");
    setShopdata(shopdata);
  };

  const racingbtn = (e) => {
    setClicked(e)
    const shopdata = data.filter((e) => e.category == "Racing");
    setShopdata(shopdata);
  };

  return (
    <>
    <Helmet>
      <meta name="viewport" content="width=1200"/>
    </Helmet>
      <div className="shop_main">
        <h3 className="ourshop">Our Shop</h3>
        <div class="breadcrumb">
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
          className={clicked == "showAll" ? "clickbtn" : "regular"}
          onClick={() => {
            handleFilterBtn("ShowAll");
          }}
        >
          SHOW ALL
        </button>
        <button
          // className="regular"
          className={clicked == "ADVENTURE" ? "clickbtn" : "regular"}
          onClick={() => {
            adventurebtn("ADVENTURE");
          }}
        >
          ADVENTURE
        </button>
        <button
          // className="regular"
          className={clicked == "ACTION" ? "clickbtn" : "regular"}
          onClick={() => {
            actionbtn("ACTION");
          }}
        >
          ACTION
        </button>
        <button
          // className="regular"
          className={clicked == "RACING" ? "clickbtn" : "regular"}
          onClick={() => {
            racingbtn("RACING");
          }}
        >
          RACING
        </button>
      </div>

      <div className="shop-cards">
        {shopdata.map((e) => {
          return (
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
          );
        })}
      </div>
    </>
  );
}

export default Shop;
