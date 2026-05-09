import '../styles/footer.css'

import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa'

import logo from '../assets/logo.png'

const Footer = () => {
  return (

    <footer className="footer">

      <div className="footerContainer">

        <div className="footerBox">

          <div className="footerLogo">

            <img src={logo} alt="" />

            <h2>MAPtrix</h2>

          </div>

          <p>
            MAPtrix HR Consultancy helps businesses hire
            exceptional talent and empowers professionals
            to build successful careers.
          </p>

        </div>

        <div className="footerBox">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Jobs</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footerBox">

          <h3>Services</h3>

          <ul>
            <li>IT Recruitment</li>
            <li>Bulk Hiring</li>
            <li>Corporate Hiring</li>
            <li>HR Consulting</li>
          </ul>

        </div>

        <div className="footerBox">

          <h3>Follow Us</h3>

          <div className="footerIcons">

            <FaLinkedin />
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />

          </div>

        </div>

      </div>

      <div className="footerBottom">

        © 2026 MAPtrix HR Consultancy. All Rights Reserved.

      </div>

    </footer>

  )
}

export default Footer