import { Box, Typography } from "@mui/material";
import styles from "/public/fotes/FontInter.module.css";
import Avatar from '@mui/material/Avatar';

const AllImagens=[
  {id:0,src:'/img/designers/template/1.jpg'},
  {id:1,src:'/img/designers/flyer/1.jpg'},
]

export const Templants = () => {
  
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: 15,}}>
        <Box  sx={{ fontSize: 500, alignItems:'center',display:'flex',flexDirection:'column',}}>
          <Box sx={{marginBottom:-10}} className={styles.templantsLetraTop}> 
            <Typography sx={{marginLeft:25}}>Flyer</Typography>
          </Box>
          <Box sx={{ transform:'rotate(-90deg)',bgcolor:'indigo',width:0,marginLeft:1,MozMarginStart:60,zIndex:1 }}> <span className={styles.marca}>B</span> </Box>
          <Box sx={{ transform:'rotate(90deg)',bgcolor:'lightblue',width:0,marginTop:-139,marginLeft:-2,MozMarginEnd:50}}><span className={`${styles.marca} ${styles.templants}`}>D</span></Box>
          <Box sx={{mt:-20,ml:-58,}} className={styles.templantsCirculo}>
            <Avatar sx={{ bgcolor:'#f07e0d62',width:120,height:120, }}> </Avatar>
          </Box>
        </Box>

        <Box sx={{marginTop:-34,marginBottom:30,textAlign:'center',}} className={styles.templantsConteudo}>
          <Typography sx={{marginRight:25,bgColor:'red',marginBottom:5}}>Template</Typography>
          <Box component='img' src={AllImagens[0].src} sx={{width:118,height:118,marginLeft:-1}} />
          <Box component='img' src={AllImagens[1].src} sx={{width:118,height:118,marginLeft:5}} />
        </Box>
      </Box>
    </>
  );
};
