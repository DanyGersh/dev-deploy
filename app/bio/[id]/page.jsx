import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroBlock } from '@/components/HeroBlock'
import { HorizontalGallery } from '@/components/HorizontalGallery'
import { notFound } from 'next/navigation'

async function fetchUser(id) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_LINK + "b/" + id)
  if (!res.ok) return undefined
  return res.json()
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
        type: "image"
      },
      {
        src: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user",
        type: "image"
      },
      {
        src: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user",
        type: "image"
      },
      {
        src: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719273600&semt=ais_user",
        type: "image"
      },
    ]
  }

  let formatedMap = `https://maps.google.com/maps?q=${data.burial_latitude},${data.burial_longitude}&hl=ru;z=14&amp&output=embed`

  if (!data) {
    notFound()
  } else {
    return (
      <div className='page'>
        <Header />
        <HeroBlock type="bio" bio={data} />
        <div className="bio-page_epitaph section bio">
          <div className="site-container">
            <div className="page-section_header bio">
              <h2>ЭПИГРАФ</h2>
            </div>
            <p>{data.epitaph}</p>
          </div>
        </div>
        <div className="bio-page_short-info section bio">
          <div className="site-container">
            <div className="page-section_header bio">
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
        <div className="bio-page_burial section">
          <div className="site-container">
            <div className="page-section_header bio">
              <h2>ГАЛЕРЕЯ</h2>
            </div>
          </div>
          {debugGallery.gallery_videos!==undefined && <HorizontalGallery>
            {debugGallery.gallery_videos.map((elem, index) =>
              <HorizontalGallery.Element data={elem} key={index}/>
            )}
          </HorizontalGallery>}
          {debugGallery.gallery_images!==undefined && <HorizontalGallery>
            {debugGallery.gallery_images.map((elem, index) =>
              <HorizontalGallery.Element data={elem} key={index}/>
            )}
          </HorizontalGallery>}
        </div>
        <div className="bio-page_burial section">
          <div className="site-container">
            <div className="page-section_header bio">
              <h2>ЗАХОРОНЕНИЕ</h2>
              <p>{data.burial_landmark}</p>
            </div>
            <div className="bio-page_burial_container">
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
        <Footer type="small" bg="blue" />
      </div>
    )
  }
}