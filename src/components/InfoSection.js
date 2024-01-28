import React from 'react';
import { useTranslation } from 'react-i18next';
import Interview from '../assets/black.jpg'

function InfoSection() {
    const { t, i18n } = useTranslation();

    return (
        <div className='text-white bg-gradient-to-t from-transparent to-blue-900 max-w-[1940px] select-none mt-[-96px] w-full h-max mx-auto text-center flex flex-col justify-center'>
            <h1 className='text-2xl md:text-4xl font-bold md:py-6 py-4 ease-in-out duration-500'>{t('Program')}</h1>
            <p className='md:text-2xl text-xl font-bold ease-in-out duration-500 py-4'>{t('Gjest')}: TBA</p>
            <p className='md:text-2xl text-xl font-bold ease-in-out duration-500 py-4'>{t('Dato')}: TBA</p>
            <p className='md:text-2xl text-xl font-bold ease-in-out duration-500 py-4'>{t('Klokkeslett')}: 20:00 - 23:00 (CET)</p>
            <div className='rounded-md border-blue-500 border-solid border-4 mx-auto flex flex-col justify-center max-w-[300px]'>
                <img src={Interview} />
            </div>
            <p className='md:text-2xl text-xl font-bold ease-in-out duration-500 py-4'>{t('Fredag')}</p>
        </div>
    )
}

export default InfoSection