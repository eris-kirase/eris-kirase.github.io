import { FunctionComponent } from 'react'
import { SNS_LIST } from '@/context/links'
import Link from 'next/link'

type SnsName = keyof typeof SNS_LIST
interface SnsButtonProps {
  name: SnsName
}

export const SnsButton: FunctionComponent<SnsButtonProps> = (props) => {
  const snsName = props.name
  const snsInfo = SNS_LIST[snsName]

  return (
    <div>
      <Link href={snsInfo.url} target="_blank"></Link>
    </div>
  )
}
