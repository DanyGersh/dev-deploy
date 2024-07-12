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
  const [loading, setLoading] = useState(false)

  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa("admin_front" + ":" + "gf54GH3gpxM3"));

  async function SendRequest(data){
    fetch(process.env.NEXT_PUBLIC_API_LINK + "orders/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false)
      alert("Ваш запрос успешно отправлен. Мы свяжемся с вами в ближайшее время")
      setError(false)
      setName('')
      setEmail('')
      setPhone('')
      setComment('')
      close()
    })
    .catch((error) => {
      console.error(error);
      alert("Что-то пошло не так. Попробуйте снова")
    });
  }

  function send(kind){
    if(kind==="email"){
      if(email.trim()!==''){
        setLoading(true)
        SendRequest({
          full_name: name,
          email: type==="email" || type==="both" ? email : "Не указано",
          phone: type==="phone" || type==="both" ? phone : "Не указано",
          product_name: "Продукт",
          comment: comment.trim()
        })
      } else {
        setError(true)
        setLoading(false)
      }
    }
    if(kind==="phone"){
      if(phone.trim()!==''){
        setLoading(false)
        SendRequest({
          full_name: name,
          email: type==="email" || type==="both" ? email : "Не указано",
          phone: type==="phone" || type==="both" ? phone : "Не указано",
          product_name: "Продукт",
          comment: comment.trim()
        })
      } else {
        setError(true)
        setLoading(false)
      }
    }
    if(kind==="both"){
      if(email.trim()!=='' && phone.trim()!==''){
        setLoading(true)
        SendRequest({
          full_name: name,
          email: type==="email" || type==="both" ? email : "Не указано",
          phone: type==="phone" || type==="both" ? phone : "Не указано",
          product_name: "Продукт",
          comment: comment.trim()
        })
      } else {
        setError(true)
        setLoading(false)
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
        <Button loading={loading.toString()} onClick={() => send(type)} type="blue">ЗАКАЗАТЬ</Button>
      </div>
    </div>
  )
}
