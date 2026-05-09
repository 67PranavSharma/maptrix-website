import '../styles/testimonials.css'

import { motion } from 'framer-motion'

import {
  Swiper,
  SwiperSlide
} from 'swiper/react'

import {
  Autoplay,
  Pagination
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const testimonialsData = [

  {
    name:'Rahul Mehta',
    company:'TechNova Solutions',

    review:
    'MAPtrix helped us hire highly skilled developers quickly. Their recruitment process is professional and efficient.',
  },

  {
    name:'Sneha Kapoor',
    company:'NextGen Pvt Ltd',

    review:
    'Amazing consultancy service. We successfully hired multiple candidates through MAPtrix.',
  },

  {
    name:'Amit Verma',
    company:'SkyEdge Technologies',

    review:
    'The team understands hiring needs perfectly and provides quality candidates.',
  },

]

const Testimonials = () => {

  return (

    <section
      className="testimonials"
      id="testimonials"
    >

      <motion.h1
        initial={{opacity:0,y:50}}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1
        }}
      >
        What Clients Say
      </motion.h1>

      <Swiper

        modules={[
          Autoplay,
          Pagination
        ]}

        spaceBetween={30}

        slidesPerView={1}

        autoplay={{
          delay:3000,
          disableOnInteraction:false,
        }}

        pagination={{
          clickable:true,
        }}

        loop={true}

        breakpoints={{

          768:{
            slidesPerView:2,
          },

          1100:{
            slidesPerView:3,
          },

        }}

        className="testimonialSwiper"
      >

        {
          testimonialsData.map((item,index)=>(

            <SwiperSlide key={index}>

              <motion.div

                initial={{
                  opacity:0,
                  y:50
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:0.7
                }}

                whileHover={{
                  y:-10
                }}

                className="testimonialCard"
              >

                <div className="stars">
                  ★★★★★
                </div>

                <p className="review">
                  “{item.review}”
                </p>

                <h2>{item.name}</h2>

                <span>{item.company}</span>

              </motion.div>

            </SwiperSlide>

          ))
        }

      </Swiper>

    </section>

  )

}

export default Testimonials