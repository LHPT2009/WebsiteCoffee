import React, { useContext, useEffect } from 'react'
import logoBugOn from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="absolute flex bottom-0 justify-center items-center border-t-[1px] border-outline-var bg-s1 w-full z-[100]">
      <div className="flex flex-col justify-between max-w-[1440px] w-full py-2 px-4 sm:px-6 md:py-2 lg:flex-row items-left lg:items-center">
        <div className="flex flex-row justify-between items-center gap-[24px]">
          <img className=" h-[32px]" src={logoBugOn} alt="logo-coffee-bug-on" />
          <div className="flex flex-row justify-between gap-[32px] items-center mt-[8px]">
            <div className="flex flex-row justify-between items-center h-[48px]">
              <a
                className="text-primary items-center hover:text-[#548076]"
                href="https://facebook.com"
                target={'_blank'}
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </div>
            <div className="flex flex-row justify-between items-center h-[48px]">
              <a
                className="text-primary text-center hover:text-[#548076]"
                href="https://instagram.com"
                target={'_blank'}
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
            <div className="flex flex-row justify-between items-center h-[48px]">
              <a
                className="text-primary text-center hover:text-[#548076]"
                href="https://youtu.be/T3nr9s-XCrA"
                target={'_blank'}
              >
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center p-0 gap-[48px]">
            <li className="flex items-center px-0 py-[10px] h-[48px] text-center text-caption list-none">
              <Link
                className="text-center text-black hover:text-primary"
                to="/bugonteam"
              >
                Design by BugOn
              </Link>
            </li>
            <li className="flex items-center px-0 py-[10px] h-[48px] text-center text-caption list-none">
              <Link
                className="flex items-center gap-1 text-center text-black hover:text-primary"
                to="/"
              >
                <span>Coffee Bug Ổn</span>
                <span className="material-symbols-rounded text-[18px]">
                  copyright
                </span>
                <span>{new Date().getFullYear()}</span>
              </Link>
            </li>
            {/* <li className="flex items-center px-0 py-[10px] h-[48px] text-center text-caption list-none">
              <Link
                className="text-center text-black hover:text-primary"
                to="/aboutus"
              >
                Về chúng tôi
              </Link>
            </li> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
