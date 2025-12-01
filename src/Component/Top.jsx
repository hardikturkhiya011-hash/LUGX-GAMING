import React, { useEffect, useState } from 'react';
import "../Component/top.css";
import file from "../Component/api.json";
import { useNavigate } from 'react-router-dom';

function Top() {

  const navigate = useNavigate();

  const direct = (e) => {
    navigate("/product", { state: { cardData: e } });
    window.scrollTo(0, 0);
  };

  const [topdata, setTopdata] = useState([]);

  const filterData = () => {
    const topdata = file.filter((e) => e.is_mp === "yes");
    setTopdata(topdata);
  };

  useEffect(() => {
    filterData();
  }, []);

  // ✅ VIEW ALL → navigate to shop with top games
  const viewAllTop = () => {
    navigate("/shop", { state: { allProducts: topdata } });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="topsection"></div>

      <div className="top">
        <div className="top_main">
          <div className="header_top">
            <h6 className='tp'>Top Games</h6>
            <h2 className='mp'>Most Played</h2>
          </div>

          <div className='top_but'></div>

          {/* VIEW ALL BUTTON */}
          <button className='view' onClick={viewAllTop}>VIEW ALL</button>
        </div>

        <div className="bundles">
          {topdata.map((e) => (
            <div key={e.id} className='bundle'>
              <img src={e.img} alt={e.name} className='war' />

              <div className="ad">
                <p>{e.category}</p>
              </div>

              <div className="vb">
                <h3>{e.name}</h3>
              </div>

              <button className='btn_tops' onClick={() => direct(e)}>
                EXPLORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Top;
