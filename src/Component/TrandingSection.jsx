import React, { useEffect, useState } from "react";
import "./Tr.css";
import data from "../Component/api.json";
import { renderToStaticMarkup } from "react-dom/server";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TrandingSection() {
  //navgation
  const navigate = useNavigate();

  const direct = (e) => {
    console.log("clicked");
    navigate("/product", { state: {cardData: e} });
    window.scrollTo(0, 0);
  };

  // usestate
  const [trdata, setTrdata] = useState([]);

  console.log("data is ", data);


  const viewall =()=>{
    console.log("view all data",data)
  }

  const filterData = () => {
    console.log("get filterdata");
    const trdata = data.filter((e) => e.is_trending == "yes");
    console.log(trdata);
    setTrdata(trdata);
  };

  useEffect(() => {
    filterData();
  }, []);

  return (
    <>
      <div className="section">
        <h3>Trending</h3>
        <div className="part">
          <h1 className="n1">Trending Games</h1>
          <button className="btn1"  onClick={viewall}>View all</button>
        </div>

        <div className="tr_cards">
          {trdata.map((e) => {
            return (
              <div key={e.id} className="main_cards" onClick={()=>direct(e)}>
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
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TrandingSection;
