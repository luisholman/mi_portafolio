import React from "react";
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa" 

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerSection">
                    <div className="row justifyConter">
                        <div className="footer-content">
                            <div className="footer-section-logo">
                                <img src="./login3.png" alt="" />
                            </div>
                            <ul className="footerCircles">
                                <li><FaFacebook className="footerIcon" /></li>
                                <li><FaTwitter className="footerIcon" /></li>
                                <li><FaPinterest className="footerIcon" /></li>
                                <li><FaInstagram className="footerIcon" /></li>
                            </ul>
                            <div className="copy-right-content">
                                <p className="copyright"> Luis Oicata jaime | Todos los derechos Reservados {new Date().getFullYear()} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;