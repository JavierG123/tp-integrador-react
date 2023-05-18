const defaultState = {
    language : "es",
    darkMode : true,
    isLoggedIn: false,
    username : "anonymous"
}

export default function getInitialState() {
    
    return defaultState;
}

export function saveContextState ( newcontextState) {
    //salva dentro de localstorage
    localStorage.setItem( "contextState", JSON.stringify(newcontextState))
}
