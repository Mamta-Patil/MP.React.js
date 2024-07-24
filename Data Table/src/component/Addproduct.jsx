import axios from "axios";
import React, { useState } from "react";

const initalvalue = {
  title: "",
  price: "",
  description: "",
  category: "",
  image: "",
};

const Addproduct = () => {
  const [formdata, setformdata] = useState(initalvalue);

  const { title, price, description, category, image } = formdata;

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    axios.post("http://localhost:3000/product", formdata)
      .then((res) => {
        console.log(res);
        alert("Product added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='form'>
      <h4>Add Product</h4>
      <form onSubmit={(e) => handlesubmit(e)}>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => handlechange(e)}
          placeholder="Image"
        />
        <br /><br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handlechange(e)}
          placeholder="Title"
        />
        <br /><br />
        <select
          name="category"
          value={category}
          onChange={(e) => handlechange(e)}
        >
          <option value={""}>Select Yor Category</option>
          <option value={"men's clothing"}>men's clothing</option>
          <option value={"jewelery"}>jewelery</option>
          <option value={"women's clothing"}>women's clothing</option>
          <option value={"electronics"}>electronics</option>
        </select>{" "}
        <br /><br />
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => handlechange(e)}
          placeholder="price"
        />
        <br /><br />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => handlechange(e)}
          placeholder="description"
        />
        <br /><br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Addproduct;
