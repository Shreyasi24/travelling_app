import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";
import Header from "../../Component/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange, DateRangePicker } from "react-date-range";
import axios from "axios";
import SearchItem from "./SearchItem";

const List = () => {
  const location = useLocation();
  //console.log(location.state.destination, "location");
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [opendate, setOpendate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  // const [min, setMin] = useState("");
  // const [max, setMax] = useState("");

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8800/hotel?city=${destination}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  // const handleClick = () => {};
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
                    <input
                      type="text"
                      //onChange={(e) => setMin(e.target.value)}
                      placeholder=""
                    />
                  </div>
                  <div className="option_item">
                    <label>
                      Max Price <small>per night:</small>
                    </label>
                    <br />
                    <input
                      type="text"
                      //onChange={(e) => setMax(e.target.value)}
                      placeholder=""
                    />
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
                <button
                  type="search"
                  //onClick={handleClick}
                  className="btn_srch"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="list_hotels">
              {loading ? (
                "hotel lists are loading"
              ) : (
                <>
                  {data &&
                    data.map((item) => (
                      <div className="ldng_item">
                        <SearchItem item={item} key={item._id} />
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
