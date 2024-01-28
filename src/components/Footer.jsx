import React from 'react';
// import './Footer.css';
import { Link } from 'react-router-dom';
import { navbar_items } from './navbar_items';
import {
    FaYoutubeSquare,
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaGithubSquare,
} from 'react-icons/fa'

function Footer() {
  return (

    <div className=' text-white select-none max-w-[1240px] mx-auto md:py-16 py-0 px-4 grid lg:grid-cols-3 gap-8'>
        <div>
            <h1 className='w-full text-3xl font-bold'>RADIO RILINDJA</h1>
            <p className='py-2'>Address: Sverres gate 8, 0652 Oslo</p>
            <div className='flex justify-between md:w-[75%] my-6 py-4'>
                <Link to='https://www.youtube.com/@RadioRilindjaNorway/'><FaYoutubeSquare size={30} /></Link>
                <Link to='https://www.facebook.com/radiorilindja'><FaFacebookSquare size={30} /></Link>
                <Link to='https://twitter.com/RilindjaNorway'><FaTwitterSquare size={30} /></Link>
                <Link to='https://github.com/AlbanXV/radiorilindja.no'><FaGithubSquare size={30} /></Link>
                <Link to='https://www.instagram.com/radio.rilindja.norway/'><FaInstagramSquare size={30} /></Link>
            </div>
        </div>

        <div className='flex lg:col-span-2 justify-between mt-6 py-4'>
            <div>
                <h6 className='font-bold text-gray-400'>Information</h6>
                <ul>
                    <Link to='/About' className='py-2 text-sm'>About us</Link>
                </ul>
            </div>

            <div>
                <h6 className='font-bold text-gray-400'>Support</h6>
                <ul>
                    <Link to='/Contact' className='py-2 text-sm'>Contact us</Link>
                </ul>
            </div>

        </div>

    </div>

    /*
    <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>About us</h2>
                    <Link to='/'>About Radio Rilindja</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                </div>
            </div>
        </div>
    </div>
    */
  )
}

export default Footer