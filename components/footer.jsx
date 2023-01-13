import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './nav';
import style from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.navContainer}>
            <Nav/>
            </div>
            <div className={style.footerLinks}>
                <div className={style.footerColumns}>
                    <p className={style.title}>About us</p>
                    <ul>
                        <li><Link href={''}>Team</Link></li>
                        <li><Link href={''}>About the Project</Link></li>
                        <li><Link href={''}>Lorem</Link></li>
                    </ul>
                </div>
                <div className={style.footerColumns}>
                    <p className={style.title}>Services</p>
                    <ul>
                        <li><Link href={''}>Credit</Link></li>
                        <li><Link href={''}>Loans</Link></li>
                        <li><Link href={''}>Shipping</Link></li>
                        <li><Link href={''}>Bodily fluids</Link></li>
                    </ul>
                </div>
                <div className={style.footerColumns}>
                    <p className={style.title}>Socials</p>
                    <ul className={style.footerSocials}>
                        <li><Link href={''}><Image src={'/facebook.svg'} width={30} height={30}/></Link></li>
                        <li><Link href={''}><Image src={'/telegram.svg'} width={30} height={30}/></Link></li>
                        <li><Link href={''}><Image src={'/whatsapp.svg'} width={30} height={30}/></Link></li>
                        <li><Link href={''}><Image src={'/instagram.svg'} width={30} height={30}/></Link></li>
                    </ul>
                </div>


            </div>
        </footer>
    );
};

export default Footer;