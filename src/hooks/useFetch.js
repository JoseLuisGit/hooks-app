import { useEffect, useState, useRef} from "react";

export const useFetch = (url) => {

    const isMounted = useRef(true);
  
    const [ state, setState ] = useState({
        data: null,
        loading: true,
        error: null
    });


    useEffect(()=>{
     return()=>{
         isMounted.current = false;
     }   
    }, [])

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then(response => response.json())
            .then(data => {

                setTimeout(()=>{
                    if(isMounted.current){
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }

                }, 0)
          
            })
    }, [url])

    return state;
};
