import { useState, useEffect} from 'react';

export const useApi=(url)=>{
    const[product,setProducts]=useState([]);
    const[loading,setloading]=useState(false)

    useEffect(()=>{
setloading(true)
        fetch(url)
        .then(data=>data.json())
        .then(res=>setProducts(res))
        .finally(()=>
        setloading(false));
    },[url] );
return{product,loading};
}