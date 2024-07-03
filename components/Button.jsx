import React from 'react'

export const Button = ({click, children, ...props}) => {
  return (
    <button loading={props.loading} onClick={props.onClick} className={props.className!==undefined ? 'btn ' + props.className : 'btn'} type={props.type}>
      {props.loading!=="true" ? children : "Загрузка..."}
    </button>
  )
}
