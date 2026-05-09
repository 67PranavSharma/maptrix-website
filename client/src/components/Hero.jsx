import '../styles/hero.css'

import { motion } from 'framer-motion'

import { TypeAnimation } from 'react-type-animation'

import Particles from 'react-tsparticles'

import { loadFull } from 'tsparticles'

const Hero = () => {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (

    <section className="hero" id="home">

      <Particles
        id="tsparticles"

        init={particlesInit}

        options={{

          background:{
            color:{
              value:'transparent',
            },
          },

          fpsLimit:120,

          particles:{

            color:{
              value:'#00bfff',
            },

            links:{
              color:'#00bfff',
              distance:150,
              enable:true,
              opacity:0.3,
              width:1,
            },

            move:{
              direction:'none',
              enable:true,

              outModes:{
                default:'bounce',
              },

              random:false,
              speed:1.5,
              straight:false,
            },

            number:{
              density:{
                enable:true,
              },

              value:50,
            },

            opacity:{
              value:0.5,
            },

            shape:{
              type:'circle',
            },

            size:{
              value:{
                min:1,
                max:4,
              },
            },

          },

          detectRetina:true,

        }}
      />

      <div className="blueGlow"></div>

      <div className="orangeGlow"></div>

      <motion.div
        initial={{opacity:0,y:100}}

        animate={{opacity:1,y:0}}

        transition={{duration:1}}

        className="heroContent"
      >

        <h1>
          Connecting Talent <br />
          With Excellence
        </h1>

        <TypeAnimation
          sequence={[
            'Hire Smarter.',
            2000,

            'Build Stronger Teams.',
            2000,

            'Grow Your Business Faster.',
            2000,
          ]}

          wrapper="h2"

          speed={40}

          repeat={Infinity}

          className="heroTyping"
        />

        <p>
          MAPtrix HR Consultancy helps businesses hire top talent
          and empowers professionals to build successful careers.
        </p>

        <div className="heroButtons">

          <button
            className="startBtn"

            onClick={() => {

              document
                .getElementById('contact')
                .scrollIntoView({
                  behavior:'smooth'
                })

            }}
          >
            Get Started
          </button>

          <button
            className="serviceBtn"

            onClick={() => {

              document
                .getElementById('services')
                .scrollIntoView({
                  behavior:'smooth'
                })

            }}
          >
            Explore Services
          </button>

        </div>

      </motion.div>

    </section>

  )

}

export default Hero