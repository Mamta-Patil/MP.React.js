import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  const [productdata, setprodutdata] = useState([]);
  const getfetchdata = () => {
    // fetch("http://localhost:3000/product")
    // .then((res)=>res.json())
    // .then((data)=>setprodutdata(data))
    // .catch((err)=>console.log(err))

    // using axios function
    axios
      .get("http://localhost:3000/product")
      .then((res) => {
        setprodutdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getfetchdata();
  }, []);

  return (
    <div>
      <h4>product page</h4>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {productdata.map((el) => (
          <div
            key={el.id}
            style={{
              border: "1px solid black",
              margin: "15px",
              textAlign: "center",
            }}
          >
            <h2>{el.id}</h2>
            <Link to={`/descriptionpage/${el.id}`}>
              <img src={el.image} width={200} height={200} />
            </Link>
            <h4>{el.title}</h4>
            <h4>$ {el.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;
