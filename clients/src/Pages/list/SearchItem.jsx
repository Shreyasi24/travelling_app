import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  console.log(item, "item");
  return (
    <div>
      <div className="listInfo">
        <div className="list_item">
          <div className="list_img">
            <img src={item.photos[0]} alt="/" />
          </div>
          <div className="list_text">
            <h2>{item.name}</h2>
            <span>{item.distance} from center</span>
            <br />
            <h5>{item.desc}</h5>
            <h4>Studio Apartment with air conditioning</h4>
            <h6 className="list_studio">
              Entire studio <span></span>1 bathroom<span></span>21m square full
              bed
            </h6>
            <h4
              style={{
                color: "rgb(3, 62, 3)",
                fontSize: "20px",
                marginTop: "40px",
              }}
            >
              Free Cencellation
            </h4>
            <h6 style={{ color: "rgb(3, 62, 3)", fontSize: "18px" }}>
              You can cancel later,so see the great price of today{" "}
            </h6>
          </div>
          <div className="list_details">
            {item.rating && (
              <div className="lst_rvw">
                <h4>{item.rating}</h4>
                <button>8.9</button>
              </div>
            )}

            <h3>$123</h3>
            <h6>Include taxes & fees</h6>
            <Link to={`/hotel/${item._id}`}>
              <div className="dtl_btn">
                <button type="button">See Availability</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
