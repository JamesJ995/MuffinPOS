import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    
    <Card className="col-3 mb-2 border-0">
       <Link to={`/products/${_id}`}>
      <Card.Img variant="top" className="rounded-pill p-2" alt={name} src={`/images/${image}`} />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {quantity} {pluralize("item", quantity)} in stock
        </Card.Text>
      </Card.Body>
     
      <Card.Body>
      <button className="btn btn-warning" onClick={addToCart}>Add to cart</button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
