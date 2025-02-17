import React, { useState } from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'

function Radio() {
    const [playBtn, setPlayBtn] = useState(false);
    const [audio] = useState(new Audio('https://radio.albaner.no/;&type=mp3'));

    const handlePlay = () => {
        if (!playBtn) {
            audio.play().then(() => {

            }).catch(error => {
                console.error('Failed to start playback:', error);
            });
        }
        else {
            audio.pause()
        }
        setPlayBtn(!playBtn)
    }

    return (
        <div onClick={handlePlay} className='flex justify-center p-4 cursor-pointer'>
          {!playBtn ? <FaPlayCircle size={80} /> : <FaPauseCircle size={80} />}
        </div>
    )
}

export default Radio
