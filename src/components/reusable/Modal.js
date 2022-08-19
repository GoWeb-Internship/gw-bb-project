import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';

const Modal = ({ isModalOpen, handleModalClose, children }) => {
  ReactModal.setAppElement('#___gatsby');
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      contentLabel="Modal in section Sign Up"
      shouldCloseOnOverlayClick={true}
      className="absolute lg:w-[934px] rounded-3xl lg:h-[614px] top-1/4 left-1/4 overflow-hidden"
      overlayClassName="fixed top-0 bottom-0 left-0 right-0 bg-neutral-700/70 backdrop-blur-md"
    >
      <button
        className="absolute top-[29px] right-[29px]"
        onClick={handleModalClose}
        aria-label="Close"
      >
        <FiX className="w-[24px] h-[24px] duration-200 transition-transform hover:scale-110" />
      </button>
      {children}
    </ReactModal>
  );
};
Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  handleModalClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Modal;