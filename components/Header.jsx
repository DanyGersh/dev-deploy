import React from 'react'
import { Button } from './Button'

export const Header = () => {
  return (
    <header>
      <div className="site-container">
        <img src="/img/header-logo.svg" alt="" />
        <nav className='header-menu'>
          <a href="">Главная</a>
          <a href="">О нас</a>
          <a href="">Услуги</a>
          <a href="">Цены</a>
          <a href="">Вопросы и ответы</a>
          <a href="">Контакты</a>
        </nav>
        <Button text="">ЗАКАЗАТЬ/УЗНАТЬ ПОДРОБНЕЕ</Button>
      </div>
    </header>
  )
}
