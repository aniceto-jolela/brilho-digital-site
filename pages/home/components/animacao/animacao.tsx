import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from "/public/fotes/FontInter.module.css";
import Avatar from '@mui/material/Avatar';

const AllImagens=[
  {id:0,src:'/videos/ficcao/1.webm'},
  {id:1,src:'/videos/romance/love.mp4'},
  {id:1,src:'/videos/dedicatoria/dicas.mp4'}
]

export const Animacao = () => {
  
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <>
    
      <Box>
        <Grid
          container
          spacing={{ xs: 1 }}
          columns={{ xs: 8, sm: 12, md: 12 }}
          sx={{ justifyContent: "center",}}
        >
            <Grid xs={12} sm={4} md={4}  sx={{ textAlign:'center',pt:smDown?10:25,}} className={smDown?styles.animacaoLetraTopMobile:styles.animacaoLetraTop}>
                  <Typography >Ficção</Typography>
                  <video width={115} height={100}  autoPlay loop muted style={{backgroundColor:'#000000ea'}}>
                          <source src={AllImagens[0].src} type="video/mp4" />
                  </video>
            </Grid>
              <Grid xs={12} sm={8} md={6}  sx={{ textAlign:'center'}}>
                  <Box  sx={{ fontSize: 500,alignItems:'center',display:'flex',flexDirection:'column',}}   >
                    <Box sx={{ transform:'rotate(-90deg)',bgcolor:'indigo',width:0,MozMarginStart:75}}> <span className={`${styles.marca} ${styles.animacao}`}>B</span> </Box>
                    <Box sx={{ transform:'rotate(90deg)',bgcolor:'lightblue',width:0,marginTop:-124,marginLeft:-3,MozMarginEnd:35}}><span className={styles.marca}>D</span></Box>
                  </Box>
                  <Box sx={{marginTop:-44,}} className={styles.animacaoConteudo}>
                      <Box sx={{marginBottom:32}}>
                        <Typography  sx={{marginRight:24}}>Romance</Typography>
                        <Typography sx={{marginLeft:20,marginTop:-3,marginBottom:3}}>Dedicatória</Typography>
                        
                        <video width={120} height={85}  autoPlay loop muted style={{marginLeft:-15,backgroundColor:'#000000ea'}}>
                          <source src={AllImagens[1].src} type="video/mp4" />
                        </video>

                        <video width={120} height={85} autoPlay loop muted style={{marginLeft:55,backgroundColor:'#000000ea'}}>
                          <source src={AllImagens[2].src} type="video/mp4" />
                        </video>
                      </Box>
                  </Box>
              </Grid>
        </Grid>

        <Box  sx={{marginLeft:-10}}>
            <Avatar sx={{ bgcolor:'#73f00d4f',width:200,height:200, }}> </Avatar>
        </Box>
        <Box  sx={{display:'flex',justifyContent:'flex-end',marginRight:-10 }}>
            <Avatar sx={{ bgcolor:'#f0b30d4c',width:150,height:150, }}> </Avatar>
        </Box>
      </Box>
    </>
  );
};
