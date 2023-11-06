import { matchPath, Route, Routes, useLocation } from 'react-router-dom'
import router from '@/libs/router'
import React, { type ReactElement, useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import './assets/App.scss'
import { HeaderBar } from '@/layouts/HeaderBar'

export default function App (): ReactElement {
  const location = useLocation()
  const auth = useAuth()

  useEffect(() => {
    const matchedRoute = router.find(route => matchPath(location.pathname, route.path))

    if (matchedRoute?.isProtected && !auth.isAuthenticated && !auth.isLoading) {
      void auth.signinRedirect()
      auth.startSilentRenew()
    }
  }, [location])

  return (
        <div className="App">
            <HeaderBar/>
            <Routes>
                {router.map((value) => (
                    <Route path={value.path} element={React.createElement(value.component)} key={value.path}/>
                ))}
            </Routes>
        </div>
  )
}
