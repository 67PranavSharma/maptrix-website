import '../styles/services.css'

import { motion } from 'framer-motion'

import {
  FaUsers,
  FaBriefcase,
  FaUserTie,
  FaChartLine
} from 'react-icons/fa'

const Services = () => {

  const serviceData = [

    {
      icon:<FaUsers />,
      title:'Bulk Hiring',
      desc:'Fast and efficient recruitment solutions for companies hiring at scale.',
    },

    {
      icon:<FaBriefcase />,
      title:'Job Placement',
      desc:'Helping professionals connect with top companies and career opportunities.',
    },

    {
      icon:<FaUserTie />,
      title:'HR Consulting',
      desc:'Expert HR guidance to improve hiring, management, and employee growth.',
    },

    {
      icon:<FaChartLine />,
      title:'Business Growth',
      desc:'Smart workforce strategies that help businesses scale faster.',
    },

  ]

  return (

    <section className="services" id="services">

      <motion.h1
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
      >
        Our Services
      </motion.h1>

      <div className="servicesContainer">

        {
          serviceData.map((service,index) => (

            <motion.div
              key={index}
              className="serviceCard"

              initial={{opacity:0,y:80}}
              whileInView={{opacity:1,y:0}}

              transition={{
                duration:0.6,
                delay:index * 0.2
              }}

              whileHover={{
                y:-12,
                scale:1.03
              }}
            >

              <div className="serviceIcon">
                {service.icon}
              </div>

              <h2>{service.title}</h2>

              <p>{service.desc}</p>

            </motion.div>

          ))
        }

      </div>

    </section>

  )

}

export default Services