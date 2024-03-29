import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifts = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
            
        getGifs( category )
            .then(imgs => {
                setState({ 
                    data: imgs,
                    loading: false
                });
        })



    }, [ category ])    

    return state; //Es un arreglo con data y loading 

}
