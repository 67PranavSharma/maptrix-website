import '../styles/about.css'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="about" id="about">

      <div className="aboutLeft">

        <motion.h1
          initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1}}
        >
          About MAPtrix
        </motion.h1>

        <motion.p
          initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1, delay:0.3}}
        >
          MAPtrix HR Consultancy is dedicated to connecting businesses with exceptional talent.
          We help companies streamline recruitment while empowering candidates to build successful careers.
        </motion.p>

        <div className="statsContainer">

          <div className="statBox">
            <h2>500+</h2>
            <p>Successful Placements</p>
          </div>

          <div className="statBox">
            <h2>120+</h2>
            <p>Hiring Companies</p>
          </div>

          <div className="statBox">
            <h2>5+</h2>
            <p>Years Experience</p>
          </div>

        </div>

      </div>

      <motion.div
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        className="aboutRight"
      >

        <div className="aboutCard">
          <h2>Why Choose Us?</h2>

          <ul>
            <li>✔ Fast Hiring Process</li>
            <li>✔ Professional Recruitment Team</li>
            <li>✔ IT & Non-IT Hiring</li>
            <li>✔ Startup & Corporate Solutions</li>
            <li>✔ Trusted by Growing Businesses</li>
          </ul>
        </div>

      </motion.div>

    </section>
  )
}

export default About