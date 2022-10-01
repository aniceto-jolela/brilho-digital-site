import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import { Box,Typography, useMediaQuery, useTheme } from "@mui/material";
import { ArtCarrocel } from "./components/fotos/art-carrocel";
import Head from "next/head";
import { Retrato } from "./components/fotos/retrato";
import { DeRua } from "./components/fotos/de-rua";
import { Fpp } from "./components/fotos/fpp";
import { Gif } from "./components/fotos/gif";
import { Marcas } from "./components/designer/marcas";
import { Templants } from "./components/designer/templants";
import { Animacao } from "./components/animacao/animacao";



export function Home() {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [getScrollY,setScrollY] = useState(0)
  const [getEstilo,setEstilo] = useState<{categoria:string,estilo:string,cor:string}>({categoria:'FOTOS',estilo:'Art',cor:'000000ea'})
 

  function handledScrollY(){
    setScrollY(scrollY)
   
    if(smDown)
    getScrollY<660?setEstilo({categoria:'FOTOS',estilo:'Art',cor:'#000000ea'}):
    getScrollY<1800?setEstilo({categoria:'FOTOS',estilo:'Retrato',cor:'#cf11ecea'}):
    getScrollY<2850?setEstilo({categoria:'FOTOS',estilo:'De Rua',cor:'#eca711ea'}):
    getScrollY<3420?setEstilo({categoria:'FOTOS',estilo:'FPP',cor:'#ec3911ea'}):
    getScrollY<3658?setEstilo({categoria:'FOTOS',estilo:'Gif',cor:'#73ec11ea'}):
    getScrollY<4943?setEstilo({categoria:'DESIGNER',estilo:'Designer',cor:'#000000ea'}):
    getScrollY<9999?setEstilo({categoria:'ANIMAÇÃO',estilo:'Animação',cor:'#000000ea'}):''
    else
    getScrollY<684?setEstilo({categoria:'FOTOS',estilo:'Art',cor:'#000000ea'}):
    getScrollY<1140?setEstilo({categoria:'FOTOS',estilo:'Retrato',cor:'#cf11ecea'}):
    getScrollY<1710?setEstilo({categoria:'FOTOS',estilo:'De Rua',cor:'#eca711ea'}):
    getScrollY<2052?setEstilo({categoria:'FOTOS',estilo:'FPP',cor:'#ec3911ea'}):
    getScrollY<2508?setEstilo({categoria:'FOTOS',estilo:'Gif',cor:'#73ec11ea'}):
    getScrollY<3568?setEstilo({categoria:'DESIGNER',estilo:'Designer',cor:'#000000ea'}):
    getScrollY<9999?setEstilo({categoria:'ANIMAÇÃO',estilo:'Animação',cor:'#000000ea'}):''
  }

 
  return (
    <React.Fragment>
      <Head>
        <title>Home - BD</title>
      </Head>

      <Box sx={{overflowX:'hidden',}} onWheel={()=>{handledScrollY() }} onTouchEnd={()=>{handledScrollY() }} onClick={()=>{handledScrollY() }}>
        <Box>
          <Typography
            variant="h1"
            component="div"
            fontSize={13}
            align="center"
            lineHeight={2}
            marginLeft={smDown?-14:0}
          >
            A qualidade começa com a interação <br />
            que é determinada pela alta administração.
            <br />
            BD (Brilho Digital), <br />
            empresa de prestação de serviço de,<br/>
            Fotos, Designer e Animação (Vídeos).<br/><br/>
          </Typography>
        </Box>
    
        <Box sx={{backgroundColor:'yellow',display:'flex',}}>
          <Box sx={{position:'fixed',color:'#ddd3d3',bgcolor:'#110707',left:smDown?0:50,top:180,fontSize:12,pl:2,zIndex:3}}>
          {getEstilo?.categoria}
          </Box>
          <Box sx={{position:'fixed',right:10,top:150,zIndex:3}}>
            <Avatar sx={{ bgcolor:getEstilo?.cor,width:90,height:90 }}>{getEstilo?.estilo}</Avatar>
          </Box>
        </Box>

        <ArtCarrocel />
        <Retrato/>
        <DeRua/>
        <Fpp/>
        <Gif/>
        <Marcas/>
        <Templants/>
        <Animacao/>
      </Box>
    </React.Fragment>
  );
}
