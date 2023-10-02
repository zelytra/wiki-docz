import React, { type ReactElement } from 'react'
import './assets/SecurityDisplayer.scss'

export enum SecurityType {
  'SECRET' = '#e54545',
  'TOP_SECRET' = '#0b63e5'
}

export interface SecurityProps {
  type: SecurityType[]
}

export function SecurityDisplay (props: SecurityProps): ReactElement {
  return (
        <div className={'security-wrapper'}>
            {props.type.map((value, index) => (
                <span key={index} className={'security'} style={{ color: value, border: 'solid 2px ' + value }}>
                    {value}
                </span>
            ))}
        </div>
  )
}
