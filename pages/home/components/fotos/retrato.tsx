import { Box, Grid } from "@mui/material"
import Avatar from '@mui/material/Avatar';

const AllImagens=[
    {id:0,src:'/img/fotos/retrato/IMG_1720.jpg'},
    {id:1,src:'/img/fotos/retrato/IMG_0697.jpg'},
    {id:2,src:'/img/fotos/retrato/IMG_1728FB.jpg'},
    {id:3,src:'/img/fotos/retrato/IMG_20733.jpg'},
    {id:3,src:'/img/fotos/retrato/IMG_0661.jpg'}
]

export const Retrato =()=>{

    return(
        <>
        <Box sx={{flexGrow:1, marginTop:15,}}>
            <Grid container spacing={{xs:1, }} columns={{ xs: 4, sm: 12, md: 12 }} sx={{justifyContent:'center'}}>
                <Grid xs={12} sm={12} md={2}  sx={{ textAlign:'center',pt:15}}>
                    <Box component='img' src={AllImagens[0].src} sx={{width:150,height:150,padding:1,borderRadius:10}} />
                    <Box component='img' src={AllImagens[1].src} sx={{width:150,height:150,padding:1,borderRadius:10}} />
                </Grid>
                <Grid xs={12} sm={12} md={2}  sx={{ textAlign:'center',pt:4}}>
                    <Box component='img' src={AllImagens[2].src} sx={{width:150,height:150,padding:1,borderRadius:10}} />
                    <Box component='img' src={AllImagens[3].src} sx={{width:150,height:150,padding:1,borderRadius:10}} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{display:'flex',justifyContent:'center',zIndex:1}}>
                    <Box component='img' src={AllImagens[4].src} sx={{width:440,height:540,backgroundColor:'#cf11ecea'}} />
                </Grid>
                <Box sx={{mt:-45,ml:100}}>
                    <Avatar sx={{ bgcolor:'#c305f2a3',width:240,height:240,zIndex:0 }}> </Avatar>
                </Box>
            </Grid>
        </Box>
        </>
    )
}