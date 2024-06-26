import React from 'react'

export const HorizontalGallery = ({ children }, props) => {
  return (
    <div className='horizontal-gallery'>
      <div className="horizontal-gallery_container">
        {children}
      </div>
    </div>
  )
}

export const HorizontalGalleryElement = ({ children, data }) => {
  if (data.type === "image") {
    return (
      <div className='horizontal-gallery_element'>
        <img src={data.src} alt="" loading='lazy' />
      </div>
    )
  }
  if (data.type === "video") {
    return (
      <div className='horizontal-gallery_element'>
        <video controls preload='metadata' src={data.src}/>
        <h3>Заголовок видео</h3>
        <p>Видео</p>
      </div>
    )
  }
  if (data.type === "youtube") {
    return (
      <div className='horizontal-gallery_element'>
        <iframe src={`https://www.youtube.com/embed/${data.src}?si=2zW68ByVtfJlTv1v`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>Заголовок видео</h3>
        <p>Видео с YouTube</p>
      </div>
    )
  }
}

HorizontalGallery.Element = HorizontalGalleryElement