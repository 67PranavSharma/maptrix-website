import '../styles/team.css'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2new.jpg'
import team3 from '../assets/team3new.jpg'

const teamMembers = [

  {
    name:'Pranav Sharma',
    role:'Founder & CEO',
    image:team1,
  },

  {
    name:'Maitri',
    role:'Co-Founder & HR Director',
    image:team2,
  },

  {
    name:'Arjun',
    role:'Co-Founder & Operations Head',
    image:team3,
  },

]

const Team = () => {
  return (

    <section className="team">

      <motion.h1
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
      >
        Leadership Team
      </motion.h1>

      <div className="teamContainer">

        {teamMembers.map((member,index)=>(

          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            key={index}
          >

            <motion.div
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.7, delay:index * 0.2}}
              className="teamCard"
            >

              <img src={member.image} alt="" />

              <h2>{member.name}</h2>

              <p>{member.role}</p>

              <div className="socialIcons">

                <FaLinkedin />
                <FaInstagram />
                <FaTwitter />

              </div>

            </motion.div>

          </Tilt>

        ))}

      </div>

    </section>

  )
}

export default Team