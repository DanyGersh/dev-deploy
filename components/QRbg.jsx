import React from 'react'

export const QRbg = (props) => {
  return (
    <div className='qr-code-bg'>
      <div className="site-container">
        <img src="/img/qr-bg.svg" alt="" className={'qr-bg_1 ' + props.type}/>
        <img src="/img/qr-bg.svg" alt="" className={'qr-bg_2 ' + props.type}/>
      </div>
    </div>
  )
}
