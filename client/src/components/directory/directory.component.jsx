import { useSelector } from 'react-redux';

import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from '../../redux/directory/directory.selectors'; 

import { DirectoryMenuContainer } from './directory.styles';

const Directory = () => {
  const sections = useSelector(selectSections);
  
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );  
};

export default Directory;