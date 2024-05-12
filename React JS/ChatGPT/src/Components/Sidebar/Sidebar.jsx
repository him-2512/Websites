import React from 'react'
import './sidebar.css'
import logo from '../../assets/chatgpt.svg'
import add from '../../assets/add-30.png'
import msg from '../../assets/message.svg'
import home from '../../assets/home.svg'
import saved from '../../assets/bookmark.svg'
import upgrade from '../../assets/rocket.svg'


function Sidebar() {

    const handleQuery = async (e) => {
        const text = e.target.value;
        setMessages([
            ...messages,
            { text, isBot: false }
        ])
        const res = await sendMsgToAI(input);
        setMessages([
            ...messages,
            { text: input, isBot: false },
            { text: res, isBot: true }
        ])
    }
    return (
        <div className='sidebar'>
            <div className='upperSide'>
                <div className="upperSideTop">
                    <div className="brand">
                        <img className='logo' src={logo} alt="" />
                        <span className='brandName'>ChatGPT</span>
                    </div>
                    <button className='midBtn' onClick={() => { window.location.reload() }}><img className='addBtn' src={add} alt="" />New Chat</button>
                </div>
                <div className="upperSideBottom">
                    <button className="query" onClick={handleQuery} value={'What is Programming?'}><img src={msg} alt="" /></button>
                    <button className="query" onClick={handleQuery} value={'How to use an API?'}><img src={msg} alt="" /></button>
                </div>
            </div>
            <div className='lowerSide'>
                <div className="listItems"><img src={home} className='listItemImg' alt="" />Home</div>
                <div className="listItems"><img src={saved} className='listItemImg' alt="" />Saved</div>
                <div className="listItems"><img src={upgrade} className='listItemImg' alt="" />Upgrade to Pro</div>
            </div>

        </div>
    )
}

export default Sidebar
