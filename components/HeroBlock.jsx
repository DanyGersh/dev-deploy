import React from 'react'
import { Button } from './Button'
import Image from 'next/image'

export const HeroBlock = (props) => {
  async function formatDate(dateString, type) {
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  async function parseAge(birth, death) {

    const birthday = new Date(birth);
    const birthYear = birthday.getFullYear();
    const deathday = new Date(death);
    const deathYear = deathday.getFullYear();
    const age = deathYear - birthYear;

    if(parseInt(age.toString().slice(-1)) < 5){
      return `${age + " года"}`;
    }
    if(parseInt(age.toString().slice(-1)) === 0){
      return `${age + " лет"}`;
    }
    if(parseInt(age.toString().slice(-1)) === 1){
      return `${age + " год"}`;
    }
    if(parseInt(age.toString().slice(-1)) >= 5){
      return `${age + " лет"}`;
    }
  }

  if(props.type=="bio" && props.bio!==undefined){
    return (
      <div className='hero-block bio'>
        <div className="hero-block_text">
          <h1>{props.bio.client.full_name}</h1>
          <p className='hero-block_date'>{formatDate(props.bio.client.date_birth)} — {formatDate(props.bio.day_death)}</p>
          <p className='hero-block_age'>{parseAge(props.bio.client.date_birth, props.bio.day_death)} жизни</p>
          <div className="hero-block_page-mark">ПАМЯТНАЯ СТРАНИЧКА</div>
        </div>
        <img src={process.env.NEXT_PUBLIC_SERVER_LINK + props.bio.client.avatar.path} className='bg' alt="Фоновое изображение"/>
      </div>
    )
  } else {
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
  
}
