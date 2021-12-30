import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, CollectionItemImage, CollectionFooterContainer, CollectionNameContainer, CollectionPriceContainer, CollectionItemButton } from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  
  return (
    <CollectionItemContainer>
      <CollectionItemImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <CollectionNameContainer>{name}</CollectionNameContainer>
        <CollectionPriceContainer>{price}</CollectionPriceContainer>
      </CollectionFooterContainer>
      <CollectionItemButton inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;