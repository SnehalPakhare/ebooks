import { Link } from "react-router-dom";

function Product(props){
    return(
        <>
           <div className="card" style={{ width: '400px' }}id="card">
              <img className="card-img-top" src={props.img} alt="Card image" />
              <div className="card-body">
                 <h4 className="card-title"> {props.id} </h4>
                 <p className="card-text">{props.name}</p>
                 <p className="card-text">{props.price}</p>
                 <p className="card-text">{props.category}</p>
                 <p className="card-text">{props.description}</p>
                 <a href="#" className="btn btn-primary">Add to Cart</a>
                 <Link to={`/readmore/${props.id}`}>ReadMore</Link>
              </div>
           </div>


        </>
    )
}

export default Product;