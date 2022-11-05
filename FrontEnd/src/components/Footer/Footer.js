import React, { useContext, useEffect } from 'react'
import logoBugOn from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './Footer.css'
 
const Footer = () => {

    return (
        <footer className="flex flex-row justify-center items-center px-[20px] md:px-[120px] py-[8] border-t-[1px] border-outline-var bg-s1 w-full">
            <div className="flex flex-col lg:flex-row justify-between items-left lg:items-center px-[20px]  w-full">
                <div className="flex flex-row justify-between items-center gap-[24px]">
                    <img
                        className=" h-[32px]"
                        src={logoBugOn}
                        alt="logo-coffee-bug-on"
                    />
                    <div className="flex flex-row justify-between gap-[32px] items-center mt-[8px]">
                        <div className="flex flex-row justify-between items-center h-[48] w-[48]">
                            <Link
                                className="text-primary items-center hover:text-[#548076]"
                                to="/search"
                            >
                                <ion-icon name="logo-facebook"></ion-icon>
                            </Link>
                        </div>
                        <div className="flex flex-row justify-between items-center h-[48] w-[48]">
                            <Link
                                className="text-primary text-center hover:text-[#548076]"
                                to="/search"
                            >
                                <ion-icon name="logo-instagram"></ion-icon>
                            </Link>
                        </div>
                        <div className="flex flex-row justify-between items-center h-[48] w-[48]">
                            <Link
                                className="text-primary text-center hover:text-[#548076] h-[48] w-[48]"
                                to="/search"
                            >
                                <ion-icon name="logo-youtube"></ion-icon>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row justify-between items-left md:items-center p-0 gap-[48px]">
                        <li className="flex items-center px-0 py-[10px] h-[48px] text-center text-caption list-none">
                            <Link
                                className="text-black text-center hover:text-primary"
                                to="/product"
                            >
                                Material Design
                            </Link>
                        </li>
                        <li className="flex items-center px-0 py-[10px] h-[48px] text-center text-caption list-none">
                            <Link
                                className="text-black text-center hover:text-primary"
                                to="/product"
                            >
                                Design by Team HUTECH
                            </Link>
                        </li>
                        <li className="flex items-center px-0 py-[10px] h-[48px] text-center text-caption list-none">
                            <Link
                                className="text-black text-center hover:text-primary"
                                to="/product"
                            >
                                About us
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
