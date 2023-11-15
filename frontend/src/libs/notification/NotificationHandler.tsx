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
