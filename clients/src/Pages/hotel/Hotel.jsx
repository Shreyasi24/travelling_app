import React, { useEffect, useState } from "react";
import "./hotel.css";
import Navbar from "../../Component/Navbar";
import Header from "../../Component/Header";
import Maillist from "../../Component/maillist/Maillist";
import Footer from "../../Component/footer/Footer";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Hotel = () => {
  const location = useLocation();
  console.log(location, "location details");
  console.log(location.pathname, "pathname");
  //const id = location.pathname.slice(7);
  const id = location.pathname.split("/")[2];
  console.log(id, "id");

  //const [data, loading, error] = useFetch(`/hotel/${id}`);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8800/hotel/find/${id}`)
      .then((res) => setData(res.data, "data"))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  console.log(`http://localhost:8800/${id}`, "http");
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);
  const handleClick = (i) => {
    setSlideNumber(i);
    setOpenSlide(!openSlide);
  };
  const handleMove = (dir) => {
    // console.log(dir.target);
    let newslide;
    if (dir === "left") {
      newslide = slideNumber === 0 ? 11 : slideNumber - 1;
    } else {
      newslide = slideNumber === 11 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newslide);
  };

  const images = [
    {
      src: "https://picsum.photos/230/300?random=2",
    },
    {
      src: "https://picsum.photos/230/300?random=1",
    },
    {
      src: "https://picsum.photos/230/300?random=3",
    },
    {
      src: "hhttps://picsum.photos/230/300?random=6",
    },
    {
      src: "https://picsum.photos/230/300?random=4",
    },
    {
      src: "https://picsum.photos/230/300?random=9",
    },
  ];
  //console.log(images.map((img) => console.log(img)));

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelWrapper">
        <div className="hotelConatiner">
          {openSlide && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => setOpenSlide(!openSlide)}
                className="close"
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow l"
                onClick={(left) => handleMove(left)}
              />
              <div className="sldrImg">
                <img
                  src={ImageData.photos[slideNumber]?.src}
                  alt="/"
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow r"
                onClick={(right) => handleMove(right)}
              />
            </div>
          )}
          {loading
            ? "loading"
            : data && (
                <div className="hotelDetails">
                  <div className="hotelTop">
                    <div className="topLeft">
                      <h2>{data.name}</h2>
                      <span>
                        <FontAwesomeIcon icon={faLocationDot} /> {data.address}
                      </span>
                      <br />
                      <h4>{data.distance}</h4>
                      <h3>{data.desc}</h3>
                    </div>
                    <div className="topRightBtn">
                      <button>Reserve or Book Now !</button>
                    </div>
                  </div>
                  <div className="hotelContent">
                    {data.photos?.map((img, index) => (
                      <div key="index">
                        {
                          <div onClick={() => handleClick(index)}>
                            <img src={img.src} alt="" />
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                  <div className="hotelEnd">
                    <div className="btmLeft">
                      <h2>{data.title}</h2>
                      <p>{data.desc}</p>
                    </div>
                    <div className="btmRight">
                      <h4>{data.title}</h4>
                      <p>{data.desc}</p>
                      <h3>
                        <b>{data.cheapestPrice}</b> for 9 nights
                      </h3>
                      <div className="topRightBtn">
                        <button>Reserve or Book Now !</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
        </div>
      </div>
      <Maillist />
      <Footer />
    </div>
  );
};
export default Hotel;
