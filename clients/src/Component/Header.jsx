import {
  faBed,
  faPlaneLock,
  faHotel,
  faUser,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css fileimport { DateRangePicker } from 'react-date-range';
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  //destination usestate
  const [destination, setDestination] = useState("");
  // date set
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [opendate, setOpendate] = useState(false);
  const handleDate = () => {
    setOpendate(!opendate);
  };
  //people & room set
  const [openoption, setOpenoption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "d" ? options[name] - 1 : options[name] + 1,
      };
    });
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("./hotel", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div className="headercontainer">
        <div className="headerList">
          <div className="hdrlistitem active">
            <FontAwesomeIcon icon={faBed} />
            <h4>Bed</h4>
          </div>
          <div className="hdrlistitem">
            <FontAwesomeIcon icon={faPlaneLock} />
            <h4>Flight</h4>
          </div>
          <div className="hdrlistitem">
            <FontAwesomeIcon icon={faHotel} />
            <h4>Hotel</h4>
          </div>
          <div className="hdrlistitem">
            <FontAwesomeIcon icon={faUser} />
            <h4>User</h4>
          </div>
        </div>
        {type !== "list" && (
          <>
            <div className="hdr-menu">
              <h1>A lifetime of discounts? It's genius</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <button className="menu-btn">Sign in/Register</button>
            </div>
            <div className="hdrsearch">
              <div className="srch-item">
                <FontAwesomeIcon icon={faBed} />
                <input
                  type="text"
                  placeholder="where Are You Going?"
                  className="hdrsrchinput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="srch-item srch-date">
                <div className="srchngDate" onClick={() => handleDate()}>
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <span>
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yyyy"
                    )}`}{" "}
                  </span>
                </div>
                {opendate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="srch-items srch-users">
                <FontAwesomeIcon icon={faPerson} />
                <span
                  onClick={() => setOpenoption(!openoption)}
                >{`${options.adult} Adults, ${options.children} Children & ${options.room} Rooms`}</span>
                {openoption && (
                  <div className="optionitems">
                    <div className="optionitem">
                      <span>Adults</span>
                      <div className="optngrp">
                        <button
                          disabled={options.adult <= 1}
                          className="no-chng"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span>{options.adult}</span>
                        <button
                          className="no-chng"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionitem">
                      <span>Children</span>
                      <div className="optngrp">
                        <button
                          disabled={options.children <= 0}
                          className="no-chng"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span>{options.children}</span>
                        <button
                          className="no-chng"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionitem">
                      <span>Rooms</span>
                      <div className="optngrp">
                        <button
                          disabled={options.room <= 1}
                          className="no-chng"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span>{options.room}</span>
                        <button
                          className="no-chng"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="src-btn">
                <button className="menu-btn" onClick={() => handleClick()}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
