// TrandingSection.jsx
import React, { useEffect, useState } from "react";
import "./Tr.css";
import data from "../Component/api.json";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TrandingSection() {
  const navigate = useNavigate();

  const direct = (e) => {
    navigate("/product", { state: { cardData: e } });
    window.scrollTo(0, 0);
  };

  const [trdata, setTrdata] = useState([]);

  // VIEW ALL → Navigate and send all data
  const viewall = () => {
    navigate("/shop", { state: { allProducts: data } });
    window.scrollTo(0, 0);
  };

  const filterData = () => {
    const trending = data.filter((e) => e.is_trending === "yes");
    setTrdata(trending);
  };

  useEffect(() => {
    filterData();
  }, []);

  return (
    <div className="section">
      <h3>Trending</h3>

      <div className="part">
        <h1 className="n1">Trending Games</h1>
        <button className="btn1" onClick={viewall}>
          View all
        </button>
      </div>

      <div className="tr_cards">
        {trdata.map((e) => (
          <div key={e.id} className="main_cards" onClick={() => direct(e)}>
            <div className="img_card">
              <img src={e.img} alt={e.name} />
            </div>

            <div className="price">
              <p className="fake">{e.fake_price}</p>
              <p className="real">{e.real_price}</p>
            </div>

            <div className="left_side">
              <div className="name_games">
                <h6>{e.category}</h6>
                <h5>{e.name}</h5>
              </div>
              <div className="bag">
                <FaShoppingBag className="bags" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrandingSection;
