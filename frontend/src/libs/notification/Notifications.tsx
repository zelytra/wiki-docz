import React, { type ReactElement } from 'react'

import { NotificationRenderer } from '@/libs/notification/NotificationRenderer'
import { useNotifications } from '@/libs/notification/NotificationProvider'

export function Notifications (): ReactElement {
  const { notifications } = useNotifications()
  return (<div>
        {notifications.map((notification, index) =>
            <NotificationRenderer content={notification.content} style={notification.style} icon={notification.icon}
                                  key={notification.id}/>
        )}
    </div>)
}
