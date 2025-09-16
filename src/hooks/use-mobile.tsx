import * as React from "react"

const MOBILE_BREAKPOINT = 420  // Changed from 640 to 420 to handle small devices

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// Additional hook for very small screens
export function useIsVerySmallMobile() {
  const [isVerySmall, setIsVerySmall] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia("(max-width: 374px)")
    const onChange = () => {
      setIsVerySmall(window.innerWidth <= 374)
    }
    mql.addEventListener("change", onChange)
    setIsVerySmall(window.innerWidth <= 374)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isVerySmall
}
