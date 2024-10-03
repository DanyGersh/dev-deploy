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

  const [showImgPopUp, setShowImgPopUp] = useState(false)
  const [imgLink, setImgLink] = useState("")

  function handlePopUp(e) {
    e.target.tagName !== 'IMG' && setShowImgPopUp(false)
  }

  function showImg(e, link) {
    if(e.target.tagName === "IMG" && e.target.className=="hge_img"){
      setImgLink(link)
      setShowImgPopUp(true)
    }
  }

  return (
    <>
      <div className={showImgPopUp ? "pop-up_container show img" : "pop-up_container img"} onClick={(e) => handlePopUp(e)}>
        <button className='pop-up_close'><img src="/icons/close.svg" alt="" /></button>
        <img className='bio-photo_full' src={imgLink} alt="" />
      </div>
      <div className='horizontal-gallery' onClick={(e) => showImg(e, e.target.src)}>
        <div className="horizontal-gallery_container" ref={ref} id='horizontal-gallery_container'>
          {children}
        </div>
        <div className="horizontal-gallery_arrows">
          <img className='hg_arrow' onClick={() => scroll('left')} src="/icons/arrow_left.svg" alt="" />
          <img className='hg_arrow' onClick={() => scroll('right')} src="/icons/arrow_right.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export const HorizontalGalleryElement = ({ children, data, id }) => {
  if (["jpg", "png", "webp", "jpeg"].includes(data.type) && data.is_gallery) {
    return (
      <div className="horizontal-gallery_element">
        <div className="horizontal-gallery_img-hover">
          <img className='zoom-icon' src="/icons/zoom.svg" alt="" />
          <h3>{data.filename}</h3>
        </div>
        <img className='hge_img' src={process.env.NEXT_PUBLIC_SERVER_LINK + data.path} alt="" loading='lazy' />
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