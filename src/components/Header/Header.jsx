import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <header>
        <nav><ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
            </li>
              <li>
                <NavLink to={"/products/:id"}>Products</NavLink>
            </li>
            </ul>
            </nav>
    </header>
  )
}

export default Header