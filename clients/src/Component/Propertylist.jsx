import React, { useEffect, useState } from "react";
import "./propertylist.css";
import axios from "axios";

const Propertylist = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8800/hotel/countByType")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  const images = [
    "https://picsum.photos/230/300?random=2",
    "https://picsum.photos/230/300?random=1",
    "https://picsum.photos/230/300?random=3",
    "https://picsum.photos/230/300?random=4",
    "https://picsum.photos/230/300?random=5",
  ];
  //console.log(images.map((img, i) => console.log(img, i, "imgs")));
  //console.log(data, "data");
  return (
    <>
      <h2 className="PropertyHeading">Browse By Property Type</h2>
      <div className="featureProperty">
        {loading ? (
          "data loading"
        ) : (
          <>
            {data &&
              images.map((img, i) => (
                <div className="featurePart" key={i}>
                  <div className="featureImg">
                    <img src={img} alt="/" />
                  </div>
                  <div className="property-txt">
                    <h2>{data[i]?.type}</h2>
                    <h4>
                      {data[i]?.count} {data[i]?.type}
                    </h4>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default Propertylist;
