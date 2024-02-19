const mediaSize = {
  desktop: { min: 768 },
  mobile: { max: 767 },
}

const mediaQuery = {
  desktop: 'max-width: 768px',
  mobile: 'min-width: 768px',
}

type Media = keyof typeof mediaQuery

export const query = (media: Media): string => {
  return `@media screen and (${mediaQuery[media]})`
}

export const isMobileSize = (width: number): boolean => {
  return 768 > width
}

export const isDesktopSize = (width: number): boolean => {
  return 768 <= width
}
