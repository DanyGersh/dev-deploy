'use client'
import React, { useRef, useState } from 'react'

export const HorizontalGallery = ({ children }, props) => {
  const ref = useRef(null)

  function scroll(to) {
    if (to === 'right') {
      requestAnimationFrame(() => {
        const scrollLeft = ref.current.scrollLeft;
        const itemWidth = parseInt(
          getComputedStyle(ref.current.children[0]).width
        );
        ref.current.scrollLeft = scrollLeft + itemWidth + 30;
      });
    } else {
      requestAnimationFrame(() => {
        const scrollLeft = ref.current.scrollLeft;
        const itemWidth = parseInt(
          getComputedStyle(ref.current.children[0]).width
        );
        ref.current.scrollLeft = scrollLeft - itemWidth - 30;
      });
    }
  }

  return (
    <div className='horizontal-gallery'>
      <div className="horizontal-gallery_container" ref={ref} id='horizontal-gallery_container'>
        {children}
      </div>
      <div className="horizontal-gallery_arrows">
        <img onClick={() => scroll('left')} src="/icons/arrow_left.svg" alt="" />
        <img onClick={() => scroll('right')} src="/icons/arrow_right.svg" alt="" />
      </div>
    </div>
  )
}

export const HorizontalGalleryElement = ({ children, data, id }) => {
  if (["jpg", "png", "webp", "jpeg"].includes(data.type) && data.is_gallery) {
    return (
      <div className="horizontal-gallery_element">
        <a href={process.env.NEXT_PUBLIC_SERVER_LINK + data.path} target="_blank" className="horizontal-gallery_img-hover">
          <img className='zoom-icon' src="/icons/zoom.svg" alt="" />
          <h3>{data.filename}</h3>
        </a>
        <img src={process.env.NEXT_PUBLIC_SERVER_LINK + data.path} alt="" loading='lazy' />
      </div>
    )
  }
  if (["mp4", "webm", "avi"].includes(data.type) && data.is_gallery) {
    return (
      <div className="horizontal-gallery_element">
        <video controls preload='metadata' src={process.env.NEXT_PUBLIC_SERVER_LINK + data.path} />
        <h3>{data.filename}</h3>
        <p>Видео</p>
      </div>
    )
  }
  if (data.type === "youtube" && data.is_gallery) {
    return (
      <div className="horizontal-gallery_element">
        <iframe src={`https://www.youtube.com/embed/${data.path}?si=2zW68ByVtfJlTv1v`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{data.filename}</h3>
        <p>Видео с YouTube</p>
      </div>
    )
  }
}

//HorizontalGallery.Element = HorizontalGalleryElement