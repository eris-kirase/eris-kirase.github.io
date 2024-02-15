// const date = new Date('2022.5.5')
// console.log(date.toLocaleString()) // 2022/5/5 0:00:00

export type History = {
  startDate?: string
  endDate?: string
  title: string
  result?: string
}

export const ACTIVITY_HISTORY: History[] = [
  {
    startDate: '2022.2.9',
    title: 'IRIAMにて初配信',
  },
  {
    startDate: '2022.3.8',
    endDate: '2022.3.14',
    title: 'IRIAMトップバナーチャレンジ',
    result: '64位 入賞',
  },
  {
    startDate: '2022.10.18',
    endDate: '2022.10.25',
    title: 'IRIAMトラベル〜長野編〜 B帯 グループ1',
    result: '1位 入賞 (740,708pt)(pt全体2位)',
  },
  {
    startDate: '2022.12.19',
    endDate: '2022.12.25',
    title: '長野駅 構内にてポスター掲示',
  },
  {
    startDate: '2023.3.28',
    endDate: '2023.4.3',
    title: 'IRIAM 背景フェスタ「帝王の号令編」C4-C5',
    result: '1位 入賞 (193,620pt)',
  },
  {
    startDate: '2023.7.11',
    endDate: '2023.7.17',
    title: 'IRIAM オリジナルプチギフトを作ろう！C4-C5',
    result: '2位 入賞 (315,346pt)',
  },
  {
    startDate: '2023.12.12',
    endDate: '2023.12.19',
    title: 'えきポス！〜長野駅〜 B帯',
    result: '1位 入賞 (1,052,138pt)(pt全体1位)',
  },
]
