'use client'

import React, { useState } from 'react'
import { Button } from './Button'

export const PhotoPopUp = ({close, ...props}) => {
  const [img, setImg] = useState(props.link)

  return (
    <div className="pop-up">
      <img src="https://nashe-nasledie.ru/static/avatar1.jpg" alt="" />
    </div>
  )
}
