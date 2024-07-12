import Link from 'next/link'
import React from 'react'
import { Button } from './Button'

export const Footer = (props) => {
  if (props.type === "small") {
    return (
      <footer className={'small ' + props.bg}>
        <div className="site-container fotcont">
          <span>©</span><span>{new Date().getFullYear()} Наше Наследие. Все права защищены</span>
        </div>
      </footer>
    )
  } else {
    return (
      <footer className={'small ' + props.bg}>
        <div className="site-container">
          <div className="footer-left">
            <div>
              <img src="/img/header-logo.svg" alt="" /><br />
              <span>Телефон: </span><a href="tel:+71234567890">+7 (123) 456-78-90</a><br />
              <span>Адрес эл. почты: </span><a href="mailto:nashe-nasledie@inbox.ru">nashe-nasledie@inbox.ru</a>
            </div>
            <div className="copyright">© 2024 Наше Наследие. Все права защищены</div>
          </div>
          <div className="footer-center">
            <h3>Страницы</h3>
            <div className='links'>
              <Link href="/">ГЛАВНАЯ <img src="/icons/arrow_up_right.svg" alt="" /></Link>
              <Link href="/about">О НАС <img src="/icons/arrow_up_right.svg" alt="" /></Link>
            </div>
            <div />
          </div>
          <div className="footer-right">
            <h3>Перед приобретением вы можете ознакомится<br />с примером будущей страницы памяти</h3>
            <Button type="blue">УЗНАТЬ ПОДРОБНЕЕ/ЗАКАЗАТЬ</Button>
            <Button type="blue">ПРИМЕР СТРАНИЦА ПАМЯТИ</Button>
          </div>
        </div>
        <div className="mob-copyright">
          <span>©</span><span>{new Date().getFullYear()} Наше Наследие. Все права защищены</span>
        </div>
      </footer>
    )
  }
}
