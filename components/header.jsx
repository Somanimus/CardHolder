import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./nav"; 
import style from '../styles/header.module.css'
const Header = () => {
  return (
    <header className={` ${style.header}`}>
      <Nav/>
   </header>
  );
};

export default Header;
