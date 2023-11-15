import React, { type ReactElement } from 'react'
import { ReactSVG } from 'react-svg'
import logo from '@/assets/icons/robot.svg'
import './assets/HeaderBar.scss'
import { Link } from 'react-router-dom'
import routes from '@/libs/router'
import useAxios from '@/libs/http/HTTPAxios'
import { HTTPRenderWrapper } from '@/libs/http/HTTPRenderWrapper'
import { type User } from '@/objects/User'
import { Notifications } from '@/libs/notification/Notifications'

export function HeaderBar (): ReactElement {
  const userInfo = useAxios({
    method: 'GET',
    url: 'user/@me',
    isProtected: false
  })

  return (
        <header>
            <div className={'side-content'}>
                <ReactSVG className={'logo'} src={logo}/>
                <h1>Wiki Docz</h1>
                <nav>
                    {routes.map((route, index) => (
                        <Link key={index} to={route.path}>
                            <p>{route.name}</p>
                        </Link>
                    ))}
                </nav>
            </div>
            <Notifications/>
            <HTTPRenderWrapper state={userInfo}>
                {(data: User) => (
                    <img className={'user-icon'} src={data.avatar} alt={'user-icon'}/>
                )}
            </HTTPRenderWrapper>
        </header>
  )
}
