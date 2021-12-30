import { useDispatch } from 'react-redux';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, CheckoutItemImageContainer, CheckoutItemTextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem; 

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img src={imageUrl} alt="item" />
      </CheckoutItemImageContainer>
      <CheckoutItemTextContainer>{name}</CheckoutItemTextContainer>
      <QuantityContainer>
        <div onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
      </QuantityContainer>
      <CheckoutItemTextContainer>{price}</CheckoutItemTextContainer>
      <RemoveButtonContainer onClick={() => dispatch(clearItem(cartItem))}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;