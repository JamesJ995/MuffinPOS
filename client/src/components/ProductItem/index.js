import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <Card className="col-4 mb-2 border-0">
      <Link to={`/`}>
        <Card.Img
          onClick={addToCart}
          variant="top"
          className="rounded-pill p-2"
          alt={name}
          src={`/images/${image}`}
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={name}
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>

      <Card.Body>
        <button
          className="btn btn-warning"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `/products/${_id}`;
          }}
        >
          Details
        </button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
