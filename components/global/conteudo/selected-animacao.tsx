import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { ModalBasic } from "components/global/modal/modal-precario";

type SelectedAnimacaoProps = {
  children: React.ReactNode;
  modelo?: string;
  video?: { src: string; id: number };
  modalTitulo: string;
  modalDescricao: string;
};

export const SelectedAnimacao = ({
  children,
  modelo,
  video,
  modalTitulo,
  modalDescricao,
}: SelectedAnimacaoProps) => {
  const theme = useTheme();
  const responsivo = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: 15,
        width: "100%",
        zIndex: 0,
      }}
    >
      <Grid item xs={12} sm={12} md={10}>
        {children}

        <Box
          component="video"
          bgcolor="#454242"
          width={440}
          height={440}
          controls
          src={video?.src}
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
            <ModalBasic
              modalTitulo={modalTitulo}
              modalDescricao={modalDescricao}
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
