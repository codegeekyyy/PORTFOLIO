import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.png'
import mail_icon from '../../assets/mail_icon.png'
import location_icon from '../../assets/location_icon.png'
import call_icon from '../../assets/call_icon.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "aaafc7d7-1255-4864-9ab2-06bb52958edc");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert(data.message);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div id='cntct'className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt='theme patten'/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>we contact here</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={mail_icon} alt='mail'/> <p>harshdeep.s5423@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt='call log'/> <p>+91 7068662102</p>
                    </div>
                    <div className="contact-detail">
                     <img src={location_icon} alt='location'/><p>Kanpur UP</p>   
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'></input>
                <label htmlFor=''>Your email</label>
                <input type='email' placeholder='Enter your name'></input>
                <label htmlFor=''>Write your message here</label>
                <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                <button type='submit'className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact