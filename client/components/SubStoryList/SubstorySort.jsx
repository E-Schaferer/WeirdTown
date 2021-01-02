import React from 'react';
import { DropdownButton, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { substorySortAction } from '../../redux/actions/actionCreators';

// const actionCreate = (type, payload) => ({ type, payload });
// use this more and replace other handwritten actions

const SubstorySort = () => {
  const dispatch = useDispatch();
  const dispatcher = (output) => {
    dispatch(substorySortAction(output));
  };
  const subs = useSelector(((state) => state.storyReducer.subs), shallowEqual);
  const output = subs.slice();

  const handleSort = (method) => {
    switch (method) {
      case 'dateAsc':
        output.sort((a, b) => b.id - a.id);
        break;
      case 'dateDesc':
        output.sort((a, b) => a.id - b.id);
        break;
      case 'likesAsc':
        output.sort((a, b) => a.sublikes - b.sublikes);
        break;
      case 'likesDesc':
        output.sort((a, b) => b.sublikes - a.sublikes);
        break;
      default:
    }
    dispatcher(output);
  };

  return (
    <DropdownButton as={ButtonGroup} id="substory-dropdown-sort" title="Sort By" variant="secondary">
      <Dropdown.Item as="button" id="sort-date-desc" onClick={() => handleSort('dateDesc')}>Date (Descending)</Dropdown.Item>
      <Dropdown.Item as="button" id="sort-date-asc" onClick={() => handleSort('dateAsc')}>Date (Ascending)</Dropdown.Item>
      <Dropdown.Item as="button" id="sort-like-desc" onClick={() => handleSort('likesDesc')}>Likes (Descending)</Dropdown.Item>
      <Dropdown.Item as="button" id="sort-like-asc" onClick={() => handleSort('likdesDesc')}>Likes (Ascending)</Dropdown.Item>
    </DropdownButton>
  );
};

export default SubstorySort;
