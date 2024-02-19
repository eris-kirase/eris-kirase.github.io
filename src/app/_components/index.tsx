import { FunctionComponent } from 'react'
import { ProfileSection } from './profile'
import { TopSection } from './top'
import { TwitterSection } from './twitter'
import { Contact } from './contact'
import { NewsSection } from './news'

export const TopMainContent: FunctionComponent = () => {
  return (
    <div className="topPageSections">
      <TopSection />
      <ProfileSection />
      <NewsSection />
      <TwitterSection />
      <Contact />
    </div>
  )
}
