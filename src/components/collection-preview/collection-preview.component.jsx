import CollectionItem from '../collection-item/collection-item.component'; 

import { CollectionPreviewContainer, CollectionPreviewTitleContainer, PreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({title, items}) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitleContainer>{title.toUpperCase()}</CollectionPreviewTitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;