import React from "react";
import logo from '../iconos/logo-removebg-preview.png';
import instagramIcon from '../iconos/instagram.png';

const Footer = () => {
    return (
        <footer className=" text-white py-4 flex justify-between items-center">
            {/* Logo en la izquierda */}
            <div className="ml-4">
            <a href="/">    <img src={logo} alt="Logo" className="h-24" /></a>
            </div>
            
            {/* Texto en el centro */}
            <p className="text-center">©2024 WebWiseInn.com All Rights Reserved.</p>

            {/* Icono de Instagram en la derecha */}
            <div className="mr-4">
             <a href="https://www.instagram.com/webwiseinn/?next=%2F" target="_blanck">   <img src={instagramIcon} alt="Instagram" className="h-14" /></a>
            </div>
        </footer>
    );
};

export default Footer;
