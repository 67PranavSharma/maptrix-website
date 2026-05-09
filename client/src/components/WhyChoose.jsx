import '../styles/whychoose.css'

import { motion } from 'framer-motion'

import {
  FaUserCheck,
  FaBolt,
  FaHandshake,
  FaAward
} from 'react-icons/fa'

const WhyChoose = () => {

  const features = [

    {
      icon:<FaUserCheck />,
      title:'Verified Talent',
      desc:'We connect businesses with skilled and trusted professionals.',
    },

    {
      icon:<FaBolt />,
      title:'Fast Hiring',
      desc:'Quick recruitment process to save your valuable business time.',
    },

    {
      icon:<FaHandshake />,
      title:'Trusted Partnership',
      desc:'Long-term hiring solutions focused on business growth.',
    },

    {
      icon:<FaAward />,
      title:'Industry Expertise',
      desc:'Experienced HR consultancy with smart recruitment strategies.',
    },

  ]

  return (

    <section className="whyChoose">

      <motion.div
        className="whyLeft"

        initial={{opacity:0,x:-80}}
        whileInView={{opacity:1,x:0}}

        transition={{duration:1}}
      >

        <h1>
          Why Choose MAPtrix?
        </h1>

        <p>
          We help businesses hire smarter and grow faster
          with professional recruitment and HR solutions.
        </p>

      </motion.div>

      <div className="whyRight">

        {
          features.map((item,index) => (

            <motion.div
              key={index}

              className="whyCard"

              initial={{opacity:0,y:80}}
              whileInView={{opacity:1,y:0}}

              transition={{
                duration:0.6,
                delay:index * 0.2
              }}
            >

              <div className="whyIcon">
                {item.icon}
              </div>

              <h2>{item.title}</h2>

              <p>{item.desc}</p>

            </motion.div>

          ))
        }

      </div>

    </section>

  )

}

export default WhyChoose