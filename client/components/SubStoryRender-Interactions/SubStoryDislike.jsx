import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const SubStoryDislike = (props) => {
  const { user, isAuthenticated } = useAuth0();

  const dislikeClick = () => {
    const { subStory, dislike } = props;
    if (isAuthenticated) {
      Axios.put('/subDislike', {
        id: subStory.id,
        userid: user.email,
      })
        .then((result) => {
          console.log(result);
          dislike();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('Please log in to dislike a story.');
    }
  };

  return (
    <Button
      onClick={dislikeClick}
    >
      Dislike
    </Button>
  );
};
SubStoryDislike.propTypes = {
  subStory: PropTypes.isRequired,
  dislike: PropTypes.isRequired,
};
export default SubStoryDislike;
