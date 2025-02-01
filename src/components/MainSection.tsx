import React from 'react';
import Radio from '../utility/Radio';
import { useTranslation } from 'react-i18next';

//import '../App.css';
//import './MainSection.css';

// <div className='main-container'>

function MainSection() {

  const { t, i18n } = useTranslation();

  return (
    <div className='bg-black max-w-[1940px] bg-rr ease-in-out duration-500 bg-cover bg-center md:bg-center bg-blend-soft-light bg-no-repeat bg-opacity-25 text-white select-none mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ease-in-out duration-500'>RADIO RILINDJA</h1>
        <p className='md:text-2xl text-xl font-bold ease-in-out duration-500 py-4'>{t('Nettradio')}</p>
        <div className='max-w-[150px] mx-auto text-center justify-center flex'>
          <Radio />
        </div>
    </div>
  )
}

export default MainSection