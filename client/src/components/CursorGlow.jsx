import { useEffect, useRef } from 'react'

import '../styles/cursorglow.css'

const CursorGlow = () => {

  const cursorRef = useRef(null)

  useEffect(() => {

    let mouseX = 0
    let mouseY = 0

    let currentX = 0
    let currentY = 0

    const moveCursor = (e) => {

      mouseX = e.clientX
      mouseY = e.clientY

    }

    window.addEventListener(
      'mousemove',
      moveCursor
    )

    const animate = () => {

      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08

      if(cursorRef.current){

        cursorRef.current.style.transform =
          `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`

      }

      requestAnimationFrame(animate)

    }

    animate()

    return () => {

      window.removeEventListener(
        'mousemove',
        moveCursor
      )

    }

  }, [])

  return (
    <div
      ref={cursorRef}
      className="cursorGlow"
    ></div>
  )

}

export default CursorGlow