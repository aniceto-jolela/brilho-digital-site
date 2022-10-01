import { Box, Grid, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Avatar from '@mui/material/Avatar';

export function Sobre() {
  return (
    <React.Fragment>
      <Head>
        <title>Sobre - BD</title>
      </Head>

      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="/img/logotipo.svg"
            sx={{ width: 100, height: 100 }}
          />
        </Box>

        <Typography
          variant="h1"
          component="div"
          fontSize={13}
          align="center"
          lineHeight={2}
        >
          BD (Brilho Digital) é uma empresa de prestação <br />
          e venda de serviço que teve início aos 28/02/2022, com principal
          <br />
          área de atuação em artes digitais e designers. <br />
          Os seus modelos de <span style={{color:'#cc3939'}}>fotografias</span> são:
          <br />
        </Typography>

        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 5,
            marginLeft: -26,
            fontSize: 13,
          }}
        >
          <ul style={{paddingLeft:0}}>
            <ul>
            <li>Artística</li>
            <li>Retrato</li>
            <li>De rua</li>
            <li>FPP</li>
            <li>Gif</li>
            <div style={{marginTop:20,marginLeft:-20}}>==<span style={{color:'#cc3939',paddingLeft:5}}>Nos Designers temos:</span></div>
            <li>Mokup</li>
            <li>Branding</li>
            <li>Template</li>
            <li>Flyer</li>
            <li>Cartão de Visita</li>
            <div style={{marginTop:20,marginLeft:-20}}>==<span style={{color:'#cc3939',paddingLeft:5}}>Já nas Animações:</span></div>
            <li>Romance</li>
            <li>Ficção</li>
            <li>Dedicatória</li>
            </ul>
          </ul>
        </Box>

        <Typography variant="h2" component="h2" fontSize={13} textAlign='center'>
          Esperemos proporcionar valor aos nossos clientes e parceiros.
        </Typography>

        <Typography variant="h2" component="h2" textAlign='center' fontSize={20} marginTop={5} marginBottom={5}>
          PARCEIROS
        </Typography>

      <Grid 
       container
       spacing={{ xs: 1 }}
       columns={{ xs: 12, sm: 12, md: 12 }}
       sx={{textAlign:'center',marginBottom:10}}
      >
        <Grid xs={12} sm={12} md={12}>
            <Box component='img' src="/img/parceiros/crisvan.png" sx={{width:50,height:50,marginRight:5}} />
            <Box component='img' src="/img/parceiros/kiari.jpg" sx={{width:50,height:50,marginRight:5}} />
            <Box component='img' src="/img/parceiros/kambaz.jpg" sx={{width:50,height:50,}} />
        </Grid>
      
      </Grid>



        <Box  sx={{position:'absolute',top:250,right:30,}}>
            <Avatar sx={{ bgcolor:'#0df0bf14',width:150,height:150 }}> </Avatar>
        </Box>
        <Box  sx={{position:'absolute',top:490,right:400}}>
            <Avatar sx={{ bgcolor:'#f0730d28',width:100,height:100, }}> </Avatar>
        </Box>
        <Box  sx={{position:'absolute',top:880,right:10}}>
            <Avatar sx={{ bgcolor:'#f0b30d4c',width:50,height:50, }}> </Avatar>
        </Box>
      </Box>
    </React.Fragment>
  );
}
