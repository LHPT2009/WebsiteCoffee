import React, { useContext, useEffect } from 'react'
import logoBugOn from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <footer className="flex flex-row justify-center items-center px-[120px] py-[8] border-t-[1px] border-outline-var bg-s1 w-full">
            <div className="flex flex-row justify-between items-center px-[20px] w-full">
                <div className="flex flex-row items-center gap-[24px]">
                    <img
                        className=" h-[40px]"
                        src={logoBugOn}
                        alt="logo-coffee-bug-on"
                    />
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-between items-center p-[12] m-[12px] h-[48] w-[48]">
                            <Link
                                className="text-black text-center hover:text-primary h-[48] w-[48]"
                                to="/search"
                            >
                                <span class="material-symbols-outlined">
                                    flash_on
                                </span>
                            </Link>
                        </div>
                        <div className="flex flex-row justify-between items-center p-[12] m-[12px] h-[48] w-[48]">
                            <Link
                                className="text-black text-center hover:text-primary h-[48] w-[48]"
                                to="/search"
                            >
                                <span class="material-symbols-outlined">
                                    flash_on
                                </span>
                            </Link>
                        </div>
                        <div className="flex flex-row justify-between items-center p-[12] m-[12px] h-[48] w-[48]">
                            <Link
                                className="text-black text-center hover:text-primary h-[48] w-[48]"
                                to="/search"
                            >
                                <span class="material-symbols-outlined">
                                    flash_on
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row justify-center items-center p-0 gap-[48px]">
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
