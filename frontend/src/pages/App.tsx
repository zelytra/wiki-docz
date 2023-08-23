import {Link, Route, Routes, useLocation} from "react-router-dom";
import router from "@/libs/router";
import {useEffect} from "react";
import {useAuth} from "react-oidc-context";
import "./assets/App.scss"

export default function App() {

    const location = useLocation();
    const auth = useAuth();

    useEffect(()=>{
        const route = router.filter((x)=>x.path===location.pathname)[0];
        if (route && route.isProtected && !auth.isAuthenticated && !auth.isLoading){
            auth.signinRedirect().then(r => console.log(r));
            auth.startSilentRenew()
        }
    },[location])


    return (
        <div className="App">
            <Routes>
                {router.map((value) => (
                    <Route path={value.path} Component={value.component} key={value.path}/>
                ))}
            </Routes>
        </div>
    );
}
