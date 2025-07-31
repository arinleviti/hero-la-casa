'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Overlay() {
  const [showOverlay, setShowOverlay] = useState(true)
  const pathname = usePathname();

  useEffect(() => {

    if (pathname !== '/') {
      setShowOverlay(false)
      return
    }

    if (window.scrollY !== 0) {
      setShowOverlay(false)
      return
    }

    function handleScroll() {
      setShowOverlay(false)
      window.removeEventListener('scroll', handleScroll)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])
  // Don't render anything if not on homepage
  if (pathname !== '/') return null

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
