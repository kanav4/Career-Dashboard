import React, { useEffect } from "react";
import Link from "next/link";
export default function Nav() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const x = document.querySelector(".cover");
    const y = document.querySelector("#mlogo");
    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      x.classList.toggle("sheets");
      y.classList.toggle("logoM");

      document.querySelector("body").classList.toggle("noscroll");
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    function closeMenu() {
      x.classList.remove("sheets");
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.querySelector("body").classList.remove("noscroll");
    }
  }, []);


  return (
    <>
      <div className="cover"></div>
      <header className="headerx">
        <nav className="navbar">
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <a className="nav-logo" href="/">
            <img className="logo" src="/logos.png" />
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <img
                id="mlogo"
                className="logoImg2"
                src="/logos.png"
                alt="logo"
                height="60px"
                width="80px"
              />
            </li>
            <li className="nav-item">
              <Link href={"/"}>
                <a className="nav-link">Our Products</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href={"/"}>
                <a className="nav-link">Insights</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href={"/"}>
                <a className="nav-link">Smart Yarn</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href={"/"}>
                <a className="nav-link">About</a>
              </Link>
              </li>
             
              <li className="nav-item">
              <Link href={"/"}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      </>

  );
}
