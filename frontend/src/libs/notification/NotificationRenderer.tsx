import React, { createContext, type ReactElement } from 'react'
import { type Notification, NotificationHandler } from '@/libs/notification/NotificationHandler'

export function NotificationRenderer (props: Notification): ReactElement {
  return (
        <span style={{ color: props.style.textColor, backgroundColor: props.style.background }}>
            <div>{props.icon}</div>
            <p>{props.content}</p>
    </span>
  )
}
