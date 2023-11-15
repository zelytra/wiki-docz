import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@/pages/App'
import '@/assets/style.scss'
import '@/assets/font.scss'
import '@/assets/color.scss'
import { AuthProvider, type AuthProviderProps } from 'react-oidc-context'
import { NotificationProvider } from '@/libs/notification/NotificationProvider'

const oidcConfig: AuthProviderProps = {
  client_id: 'application',
  redirect_uri: window.document.URL.split('?')[0],
  automaticSilentRenew: true,
  authority: import.meta.env.VITE_KEYCLOAK_HOST + '/realms/' + import.meta.env.VITE_REALM
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider {...oidcConfig}>
            <BrowserRouter>
                <NotificationProvider>
                    <App/>
                </NotificationProvider>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
)
