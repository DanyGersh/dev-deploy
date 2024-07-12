'use client'
import React, { useRef, useState } from 'react'

export const Remembers = ({ children }, props) => {
  const ref = useRef(null)
  const [currentElem, setSurrentElem] = useState(0)

  function scroll(to) {
    if (to === 'right') {
      requestAnimationFrame(() => {
        const scrollLeft = ref.current.scrollLeft;
        const itemWidth = parseInt(
          getComputedStyle(ref.current.children[0]).width
        );
        ref.current.scrollLeft = scrollLeft + itemWidth;
        setSurrentElem(currentElem+1)
      });
    } else {
      requestAnimationFrame(() => {
        const scrollLeft = ref.current.scrollLeft;
        const itemWidth = parseInt(
          getComputedStyle(ref.current.children[0]).width
        );
        ref.current.scrollLeft = scrollLeft - itemWidth;
        setSurrentElem(currentElem>0 && currentElem-1)
      });
    }
  }

  return (
    <div className='remembers-gallery'>
      <div className="remembers-gallery_container" ref={ref} id='horizontal-gallery_container'>
        {children}
      </div>
      <div className="remembers-gallery_dots">
        {children.map((dot, index) => 
          <button className={currentElem==index && "selected"} key={index}/>
        )}
      </div>
      <div className="remembers-gallery_arrows">
        <img onClick={() => scroll('left')} src="/icons/arrow_left.svg" alt="" />
        <img onClick={() => scroll('right')} src="/icons/arrow_right.svg" alt="" />
      </div>
    </div>
  )
}

export const RemembersElement = ({ children, data, id }) => {
  return (
    <div className="remembers-gallery_element">
      <div className="remembers-gallery_element_avatar">
        <img src={data.client.avatar.path} alt="" loading='lazy' />
        <h2>{data.client.full_name}</h2>
        <span>{data.who}</span>
      </div>
      <p>{data.text}</p>
    </div>
  )
}

//HorizontalGallery.Element = HorizontalGalleryElement