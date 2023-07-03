import React, { useEffect, useState } from "react";
import "./homelist.css";
import axios from "axios";

const Homelist = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8800/hotel?featured=true&limit=2")
      .then((res) => setData(res.data, "dataaas"))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  const photos = [
    "https://picsum.photos/230/300?random=2",
    "https://picsum.photos/230/300?random=1",
    "https://picsum.photos/230/300?random=3",
    "https://picsum.photos/230/300?random=4",
    "https://picsum.photos/230/300?random=5",
  ];
  //console.log(photos.map((img) => console.log(img)));
  return (
    <div className="featureDetails">
      <div className="featureContainer">
        <h2 className="listHeading">Go Home With Us</h2>
        {loading ? (
          "loading hotels"
        ) : (
          <div className="featureInfo ">
            {data &&
              data.map((item, i) => (
                <div className="featurePart" key={item._id}>
                  <div className="featureImg lstImg">
                    <img src={photos.map((img) => img)} alt="/" />
                  </div>
                  <div className="listText">
                    <h2>{item.name}</h2>

                    <span>{item.city}</span>
                    <br />
                    <span>Starting from ${item.cheapestPrice}</span>
                    <br />
                    {item.rating && (
                      <div className="rating">
                        <button>{item.rating}</button>
                        <span>Excellent</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            {/* <div className="featurePart">
              <div className="featureImg lstImg">
                <img
                  src="https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="/"
                />
              </div>
              <div className="listText">
                <h2>Aparthotel Stare Miasto</h2>

                <span>Marid</span>
                <br />
                <span>Starting from $129/-</span>
                <br />
                <button>8.9</button>
                <span>Excellent</span>
              </div>
            </div>
            <div className="featurePart">
              <div className="featureImg lstImg">
                <img
                  src="https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="/"
                />
              </div>
              <div className="listText">
                <h2>Aparthotel Stare Miasto</h2>

                <span>Marid</span>
                <br />
                <span>Starting from $129/-</span>
                <br />
                <button>8.9</button>
                <span>Excellent</span>
              </div>
            </div>
            <div className="featurePart">
              <div className="featureImg lstImg">
                <img
                  src="https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="/"
                />
              </div>
              <div className="listText">
                <h2>Aparthotel Stare Miasto</h2>

                <span>Marid</span>
                <br />
                <span>Starting from $129/-</span>
                <br />
                <button>8.9</button>
                <span>Excellent</span>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homelist;
