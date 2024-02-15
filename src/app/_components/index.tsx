import { FunctionComponent } from 'react'
import { ProfileSection } from './profile'
import { TopSection } from './top'
import { TwitterSection } from './twitter'

export const TopMainContent: FunctionComponent = () => {
  return (
    <div className="topPageSections">
      <TopSection />
      <ProfileSection />
      <TwitterSection />
    </div>
  )
}
