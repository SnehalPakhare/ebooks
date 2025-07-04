import Product from "./Product";

function Productlist(props){
    const products = props.Product1;
    console.log(products);
    return(
        <>
    
                    {
                        products && products.map((p,index) => {
                            console.log(index);
                            return ( <Product {...p} key={index} /> );
                        })
                    }
        </>
    );
}

export default Productlist;