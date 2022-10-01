import { Box } from "@mui/material";

type CategoriaDescricaoProps = {
  children: React.ReactNode;
};

export const CategoriaDescricao=({children}:CategoriaDescricaoProps)=> {
  return (
    <Box
      sx={{
        marginBottom: 8,
        marginTop: 5,
        display: "flex",
        justifyContent: "center",
        marginLeft: 2,
      }}
      component="div"
    >
      <Box component={"div"}>{children}</Box>
    </Box>
  );
};
