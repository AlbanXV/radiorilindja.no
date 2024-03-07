import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import sanityClient from '../../client';
import { FaArrowLeft } from 'react-icons/fa'

// <h2 className='md:text-2xl text-lg ease-in-out duration-500 text-white flex justify-center mb-12 text-center'>{t('ProgramI')}</h2>

function Post() {
    const { t, i18n } = useTranslation();

    const [postData, setPost] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            eventDate,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            } 
        }`).then((data) => setPost(data)).catch(console.error)
    }, [])

    if (postData == 0) return (
        <main className='text-white bg-gradient-to-t from-transparent to-blue-900 min-h-screen p-12 select-none'>
            <Link to='/'><FaArrowLeft size={30} /></Link>
            <section className='container mx-auto'>
                <h1 className='text-3xl md:text-5xl font-bold md:py-9 py-4 ease-in-out duration-500 flex justify-center text-center'>{t('ProgramNy')}</h1>
                    <p className='md:text-2xl text-lg text-center py-2'>No results</p>
            </section>
        </main>
    )

    return (
        <main className='text-white bg-gradient-to-t from-transparent to-blue-900 min-h-screen p-12 select-none'>
            <Link to='/'><FaArrowLeft size={30} /></Link>
            <section className='container mx-auto'>
                <h1 className='text-3xl md:text-5xl font-bold md:py-9 py-4 ease-in-out duration-500 flex justify-center text-center'>{t('ProgramNy')}</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400 hover:border-blue-500' key={index}>
                            <img
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className='w-full h-full rounded-r object-cover absolute'
                            />
                            <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                                <h3 className='text-lg font-bold px-3 py-4 bg-black text-white bg-opacity-75 rounded'>{t('Dato')}: {new Date(post.eventDate).toLocaleDateString()}</h3>
                            </span>
                            <p className='md:text-2xl text-lg'>{post.title}</p>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
    
}

export default Post