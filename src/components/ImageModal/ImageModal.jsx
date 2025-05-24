import Modal from "react-modal";

const customStyles = {
  content: {
    position: "fixed",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ image, isOpen, onClose }) {
  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles}>
        <div>
          <img src={image[0].urls.regular} alt={image[0].description} />
          <button type="button" onClick={onClose}>
            x
          </button>
        </div>
      </Modal>
    </div>
  );
}
