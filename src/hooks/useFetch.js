import { useState, useEffect } from "react";

export const useFetch = (url, option) =>{
    const [status, setStatus] = useState({
        loading: false,
        data: undefined,
        error: undefined,
    })
    const fetchNow = (url, option) =>{
        setStatus({loading:true})
        fetch(url,option)
            .then(res => res.json())
            .then(res => {
                setStatus({loading:false, data:res})
            })
            .catch(err => setStatus({loading:false, error: err}))
    }
    useEffect(() =>{
        if(url){
            fetchNow(url,option)
        }
    }, [])
 
    return {...status, fetchNow}
}
