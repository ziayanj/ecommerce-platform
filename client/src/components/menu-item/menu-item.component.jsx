import { useNavigate } from 'react-router-dom';
import { MenuItemContainer, MenuItemImage, ContentContainer, ContentTitle, ContentSubtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate(); 
  return (
    <MenuItemContainer
      size={size}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <MenuItemImage 
        className="background-image" 
        imageUrl={imageUrl} 
      />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default MenuItem;