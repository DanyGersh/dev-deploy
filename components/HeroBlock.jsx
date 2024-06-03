import React from 'react'
import { Button } from './Button'
import Image from 'next/image'

export const HeroBlock = () => {
  return (
    <div className='hero-block'>
      <div className="hero-block_text">
        <h1>Сохраните навсегда память и наследие о близком человеке и увековечьте ее на нашей странице памяти</h1>
        <p className='hero-block_desc'>Наше Наследие ― онлайн-платформа, где вы можете создавать виртуальные памятные страницы для увековечивания памяти о ваших близких людях</p>
        <Button>ЗАКАЗАТЬ/УЗНАТЬ ПОДРОБНЕЕ</Button>
      </div>
      <div className="hero-block_calling">
        <span>УЗНАЙ ПОДРОБНЕЕ</span>
        <img src="/icons/arrow_down.svg" alt="" />
      </div>
      <Image src="/img/hero-bg.jpg" width="1920" height="1080" className='bg'/>
    </div>
  )
}
