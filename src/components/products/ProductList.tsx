import { NavLink, Outlet, useNavigate } from "react-router-dom"

export const ProductList = ({products}:any) => {
    console.log('products', products)
    const navigate = useNavigate();
    return(<>
    <h1>Product List</h1>
        <nav>
            <NavLink to="featured">Featured</NavLink>
            <NavLink to="new">New</NavLink>
        </nav>
        <Outlet/>
    <button onClick={() => navigate('/order-summary')}> Place Order</button>
    


    </>)
}