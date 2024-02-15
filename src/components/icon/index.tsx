import { CSSProperties, FunctionComponent } from 'react'
import instagram from './icons/icon_instagram.svg'
import x from './icons/icon_X.svg'
import youtube from './icons/icon_youtube.svg'
import rose from './icons/icon_rose.svg'

const iconList = {
  instagram: instagram,
  x: x,
  youtube: youtube,
  rose: rose,
}

type IconName = keyof typeof iconList

interface Color {
  fill: string
  stroke?: string
}

export interface IconProps {
  name: IconName
  size?: string
  color?: undefined | string | Color
  width?: string
  height?: string
}

export const Icon: FunctionComponent<IconProps> = (props) => {
  const { name } = props
  const size = props.size || 'auto'
  const color = props.color || '#000000'
  const fillColor = typeof color === 'string' ? color : color.fill
  const strokeColor = typeof color == 'string' ? color : color.stroke ?? 'none'
  const IconComponent = iconList[name]

  if (!IconComponent) {
    throw new Error(`Icon ${name} is not found.`)
  }

  const width = props.width ?? size
  const height = props.height ?? size
  const style: CSSProperties = {
    width: width,
    height: height,
  }

  return <IconComponent fill={fillColor} style={style} stroke={strokeColor} />
}
