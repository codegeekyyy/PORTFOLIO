import React from 'react'
import './Hero.css'
import profilepic from '../../assets/profilepic.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img className='heroimg' src={profilepic}alt='profile image'/>
    <h1><span>I'm Harshdeep Singh,</span> full stack developer based in India</h1>
    <p>I am a passionate and dedicated full-stack developer currently pursuing a B.Tech in Computer Science from Pranveer Singh Institute of Technology, where I am in my second year. Having completed my schooling at Kendriya Vidyalaya Varanasi, I have developed a strong foundation in programming and problem-solving.
    My skill set includes HTML/CSS, JavaScript, React, Node.js, Express.js, MongoDB, C, C++, and DSA. I enjoy creating efficient, scalable, and user-friendly web applications while continuously exploring new technologies and improving my skills.
    In my free time, I work on personal projects that showcase my creativity and technical expertise. Feel free to explore my portfolio to learn more about my journey and accomplishments!</p>
    <div className="heroaction">
    <div className="heroconnect">
     <a className="anchor-link" href="#cntct">CONNECT WITH ME!</a>
       </div>
        <div className="heroresume">MY RESUME</div>
    </div>
    </div>
  )
}

export default Hero