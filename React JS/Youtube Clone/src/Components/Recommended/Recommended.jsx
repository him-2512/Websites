import React from 'react'
import './recommended.css'
import thumb1 from '../../assets/thumbnail1.png'
import thumb2 from '../../assets/thumbnail2.png'
import thumb3 from '../../assets/thumbnail3.png'
import thumb4 from '../../assets/thumbnail4.png'
import thumb5 from '../../assets/thumbnail5.png'
import thumb6 from '../../assets/thumbnail6.png'
import thumb7 from '../../assets/thumbnail7.png'
import thumb8 from '../../assets/thumbnail8.png'


function Recommended() {
    return (
        <div className='recommended'>
            <div className="side-video-list">
                <img src={thumb1} alt="" />
                <div className="vid-info">
                    <h4>Best channel to learn web development</h4>
                    <p>Code with Harry</p>
                    <p>200 Views</p>
                </div>
            </div>

            <div className="side-video-list">
                <img src={thumb2} alt="" />
                <div className="vid-info">
                    <h4>Best channel to learn web development</h4>
                    <p>Code with Harry</p>
                    <p>200 Views</p>
                </div>
            </div>

            <div className="side-video-list">
                <img src={thumb3} alt="" />
                <div className="vid-info">
                    <h4>Best channel to learn web development</h4>
                    <p>Code with Harry</p>
                    <p>200 Views</p>
                </div>
            </div>

            <div className="side-video-list">
                <img src={thumb4} alt="" />
                <div className="vid-info">
                    <h4>Best channel to learn web development</h4>
                    <p>Code with Harry</p>
                    <p>200 Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumb5} alt="" />
                <div className="vid-info">
                    <h4>Best channel to learn web development</h4>
                    <p>Code with Harry</p>
                    <p>200 Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumb6} alt="" />
                <div className="vid-info">
                    <h4>Best channel to learn web development</h4>
                    <p>Code with Harry</p>
                    <p>200 Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumb7} alt="" />
                <div className="vid-info">
                    <h4>Best channel to learn web development</h4>
                    <p>Code with Harry</p>
                    <p>200 Views</p>
                </div>
            </div>
            <div className="side-video-list">
                <img src={thumb8} alt="" />
                <div className="vid-info">
                    <h4>Best channel to learn web development</h4>
                    <p>Code with Harry</p>
                    <p>200 Views</p>
                </div>
            </div>
        </div>
    )
}

export default Recommended
