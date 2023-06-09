import React from "react";
import { FaAlignJustify } from 'react-icons/fa';


const NavBar =()=>{
    const [state, setState]= React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <img src="./login3.png" alt="logo" />
                        </div>
                    </ul>
                    {state ?(
                        <ul className="navbar__right">
                            <li><a href="Home">Home</a></li>
                            <li><a href="Services">Services</a></li>
                            <li><a href="About">About</a></li>
                            <li><a href="Portafolio">Portafolio</a></li>
                            <li><a href="Skills">Skills</a></li>
                            <li><a href="Blog">Blog</a></li>
                            <li><a href="Contacto">Contacto</a></li>
                        </ul>
                    ): (
                        ""
                    )}
                </div>
            </div>
            <div className="toggle" onClick={()=> setState(!state)}>
                        <FaAlignJustify />
            </div>
        </nav>
    )
}

export default NavBar;