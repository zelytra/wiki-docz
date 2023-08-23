import {useState, useEffect, ReactNode} from 'react';
import axios, {AxiosResponse, AxiosError, Method, AxiosProgressEvent} from 'axios';
import {useAuth} from "react-oidc-context";

interface RequestOptions {
    method: Method | "GET";
    data?: any;
    url: string
    header?: any
    isProtected?: boolean
}

export interface AxiosState {
    data: any | null;
    error: AxiosError | null;
    loading: boolean;
    progress?: number;
}

export interface HTTPRenderProps {
    state: AxiosState
    children: (data: any) => (ReactNode[] | ReactNode)
}

const backendURL = import.meta.env.VITE_BACKEND_HOST + "/"

export function useAxios(options: RequestOptions) {
    const auth = useAuth();

    if (!auth.isLoading && options.isProtected && !auth.isAuthenticated) {
        auth.signinRedirect().then(r => console.log(r));
        auth.startSilentRenew()
    }

    if (auth.isAuthenticated) {
        options.header = {
            Authorization: "Bearer " + auth.user?.access_token,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, DELETE",
        }
    }

    const [state, setState] = useState<AxiosState>({
        data: undefined,
        error: null,
        loading: true,
        progress: 0

    })
    useEffect(() => {
        if (auth.isAuthenticated) {
            const fetchData = async () => {
                setState(prevState => ({...prevState, loading: true})) // Start fetching
                try {
                    const response: AxiosResponse = await axios({
                        url: backendURL.concat(options.url),
                        data: options.data,
                        headers: options.header,
                        method: options.method,
                        onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
                            if (progressEvent && progressEvent.total) {
                                setState(prevState => ({
                                    ...prevState,
                                    progress: Math.round((progressEvent.loaded * 100) / progressEvent.total!)
                                }));
                            }
                        }
                    })
                    console.debug("[" + options.method + "] " + backendURL.concat(options.url))
                    setState({
                        data: response.data,
                        error: null,
                        loading: false,
                        progress: 100,
                    });
                } catch (error: any) {
                    setState({
                        loading: false,
                        progress: 0,
                        data: null,
                        error: error

                    })
                }
            }
            fetchData()
        }

    }, [auth.isAuthenticated])


    return state;

}

export default useAxios;
