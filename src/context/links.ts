export type LinkInfo = { name: string; url: string; title?: string }

type SnsList = { [key: string]: LinkInfo }
export const SNS_LIST: SnsList = {
  iriam: {
    name: 'IRIAM',
    url: 'https://web.iriam.app/s/user/tTmcKX',
    title: '綺羅世ヱリスIRIAMアカウント',
  },
  youtube: {
    name: 'YouTube',
    url: 'https://www.youtube.com/@Kirase_Eris',
    title: '綺羅世ヱリスYouTubeチャンネル',
  },
  x: {
    name: 'X（旧Twitter）',
    url: 'https://twitter.com/Ellie_doll__',
    title: '綺羅世ヱリスのX（旧Twitter）アカウント',
  },
  instagram: {
    name: 'Instagram',
    url: '',
    title: '',
  },
  tiktok: {
    name: 'TikTok',
    url: '',
    title: '',
  },
}

export const SUPPORT_LINK: Array<LinkInfo> = [
  {
    name: 'Amazon',
    url: 'https://www.amazon.co.jp/hz/wishlist/ls/3CZ6EL5RMISOQ',
    title: 'Amazon欲しいものリスト',
  },
  {
    name: 'BOOTH',
    url: 'https://kirase.booth.pm/',
    title: '綺羅世ヱリスのきらきら直売所',
  },
  {
    name: 'cozopro',
    url: 'https://cozoru.com/fortalent',
    title: 'ファンレターなどの送り先',
  },
]

export const ABOUT_LINK: Array<LinkInfo> = [
  {
    name: 'cozopro',
    url: 'https://cozoru.com/cozopro/members/k/Nc9R6W2R',
    title: 'ライバー紹介',
  },
  {
    name: 'マシュマロ',
    url: 'https://marshmallow-qa.com/ellie_doll__',
    title: 'マシュマロ',
  },
]
