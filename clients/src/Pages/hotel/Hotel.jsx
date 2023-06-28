import React, { useState } from "react";
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

const Hotel = () => {
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
      src: "https://picsum.photos/230/300?random=10",
    },
    {
      src: "https://picsum.photos/230/300?random=1",
    },
    {
      src: "https://picsum.photos/230/300?random=2",
    },
    {
      src: "https://picsum.photos/230/300?random=5",
    },
    {
      src: "https://picsum.photos/230/300?random=6",
    },
    {
      src: "https://picsum.photos/230/300?random=4",
    },
    {
      src: "https://picsum.photos/230/300?random=3",
    },
    {
      src: "https://picsum.photos/230/300?random=7",
    },
    {
      src: "https://picsum.photos/230/300?random=9",
    },
    {
      src: "https://picsum.photos/230/300?random=11",
    },
    {
      src: "https://picsum.photos/230/300?random=12",
    },
    {
      src: "https://picsum.photos/230/300?random=20",
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
                  src={images[slideNumber].src}
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
          <div className="hotelDetails">
            <div className="hotelTop">
              <div className="topLeft">
                <h2>Grand Hotel</h2>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /> Elton 125,
                  MarkPlace-711304
                </span>
                <br />
                <h4>Excellent Location-500m from center</h4>
                <h3>
                  Book a stay over $114 at this property and a free get airport
                  taxi
                </h3>
              </div>
              <div className="topRightBtn">
                <button>Reserve or Book Now !</button>
              </div>
            </div>
            <div className="hotelContent">
              {images.map((img, index) => (
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
                <h2>Stay in the heart of Krakow</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </p>
              </div>
              <div className="btmRight">
                <h4>Perfect fornight out stay!</h4>
                <p>
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures, to generate Lorem Ipsum
                  which looks reasonable
                </p>
                <h3>
                  <b>$945</b>9 nights
                </h3>
                <div className="topRightBtn">
                  <button>Reserve or Book Now !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Maillist />
      <Footer />
    </div>
  );
};
export default Hotel;
