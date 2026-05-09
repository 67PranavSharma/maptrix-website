import '../styles/contact.css'
import { motion } from 'framer-motion'

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

import { useState } from 'react'
import axios from 'axios'

const Contact = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
  })

  const [success, setSuccess] = useState('')

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try{

      const response = await axios.post(
        'http://localhost:8000/api/contact',
        formData
      )

      console.log(response.data)

      alert('Message Sent Successfully')

      setSuccess('Message Sent Successfully')

      setFormData({
        name:'',
        email:'',
        phone:'',
        message:'',
      })

    }catch(error){

  console.log(error)

  console.log(error.response)

  alert(
    error?.response?.data?.message ||
    error.message ||
    'Something went wrong'
  )

}
  }

  return (

    <section className="contact" id="contact">

      <motion.h1
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
      >
        Contact Us
      </motion.h1>

      <div className="contactContainer">

        <motion.div
          initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1}}
          className="contactInfo"
        >

          <h2>Let’s Build Great Teams Together</h2>

          <p>
            Contact MAPtrix HR Consultancy for recruitment,
            staffing, and hiring solutions.
          </p>

          <div className="infoBox">
            <FaPhoneAlt />
            <span>+91 9876543210</span>
          </div>

          <div className="infoBox">
            <FaEnvelope />
            <span>info@maptrixhr.com</span>
          </div>

          <div className="infoBox">
            <FaMapMarkerAlt />
            <span>Ahmedabad, Gujarat, India</span>
          </div>

        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1}}
          className="contactForm"
        >

          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

          {
            success && (
              <p className="successMessage">
                {success}
              </p>
            )
          }

        </motion.form>

      </div>

    </section>

  )
}

export default Contact