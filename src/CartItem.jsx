import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem, selectCartCount, selectCartItems, selectCartTotal } from './CartSlice';
import { formatPrice } from './plants';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  return (
    <div className="wrapper shop-page">
      <div className="page-heading">
        <h1>Shopping Cart</h1>
        <p aria-live="polite">{count} {count === 1 ? 'plant' : 'plants'} in your cart</p>
      </div>
      <div className="cart-layout">
        {items.length ? (
          <ul className="cart-items">
            {items.map(item => (
              <li className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} width="104" height="84" />
                <div className="cart-product">
                  <h2>{item.name}</h2>
                  <p>{formatPrice(item.priceCents)} each</p>
                  <button type="button" className="delete" aria-label={'Delete ' + item.name}
                    onClick={() => dispatch(removeItem(item.id))}>Delete</button>
                </div>
                <div className="quantity" aria-label={'Quantity for ' + item.name}>
                  <button type="button" aria-label={'Decrease quantity of ' + item.name}
                    onClick={() => dispatch(decreaseQuantity(item.id))}>&minus;</button>
                  <span aria-live="polite">{item.quantity}</span>
                  <button type="button" aria-label={'Increase quantity of ' + item.name}
                    onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
                <strong className="line-total" aria-label={'Total for ' + item.name}>{formatPrice(item.priceCents * item.quantity)}</strong>
              </li>
            ))}
          </ul>
        ) : <p className="empty-cart">Your cart is empty.</p>}
        <aside className="cart-summary" aria-label="Order summary">
          <h2>Order summary</h2>
          <p className="summary-total"><span>Cart total</span><strong aria-live="polite">{formatPrice(total)}</strong></p>
          <button type="button" className="button" onClick={() => setCheckoutMessage('Checkout is coming soon.')}>Checkout</button>
          <a className="button button-outline" href="#plants">Continue Shopping</a>
          {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
        </aside>
      </div>
    </div>
  );
}
