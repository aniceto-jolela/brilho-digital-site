import { Box, Grid } from "@mui/material"

const AllImagens=[
    {id:0,src:'/img/fotos/gif/IMG_0426.gif'},
    {id:1,src:'/img/fotos/gif/IMG_0760.gif'},
    {id:2,src:'/img/fotos/gif/IMG_0682.gif'},
]

export const Gif =()=>{


    return(
        <>
        <Box sx={{flexGrow:1, marginTop:15}}>
            <Grid container spacing={{xs:1, }} columns={{ xs: 8, sm: 12, md: 12 }} sx={{justifyContent:'center'}}>
                <Grid item xs={2} sm={2} md={2}  sx={{ textAlign:'center',pt:15}}>
                    <Box component='img' src={AllImagens[0].src} sx={{width:150,height:150,padding:1,borderRadius:30}} />
                </Grid>
                <Grid item xs={2} sm={2} md={2}  sx={{ textAlign:'center',pt:4}}>
                    <Box component='img' src={AllImagens[1].src} sx={{width:150,height:150,padding:1,borderRadius:30}} />
                </Grid>
                <Grid item xs={2} sm={2} md={2}  sx={{ textAlign:'center',pt:4}}>
                    <Box component='img' src={AllImagens[2].src} sx={{width:150,height:150,padding:1,borderRadius:30}} />
                </Grid>
            </Grid>
        </Box>
        </>
    )
}