import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import Header from "../../Component/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange, DateRangePicker } from "react-date-range";

const List = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [opendate, setOpendate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listDetails">
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h2 className="listTitle">Search</h2>
              <div className="listItem">
                <label>Destination:</label>
                <br />
                <input type="text" placeholder={destination} />
              </div>
              <div className="listItem">
                <label>Chceck-in-Date:</label>
                <br />
                <span onClick={() => setOpendate(!opendate)}>
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}{" "}
                </span>
                {opendate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                  />
                )}
              </div>
              <div className="listItem">
                <label>Options:</label>
                <br />
                <div className="srchOptions">
                  <div className="option_item">
                    <label>
                      Min Price <small>per night:</small>
                    </label>
                    <br />
                    <input type="text" placeholder="" />
                  </div>
                  <div className="option_item">
                    <label>
                      Max Price <small>per night:</small>
                    </label>
                    <br />
                    <input type="text" placeholder="" />
                  </div>
                  <div className="option_item">
                    <label>Adult:</label>
                    <br />
                    <input type="number" min={1} placeholder={options.adult} />
                  </div>
                  <div className="option_item">
                    <label>Children:</label>
                    <br />
                    <input
                      type="number"
                      min={0}
                      placeholder={options.children}
                    />
                  </div>
                  <div className="option_item">
                    <label>Room:</label>
                    <br />
                    <input type="number" min={1} placeholder={options.room} />
                  </div>
                </div>
              </div>
              <div className="btn_srch">
                <button type="search" className="btn_srch">
                  Search
                </button>
              </div>
            </div>
            <div className="listInfo">
              <div className="list_item">
                <div className="list_img">
                  <img src="https://picsum.photos/230/300?random=4" alt="/" />
                </div>
                <div className="list_text">
                  <h2>Tower Street Apartment</h2>
                  <span>500 m from center</span>
                  <br />
                  <h5>Free airport taxi</h5>
                  <h4>Studio Apartment with air conditioning</h4>
                  <h6 className="list_studio">
                    Entire studio <span></span>1 bathroom<span></span>21m square
                    full bed
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
                  <div className="lst_rvw">
                    <h4>Excellent</h4>
                    <button>8.9</button>
                  </div>
                  <h3>$123</h3>
                  <h6>Include taxes & fees</h6>
                  <div className="dtl_btn">
                    <button type="button">See Availability</button>
                  </div>
                </div>
              </div>
              <div className="list_item">
                <div className="list_img">
                  <img src="https://picsum.photos/230/300?random=2" alt="/" />
                </div>
                <div className="list_text">
                  <h2>Tower Street Apartment</h2>
                  <span>500 m from center</span>
                  <br />
                  <h5>Free airport taxi</h5>
                  <h4>Studio Apartment with air conditioning</h4>
                  <h6 className="list_studio">
                    Entire studio <span></span>1 bathroom<span></span>21m square
                    full bed
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
                  <div className="lst_rvw">
                    <h4>Excellent</h4>
                    <button>8.9</button>
                  </div>
                  <h3>$123</h3>
                  <h6>Include taxes & fees</h6>
                  <div className="dtl_btn">
                    <button type="button">See Availability</button>
                  </div>
                </div>
              </div>
              <div className="list_item">
                <div className="list_img">
                  <img src="https://picsum.photos/230/300?random=1" alt="/" />
                </div>
                <div className="list_text">
                  <h2>Tower Street Apartment</h2>
                  <span>500 m from center</span>
                  <br />
                  <h5>Free airport taxi</h5>
                  <h4>Studio Apartment with air conditioning</h4>
                  <h6 className="list_studio">
                    Entire studio <span></span>1 bathroom<span></span>21m square
                    full bed
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
                  <div className="lst_rvw">
                    <h4>Excellent</h4>
                    <button>8.9</button>
                  </div>
                  <h3>$123</h3>
                  <h6>Include taxes & fees</h6>
                  <div className="dtl_btn">
                    <button type="button">See Availability</button>
                  </div>
                </div>
              </div>
              <div className="list_item">
                <div className="list_img">
                  <img src="https://picsum.photos/230/300?random=5" alt="/" />
                </div>
                <div className="list_text">
                  <h2>Tower Street Apartment</h2>
                  <span>500 m from center</span>
                  <br />
                  <h5>Free airport taxi</h5>
                  <h4>Studio Apartment with air conditioning</h4>
                  <h6 className="list_studio">
                    Entire studio <span></span>1 bathroom<span></span>21m square
                    full bed
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
                  <div className="lst_rvw">
                    <h4>Excellent</h4>
                    <button>8.9</button>
                  </div>
                  <h3>$123</h3>
                  <h6>Include taxes & fees</h6>
                  <div className="dtl_btn">
                    <button type="button">See Availability</button>
                  </div>
                </div>
              </div>
              <div className="list_item">
                <div className="list_img">
                  <img src="https://picsum.photos/230/300?random=6" alt="/" />
                </div>
                <div className="list_text">
                  <h2>Tower Street Apartment</h2>
                  <span>500 m from center</span>
                  <br />
                  <h5>Free airport taxi</h5>
                  <h4>Studio Apartment with air conditioning</h4>
                  <h6 className="list_studio">
                    Entire studio <span></span>1 bathroom<span></span>21m square
                    full bed
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
                  <div className="lst_rvw">
                    <h4>Excellent</h4>
                    <button>8.9</button>
                  </div>
                  <h3>$123</h3>
                  <h6>Include taxes & fees</h6>
                  <div className="dtl_btn">
                    <button type="button">See Availability</button>
                  </div>
                </div>
              </div>
              <div className="list_item">
                <div className="list_img">
                  <img src="https://picsum.photos/230/300?random=8" alt="/" />
                </div>
                <div className="list_text">
                  <h2>Tower Street Apartment</h2>
                  <span>500 m from center</span>
                  <br />
                  <h5>Free airport taxi</h5>
                  <h4>Studio Apartment with air conditioning</h4>
                  <h6 className="list_studio">
                    Entire studio <span></span>1 bathroom<span></span>21m square
                    full bed
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
                  <div className="lst_rvw">
                    <h4>Excellent</h4>
                    <button>8.9</button>
                  </div>
                  <h3>$123</h3>
                  <h6>Include taxes & fees</h6>
                  <div className="dtl_btn">
                    <button type="button">See Availability</button>
                  </div>
                </div>
              </div>
              <div className="list_item">
                <div className="list_img">
                  <img src="https://picsum.photos/230/300?random=10" alt="/" />
                </div>
                <div className="list_text">
                  <h2>Tower Street Apartment</h2>
                  <span>500 m from center</span>
                  <br />
                  <h5>Free airport taxi</h5>
                  <h4>Studio Apartment with air conditioning</h4>
                  <h6 className="list_studio">
                    Entire studio <span></span>1 bathroom<span></span>21m square
                    full bed
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
                  <div className="lst_rvw">
                    <h4>Excellent</h4>
                    <button>8.9</button>
                  </div>
                  <h3>$123</h3>
                  <h6>Include taxes & fees</h6>
                  <div className="dtl_btn">
                    <button type="button">See Availability</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
