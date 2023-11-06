import React, { type ReactElement, type ReactNode } from 'react'
import './assets/SideTabs.scss'

export interface SideTabsProps {
  isDeploy: boolean
  children: ReactNode | ReactNode[]
}

export function SideTabs (props: SideTabsProps): ReactElement {
  return (
        <div className={'side-tabs ' + (props.isDeploy ? '' : 'deployed')}>
            {props.children}
        </div>
  )
}
