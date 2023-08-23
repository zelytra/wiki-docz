import { Route, Routes, useLocation } from 'react-router-dom'
import router from '@/libs/router'
import React, { type ReactElement, useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import './assets/App.scss'

export default function App (): ReactElement {
  const location = useLocation()
  const auth = useAuth()

  useEffect(() => {
    const route = router.filter((x) => x.path === location.pathname)[0]
    if (route.isProtected && !auth.isAuthenticated && !auth.isLoading) {
      auth.signinRedirect().then(r => { console.log(r) })
      auth.startSilentRenew()
    }
  }, [location])

  return (
        <div className="App">
            <Routes>
                {router.map((value) => (
                    <Route path={value.path} Component={value.component} key={value.path}/>
                ))}
            </Routes>
        </div>
  )
}
