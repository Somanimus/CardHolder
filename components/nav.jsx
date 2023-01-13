import React from 'react';
import style from '../styles/nav.module.css'
import Link from 'next/link';
import Image from 'next/image';
const Nav = () => {
    return (
              <nav className={` ${style.nav}`}>
        <Link href={`/`} className={`${style.homeLink}`}>
           INSERTLOGO 
        </Link>


        <ul className={` ${style.linkList}`}>
            <li> <Link href={`/about`}>about</Link></li>
            <li> <Link href={`/catalog`}>catalog</Link></li>
            <li> <Link href={`/contacts`}>contacts</Link></li>
        </ul>
        <div className="basket-container">
            <Image src={'/shopping-bag.svg'} width={30} height={30} className={ `${style.headerSVG}`} />
        </div>
        <div className={` ${style.burgerContainer}`}>
            <Image src={`/burger.svg`} width={30} height={30} className={` ${style.headerSVG}`} />
            <div className="">
        <ul>
            <li> <Link href={`/about`}>about</Link></li>
            <li> <Link href={`/catalog`}>catalog</Link></li>
            <li> <Link href={`/contacts`}>contacts</Link></li>
        </ul>
 
            </div>
        </div>

      </nav>
 
    );
};

export default Nav;