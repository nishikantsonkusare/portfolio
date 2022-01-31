import * as React from 'react';
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import ReactDOM from "react-dom";
import CardMedia from '@mui/material/CardMedia';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80vw",
  border: "none",
  bgcolor: 'background.paper',
  p: 4,
  transition: 'all 0.5s'
};

const ImageModalView = (props) => {

  const handleClose = () => props.onClose(false);

  return (
    <div>
      <Modal
        open={props.onShow}
        onClose={handleClose}
      >
        <Box sx={style}>
            <CardMedia
                component="img"
                height="50%"
                image={props.image}
                alt="React Image"
                sx={{ cursor: "pointer" }}
            />
        </Box>
      </Modal>
    </div>
  );
}

const ImageModal = (props) => {
    return (
        ReactDOM.createPortal( <ImageModalView onShow={props.onShow} image={props.image} onClose={props.onClose} />, document.getElementById("modal-root"))
    )
}

export default ImageModal;

