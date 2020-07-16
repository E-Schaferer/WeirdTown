import React from 'react';
import PropTypes from 'prop-types';

class SubStoryList extends React.Component {
  constructor(props) {
    super(props);
    this.listClick = this.listClick.bind(this);
  }

  listClick() {
    console.log('ping!');
  }

  render() {
    const { subs } = this.props;
    const subList = subs.map((sub) => {
      return (
        <li className="clickable clickable-highlight" onClick={this.listClick}>{sub.subname}</li>
      );
    });
    return (
      <div>
        { subList }
      </div>
    );
  }
}
SubStoryList.propTypes = {
  subs: PropTypes.isRequired,
};

export default SubStoryList;
