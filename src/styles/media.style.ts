const mediaQuery = {
  desktop: 'max-width: 768px',
  mobile: 'min-width: 768px',
}

type Media = keyof typeof mediaQuery

export const query = (media: Media): string => {
  return `@media screen and (${mediaQuery[media]})`
}
