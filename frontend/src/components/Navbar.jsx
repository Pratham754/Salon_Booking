import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <ul className="navul">
            <li>
                <NavLink className={({ isActive }) => isActive ? 'active-item' : 'passive-item'} to={"/"}>Home,</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'active-item' : 'passive-item'} to={"/input"}>Appointment,</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'active-item' : 'passive-item'} to={"/about-us"}>About</NavLink>
            </li>
        </ul>
    )
}

export default Navbar;