import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Prevents screen readers from reading outside the modal

const VideoModal = ({isOpen, onRequestClose, videoUrl}) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Video Modal">
            <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default VideoModal;
