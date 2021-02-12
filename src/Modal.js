import './Modal.css';
import Button from '@material-ui/core/Button';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";


  return (
    <div className={showHideClassName} >
      <section className="modal-main">
        {children}
        <Button  variant="contained" color="primary" onClick={handleClose}>
          Confirm
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
      </section>
    </div>
  )
};
export default Modal;