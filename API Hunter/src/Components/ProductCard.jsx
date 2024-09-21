import { Link } from "react-router-dom";

export default function ProductCard({
    brand,
    category,
    price,
    id
}) {
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td style={{padding:"2px 20px"}}>
{/* //     add Link here and keep the data-testid="brand" on Link tag */}
                <Link to={`/products/${id}`} data-testid="brand" style={{color:"green",textDecoration:"none"}} >{brand}</Link>
            </td>
            <td data-testid="category" style={{padding:"2px 20px"}} >
                {category}
            </td>
            <td data-testid="price" style={{padding:"2px 20px"}}>
                {price}
            </td>
        </tr>
    )
}
