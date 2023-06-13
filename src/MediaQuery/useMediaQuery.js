
import {useState, useEffect} from 'react'

let useMediaQuery = (minWidth) =>{
    const [state, setState] = useState({
        windowWidth : window.innerWidth,
        device : false,
    })
    useEffect(() => {
        let handleResize =()=>{

            let currentWidth = window.innerWidth;
            let device = currentWidth <= minWidth;
            setState({windowWidth : currentWidth, device})
        };
        window.addEventListener("resize",handleResize);
        return ()=> window.removeEventListener("resize", handleResize)
    }, [state.windowWidth]);
    return state.device

}

export default useMediaQuery