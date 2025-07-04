import React from 'react';
import Productlist from './Productlist';
import { useApi } from './useApi';
import { useState } from 'react';


function App(){
   // const [products, setProducts] = useState([]);
    const[url,setUrl]=useState('http://localhost:3000/products');
    const{product:products,loading:load}=useApi(url);
    console.log(load);
//     console.log(url);
//     useEffect(() => {
//         fetch(url)
//         .then(data=> data.json())
//         .then(res=>setProducts(res));
// }, [url]);
    return (
        <>
        <p>My E-book Website</p>
        {
            load &&<p>loading...</p>
        }
        <div id="btn1">
        <p>product List</p>
        <button className="btn btn-success"
        onClick={()=>setUrl(`http://localhost:3000/products`)}
        >All</button>
        <button className="btn btn-danger"
         onClick={()=>setUrl(`http://localhost:3000/products?category=laptop`)}
        >Laptop</button>
        <button className="btn btn-warning"
         onClick={()=>setUrl(`http://localhost:3000/products?category=mobile`)}
        >Mobile</button>
        <button className="btn btn-primary"
         onClick={()=>setUrl(`http://localhost:3000/products?category=watch`)}
        >Watch</button>
        <button className="btn btn-secondary"
         onClick={()=>setUrl(`http://localhost:3000/products?category=Tv`)}
        >Tv</button>
        <br></br>
        </div>
        {
            load && <div class="spinner-border text-danger" id="sp"></div>
        }<br></br>
        <Productlist Product1={products} />
        </>
    );
}
export default App;