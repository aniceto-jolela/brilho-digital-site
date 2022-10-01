import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";

type CarrocelAnimacaoProps = {
  children: React.ReactNode;
  titulo: string;
};

export const CarrocelAnimacao = ({
  children,
  titulo,
}: CarrocelAnimacaoProps) => {
    
  const Carrocel = styled.div`
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: #f7f6f6;
      margin-bottom: 18px;
      margin-top: 18px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius: 20px;
      border: 2px solid #f7f6f6;
    }
  `;

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={12} sm={3} md={2}>
      <Carrocel
        style={{
          textAlign: "center",
          backgroundColor: '#f7f6f6',
          
          width: smDown ? "100%" : 150,
          height: smDown ? 157 : 620,
          overflowX: smDown ? "scroll" : "hidden",
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          overflowY: smDown ? "hidden" : "scroll",
          display: smDown ? "flex" : "block",
          border: 'solid 3px #000',
          paddingTop: smDown ? 0 : 10,
        }}
      >
        <Box sx={{ position: "absolute", left: smDown ? 50 : 180, top: 170 }}>
          <Avatar
            sx={{ bgcolor: '#000', width: 30, height: 30, }}
          > </Avatar>
        </Box>
        <Box sx={{ position: "absolute", left: smDown ? -10 : 118, top: 180 }}>
          <Avatar
            sx={{ bgcolor: '#000', width: 80, height: 80, fontSize: 14 }}
          >
            {titulo}
          </Avatar>
        </Box>

        {children}
      </Carrocel>
    </Grid>
  );
};
