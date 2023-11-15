import React, { type ReactElement, useContext } from 'react'
import { NotificationContext } from '@/libs/notification/NotificationHandler'
import { NotificationRenderer } from '@/libs/notification/NotificationRenderer'

export function Notifications (): ReactElement {
  const notification = useContext(NotificationContext)
  return (<div>
        {notification.getNotifications().map((notification, index) =>
            <NotificationRenderer content={notification.content} style={notification.style} icon={notification.icon}
                                  key={notification.id}/>
        )}
    </div>)
}
