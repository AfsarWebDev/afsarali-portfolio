import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.png'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "6e2a01fe-782c-428d-8965-f83a500c50ca");

        const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let’s Work Together</h1>
                    <p>I’m open to Frontend Developer opportunities, freelance projects, and exciting collaborations.
                        Whether you’re hiring, building a product, or need a reliable frontend expert — I’d love to hear from you.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <a href="mailto:digitalafsarcom@gmail.com">
                                <img src={mail_icon} alt="email" />
                                <span>digitalafsarcom@gmail.com</span>
                            </a>
                        </div>
                        <div className="contact-detail">
                            <a href="tel:+919113613336">
                                <img src={call_icon} alt="phone" />
                                <span>+91 9113613336</span>
                            </a>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Bangalore, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' id=""></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact