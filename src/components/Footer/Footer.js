import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="section">
            <div className="footer__container bd-grid">
                <div className="footer__box">
                    <h3 className="footer__title">BinhDZ</h3>
                    <p className="footer__description">New collection of shoes 2021.</p>
                </div>
                <div className="footer__box">
                    <h3 className="footer__title">EXPLORE</h3>
                    <ul>
                        <li><a href="#home" className="footer__link ">Home</a></li>
                        <li><a href="#featured" className="footer__link">Featured</a></li>
                        <li><a href="#women" className="footer__link">Women</a></li>
                        <li><a href="#new" className="footer__link">New</a></li>
                        <li><a href="#home" className="footer__link">Shop</a></li>
                    </ul>
                </div>
                <div className="footer__box">
                    <h3 className="footer__title">SUPPORT</h3>
                    <ul>
                        <li><a href="#home" className="footer__link ">Product Help</a></li>
                        <li><a href="#home" className="footer__link">Customer Care</a></li>
                        <li><a href="#home" className="footer__link">Athorzed service</a></li>
                    </ul>
                </div>
                <div className="footer__box">
                    <a href="#home" className="footer__social"><FaFacebookF/></a>
                    <a href="#home" className="footer__social"><FaInstagram /></a>
                    <a href="#home" className="footer__social"><FaTwitter/></a>
                    <a href="#home" className="footer__social"><FaGoogle/></a>
                </div>
            </div>
            <p className="footer__coppy">© 2021 PiterPen. All right reserved</p>
        </footer>

    )
}
