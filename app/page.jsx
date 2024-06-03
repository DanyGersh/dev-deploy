import Image from "next/image";
import { HeroBlock } from "@/components/HeroBlock";
import { QRbg } from "@/components/QRbg";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { MainPageFAQ } from "@/components/MainPageFAQ";
import React from "react";
import { Footer } from "@/components/Footer";

export default function Home() {
  const faq = [
    {
      id: 0,
      q: "Какой сервис мы предоставляем?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, justo sed varius ultricies, sem nulla convallis dui, in tristique libero lacus vel sapien. Integer fringilla laoreet feugiat. Sed tempor varius justo ut convallis. Vivamus bibendum diam ac erat vehicula, eu scelerisque metus consectetur. Nam vestibulum mauris id metus tincidunt, ac molestie eros volutpat. Proin rhoncus sapien in orci fringilla, at fermentum justo feugiat. Duis vitae lectus libero. Nunc nec magna vitae libero ornare ultrices. Proin ac ipsum quis leo placerat lobortis."
    },
    {
      id: 1,
      q: "Какой сервис мы предоставляем?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, justo sed varius ultricies, sem nulla convallis dui, in tristique libero lacus vel sapien. Integer fringilla laoreet feugiat. Sed tempor varius justo ut convallis. Vivamus bibendum diam ac erat vehicula, eu scelerisque metus consectetur. Nam vestibulum mauris id metus tincidunt, ac molestie eros volutpat. Proin rhoncus sapien in orci fringilla, at fermentum justo feugiat. Duis vitae lectus libero. Nunc nec magna vitae libero ornare ultrices. Proin ac ipsum quis leo placerat lobortis."
    },
    {
      id: 3,
      q: "Какой сервис мы предоставляем?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, justo sed varius ultricies, sem nulla convallis dui, in tristique libero lacus vel sapien. Integer fringilla laoreet feugiat. Sed tempor varius justo ut convallis. Vivamus bibendum diam ac erat vehicula, eu scelerisque metus consectetur. Nam vestibulum mauris id metus tincidunt, ac molestie eros volutpat. Proin rhoncus sapien in orci fringilla, at fermentum justo feugiat. Duis vitae lectus libero. Nunc nec magna vitae libero ornare ultrices. Proin ac ipsum quis leo placerat lobortis."
    },
    {
      id: 4,
      q: "Какой сервис мы предоставляем?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, justo sed varius ultricies, sem nulla convallis dui, in tristique libero lacus vel sapien. Integer fringilla laoreet feugiat. Sed tempor varius justo ut convallis. Vivamus bibendum diam ac erat vehicula, eu scelerisque metus consectetur. Nam vestibulum mauris id metus tincidunt, ac molestie eros volutpat. Proin rhoncus sapien in orci fringilla, at fermentum justo feugiat. Duis vitae lectus libero. Nunc nec magna vitae libero ornare ultrices. Proin ac ipsum quis leo placerat lobortis."
    },
    {
      id: 5,
      q: "Какой сервис мы предоставляем?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, justo sed varius ultricies, sem nulla convallis dui, in tristique libero lacus vel sapien. Integer fringilla laoreet feugiat. Sed tempor varius justo ut convallis. Vivamus bibendum diam ac erat vehicula, eu scelerisque metus consectetur. Nam vestibulum mauris id metus tincidunt, ac molestie eros volutpat. Proin rhoncus sapien in orci fringilla, at fermentum justo feugiat. Duis vitae lectus libero. Nunc nec magna vitae libero ornare ultrices. Proin ac ipsum quis leo placerat lobortis."
    },
    {
      id: 6,
      q: "Какой сервис мы предоставляем?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, justo sed varius ultricies, sem nulla convallis dui, in tristique libero lacus vel sapien. Integer fringilla laoreet feugiat. Sed tempor varius justo ut convallis. Vivamus bibendum diam ac erat vehicula, eu scelerisque metus consectetur. Nam vestibulum mauris id metus tincidunt, ac molestie eros volutpat. Proin rhoncus sapien in orci fringilla, at fermentum justo feugiat. Duis vitae lectus libero. Nunc nec magna vitae libero ornare ultrices. Proin ac ipsum quis leo placerat lobortis."
    },
    {
      id: 7,
      q: "Какой сервис мы предоставляем?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, justo sed varius ultricies, sem nulla convallis dui, in tristique libero lacus vel sapien. Integer fringilla laoreet feugiat. Sed tempor varius justo ut convallis. Vivamus bibendum diam ac erat vehicula, eu scelerisque metus consectetur. Nam vestibulum mauris id metus tincidunt, ac molestie eros volutpat. Proin rhoncus sapien in orci fringilla, at fermentum justo feugiat. Duis vitae lectus libero. Nunc nec magna vitae libero ornare ultrices. Proin ac ipsum quis leo placerat lobortis."
    },
    {
      id: 8,
      q: "Какой сервис мы предоставляем?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, justo sed varius ultricies, sem nulla convallis dui, in tristique libero lacus vel sapien. Integer fringilla laoreet feugiat. Sed tempor varius justo ut convallis. Vivamus bibendum diam ac erat vehicula, eu scelerisque metus consectetur. Nam vestibulum mauris id metus tincidunt, ac molestie eros volutpat. Proin rhoncus sapien in orci fringilla, at fermentum justo feugiat. Duis vitae lectus libero. Nunc nec magna vitae libero ornare ultrices. Proin ac ipsum quis leo placerat lobortis."
    }
  ]

  return (
    <div className="page">
      <Header />
      <HeroBlock />
      <div className="main-page_quote">
        <span><b>Страница памяти</b> – это новый шаг современных технологий, позволяющий сохранить историю жизни и наследие усопшего навечно.</span>
        <QRbg />
      </div>
      <div className="section main-page_services">
        <div className="site-container">
          <div className="page-section_header">
            <h2 className="">Услуги</h2>
          </div>
          <div className="main-page_services_container">
            <p className="service-desc">На надгробии размещается QR код, при сканировании которого , осуществляется переход на страницу памяти усопшего.<br />Благодаря этой технологии будущие поколения смогут узнавать наследие, генеалогическое<br />древо и всю историю жизни своих предков.</p>
            <div className="buttons">
              <Button type="blue">УЗНАТЬ ПОДРОБНЕЕ / ЗАКАЗАТЬ</Button>
              <Button type="blue">ПРИМЕР СТРАНИЦА ПАМЯТИ</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="section main-page_whywe">
        <div className="site-container">
          <div className="page-section_header">
            <h2 className="">Почему именно мы?</h2>
          </div>
          <div className="main-page_whywe_cards">
            <section className="main-page_whywe_card">
              <h3>Доступность</h3>
              <p>Доступ к странице памяти в любое время, с любого устройства с выходом в интернет.</p>
            </section>
            <section className="main-page_whywe_card">
              <h3>Удобство</h3>
              <p>Сделав заказ , вы получите готовую страничку памяти и QR код на руки. Заказ под ключ.</p>
            </section>
            <section className="main-page_whywe_card">
              <h3>Бессрочное хранение</h3>
              <p>Биография о вашем близком сохранится навсегда.</p>
            </section>
            <section className="main-page_whywe_card">
              <h3>Безопасность</h3>
              <p>Персональные данные засекречены по самым высоким стандартам безопасности.</p>
            </section>
          </div>
        </div>
      </div>
      <div className="section main-page_price">
        <div className="site-container">
          <div className="page-section_header">
            <h2>Сколько стоит</h2>
            <p>Стоимость QR-кода (включая страницу памяти) фиксированная и зависит от материала изготовления</p>
          </div>
          <div className="main-page_price_container">
            <div className="main-page_price_card">
              <div className="price-card_container">
                <Image src="/img/price-card-img.jpg" alt="Фотография услуги" width="360" height="245" />
                <h3>Страница памяти и<br />QR-код на металлической основе</h3>
                <span>3 000 ₽</span>
                <p>Создание страницы памяти - включая: текст, фото, видео и аудиозаписи</p>
                <p>Размещение воспоминаний в блокчейне</p>
                <p>Изготовление QR-кода - лазерная гравировка</p>
                <p>Клеящая основа в комплекте</p>
                <p>Платная доставка</p>
              </div>
              <Button className="price-card_btn" type="blue">ЗАКАЗАТЬ</Button>
            </div>
            <div className="main-page_price_card big">
              <div className="price-card_container">
                <Image src="/img/price-card-img.jpg" alt="Фотография услуги" width="360" height="245" />
                <h3>Страница памяти и<br />QR-код индивидуальным дизайном</h3>
                <span>5 000 ₽</span>
                <p>Создание страницы памяти - включая: текст, фото, видео и аудиозаписи</p>
                <p>Размещение воспоминаний в блокчейне</p>
                <p>Создание индивидуального дизайна QR-кода</p>
                <p>Изготовление QR-кода - гравировка / 3D печать</p>
                <p>Клеящая основа в комплекте</p>
                <p>Бесплатная доставка по Москве</p>
              </div>
              <Button className="price-card_btn" type="blue">ЗАКАЗАТЬ</Button>
            </div>
            <div className="main-page_price_card">
              <div className="price-card_container">
                <Image src="/img/price-card-img.jpg" alt="Фотография услуги" width="360" height="245" />
                <h3>Страница памяти и<br />3D QR-код на пластиковой основе</h3>
                <span>4 000 ₽</span>
                <p>Создание страницы памяти - включая: текст, фото, видео и аудиозаписи</p>
                <p>Размещение воспоминаний в блокчейне</p>
                <p>Изготовление QR-кода - 3D печать</p>
                <p>Клеящая основа в комплекте</p>
                <p>Платная доставка</p>
              </div>
              <Button className="price-card_btn" type="blue">ЗАКАЗАТЬ</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="section main-page_faq">
        <div className="site-container">
          <div className="page-section_header">
            <h2>Часто задаваемые вопросы</h2>
            <p>Нас часто спрашивают. Поэтому мы подготовили ответы на часто задаваемые вопросы о нас и нашем цифровом сервисе</p>
          </div>
          <MainPageFAQ data={faq} />
        </div>
      </div>
      <div className="main-page_contacts">
        <div className="site-container">
          <div className="page-section_header">
            <h2>Наши контакты</h2>
            <p>Мы всегда на связи и поэтому связаться с нами можно в любой день.<br/>По телефону ответим с 9 до 21 часа по московскому времени.<br/>А оставить заявку и приобрести QR-код вместе с индивидуальной страничкой памяти можно в любой день и час.</p>
          </div>
          <div className="main-page_contacts_container" >
            <div className="main-page_contact-card">
              <img src="/icons/phone.svg" alt="" />
              <h3>Наш телефон</h3>
              <a href="tel:+71234567890">+7 (123) 456-78-90</a>
            </div>
            <div className="main-page_contact-card">
              <img src="/icons/mail.svg" alt="" />
              <h3>Наша почта</h3>
              <a href="mailto:nashe-nasledie@inbox.ru">nashe-nasledie@inbox.ru</a>
            </div>
            <div className="main-page_contact-card">
              <img src="/icons/point.svg" alt="" />
              <h3>Где мы</h3>
              <p>Мы находимся в Москве, а работаем по всей России</p>
            </div>
          </div>
          <QRbg type="contacts"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
