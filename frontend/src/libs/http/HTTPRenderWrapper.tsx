import {HTTPRenderProps} from "@/libs/http/HTTPAxios";

export function HTTPRenderWrapper({state, children}: HTTPRenderProps) {
    if (!state) return <div>State is undefined</div>
    if (state.loading) return <div>Loading...</div>;
    if (state.error) return <div>Error: {state.error.message}</div>;
    if (state && state.data) return <div className={"axios-http-renderer"}>{children(state.data)}</div>;

    // Optionally handle the case where no data is received and it's not loading or error.
    return null;
}
