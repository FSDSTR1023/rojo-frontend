import { useEffect, useRef, useState } from 'react'

export default function useSnapScroll(speed = 5) {
  const ref = useRef(null)
  const [limits, setLimits] = useState({
    left: true,
    right: false,
  })
  let scrollSP = 0
  let animation = null

  useEffect(() => {
    if (ref.current.scrollWidth === ref.current.clientWidth) {
      setLimits({
        left: true,
        right: true,
      })
    }
  }, [ref])

  const scroll = (sign) => {
    if (!scrollSP) scrollSP = ref.current.scrollLeft
    if (animation) clearInterval(animation)
    const cardNode = ref.current.children[0]

    const rowStyle = window.getComputedStyle(ref.current)
    const rowGap = rowStyle.getPropertyValue('gap')

    const cardStyle = window.getComputedStyle(cardNode)
    const cardMargin = cardStyle.getPropertyValue('margin')
    const cardWidth = cardNode.clientWidth
    const maxScroll = ref.current.scrollWidth - ref.current.clientWidth

    const scrollValue = parseInt(cardWidth) + 2 * parseInt(cardMargin) + parseInt(rowGap)
    scrollSP += (scrollValue * sign) / Math.abs(sign)
    if (scrollSP <= 0) {
      scrollSP = 0
      setLimits({
        left: true,
        right: false,
      })
    } else if (scrollSP >= maxScroll) {
      scrollSP = maxScroll
      setLimits({
        left: false,
        right: true,
      })
    } else {
      setLimits({
        left: false,
        right: false,
      })
    }

    animation = setInterval(() => {
      if (sign > 0 && ref.current.scrollLeft < scrollSP) {
        ref.current.scrollLeft += speed
      } else if (sign < 0 && ref.current.scrollLeft > scrollSP) {
        ref.current.scrollLeft -= speed
      } else {
        ref.current.scrollLeft = scrollSP
        clearInterval(animation)
      }
    }, 5)
  }
  return {
    ref,
    scroll,
    limits,
  }
}
