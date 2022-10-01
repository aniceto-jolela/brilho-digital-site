import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { ModalBasic } from "components/global/modal/modal-precario";
import Modal from "@mui/material/Modal";

type SelectedDesignerProps = {
  children: React.ReactNode;
  modelo?: string;
  imagem?: { src: string; id: number; naturalWidth?: number;naturalHeight?:number };
  modalTitulo: string;
  modalDescricao: string;
};

export const SelectedDesigner = ({
  children,
  modelo,
  imagem,
  modalTitulo,
  modalDescricao,
}: SelectedDesignerProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const responsivo = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = React.useState(false);
  const handledOpen = () => setOpen(true);
  const handledClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width:smDown?500:
    responsivo?500:
    imagem?.naturalWidth===2834?500:
    imagem?.naturalHeight===4272?500:
    imagem?.naturalWidth===4272?900:600,
    bgcolor: "#c4bebed3",
    border: "2px solid #000000",
    boxShadow: 24,
    p: 1,
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop:15,
        width: "100%",
        zIndex: 0,
      }}
    >
      <Grid item xs={12} sm={12} md={10}>
        {children}

        <Box
         onClick={handledOpen}
          component="img"
          src={imagem?.src}
          sx={{
            width: 440,
            height:440,
            backgroundColor: "#454242",
          }}
        />

        <Box sx={{ justifyContent: "center", display: "flex" }}>
          <Box
            sx={{
              textAlign: "center",
              paddingTop: 1,
              position: responsivo ? "static" : "absolute",
              right: 60,
              top: 550,
              backgroundColor: responsivo ? "#454242" : "none",
              width: responsivo ? 440 : "none",
              color: responsivo ? "#fff" : "#000",
            }}
          >
            <Typography variant="h2" component="h2" fontSize={13}>
              {modelo}
            </Typography>
            <Typography variant="h3" component="h3" fontSize={9}>
                {imagem?.naturalWidth} x {imagem?.naturalHeight}
            </Typography>
            <ModalBasic
              modalTitulo={modalTitulo}
              modalDescricao={modalDescricao}
            />
          </Box>
        </Box>
      </Grid>

      <Modal
        open={open}
        onClose={handledClose}
        >
          <Box sx={style} onClick={handledClose}>
             <Box  component="img" width='100%' src={imagem?.src} />
          </Box>
      </Modal>
    </Box>
  );
};
