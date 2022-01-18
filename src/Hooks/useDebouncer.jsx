import { useRef } from "react";

const useDebouncer = (callbackFn, time) => {
    const ref = useRef(null);
    
    return (value) => {
        ref.current && clearTimeout( ref.current );
        ref.current = setTimeout(()=> {
            callbackFn(value);
            ref.current = null;
        }, time);
    }

}

export default useDebouncer;