import React, { type ReactElement } from 'react'
import { type Notification } from '@/libs/notification/NotificationHandler'
import './assets/NotificationRenderer.scss'

export function NotificationRenderer (props: Notification): ReactElement {
  return (
        <span className={'notification'} style={{ color: props.style.textColor, backgroundColor: props.style.background }}>
            <div className={'icon'}>{props.icon}</div>
            <p>{props.content}</p>
    </span>
  )
}
