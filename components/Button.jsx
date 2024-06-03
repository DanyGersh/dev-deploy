import React from 'react'

export const Button = ({children, ...props}) => {
  return (
    <button className={'btn ' + props.className} type={props.type}>
      {children}
    </button>
  )
}
