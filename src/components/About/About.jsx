import React from 'react';
import './About.css';  // Correct way to import CSS file
import theme_pattern from '../../assets/theme_pattern.png'
import profilepic from '../../assets/profilepic.jpg'

const About = () => {
  return (
    <div id='about' className='abt'>
        <div className="abt-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="abt-section">
            <div className="abt-left">
                <img src={profilepic} alt=''/>
            </div>
            <div className="abt-right">
                <div className="abt-para">
                    <p>I am a passionate full-stack developer currently pursuing a B.Tech in Computer Science at Pranveer Singh Institute of Technology, where I am in my second year. I completed my schooling at Kendriya Vidyalaya Varanasi, achieving an 8 CGPA in my 12th grade and a 7.8 CGPA in my 1st year of B.Tech. Over the course of my academic journey, I have developed a strong foundation in programming and problem-solving, which has fueled my interest in software development. I specialize in front-end and back-end technologies, including HTML/CSS, JavaScript, React, Node.js, Express.js, MongoDB, and programming languages such as C and C++, along with a solid understanding of Data Structures and Algorithms (DSA).</p>
                    <p>Through hands-on projects and coursework, I have gained experience in building efficient, user-friendly web applications that are scalable and responsive. I am dedicated to continuously enhancing my skills and knowledge to stay up-to-date with the latest technologies. My goal is to create meaningful software that solves real-world problems. Feel free to explore my portfolio to learn more about my journey, projects, and future aspirations.</p>
                </div>
                <div className="abt-skills">
                    <div className="abt-skill"><p>HTML&CSS</p><hr style={{width:"80%"}}/></div>
                    <div className="abt-skill"><p>REACT JS</p><hr style={{width:"60%"}}/></div>
                    <div className="abt-skill"><p>JAVASCRIPT</p><hr style={{width:"60%"}}/></div>
                    <div className="abt-skill"><p>NODE-JS</p><hr style={{width:"50%"}}/></div>
                    <div className="abt-skill"><p>EXPRESS-JS</p><hr style={{width:"50%"}}/></div>
                    <div className="abt-skill"><p>MONGO-DB</p><hr style={{width:"50%"}}/></div>
                    <div className="abt-skill"><p>C/C++</p><hr style={{width:"80%"}}/></div>
                    <div className="abt-skill"><p>DSA</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
