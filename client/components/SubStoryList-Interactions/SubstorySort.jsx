import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

const SubstorySort = (props) => {
  const { handleSort, subs } = props;
  const output = subs.slice();
  const sortDateAsc = () => {
    output.sort((a, b) => b.id - a.id);
    handleSort(output);
  };
  const sortDateDesc = () => {
    output.sort((a, b) => a.id - b.id);
    handleSort(output);
  };
  const sortLikesAsc = () => {
    output.sort((a, b) => a.sublikes - b.sublikes);
    handleSort(output);
  };
  const sortLikesDesc = () => {
    output.sort((a, b) => b.sublikes - a.sublikes);
    handleSort(output);
  };

  return (
    <DropdownButton as={ButtonGroup} id="substory-dropdown-sort" title="Sort By">
      <Dropdown.Item as="button" onClick={sortDateDesc}>Date (Descending)</Dropdown.Item>
      <Dropdown.Item as="button" onClick={sortDateAsc}>Date (Ascending)</Dropdown.Item>
      <Dropdown.Item as="button" onClick={sortLikesDesc}>Likes (Descending)</Dropdown.Item>
      <Dropdown.Item as="button" onClick={sortLikesAsc}>Likes (Ascending)</Dropdown.Item>
    </DropdownButton>
  );
};
SubstorySort.propTypes = {
  handleSort: PropTypes.isRequired,
  subs: PropTypes.isRequired,
};

export default SubstorySort;
