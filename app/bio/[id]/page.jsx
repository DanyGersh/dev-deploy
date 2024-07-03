import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroBlock } from '@/components/HeroBlock'
import { HorizontalGallery } from '@/components/HorizontalGallery'
import { HorizontalGalleryElement } from '@/components/HorizontalGallery'
import { Remembers, RemembersElement } from '@/components/Remembers'
import { notFound } from 'next/navigation'

async function fetchUser(id) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_LINK + "b/" + id, {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error(`Failed to fetch user: ${res.status} ${res.statusText}`);
      return undefined;
    }
    return res.json();
  } catch (error) {
    console.error('An error occurred while fetching the user:', error);
    notFound()
  }
}


export default async function Info({ params }) {
  //const { id } = useParams()
  const data = await fetchUser(params.id)

  async function formatDate(dateString) {
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

  let debugGallery = {
    gallery_videos: [
      {
        src: "https://video-previews.elements.envatousercontent.com/h264-video-previews/49b9f938-fe01-4c3d-89b3-83c3f996d380/10528286.mp4",
        type: "video",
        title: "Заголовок видео"
      },
      {
        src: "b5Fh7TaTkEU",
        type: "youtube",
        title: "Заголовок видео"
      },
      {
        src: "https://video-previews.elements.envatousercontent.com/h264-video-previews/49b9f938-fe01-4c3d-89b3-83c3f996d380/10528286.mp4",
        type: "video",
        title: "Заголовок видео"
      },
      {
        src: "b5Fh7TaTkEU",
        type: "youtube",
        title: "Заголовок видео"
      }
    ],
    gallery_images: [
      {
        src: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user",
        type: "image",
        title: "Заголовок изображения"
      },
      {
        src: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user",
        type: "image",
        title: "Заголовок изображения"
      },
      {
        src: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user",
        type: "image",
        title: "Заголовок изображения"
      },
      {
        src: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user",
        type: "image",
        title: "Заголовок изображения"
      },
    ]
  }

  let debugRemembers = {
    "remembers": [
      {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies. ",
        "client": {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "full_name": "Имя фамилия",
          "date_birth": "2024-06-27",
          "avatar": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "path": "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295972133291028.png",
            "filename": "string",
            "type": "string",
            "is_gallery": true,
            "created_at": "2024-06-27T10:21:46.358Z"
          }
        },
        "who": "Разработчик"
      },
      {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies. Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris ",
        "client": {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "full_name": "Даниэль Проверкович",
          "date_birth": "2024-06-27",
          "avatar": {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "path": "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295972133291028.png",
            "filename": "string",
            "type": "string",
            "is_gallery": true,
            "created_at": "2024-06-27T10:21:46.358Z"
          }
        },
        "who": "Разработчик"
      }
    ]
  }

  let debugBio = [
    {
      title: "Заголовок 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies. Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies. Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar ",
      img: "srclink",
      img_desc: "Описание фотографии",
      img_style: 1,
      text_style: "left"
    }
  ]

  let formatedMap = data !== undefined && `https://maps.google.com/maps?q=${data.burial_latitude},${data.burial_longitude}&hl=ru;z=14&amp&output=embed`

  if (!data) {
    notFound()
  } else {
    return (
      <div className='page'>
        <Header type="bio" bio={data} />
        <HeroBlock type="bio" bio={data} />
        <div className="bio-page_epitaph section bio">
          <div className="site-container">
            <div className="page-section_header bio" id='epitaph'>
              <h2>ЭПИГРАФ</h2>
            </div>
            <p>{data.epitaph}</p>
          </div>
        </div>
        <div className="bio-page_short-info section bio">
          <div className="site-container">
            <div className="page-section_header bio" id='short_info'>
              <h2>КРАТКАЯ ИНФОРМАЦИЯ</h2>
            </div>
            <div className="bio-page_short-info-container">
              <div className="short-info-card">
                <div className="short-info-card_icon">
                  <img src="/icons/calendar.svg" draggable="false" alt="icon" />
                </div>
                <div className="short-info-card_text">
                  <h3>ДАТА РОЖДЕНИЯ</h3>
                  <span>{formatDate(data.client.date_birth)}</span>
                </div>
              </div>
              <div className="short-info-card">
                <div className="short-info-card_icon">
                  <img src="/icons/point.svg" draggable="false" alt="icon" />
                </div>
                <div className="short-info-card_text">
                  <h3>МЕСТО РОЖДЕНИЯ</h3>
                  <span>{data.place_birth}</span>
                </div>
              </div>
              <div className="short-info-card">
                <div className="short-info-card_icon">
                  <img src="/icons/stat.svg" draggable="false" alt="icon" />
                </div>
                <div className="short-info-card_text">
                  <h3>ДАТА СМЕРТИ</h3>
                  <span>{formatDate(data.day_death)}</span>
                </div>
              </div>
              <div className="short-info-card">
                <div className="short-info-card_icon">
                  <img src="/icons/point.svg" draggable="false" alt="icon" />
                </div>
                <div className="short-info-card_text">
                  <h3>МЕСТО СМЕРТИ</h3>
                  <span>{data.place_death}</span>
                </div>
              </div>
              <div className="short-info-card">
                <div className="short-info-card_icon">
                  <img src="/icons/education.svg" draggable="false" alt="icon" />
                </div>
                <div className="short-info-card_text">
                  <h3>ОБРАЗОВАНИЕ</h3>
                  <span>{data.education}</span>
                </div>
              </div>
              <div className="short-info-card">
                <div className="short-info-card_icon">
                  <img src="/icons/profile.svg" draggable="false" alt="icon" />
                </div>
                <div className="short-info-card_text">
                  <h3>ПРОФЕССИЯ</h3>
                  <span>{data.profession}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bio-page_text section bio">
          <div className="site-container" id='bio'>
            <div className="page-section_header bio">
              <h2>БИОГРАФИЯ</h2>
              <p>История жизни</p>
            </div>
            <div className="bio-page_text_block" variant="left">
              <div className="bio-page_text_image">
                <img className='bio-page_text_image' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
                <h3>Описание фотограции</h3>
              </div>
              <div className="bio-page_text_content">
                <h2 className='header'>Заголовок</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies.
                  <br /><br />
                  Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat
                  <br /><br />
                  scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies. Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar
                </p>
              </div>
            </div>
            <div className="bio-page_text_block" variant="right">
              <div className="bio-page_text_image">
                <img className='bio-page_text_image' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
                <h3>Описание фотограции</h3>
              </div>
              <div className="bio-page_text_content">
                <h2 className='header'>Заголовок</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies.
                  <br /><br />
                  Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat
                  <br /><br />
                  scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies. Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar
                </p>
              </div>
            </div>
            <div className="bio-page_text_block" variant="full">
              <div className="bio-page_text_image">
                <img className='bio-page_text_image' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
                <h3>Описание фотограции</h3>
              </div>
              <div className="bio-page_text_content">
                <h2 className='header'>Заголовок</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies.
                  <br /><br />
                  Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat
                  <br /><br />
                  scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies. Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar
                </p>
              </div>
            </div>
            <div className="bio-page_text_block" variant="full">
              <div className="bio-page_text_content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies.
                  <br /><br />
                  Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat
                  <br /><br />
                  scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies. Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar
                </p>
              </div>
            </div>
            <div className="bio-page_text_block" variant="leftB">
              <div className="bio-page_text_image">
                <img className='bio-page_text_image' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
                <h3>Описание фотограции</h3>
              </div>
              <div className="bio-page_text_content">
                <h2 className='header'>Заголовок</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies.
                  <br /><br />
                  Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat
                  <br /><br />
                  scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies. Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar
                </p>
              </div>
            </div>
            <div className="bio-page_text_block" variant="rightM">
              <div className="bio-page_text_image">
                <img className='bio-page_text_image' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" />
                <h3>Описание фотограции</h3>
              </div>
              <div className="bio-page_text_content">
                <h2 className='header'>Заголовок</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies.
                  <br /><br />
                  Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate. Integer feugiat
                  <br /><br />
                  scelerisque varius morbi enim. Et netus et malesuada fames ac turpis egestas integer eget. Est ante in nibh mauris cursus. Aliquam id diam maecenas ultricies mi eget mauris. Quam id leo in vitae turpis. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl suscipit adipiscing bibendum est ultricies. Sollicitudin tempor id eu nisl nunc mi. Et netus et malesuada fames ac turpis. Malesuada fames ac turpis egestas sed. Viverra adipiscing at in tellus. Nam libero justo laoreet sit amet cursus sit amet dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat. At risus viverra adipiscing at in tellus. Eget aliquet nibh praesent tristique magna sit. Aenean vel elit scelerisque mauris pellentesque pulvinar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bio-page_burial section">
          <div className="site-container">
            <div className="page-section_header bio" id='gallery'>
              <h2>ГАЛЕРЕЯ</h2>
            </div>
          </div>
          {debugGallery.gallery_videos !== undefined && <HorizontalGallery>
            {debugGallery.gallery_videos.map((elem, index) =>
              <HorizontalGalleryElement data={elem} id={index} key={index} />
            )}
          </HorizontalGallery>}
          {debugGallery.gallery_images !== undefined && <HorizontalGallery>
            {debugGallery.gallery_images.map((elem, index) =>
              <HorizontalGalleryElement data={elem} id={index} key={index} />
            )}
          </HorizontalGallery>}
        </div>
        <div className="bio-page_burial section">
          <div className="site-container">
            <div className="page-section_header bio">
              <h2>ЗАХОРОНЕНИЕ</h2>
              <p>{data.burial_landmark}</p>
            </div>
            <div className="bio-page_burial_container" id='burial'>
              <div className="bio-page_burial_left">
                <div className="burial-label">
                  <img src="/icons/point_L.svg" alt="" />
                  <div className="text">
                    <h3>Адрес:</h3>
                    <p>{data.burial_address}</p>
                  </div>
                </div>
                <div className="burial-label">
                  <img src="/icons/globe_L.svg" alt="" />
                  <div className="text">
                    <h3>Координаты:</h3>
                    <p>{data.burial_latitude + ', ' + data.burial_longitude}</p>
                  </div>
                </div>
                <div className="burial-label">
                  <img src="/icons/search_L.svg" alt="" />
                  <div className="text">
                    <h3>Ориентир:</h3>
                    <p>{data.burial_reference}</p>
                  </div>
                </div>
              </div>
              <div className="bio-page_burial_map-container">
                <iframe className='bio-page_burial_map' src={formatedMap}></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="bio-page_burial section">
          <div className="site-container">
            <div className="page-section_header bio" id='remembers'>
              <h2>ВОСПОМИНАНИЯ</h2>
            </div>
          </div>
          <div className="site-container">
            {debugRemembers.remembers !== undefined && <Remembers>
              {debugRemembers.remembers.map((elem, index) =>
                <RemembersElement data={elem} id={index} key={index} />
              )}
            </Remembers>}
          </div>
        </div>
        <Footer type="small" bg="blue" />
      </div>
    )
  }
}