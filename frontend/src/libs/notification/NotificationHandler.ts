import { createContext, type ReactElement } from 'react'
import { v4 as uuid } from 'uuid'

export interface NotificationStyle {
  background: string
  textColor: string
}

export interface Notification {
  content: string
  style: NotificationStyle
  icon: ReactElement
  id?: string
}

export class NotificationHandler {
  private readonly notifications: Notification[] = []
  private readonly notificationTimeout: number = 5000

  constructor (timeOut?: number) {
    if (timeOut) {
      this.notificationTimeout = timeOut
    }
  }

  public sendNotification (notification: Notification): void {
    console.log('trigger')
    notification.id = uuid()
    this.notifications.push(notification)

    setTimeout(() => {
      const index = this.notifications.indexOf(notification, 0)
      if (index > -1) {
        this.notifications.splice(index, 1)
      }
    }, 5000)
  }

  public getNotifications (): Notification[] {
    return this.notifications
  }
}

export const NotificationContext = createContext(new NotificationHandler())
