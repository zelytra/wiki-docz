import { type ReactElement, useCallback, useState } from 'react'
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

export abstract class NotificationTemplate {
  static readonly INFO: NotificationStyle = {
    background: '#006D95',
    textColor: '#FFF'
  }

  static readonly SUCCESS: NotificationStyle = {
    background: '#40d561',
    textColor: '#FFF'
  }

  static readonly WARNING: NotificationStyle = {
    background: '#F6C64B',
    textColor: '#FFF'
  }

  static readonly ERROR: NotificationStyle = {
    background: '#F64B4B',
    textColor: '#FFF'
  }

  // private to disallow creating other instances of this type
  private constructor (private readonly key: string, public readonly value: any) {
  }
}

export const useNotificationHandler = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const notificationTimeout = 5000 // You can make this configurable if needed

  const sendNotification = useCallback((notification: Notification) => {
    const newNotification = { ...notification, id: uuid() }
    setNotifications((currentNotifications) => [...currentNotifications, newNotification])

    setTimeout(() => {
      setNotifications((currentNotifications) => currentNotifications.filter((n) => n.id !== newNotification.id))
    }, notificationTimeout)
  }, [notificationTimeout])

  return { notifications, sendNotification }
}
