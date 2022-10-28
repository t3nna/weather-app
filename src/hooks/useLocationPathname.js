import {useLocation} from "react-router-dom";

export default function useLocationPathname (){
    let {pathname} = useLocation()

    pathname = pathname
        .split('/')


    pathname = pathname[pathname.length -1]

    return pathname
}