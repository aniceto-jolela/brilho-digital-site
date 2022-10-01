import { Box, Typography } from "@mui/material";
import styles from "/public/fotes/FontInter.module.css";
import Avatar from '@mui/material/Avatar';

const AllImagens=[
  {id:0,src:'/img/designers/branding/4.jpg'},
  {id:1,src:'/img/designers/branding/2.jpg'},
  {id:2,src:'/img/designers/branding/3.jpg'},
  {id:3,src:'/img/designers/cartao-visita/1.jpg'},
  {id:4,src:'/img/designers/cartao-visita/2.jpg'},
  {id:5,src:'/img/designers/cartao-visita/3.jpg'},
  {id:6,src:'/img/designers/mockup/1.png'},
  {id:7,src:'/img/designers/mockup/2.jpg'}
]

export const Marcas = () => {
  
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: 15,}}>
        <Box  sx={{ fontSize: 500, alignItems:'center',display:'flex',flexDirection:'column'}}>
          <Box sx={{display:'flex',marginBottom:-11}} className={styles.marcasLetaTop}>
            <Typography sx={{marginRight:11}}>Branding</Typography>
            <Typography >Cartão De Visita</Typography>
          </Box>
          <Box sx={{ transform:'rotate(-90deg)',bgcolor:'indigo',width:0,marginLeft:'3vh',MozMarginStart:60 }}> <span className={styles.marca}>B</span> </Box>
          <Box sx={{ transform:'rotate(90deg)',bgcolor:'lightblue',width:0,marginTop:-110,MozMarginEnd:74,zIndex:1}}><span className={`${styles.marca} ${styles.marcas}`}>D</span></Box>
          <Box sx={{mt:-20,ml:56,}} className={styles.marcasCirculo}>
            <Avatar sx={{ bgcolor:'#f00dbb3c',width:200,height:200, }}> </Avatar>
          </Box>
        </Box>


        <Box sx={{marginTop:-65,textAlign:'center'}} className={styles.marcasConteudo}>
          
          <Box sx={{bgColor:'azure',marginRight:24,display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Box component='img' src={AllImagens[0].src} sx={{width:50,height:50,padding:1,}} />
            <Box component='img' src={AllImagens[1].src} sx={{width:50,height:50,padding:1,}} />
            <Box component='img' src={AllImagens[2].src} sx={{width:50,height:50,padding:1}} />
          </Box>
          <Box sx={{bgColor:'orange',marginLeft:19,marginTop:-19,display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Box component='img' src={AllImagens[3].src} sx={{width:90,height:50,padding:1,}} />
            <Box component='img' src={AllImagens[4].src} sx={{width:90,height:50,padding:1,}} />
            <Box component='img' src={AllImagens[5].src} sx={{width:90,height:50,padding:1}} />
          </Box>
          <Box sx={{bgColor:'yellow',marginTop:6,marginBottom:30}}>
            <Box component='img' src={AllImagens[6].src} sx={{width:130,height:130,}} />
            <Box component='img' src={AllImagens[7].src} sx={{width:130,height:130,marginLeft:3}} />
            <Typography sx={{marginTop:3}}>Mokup</Typography>
          </Box>
        
        </Box>
      </Box>
    </>
  );
};
