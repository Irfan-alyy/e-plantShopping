import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total=0;
    cart.forEach(elem=>{
        total+= elem.quantity*parseFloat(elem.cost.substring(1))
    })
    return total

  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e)
   
  };



  const handleIncrement = (item,index) => {
    dispatch(updateQuantity({index, type:"plus"}))
  };

  const handleDecrement = (item,index) => {
    if(item.quantity>1){
        dispatch(updateQuantity({index, type:"minus"}))
    }else{
        handleRemove(item,index)
    }
   
  };

  const handleRemove = (item,index) => {
    dispatch(removeItem(index))
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const totalCost= item.quantity* parseFloat(item.cost.substring(1));
    console.log("subtotal", totalCost)
    
    return totalCost
  };
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };
  const totalItems=()=>{
    let total=0;
     cart.forEach(item=>{
      total+=item.quantity
    })
    return total
  }

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map((item,index) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item,index)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item,index)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item,index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
  
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <h3>Total Items In Cart: {totalItems()}</h3>
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


