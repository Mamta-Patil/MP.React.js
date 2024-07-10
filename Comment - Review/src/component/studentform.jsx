import { useState } from "react";
const data = {
  name: "",
  email: "",
  password: "",
  zender: "",
  city: "",
};
function studentorm(e) {
  const [formdata, setformdata] = useState(data);
  const { name, email, password, zender, city } = formdata;

  function handlechange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  }

  function handlesubmit(event) {
    event.preventDefault();
    console.log(formdata);
  }

  return (
    <div className="form">
      <form onSubmit={(e) => handlesubmit(e)}>
        <h2>Student Form</h2>
        <label>Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="name"
          value={name}
          placeholder="Enter Your Name"
          onChange={handlechange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          className="input"
          type="email"
          name="email"
          value={email}
          placeholder="Enter Your email"
          onChange={handlechange}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          placeholder="Enter Your Password"
          onChange={handlechange}
        />
        <br />
        <select value={ city}  onChange={handlechange} name="city">
        <option value="city">City</option>
          <option value="Surat">Surat</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Rajkot">Rajkot</option>
        </select>
        <br />
        <label> Male</label>
        <input
          type="radio"
          name="zender"
          value={"male"}
          onChange={handlechange}
        />
        <label>Female</label>
        <input
          type="radio"
          name="zender"
          value={"female"}
          onChange={handlechange}
        />
        <br />
        <input type="submit" className="input" />
      </form>
    </div>
  );
}
export default studentorm;