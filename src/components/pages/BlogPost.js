import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../../client';
import ImageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

const builder = ImageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

function BlogPost() {
    const { t, i18n } = useTranslation();

    const [blogPost, setBlogPost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            eventDate,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setBlogPost(data[0])).catch(console.error);
    }, [slug]);

    if (!blogPost) return <div>Not found.</div>;

    return (
        <main className='bg-gradient-to-t from-transparent to-blue-900 min-h-screen p-12'>
            <div className='text-white py-4'>
                <Link to='/program'><FaArrowLeft size={30} /></Link>
            </div>
            <article className='container shadow-lg mx-auto bg-black text-white rounded-lg'>
                <header className='relative'>
                    {/*<div className='absolute h-full w-full flex items-center justify-center p-8'>
                        <div className='bg-white bg-opacity-75 rounded p-12'>
                        <h1 className='text-3xl lg:text-6xl mb-4'>{blogPost.title}</h1>
                        </div>
                    </div>*/}
                    <img 
                        src={blogPost.mainImage.asset.url} 
                        alt={blogPost.title} 
                        className='w-full object-cover rounded-t' 
                        style={{height: "400px"}} />
                    <h1 className='text-3xl items-center justify-center py-2 flex lg:text-6xl mb-4'>{blogPost.title}</h1>
                    <p className='text-center py-2'>{t('Klokkeslett')}: 20:00 - 23:00 (CET)</p>
                    <p className='text-center py-2'>{t('Dato')}: {new Date(blogPost.eventDate).toLocaleDateString()}</p>
                </header>
                <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full'><BlockContent blocks={blogPost.body} projectId="ba32m6vu" dataset="production" /></div>
            </article>
        </main>
    )
}

export default BlogPost;