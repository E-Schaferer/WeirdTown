import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';

// import { closeErrorAction } from '../../redux/actions/actionCreators';

const ErrorModal = () => {
  const modalRender = useSelector((state) => state.renderReducer.errorRender);
  const errorMessage = useSelector((state) => state.renderReducer.errorMessage);
  const dispatch = useDispatch();
  const close = () => {
    dispatch({
      type: 'ErrorModal/hideError',
      payload: '',
    });
  };

  return (
    <>
      <Modal show={modalRender} onHide={close}>
        <Modal.Header>
          <Modal.Title>ERROR</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ErrorModal;
