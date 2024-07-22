import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  const [productdata, setprodutdata] = useState([]);
  const [delet, setdelet] = useState([]);
  const [search, setsearch] = useState("");
  const [order, setorder] = useState(null);
  const [categoryoption, setcategoryoption] = useState(null);

  const handledelet = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3000/product/${id}`)
      .then((res) => {
        alert("data deleted sucessfully");
        getfetchdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getfetchdata = () => {
    // fetch("http://localhost:3000/product")
    // .then((res)=>res.json())
    // .then((data)=>setprodutdata(data))
    // .catch((err)=>console.log(err))

    // using axios function
    axios
      .get("http://localhost:3000/product", {
        params: {
          _page: 1,
          _limt: 10,
          q: search,
          category: categoryoption,
          _sort: "price",
          _order: order,
        },
      })
      .then((res) => {
        setprodutdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getfetchdata();
  }, [search, categoryoption, order]);

  return (
    <div>
      <h4>product page</h4>

      <div>
        <select
          name="category"
          id=""
          onClick={(e) => setcategoryoption(e.target.value)}
        >
          <option value="">Select your category</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewellery</option>
          <option value="men's clothing">Man's Clothing</option>
          <option value="women's clothing">Woman's Clothing</option>
        </select>
        <button
          onClick={() => {
            setorder("asc");
          }}
        >
          Low to High
        </button>
        <button
          onClick={() => {
            setorder("desc");
          }}
        >
          {" "}
          High to Low{" "}
        </button>
      </div>

      <input type="search" onChange={(e) => setsearch(e.target.value)} />
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

            {/* <h4>{el.description}</h4> */}
            <button>
              <Link to={`/edit/${el.id}`}>Edit</Link>{" "}
            </button>
            <button onClick={() => handledelet(el.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;
