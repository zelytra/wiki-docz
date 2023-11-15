import { createContext, type ReactElement, type ReactNode, useContext } from 'react'
import { useNotificationHandler, type Notification } from '@/libs/notification/NotificationHandler'
import React from 'react'

const NotificationContext = createContext<{
  notifications: Notification[]
  sendNotification: (notification: Notification) => void
} | undefined>(undefined)

export function NotificationProvider ({ children }: { children: ReactNode | ReactNode[] }): ReactElement {
  const notificationHandler = useNotificationHandler()
  return (
        <NotificationContext.Provider value={notificationHandler}>
            {children}
        </NotificationContext.Provider>
  )
}

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}
