import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg fixed-top ">
    <div className="container ">
        <Link className="navbar-brand fw-bolder fs-3 text-white" to="">Start Framework</Link>
        <div >
            <ul className="d-flex  container list-unstyled  gap-5 fs-3 text-white">
                

                <li>
                    <NavLink className="text-decoration-none text-white" to="about">About</NavLink>
                </li>


                <li>
                    <NavLink className="text-decoration-none text-white"  to="portfolio">Portfolio</NavLink>
                </li>

            
                <li>
                <NavLink className="text-decoration-none text-white"  to="contact">contact</NavLink>
                </li>


            </ul>

        </div>
    </div>
</nav>

  );
}
