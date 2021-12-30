import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ?
          cartItems.map(cartItem => 
            <CartItem key={cartItem.id} item={cartItem} />
          ) :
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        }
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          dispatch(toggleCartDropdown());
          navigate('/checkout');
        }}
      >
        Go to checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;