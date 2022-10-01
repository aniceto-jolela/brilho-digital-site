import { Box, Grid,useMediaQuery, useTheme } from "@mui/material"
import Avatar from '@mui/material/Avatar';

const AllImagens=[
    {id:0,src:'/img/fotos/fpp/IMG_2350.jpg'},
    {id:1,src:'/img/fotos/retrato/IMG_0697.jpg'},
    {id:2,src:'/img/fotos/fpp/IMG_2349.jpg'},
    {id:3,src:'/img/fotos/retrato/IMG_1728FB.jpg'},
    {id:3,src:'/img/fotos/fpp/IMG_2359.jpg'}
]

export const Fpp =()=>{

    const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <>
        <Box sx={{flexGrow:1, marginTop:15}}>
            <Grid container spacing={{xs:1, }} columns={{ xs: 4, sm: 12, md: 12 }} sx={{justifyContent:'center',}}>
                <Grid xs={12} sm={12} md={1}  sx={{ textAlign:'center',pt:4}}>
                    <Box component='img' src={AllImagens[0].src} sx={{width:100,height:100,padding:1,mt:3}} />
                    <Box component='img' src={AllImagens[1].src} sx={{width:100,height:100,padding:1,}} />
                </Grid>
                <Grid xs={12} sm={12} md={7}  sx={{ textAlign:'center',pt:4,zIndex:1}}>
                    <Box component='img' src={AllImagens[2].src} sx={{width:500,height:250,padding:1}} />
                </Grid>
                <Grid xs={12} sm={12} md={1}  sx={{ textAlign:'center',pt:4,zIndex:1}}>
                    <Box component='img' src={AllImagens[3].src} sx={{width:100,height:100,padding:1,mt:3}} />
                    <Box component='img' src={AllImagens[4].src} sx={{width:100,height:100,padding:1}} />
                </Grid>
            </Grid>
            <Box sx={{mt:-35,ml:smDown?40:90}}>
          <Avatar sx={{ bgcolor:'#f283051c',width:300,height:300, }}> </Avatar>
        </Box>
        </Box>
        </>
    )
}