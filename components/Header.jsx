'use client'
import React from 'react'
import { Button } from './Button'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export const Header = () => {

  return (
    <header>
      <div className="site-container">
        <Link href="/" className='header-logo-link'><img src="/img/header-logo.svg" alt="" /></Link>
        <nav className='header-menu'>
          <Link href="/">Главная</Link>
          <Link href="/about">О нас</Link>
          <Link href=".#services">Услуги</Link>
          <Link href=".#prices">Цены</Link>
          <Link href=".#faq">Вопросы и ответы</Link>
          <Link href=".#contacts">контакты</Link>
        </nav>
        <Button text="">ЗАКАЗАТЬ/УЗНАТЬ ПОДРОБНЕЕ</Button>
      </div>
    </header>
  )
}
