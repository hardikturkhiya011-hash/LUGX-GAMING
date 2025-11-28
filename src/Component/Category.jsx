import React, { useEffect, useState } from "react";
import "../Component/Category.css";
import data from "../Component/api.json";
import main from "../images/rifle-pubg-4k-iys6b39wg5aaw0ps.webp";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();

  const direct = (e) => {
    navigate("/product", { state: { cardData: e } });
  };

  const [section, setSection] = useState([]);

  const filterData = () => {
    const section = data.filter((e) => e.is_part === "yes");
    setSection(section);
  };

  useEffect(() => {
    filterData();
  }, []);

  return (
    <>
      <div className="Category">
        <div className="Category-part">
          <p className="cg">Categories</p>
          <h4 className="tg">Top Categories</h4>
        </div>
      </div>
      <div className="Category-cards">
        {section.map((e) => {
          return (
            <div
              key={e.id}
              className="Category-card"
              onClick={() => direct(e)}
            >
              <h5 className="title-cat">{e.category}</h5>
              <img src={e.img} alt={e.name} className="cat-img" />
            </div>
          );
        })}
      </div>

      <div className="botoom-part">
        <div className="BGMI">
          <img src={main} alt="bgmi" className="BGMI_img" />
        </div>

        <div className="pre-order">
          <h3 className="op">Our Shop</h3>
          <h1 className="go">
            Go Pre-Order
            <br />
            Buy & Get
            <br />
            Best <span>Prices</span>
            <br />
            For You!
          </h1>
          <p className="lorem">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
            incididunt.
          </p>
          <button className="btm-btn">Shop Now</button>
        </div>

        <div className="get-up">
          <h3 className="ns">NEWSLETTER</h3>
          <h1 className="up">
            Get Up To $100 Off
            <br />
            Just Buy
            <br />
            Subscribe
            <br />
            Newsletter!
          </h1>
          <div className="subscibe">
            <input
              type="email"
              placeholder="Your email..."
              className="email"
            />
            <button className="sb">SUBSCRIBE NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
