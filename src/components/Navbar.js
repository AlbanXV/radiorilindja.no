import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { navbar_items } from './navbar_items';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import RadioRilindja from '../assets/rr_nav.png'
//import './Navbar.css';

// <div className='navbar-container'>

// <Link to="/" className="navbar-logo">

// <ul className='nav-menu'>

// <Link to={item.url} className='nav-links'>{item.title}</Link>

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const { t, i18n } = useTranslation();

    const changeLanguage = (i) => {
        i18n.changeLanguage(i);
    }

  return (
    <>
        <nav className='select-none text-white'>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
                <Link to="/">
                    <img src={RadioRilindja} />
                </Link>
                <ul className='hidden md:flex'>
                    {navbar_items.map((item, index) => {
                        return (
                            <li key={index} className='p-4'>
                                <Link to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                    <button onClick={() => changeLanguage('no')} className=' bg-blue-800 rounded-md w-[80px]'>NORSK</button>
                    <button onClick={() => changeLanguage('sq')} className=' bg-red-800 rounded-md w-[80px]'>SHQIP</button>
                </ul>

                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                </div>

                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-[#000300] bg-gradient-to-t from-[#000300] to-blue-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold m-4 text-white-900'>RADIO RILINDJA</h1>
                    <ul className='uppercase p-4'>
                        {navbar_items.map((item, index) => {
                            return (
                                <li className='p-4 border-b border-white-900' key={index}>
                                    <Link to={item.url}>{item.title}</Link>
                                </li>
                            )
                        })}
                        <br />
                        <button onClick={() => changeLanguage('no')} className=' bg-blue-800 rounded-md w-[80px]'>NORSK</button>
                        <button onClick={() => changeLanguage('sq')} className=' bg-red-800 rounded-md w-[80px]'>SHQIP</button>
                    </ul>
                </div>

            </div>
        </nav>
    </>
  );
}

export default Navbar