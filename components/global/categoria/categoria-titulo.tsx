import { Typography, useMediaQuery, useTheme } from "@mui/material";

type CategoriaTituloProps = {
  marginLeft?: number;
  children: React.ReactNode;
};

export const CategoriaTitulo = ({
  children,
  marginLeft,
}: CategoriaTituloProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Typography
      variant="h1"
      component="h1"
      fontSize={13}
      align="center"
      lineHeight={2}
      marginLeft={smDown ? marginLeft : 0}
    >
      {children}
    </Typography>
  );
};
