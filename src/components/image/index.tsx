import { FunctionComponent } from 'react'
import { imageList } from './images'

export type ImageName = keyof typeof imageList
export interface ImageProps {
  className?: string
  name: ImageName
  alt: string
  width?: number | string
  height?: number | string
}

export const MyImage: FunctionComponent<ImageProps> = (props) => {
  const image = imageList[props.name]
  return <img className={props.className} src={image.src} alt={props.alt} width={props.width} height={props.height} loading="lazy" />
}

export const getImageUrl = (imageName: ImageName): string => {
  return imageList[imageName].src
}
