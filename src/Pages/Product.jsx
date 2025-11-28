import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Pages/product.css";
import { FaBagShopping } from "react-icons/fa6";
import file from "../Component/api.json"

function Product() {
  const location = useLocation() || {};
  const { state } = location;

  const defaultData = {
    id: 1,
    mainimg: "https://play-lh.googleusercontent.com/e2NZphdFArDKuAKQLSAm8tyoACKUrXBwke35_sl1GWvLSByqbjTIP5HNeZcSjTiCoWqi-lIXD3tt6V2q7vS9Mg=w648-h364-rw",
    category: "Action",
    name: "Free Fire Max",
    real_price: "$20",
    fake_price: "$28",
    is_trending: "yes",
    // dec:"this is a paragraph"
  };

  const cardData = state?.cardData  || defaultData;


  console.log('product data ---->>>', cardData)


    const [proddata,setProdata]=useState([])
  
    const filterData = ()=>{
      const proddata = file.filter((e) => e["rg-games"] === "yes");

      setProdata(proddata)
    }
    useEffect(()=>{
      filterData()
    },[]);

  return (
    <>
      <div className="product">
        <h3 className="pd" id="aaa">Product Details</h3>
        <span className="product-home">
          <Link to="/" className="color">
            Home
          </Link>
          &gt; Product Details
        </span>
      </div>

      <div className="product-cards">
        <div className="pr-image">
        <img src={cardData?.mainimg} alt={cardData?.name} className="pr-mainimg" />
        </div>
        <div className="pr-sec">
        <h1 className="pr-name"> {cardData?.name} : Modern Warfare®II</h1>
        <div className="crfp"><span className="cfp">{cardData?.fake_price}</span><span className="rfp">{cardData?.real_price}</span></div>
        <p className="p-pra">{cardData?.dec}</p>
        <div className="btn-p">
        <input type="number" className="input-p" value={1}/>
        <button className="btns-p"> <FaBagShopping className="fps" />ADD TO CART</button>
            </div>
          <div className="gamer-id">
            <h5 className="gamer-ids">Game ID:</h5> <span className="cmi"> COD MMII</span>
            </div>
            <div className="genre">
            <h5 className="gamer-ids">Genre:</h5> <span className="cmi"> Action, Team, Single</span>
            </div>
            <div className="multi-tag">
            <h5 className="gamer-ids">Multi-tags:</h5> <span className="cmi">  War, Battle, Royal</span>
            </div>
        </div>

      </div>
<hr  />  
        <div className="pro-part">
          <div className="part-pro">
          <h5 className="desp">Descripion</h5> | <h3 className="re">Review(3)</h3>
          </div>
          <p className="book">You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.</p> 
          <p className="book2">Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
        </div>


        <div className="action-games">
          <h4 className="ac">Action</h4>
          <div className="action-part">
          <h2 className="action-rg">Related Games</h2>
          <button className="view-all">View All</button>
          </div>
        </div>
        <div className="act-cards">
          {
          proddata.map((e)=>{
            return(
              <div key={e.id} className="prod-card">
                  <h5 className="prod-name">{e.category}</h5>
                  <img src={e.mainimg} alt={e.name} className="prod-img" />
              </div>
            )
          })
        }
        </div>
    </>
  );
}

export default Product;
