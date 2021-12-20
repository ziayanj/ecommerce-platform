import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from '../../redux/directory/directory.selectors'; 

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);  

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Directory);