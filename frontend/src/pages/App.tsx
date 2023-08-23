import { Route, Routes, useLocation } from 'react-router-dom'
import router from '@/libs/router'
import React, { type ReactElement, useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import './assets/App.scss'
import { HeaderBar } from '@/layouts/HeaderBar'

export default function App (): ReactElement {
  const location = useLocation()
  const auth = useAuth()

  useEffect(() => {
    const route = router.filter((x) => x.path === location.pathname)[0]
    if (route.isProtected && !auth.isAuthenticated && !auth.isLoading) {
      void auth.signinRedirect()
      auth.startSilentRenew()
    }
  }, [location])

  return (
        <div className="App">
            <HeaderBar/>
            <Routes>
                {router.map((value) => (
                    <Route path={value.path} Component={value.component} key={value.path}/>
                ))}
            </Routes>
        </div>
  )
}
