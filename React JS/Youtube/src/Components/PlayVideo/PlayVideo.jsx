import React from 'react'
import './playvideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'


function PlayVideo() {
    return (
        <div className='play-video'>
            <video src={video} controls autoPlay muted></video>
            <h3>Best beach video</h3>
            <div className="playvideo-info">
                <p>1525 Views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="" />125</span>
                    <span><img src={dislike} alt="" />5</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>MrBeast</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="video-desc">
                <p>Channel for fun</p>
                <p>Subscribe MrBeast channel for more fun videos</p>
                <hr />
                <h4>130 Comments</h4>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Reacher <span>1 day ago</span></h3>
                        <p>I love the channel and look forward MrBeast to upload more videos like this</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Reacher <span>1 day ago</span></h3>
                        <p>I love the channel and look forward MrBeast to upload more videos like this</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Reacher <span>1 day ago</span></h3>
                        <p>I love the channel and look forward MrBeast to upload more videos like this</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Reacher <span>1 day ago</span></h3>
                        <p>I love the channel and look forward MrBeast to upload more videos like this</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>123</span>
                            <img src={dislike} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo
