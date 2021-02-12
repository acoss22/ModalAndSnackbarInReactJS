import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";


  return (
    <div className={showHideClassName} >
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Confirm
        </button>
        <button type="button" onClick={handleClose}>
          Cancel
        </button>
      </section>
    </div>
  )
};
export default Modal;