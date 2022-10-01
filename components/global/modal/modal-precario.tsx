import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 400,
  bgcolor: "beige",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  backgroundImage:'url(/img/modal/1.jpg)',
  backgroundSize:'200px '
};

type ModalBasicProps={
  modalTitulo:string
  modalDescricao:string
}

export const ModalBasic = ({modalTitulo,modalDescricao}:ModalBasicProps) => {
  const [open, setOpen] = React.useState(false);
  const handledOpen = () => setOpen(true);
  const handledClose = () => setOpen(false);

  return (
    <>
      <div>
        <Button onClick={handledOpen} color='success' sx={{backgroundColor:'azure',marginTop:1}}> PREÇÁRIO</Button>
        <Modal
          open={open}
          onClose={handledClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight={600}>
              {modalTitulo}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2,bgcolor:'#ffffffad' }}>
              {modalDescricao}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};
