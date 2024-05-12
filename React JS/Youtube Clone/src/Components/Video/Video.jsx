import React from 'react'
import './video.css'
import PlayVideo from '../PlayVideo/PlayVideo'
import Recommended from '../Recommended/Recommended'
function Video() {
    return (
        <div className='playContainer'>
            <PlayVideo />
            <Recommended />
        </div>
    )
}

export default Video
