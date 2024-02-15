import React, { FunctionComponent, ReactNode } from 'react'
import media from './media.module.css'

interface ChildComponent {
  children: ReactNode
}

export const ViewInDesktop: FunctionComponent<ChildComponent> = ({ children }) => {
  return <div className={media.desktop}>{children}</div>
}

export const ViewInMobide: FunctionComponent<ChildComponent> = ({ children }) => {
  return <div className={media.mobile}>{children}</div>
}
