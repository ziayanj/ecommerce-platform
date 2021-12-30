import { useSelector, useDispatch } from 'react-redux';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  
  return (
    <CartIconContainer onClick={() => dispatch(toggleCartDropdown())}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;