import {  NavLink } from "react-router-dom"

const styleNavLinks = ({isActive}: {isActive : any}) => {
    return {
        textDecoration: isActive ? 'none': 'underline',
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'purple' : 'blue'
    }
}

export const Navbar = () => {
    return(
        <nav>
            <NavLink to="/" style={styleNavLinks}>Users</NavLink>
            <NavLink to="/products" style={styleNavLinks}>Products</NavLink>
            <NavLink to="/about" style={styleNavLinks}>About</NavLink>
            <NavLink to="/profile" style={styleNavLinks}>Profile</NavLink>

        </nav>
    )
}