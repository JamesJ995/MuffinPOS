import React from 'react';

import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import { style } from 'dom-helpers';

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (item) => {

    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });

      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }

  }

  const onIncrement =()=>{
    dispatch({
      type: UPDATE_CART_QUANTITY,
      _id: item._id,
      purchaseQuantity: item.purchaseQuantity +1
    });
    idbPromise('cart', 'put', { ...item, purchaseQuantity:item.purchaseQuantity +1 });
  }

  const onDecrement =()=>{
    var updatedPurchaseQuantity = Math.max(1, item.purchaseQuantity -1)
    dispatch({
      type: UPDATE_CART_QUANTITY,
      _id: item._id,
      purchaseQuantity:updatedPurchaseQuantity
    });
    idbPromise('cart', 'put', { ...item, purchaseQuantity:updatedPurchaseQuantity});
  }

  const style ={
   list: {
     fontSize: "1.2em",
     textAlign: "center"
   },
   name: {
     fontSize: "1.2em"
   }
 }

  return (
    <div className="p-0 m-0">
       
          <li className="list-group-item d-flex justify-content-between py-2">
          <div className="btn-group-vertical" role="group">
              <button type="button" className="btn btn-success btn-sm" onClick={onIncrement}>+</button>
              <button type="button" className="btn btn-warning btn-sm" onClick={onDecrement}>-</button>
            </div>
            <div className="p-2 w-100 ">
              <h6 className="my-0" style={style.name}>{item.name}</h6>
            </div>
            <div className="p-2" style={style.list}><h6>Price {item.price}</h6> </div>
            
            <div className="p-2" style={style.list}><h6>Quantity {item.purchaseQuantity}</h6></div>
            <span className="text-muted d-none">$12</span>
            <span className="bg-danger p-4 text-white"
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
           X
          </span>
          </li>
       
        
         
        <div>
          
          

        </div>
        <div className="p-2" style={style.list}>
          Quantity {item.purchaseQuantity}
        </div>
        <span className="text-muted d-none">$12</span>
        <span
          className=" bg-danger p-4 text-white"
          role="img"
          aria-label="trash"
          onClick={() => removeFromCart(item)}
        >
          X
        </span>
      </li>

      <div></div>
    </div>
  );
};

export default CartItem;
