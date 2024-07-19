import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Descriptionpage = () => {
  const [singledata, setsingledata] = useState([]);
  const params = useParams();
  const getsingledata = () => {
    axios
      .get(`http://localhost:3000/product/${params.id}`)
      .then((res) => setsingledata(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getsingledata();
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Descriptionpage</h3>
      <div
        style={{
          border: "1px solid black",
          textAlign: "center",
          margin: "30px 20px",
        }}
      >
        <h3>{singledata.id}</h3>
        <img src={singledata.image} width={200} height={200}></img>
        <h3>{singledata.title} </h3>
        <h3>$ {singledata.price} </h3>
        <h3> {singledata.category} </h3>
        <p>{singledata.description} </p>
      </div>
    </div>
  );
};

export default Descriptionpage;
