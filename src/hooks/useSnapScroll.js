import { useRef } from 'react'

export default function useSnapScroll(speed = 5) {
  const ref = useRef(null)
  let scrollSP = 0
  let animation = null

  const scroll = (sign) => {
    if (!scrollSP) scrollSP = ref.current.scrollLeft
    if (animation) clearInterval(animation)
    const cardNode = ref.current.children[0]

    const cardStyle = window.getComputedStyle(cardNode)
    const cardMargin = cardStyle.getPropertyValue('margin')
    const cardWidth = cardNode.clientWidth
    const maxScroll = ref.current.scrollWidth - ref.current.clientWidth

    const scrollValue = parseInt(cardWidth) + 2 * parseInt(cardMargin)
    scrollSP += (scrollValue * sign) / Math.abs(sign)
    if (scrollSP < 0) scrollSP = 0
    if (scrollSP > maxScroll) scrollSP = maxScroll

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
  }
}
