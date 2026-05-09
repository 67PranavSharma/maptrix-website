import '../styles/navbar.css'

import logo from '../assets/logo.png'

import { useState, useEffect } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {

    const handleScroll = () => {

      if(window.scrollY > 50){
        setScrolled(true)
      }else{
        setScrolled(false)
      }

      const sections = [
        'home',
        'about',
        'services',
        'contact',
      ]

      sections.forEach((section) => {

        const element =
          document.getElementById(section)

        if(element){

          const top = element.offsetTop - 120

          const height = element.offsetHeight

          if(
            window.scrollY >= top &&
            window.scrollY < top + height
          ){

            setActiveSection(section)

          }

        }

      })

    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (

    <nav
      className={
        scrolled
        ? 'navbar activeNavbar'
        : 'navbar'
      }
    >

      <div className="logoSection">

        <img
          src={logo}
          alt="MAPtrix Logo"
        />

        <h1>MAPtrix</h1>

      </div>

      <ul
        className={
          menuOpen
          ? 'navLinks active'
          : 'navLinks'
        }
      >

        <li
          className={
            activeSection === 'home'
            ? 'active'
            : ''
          }
        >
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>

        <li
          className={
            activeSection === 'about'
            ? 'active'
            : ''
          }
        >
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>

        <li
          className={
            activeSection === 'services'
            ? 'active'
            : ''
          }
        >
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
        </li>

        <li
          className={
            activeSection === 'contact'
            ? 'active'
            : ''
          }
        >
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>

      </ul>

      <button
        className="hireBtn"

        onClick={() => {

          document
            .getElementById('contact')
            .scrollIntoView({
              behavior:'smooth'
            })

        }}
      >
        Hire Talent
      </button>

      <div
        className="menuIcon"

        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {
          menuOpen
          ? <FaTimes />
          : <FaBars />
        }

      </div>

    </nav>

  )

}

export default Navbar