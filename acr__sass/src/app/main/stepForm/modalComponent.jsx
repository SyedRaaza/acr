import React,{useState , useEffect} from 'react';
import Modal from '@material-ui/core/Modal';
import MasterForm from './stepForm';


function ModalComponent() {
const [open, setOpen] = useState(false);

const handleOpen = () => {
setOpen(true);
};

const handleClose = () => {
setOpen(false);
};


useEffect(() => {

    handleOpen()

},[]);



const body = (
<MasterForm />
);

  return (
    <div>
        <button type="button" onClick={handleOpen}>
        
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="bd-white modalForm"
        disableBackdropClick="true"
      >
        <MasterForm />
      </Modal>
    </div>
  );
}

export default React.memo(ModalComponent);
