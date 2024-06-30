'use client'

import React, { useState } from 'react'
import { Button } from './Button'

export const PopUp = ({close, ...props}) => {
  const [type, setType] = useState("email");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);

  function send(kind){
    if(kind==="email"){
      if(email.trim()!==''){
        alert('АТПРАВЛЕН')
        setError(false)
        setName('')
        setEmail('')
        setPhone('')
        setComment('')
        close()
      } else {
        setError(true)
      }
    }
    if(kind==="phone"){
      if(phone.trim()!==''){
        alert('АТПРАВЛЕН')
        setError(false)
        setName('')
        setEmail('')
        setPhone('')
        setComment('')
        close()
      } else {
        setError(true)
      }
    }
    if(kind==="both"){
      if(email.trim()!=='' && phone.trim()!==''){
        alert('АТПРАВЛЕН')
        setError(false)
        setName('')
        setEmail('')
        setPhone('')
        setComment('')
        close()
      } else {
        setError(true)
      }
    }
  }

  return (
    <div className="pop-up">
      <div className="pop-up_header">
        <h3 className='pop-up_label'>Заказ: название товара</h3>
        <img onClick={close} src="/icons/close.svg" alt="" />
      </div>
      <div className="pop-up_input">
        <h3 className='pop-up_label'>Укажите Ваше имя *</h3>
        <input type="text" placeholder='Например, Иван' value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="pop-up_select">
        <button onClick={() => setType('email')} className={type === "email" && "selected"}>Ввести почту</button>
        <button onClick={() => setType('phone')} className={type === "phone" && "selected"}>Ввести телефон</button>
        <button onClick={() => setType('both')} className={type === "both" && "selected"}>Ввести и почту, и телефон</button>
      </div>
      {type === "phone" || type === "both" ? <div className="pop-up_input">
        <h3 className='pop-up_label'>Введите Ваш номер телефона *</h3>
        <input type='phone' placeholder='Например, +7 (123) 456-78-90' value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </div> : ""}
      {type === "email" || type === "both" ? <div className="pop-up_input">
        <h3 className='pop-up_label'>Введите Ваш Email *</h3>
        <input type="text" placeholder='Например, example@mail.ru' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div> : ""}
      <div className="pop-up_textarea">
        <h3 className='pop-up_label'>Введите Ваш Email *</h3>
        <textarea placeholder='Комментарий' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
      </div>
      <div className="pop-up_agreement">
        <p>Нажимая на кнопку "Заказать", я даю свое согласие на обработку персональных данных и соглашаюсь с условиями <a href="#">Политики конфиденциальности</a></p>
      </div>
      {error && <div className="pop-up_danger">
        <p>Вы не заполнили все необходимые поля</p>
      </div>}
      <div className="pop-up_button">
        <Button onClick={() => send(type)} type="blue">ЗАКАЗАТЬ</Button>
      </div>
    </div>
  )
}
