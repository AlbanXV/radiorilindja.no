import React from 'react';
import rr_bg from '../assets/rr_bg.mp4'
import kujdesi_promo from '../assets/kujdesi.mp4'

function VideoSection() {
  return (
    <div className='select-none mt-[-50px] mb-8 w-full h-full flex-col justify-center flex'>
        <video autoPlay loop muted>
            <source src={kujdesi_promo} type='video/mp4' />
        </video>
    </div>
  )
}

export default VideoSection