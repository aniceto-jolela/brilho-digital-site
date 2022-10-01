import { Box,useMediaQuery,useTheme } from "@mui/material"


export const Pages404=()=>{

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const responsivo = useMediaQuery(theme.breakpoints.down("md"));
    return(
        <>
        <title>404 ERROR Page</title>
            <Box sx={{textAlign:'center',backgroundColor:'white',marginTop:'-35px',marginBottom:'-7px'}}>
                <Box
                component="img"
                src='/img/404-error-dribbble-800x600.gif'
                width={smDown?400:responsivo?580:800}
                height={600}
                />
            </Box>
        </>
    )
}