import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from  "../Components/Loader"
function SingleProductPage() {

    const [productdata, setproductdata] = useState([])
    const [loading,setloading]=useState(false)
    const { id } = useParams()
    useEffect(() => {
        setloading(true)
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
            .then((res) => {
                setproductdata(res.data.data)
                console.log(res.data.data)
                setloading(false)
            })
            .catch((err) => console.log(err))
    }, [])


    return loading ? <Loader /> : (
        <div data-testid="products-container" style={{textAlign:"center",boxShadow: "0px 0px 7px black", width:"50%",margin:"7% auto"}}>

                <div>
                    <h3 data-testid="product-brand" style={{paddingTop:"30px",color:"green"}}> {productdata.brand} </h3>
                </div>
                <div >
                    <img data-testid="product-image" src={productdata.img} width={200} height={200} />
                </div>
                <div data-testid="product-category"><h4>Category : {productdata.category}</h4>
                </div>

                <div data-testid="product-details"><h5>Details : {productdata.details}</h5>
                </div>
                <div data-testid="product-price" style={{paddingBottom:"30px"}} > <h4>Price : {productdata.price}</h4>
                </div>
        </div>
    )
}
export default SingleProductPage