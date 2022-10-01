import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";

type CarrocelFotoProps = {
  children: React.ReactNode;
  titulo: string;
  scrollbarTrackBackground: string;
};

export const CarrocelFoto = ({
  children,
  titulo,
  scrollbarTrackBackground,
}: CarrocelFotoProps) => {
    
  const Carrocel = styled.div`
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${scrollbarTrackBackground};
      margin-bottom: 18px;
      margin-top: 18px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgb(216, 216, 232);
      border-radius: 20px;
      border: 2px solid ${scrollbarTrackBackground};
    }
  `;

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={12} sm={3} md={2}>
      <Carrocel
        style={{
          textAlign: "center",
          backgroundColor: scrollbarTrackBackground,
          width: smDown ? "100%" : 150,
          height: smDown ? 157 : 620,
          overflowX: smDown ? "scroll" : "hidden",
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          overflowY: smDown ? "hidden" : "scroll",
          display: smDown ? "flex" : "block",
          paddingTop: smDown ? 0 : 10,
        }}
      >
        <Box sx={{ position: "absolute", left: smDown ? -10 : 118, top: 180 }}>
          <Avatar
            sx={{ bgcolor: scrollbarTrackBackground, width: 80, height: 80, fontSize: 20 }}
          >
            {titulo}
          </Avatar>
        </Box>

        {children}
      </Carrocel>
    </Grid>
  );
};
