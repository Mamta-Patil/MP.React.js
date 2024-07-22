import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  //   console.log(id);
  const [formdata, setformdata] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const { title, price, description, category, image } = formdata;
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    axios
      .put(`http://localhost:3000/product/${id}`, formdata)
      .then((res) => {
        alert("Data updated scueessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getsingledata = () => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setformdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getsingledata();
  }, []);
  return (
    <div>
      <h4>Edit page</h4>
      <div>
        <form onSubmit={(e) => handlesubmit(e)}>
          <input
            type="text"
            placeholder="Image"
            name="image"
            value={image}
            onClick={(e) => handlechange(e)}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="title"
            name="title"
            value={title}
            onClick={(e) => handlechange(e)}
          />{" "}
          <br />
          <select
            name="category"
            value={category}
            onClick={(e) => handlechange(e)}
          >
            <option value={""}>select Your Category</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"jewelery"}>jewelery</option>
            <option value={"electronics"}>electronics</option>
            <option value={"women's clothing"}>women's clothing</option>
          </select>
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={price}
            onClick={(e) => handlechange(e)}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="description"
            name="description"
            value={description}
            onClick={(e) => handlechange(e)}
          />{" "}
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Edit;
