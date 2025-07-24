'use client'

import { useEffect, useState } from 'react'

export default function Overlay() {
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    function handleScroll() {
      setShowOverlay(false)
      window.removeEventListener('scroll', handleScroll)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {showOverlay && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'white',
            zIndex: 9989,
          }}
        />
      )}

    </>
  )
}
