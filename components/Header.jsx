'use client'
import React, { useState } from 'react'
import { Button } from './Button'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { QRbg } from './QRbg'
import { PopUp } from './PopUp'


export const Header = ({ bio, props }) => {
  const [opened, setOpened] = useState(false)
  const [showPopUp, setShowPopUp] = useState(false)

  const isMobile = useMediaQuery({ query: '(max-width: 1126px)' })

  function handleHeader() {
    if (isMobile) {
      setOpened(!opened)
      if (opened) {
        document.body.style.overflow = "auto"
      } else {
        document.body.style.overflow = "hidden"
      }
    }
  }

  function handlePopUp() {
    isMobile && setOpened(false)
    setShowPopUp(!showPopUp)
    if (showPopUp) {
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = "hidden"
    }
  }

  if (bio == undefined) {
    return (
      <>
        <div className={showPopUp ? "pop-up_container show" : "pop-up_container"}>
          {showPopUp && <PopUp close={handlePopUp}/>}
        </div>
        <header className={opened && 'opened'}>
          <div className="site-container">
            <Link href="/" className='header-logo-link'><img src="/img/header-logo.svg" alt="" /></Link>
            {isMobile && <button className='header_mob-menu' onClick={handleHeader}>
              {!opened ? <img src="/icons/menu.svg" alt="" /> : <img src="/icons/close.svg" alt="" />}
            </button>}
            <nav className={opened ? 'header-menu opened' : 'header-menu'}>
              <Link onClick={handleHeader} href="/">Главная</Link>
              <Link onClick={handleHeader} href="/about">О нас</Link>
              <Link onClick={handleHeader} href=".#services">Услуги</Link>
              <Link onClick={handleHeader} href=".#prices">Цены</Link>
              <Link onClick={handleHeader} href=".#faq">Вопросы и ответы</Link>
              <Link onClick={handleHeader} href=".#contacts">контакты</Link>
              {isMobile && <Button onClick={handlePopUp} type="blue" text="">ЗАКАЗАТЬ/УЗНАТЬ ПОДРОБНЕЕ</Button>}
              {isMobile && <QRbg />}
            </nav>
            {!isMobile && <Button onClick={handlePopUp} text="">ЗАКАЗАТЬ/УЗНАТЬ ПОДРОБНЕЕ</Button>}
          </div>
        </header>
      </>
    )
  } else {
    return (
      <>
        <div className={showPopUp ? "pop-up_container show" : "pop-up_container"}>
          {showPopUp && <PopUp />}
        </div>
        <header className={opened && 'opened'}>
          <div className="site-container">
            <Link href="/" className='header-logo-link'><img src="/img/header-logo.svg" alt="" /></Link>
            {isMobile && <button className='header_mob-menu' onClick={handleHeader}>
              {!opened ? <img src="/icons/menu.svg" alt="" /> : <img src="/icons/close.svg" alt="" />}
            </button>}
            <nav className={opened ? 'header-menu opened' : 'header-menu'}>
              <Link onClick={handleHeader} href="#epitaph">Эпиграф</Link>
              <Link onClick={handleHeader} href="#short_info">Краткая информация</Link>
              <Link onClick={handleHeader} href="#bio">Биография</Link>
              <Link onClick={handleHeader} href="#gallery">Галерея</Link>
              <Link onClick={handleHeader} href="#burial">Захоронение</Link>
              <Link onClick={handleHeader} href="#remembers">Воспоминания</Link>
              <Link onClick={handleHeader} href="#">О мемориале</Link>
              {isMobile && <QRbg />}
            </nav>
          </div>
        </header>
      </>
    )
  }
}
