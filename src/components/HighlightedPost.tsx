import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';
import { useTranslation } from 'react-i18next';

// <h2 className='text-lg text-white flex justify-center mb-12'>{t('FredagNy')}</h2>

// <h3 className='text-lg font-bold px-3 py-4 bg-black text-white bg-opacity-75 rounded'>{t('Dato')}: {new Date(post.eventDate).toLocaleDateString()}</h3>

function HighlightedPost() {
    const { t, i18n } = useTranslation();

    const [postData, setPost] = useState<any>(null)

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
        <main className='text-white bg-gradient-to-t py-16 px-4 from-transparent to-blue-900 h-max p-12 select-none max-w-[1940px] w-full mx-auto'>
            <section className='container mx-auto'>
            <p className='text-2xl md:text-4xl font-extrabold md:py-6 py-4 
            ease-in-out duration-500 text-center
            bg-clip-text text-transparent
            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] 
            bg-[length:200%_auto] animate-gradient'>{t('FredagNy')}</p>
            </section>
        </main>
    );

    return (
        <main className='text-white bg-gradient-to-t py-16 px-4 from-transparent to-blue-900 min-h-screen p-12 select-none max-w-[1940px] w-full mx-auto'>
            <section className='container mx-auto'>
                <p className='text-2xl md:text-4xl font-extrabold md:py-6 py-4 
                ease-in-out duration-500 text-center
                bg-clip-text text-transparent
                bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] 
                bg-[length:200%_auto] animate-gradient'>{t('FredagNy')}</p>
                <h1 className='text-2xl md:text-4xl md:py-6 lg:py-4 lg:my-5 ease-in-out duration-500 font-bold flex justify-center'>{t('ProgramNy')}</h1>
                <div className='grid md:grid-cols-1 lg:grid-cols-1 gap-8'>
                    {postData && postData.slice(0,1).map((post:any, index:any) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className='block h-96 relative rounded shadow leading-snug bg-transparent' key={index}>
                            <img
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className='w-full h-full rounded-r object-contain absolute'
                            />
                            <span className='block relative h-full flex justify-center items-end pr-4 pb-4'>
                                <p className='md:text-2xl text-lg text-center py-2 px-2 bg-black text-white bg-opacity-75 rounded'>{post.title}</p>
                            </span>

                        </span>
                        </Link>
                    </article>
                    ))}
                <Link to='/program'><button className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 my-4 border border-blue-500 rounded'>{t('Button')}</button></Link>
                </div>
            </section>
        </main>
    )
    
}

export default HighlightedPost