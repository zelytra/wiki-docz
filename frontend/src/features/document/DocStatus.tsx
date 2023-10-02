import React, { type ReactElement } from 'react'
import './assets/DocStatus.scss'

export interface DocStatusProps {
  name: string
  color: string
}

export function DocStatus (props: DocStatusProps): ReactElement {
  return (
        <span className={'status'} style={{ background: props.color }}>
          {props.name}
        </span>
  )
}
