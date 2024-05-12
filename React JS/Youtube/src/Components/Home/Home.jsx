import React from 'react'
import './home.css'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
function Home({ sidebar }) {
    return (
        <>
            <Sidebar sidebar={sidebar} />
            <div className={`container ${sidebar ? '' : 'large-container'}`}>
                <Feed />
            </div >

        </>
    )
}

export default Home
