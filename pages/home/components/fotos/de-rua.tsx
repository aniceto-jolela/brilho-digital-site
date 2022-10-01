import { Box, Grid } from "@mui/material"

const AllImagens=[
    {id:0,src:'/img/fotos/de-rua/IMG_2043.jpg'},
    {id:1,src:'/img/fotos/de-rua/IMG_2326.jpg'},
    {id:2,src:'/img/fotos/de-rua/IMG_2327.jpg'},
    {id:3,src:'/img/fotos/de-rua/IMG_20444.jpg'}
]

export const DeRua =()=>{

    return(
        <>
        <Box sx={{flexGrow:1, marginTop:15}}>
            <Grid container spacing={{xs:1, }} columns={{ xs: 4, sm: 12, md: 12 }} sx={{justifyContent:'center'}}>
              <Grid xs={12} sm={12} md={4}>
                    <Grid xs={12} sm={12} md={12}  sx={{ textAlign:'center',pt:4}}>
                        <Box component='img' src={AllImagens[0].src} sx={{width:150,height:150,padding:1,borderTopLeftRadius:50,borderTopRightRadius:50}} />
                        <Box component='img' src={AllImagens[1].src} sx={{width:150,height:150,padding:1,borderTopRightRadius:50,borderTopLeftRadius:50}} />
                    </Grid>
                    <Grid xs={12} sm={12} md={12}  sx={{ textAlign:'center',pt:1}}>
                        <Box component='img' src={AllImagens[2].src} sx={{width:300,height:200,padding:1,borderBottomLeftRadius:100,borderBottomRightRadius:100}} />
                    </Grid>
              </Grid>

                <Grid item xs={12} sm={12} md={6} sx={{display:'flex',justifyContent:'center'}}>
                    <Box component='img' src={AllImagens[3].src} alt="Rua" sx={{width:400,height:400,backgroundColor:'#eca711ea'}} />
                </Grid>
            </Grid>
        </Box>
        </>
    )
}