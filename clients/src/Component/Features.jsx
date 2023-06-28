import React, { useEffect, useState } from "react";
import "./features.css";
import axios from "axios";
// import useFetch from "../hooks/useFetch";

const Features = () => {
  // const { data, loading, error } = useFetch(
  //   "hotel/countByCity?cities=London,Bali,UAE"
  // );
  // console.log(data, "data");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8800/hotel/countByCity?cities=London,Bali,UAE")
      .then((res) => setData(res.data, "res"))
      .catch((err) => console.log(err, "err"));
    setLoading(false);
  }, []);
  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8800/hotel/countByCity?cities=London,Bali,UAE"
      );
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        "please wait"
      ) : (
        <>
          <div className="featureDetails">
            <div className="featureContainer">
              <div className="featureInfo">
                <div className="featurePart">
                  <div className="featureImg">
                    <img
                      src="https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="/"
                    />
                  </div>
                  <div className="ftr-txt">
                    <h2>London</h2>
                    <h4>{data[0]} Properties</h4>
                  </div>
                </div>
                <div className="featurePart">
                  <div className="featureImg">
                    <img
                      src="https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="/"
                    />
                  </div>
                  <div className="ftr-txt">
                    <h2>Bali</h2>
                    <h4>{data[1]} Properties</h4>
                  </div>
                </div>
                <div className="featurePart">
                  <div className="featureImg">
                    <img
                      src="https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="/"
                    />
                  </div>
                  <div className="ftr-txt">
                    <h2>United Arab Emirates</h2>
                    <h4>{data[2]} Properties</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Features;
