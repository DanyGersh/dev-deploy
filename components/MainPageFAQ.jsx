'use client'
import React, { useRef, useState } from 'react'

export const MainPageFAQ = ({ data }) => {
  const [selected, setSelected] = useState();
  const textRef = useRef(null);

  function select(id) {
    selected!==id ? setSelected(id) : setSelected()
  }
  return (
    <div className='faq-container'>
      {data.map((item, id) => {
        return (
          <div className={selected==id ? "faq-card opened" : "faq-card"} key={id}>
            <div className="faq-card_header" onClick={() => select(id)}>
              <div className="faq-card_header_text">
                <img src="/icons/question.svg" alt="" />
                <h3>{item.q}</h3>
              </div>
              <img className='faq-card_arrow' src="/icons/arrow_down2.svg" alt="" />
            </div>
            <div className="faq-card_body" ref={textRef} style={selected==id ? {height: textRef.current.scrollHeight} : {height: "0px"}}>
            <p className='faq-card_text'>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
