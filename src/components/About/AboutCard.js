import React from "react"
import "./About.css"
import { Link } from "react-router-dom"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
        <h4>About Us</h4>
          <h1>
            Providing<span> A Loving Home</span><br></br> for Abandoned Pets
          </h1>
          <p>At Pet Heaven, we are committed to providing a safe and caring environment for pets that have been abandoned by their owners. With the rise of online pet purchases, more and more animals are left without a home. Our mission is to take in these animals, provide them with proper care, and find them loving forever homes. </p>
          <p>Whether you're looking to adopt a new pet, need to find a new home for your current pet, or simply want to support our cause, we welcome you to visit us at Pet Heaven. Click the button below to learn more about our adoption process and how you can help us in our mission.</p>
          <Link to='/about'>
          <button className='secondary-btn'>
            Learn More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
          </Link>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' alt='' />
          <div className='map-container'>
          <h1>
            Our<span> Location</span>
          </h1>
          <iframe
  title="Pet Heaven Location"
  className="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7457784273543!2d103.7766504!3d1.3285501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1080431c6a1f%3A0xf2c17e6c0d9a19d9!2s460%20Clementi%20Rd!5e0!3m2!1sen!2ssg!4v1700902066791!5m2!1sen!2ssg" 
  width="600"
  height="450"
  allowfullscreen=""
  loading="lazy"
></iframe>

          </div>

        </div>
      </div>
    </>
  )
}

export default AboutCard