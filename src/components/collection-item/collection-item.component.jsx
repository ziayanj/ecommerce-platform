import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, CollectionItemImage, CollectionFooterContainer, CollectionNameContainer, CollectionPriceContainer, CollectionItemButton } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  
  return (
    <CollectionItemContainer>
      <CollectionItemImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <CollectionNameContainer>{name}</CollectionNameContainer>
        <CollectionPriceContainer>{price}</CollectionPriceContainer>
      </CollectionFooterContainer>
      <CollectionItemButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);