import React, { type ReactElement } from 'react'
import './assets/SecurityDisplayer.scss'

export enum SecurityType {
  'AVOGADRO' = '#e54545',
  'HIGGS' = '#0b63e5'
}

export interface SecurityProps {
  type: SecurityType
  content: string
}

export function SecurityDisplay (props: SecurityProps): ReactElement {
  return (
        <div className={'security-wrapper'}>
                <span className={'security'} style={{ color: props.type, border: 'solid 2px ' + props.type }}>
                    {props.content}
                </span>
        </div>
  )
}
