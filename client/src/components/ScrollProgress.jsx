import { useEffect, useState } from 'react'

import '../styles/scrollprogress.css'

const ScrollProgress = () => {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrollPosition = window.scrollY

      const scrollPercent =
        (scrollPosition / totalHeight) * 100

      setScroll(scrollPercent)

    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (

    <div
      className="scrollProgress"
      style={{width:`${scroll}%`}}
    ></div>

  )

}

export default ScrollProgress