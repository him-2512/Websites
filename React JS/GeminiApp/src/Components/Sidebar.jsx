import './Sidebar.css'
import React, { useState } from 'react'
import { assets } from '../assets/assets'

function Sidebar() {
    const [extended, setExtended] = useState(false);

    return (
        <div className={`sidebar ${extended ? 'extended' : ''}`}>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended && <p>New Chat</p>}
                </div>

                {extended &&
                    <div className="recent">
                        <p className='title'>Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>General Discussion...</p>
                        </div>
                    </div>
                }
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended && <p>Help</p>}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended && <p>History</p>}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended && <p>Setting</p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
