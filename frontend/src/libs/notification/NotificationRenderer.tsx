import React, { type ReactElement } from 'react'

export interface NotificationStyle {
  background: string
  textColor: string
}

export interface NotificationRendererProps {
  content: string
  style: NotificationStyle
  icon: ReactElement
}

export function NotificationRenderer (props: NotificationRendererProps): ReactElement {
  return (
    <span style={{ color: props.style.textColor, backgroundColor: props.style.background }}>
      {props.icon}
      <p>{props.content}</p>
    </span>
  )
}
