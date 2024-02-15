import { Fragment } from 'react'
import Loading from '../components/loading'
import { TopMainContent } from '@/app/_components'
import { getImageUrl } from '@/components/image'

export default function Home() {
  console.log(getImageUrl('knightEris2'))

  return (
    <Fragment>
      <Loading />
      <main>
        <TopMainContent />
      </main>
      <aside>
        <p></p>
      </aside>
    </Fragment>
  )
}
