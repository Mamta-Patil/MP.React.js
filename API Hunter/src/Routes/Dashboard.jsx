import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import ProductsTable from "../Components/ProductsTable"
function Dashboard() {

  const {logoutuser,auth}=useContext(AuthContext)
const [productdata,setproductdata]=useState([])
  useEffect(()=>{
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
    .then((res)=>{
      setproductdata(res.data.data)
      console.log(res.data.data)
    })
    .catch((err)=>console.log(err))
  },[])

  return (
    <div style={{textAlign:"center"}}>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" style={{backgroundColor:"green",padding:"2px 20px", borderRadius:"10px",color:"white"}} onClick={logoutuser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{auth.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable data={productdata} />
      </div>
    </div>
  );
}

export default Dashboard;
