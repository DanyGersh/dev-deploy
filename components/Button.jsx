import React from 'react'

export const Button = ({click, children, ...props}) => {
  return (
    <button onClick={props.onClick} className={props.className!==undefined ? 'btn ' + props.className : 'btn'} type={props.type}>
      {children}
    </button>
  )
}
