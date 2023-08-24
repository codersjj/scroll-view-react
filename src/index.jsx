import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from './assets/svg/icon-arrow-left.jsx'
import IconArrowRight from './assets/svg/icon-arrow-right.jsx'

const ScrollView = memo((props) => {
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [showRightBtn, setShowRightBtn] = useState(false)

  const scrollContentRef = useRef()
  const posIndexRef = useRef(0)
  const overflowDistanceRef = useRef()

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth

    overflowDistanceRef.current = scrollWidth - clientWidth
    setShowRightBtn(overflowDistanceRef.current > 0)
  }, [props.children])

  function handleBtnClick(direction) {
    if (direction === 'left') {
      posIndexRef.current--
    } else {
      posIndexRef.current++
    }
    const prevOrNextEl = scrollContentRef.current.children[posIndexRef.current]
    const offsetLeft = prevOrNextEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`
    setShowLeftBtn(offsetLeft > 0)
    setShowRightBtn(overflowDistanceRef.current > offsetLeft)
  }

  return (
    <ViewWrapper showMask={props.showMask}>
      {showLeftBtn && (
        <div className='control left' onClick={e => handleBtnClick('left')}>
          <IconArrowLeft />
        </div>
      )}
      {showRightBtn && (
        <div className='control right' onClick={e => handleBtnClick('right')}>
          <IconArrowRight />
        </div>
      )}
      <div className="content">
        <div ref={scrollContentRef} className="scroll-content">
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {
  showMask: PropTypes.bool
}

export default ScrollView