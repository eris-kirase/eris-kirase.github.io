import { ImageName } from '@/components/image'

type ImageList = Array<{
  id: number
  imageName: ImageName
  iconName: ImageName
  alt: string
}>

export const ProfileImageList: ImageList = [
  {
    id: 1,
    imageName: 'nomalEris',
    iconName: 'nomalErisIcon',
    alt: '綺羅世ヱリス',
  },
  {
    id: 2,
    imageName: 'knightEris2',
    iconName: 'knightEris2Icon',
    alt: '帝王ヱリス',
  },
  {
    id: 3,
    imageName: 'summerEris2',
    iconName: 'summerEris2Icon',
    alt: '夏服ヱリス',
  },
]
