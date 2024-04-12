import React , {useContext} from 'react';
import { CartContext } from './Cart';
import { useNavigate } from 'react-router-dom';



function Checkout() {
    const {cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);
    const navigate = useNavigate();

   const navigatePurchase = ( ) => {
   navigate('/purchase');
   };

  const completePurchase = () => {
    clearCart();
    navigatePurchase();
  }
 
  return (
    <>
   
<div className="cart-container">
    
<h1>Cart Checkout</h1>
<div>
    {cartItems.map((item) => (
      <div className="checkout-deets" key={item.id}>
      <div className="checkout-deets">
        <img src={item.image} alt={item.title} className="image"/>
        <div>
          <h2>{item.title}</h2>
          <h4 className='price'>${item.price.toFixed(2)}</h4>
        </div>
      </div>
    <div className="quantity-btn">
      <button onClick={() => {addToCart(item)}}> + </button>
      <p>{item.quantity}</p>
      <button onClick={() => {removeFromCart(item)}}> - </button>
    </div>
    </div>
    ))}
</div>

    {cartItems.length > 0 ? ( 
    <div>
    <h2>Total: ${getCartTotal()}</h2>
    <button onClick={() => {clearCart()}}> Clear cart </button>
    </div>) : (<h3>Nothing in cart</h3>)}


    {cartItems.length > 0 ? (
    <button className='done' onClick={completePurchase}>Complete Purchase</button>) : (<h3>Click home to start shopping!</h3>)}
    </div>
    
    
</>
)}



export default Checkout;