'use client'
import { CSSProperties, FunctionComponent } from 'react'
import { SubSection } from './section'
import { getImageUrl } from '@/components/image'
import { ArticleCard } from '@/components/card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper/modules'
import { useWindowSize } from '@/hooks/useWindowSize'
import { isDesktopSize } from '@/styles/media.style'
import styles from './news.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { useInView } from 'react-intersection-observer'
import { getFading } from '@/styles/getAnimation'

export const NewsSection: FunctionComponent = () => {
  const isViewNews = useInView({
    rootMargin: '-15%',
    triggerOnce: true,
  })
  const [width] = useWindowSize()
  const slidePreView = isDesktopSize(width) ? 4 : 2
  const spaceBetween = isDesktopSize(width) ? 24 : 12
  const customStyles: CSSProperties = {
    backgroundImage: `url(${getImageUrl('wallpaperRose')})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'repeat-x',
  }
  return (
    <SubSection title="NEWS" titleRuby="ニュース" option={{ customStyles: customStyles }}>
      <div ref={isViewNews.ref} className={getFading(isViewNews.inView, 'fadeInUp')}>
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={slidePreView}
          onSlideChange={() => console.log('slide change')}
          centeredSlides={true}
          modules={[Navigation, Scrollbar, A11y]}
          navigation
          scrollbar={{ draggable: true }}
        >
          {newsList.map((news, index) => {
            return (
              <SwiperSlide key={index} className={styles.newsItem}>
                <ArticleCard title={news.title} imgSrc={news.imgSrc} url={news.url} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </SubSection>
  )
}

type NewsList = Array<{
  url: string
  imgSrc: string
  title: string
  description?: string
}>
const newsList: NewsList = [
  {
    url: 'https://kirase.booth.pm/items/5509823',
    imgSrc: 'https://booth.pximg.net/5d656c8c-51ba-4dd8-b0f7-cd52d04a58b0/i/5509823/79b86f98-3cf8-46b4-8151-dac4bd31b393.png',
    title: '2周年記念缶バッジ(帝王)',
  },
  {
    url: 'https://kirase.booth.pm/items/5509749',
    imgSrc: 'https://booth.pximg.net/5d656c8c-51ba-4dd8-b0f7-cd52d04a58b0/i/5509749/de0aea30-64cf-4e15-91fb-d6f1d5a86834.png',
    title: '2周年記念缶バッジ(通常衣装)',
  },
  {
    url: 'https://twitter.com/Ellie_doll__/status/1755607419328352299',
    imgSrc: getImageUrl('anniversaryThumbnail'),
    title: '𝟚𝕟𝕕 𝔸𝕟𝕟𝕚𝕧𝕖𝕣𝕤𝕒𝕣𝕪 𖤐 ̖́-',
  },

  {
    url: 'https://kirase.booth.pm/items/5457730',
    imgSrc: 'https://booth.pximg.net/c/300x300_a2_g5/5d656c8c-51ba-4dd8-b0f7-cd52d04a58b0/i/5457730/df2e10d2-c68e-426e-9faf-029d4a19eb36_base_resized.jpg',
    title: 'ヱちゃんアクキー② 販売中！',
  },
  {
    url: 'https://kirase.booth.pm/items/5457717',
    imgSrc: 'https://booth.pximg.net/5d656c8c-51ba-4dd8-b0f7-cd52d04a58b0/i/5457717/333dbd46-fc51-4a1e-a9a7-c40009f61cae.png',
    title: 'ヱちゃんアクキー① 販売中！',
  },
  {
    url: 'https://kirase.booth.pm/items/5103914',
    imgSrc: 'https://booth.pximg.net/5d656c8c-51ba-4dd8-b0f7-cd52d04a58b0/i/5103914/bc2e8600-0893-4bb7-ab13-4876b96d69f6.png',
    title: '画伯Tシャツ（英字） 販売中！',
  },
  {
    url: 'https://kirase.booth.pm/items/5103905',
    imgSrc: 'https://booth.pximg.net/5d656c8c-51ba-4dd8-b0f7-cd52d04a58b0/i/5103905/e1908f48-89c8-4a55-96fd-97e1394aff62.png',
    title: '画伯Tシャツ（動物）',
  },
]
