import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Head from "next/head";
import { CategoriaTitulo } from "components/global/categoria/categoria-titulo";
import { CategoriaDescricao } from "components/global/categoria/categoria-descricao";
import { CarrocelFoto } from "components/global/conteudo/carrocel-foto";
import { SelectedFoto } from "components/global/conteudo/selected-foto";

export function Retrato() {
  const AllImage = [
    {
      id: 1,
      modelo: "Noronia",
      image: "/img/fotos/retrato/IMG_20733.jpg",
      width: 2848,
      height: 2848,
    },
    {
      id: 2,
      modelo: "Tavares",
      image: "/img/fotos/retrato/IMG_0801.jpg",
      width: 2848,
      height: 2848,
    },
    {
      id: 3,
      modelo: "Necaidy",
      image: "/img/fotos/retrato/IMG_1763FB.jpg",
      width: 2848,
      height: 2848,
    },
    { id: 4, modelo: "André", image: "/img/fotos/retrato/IMG_1728FB.jpg",width: 2848,height: 2848, },
    {
      id: 5,
      modelo: "liliana",
      image: "/img/fotos/retrato/IMG_0697.jpg",
      width: 2278,
      height: 2848,
    },
    { id: 6, modelo: "Aniceto", image: "/img/fotos/retrato/IMG_2722.jpg", width: 4272,height: 2848, },
    { id: 7, modelo: "!", image: "/img/fotos/retrato/IMG_1720.jpg",width: 2848,height: 2848, },
  ];

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [getNomeEstilo, setNomeEstilo] = useState<{
    modelo?: string;
  }>({ modelo: AllImage[0].modelo });
  const [getImagem, setImagem] = useState<{
    src: string;
    id: number;
    naturalWidth?: number;
    naturalHeight?: number;
  }>({ src: AllImage[0].image, id: AllImage[0].id, naturalWidth: AllImage[0].width,naturalHeight:AllImage[0].height });

  const handledImagemSelected = (
    src: string,
    id: number,
    naturalWidth: number,
    naturalHeight:number,
    modelo?: string,
  ) => {
    setImagem({ src, id, naturalWidth,naturalHeight });
    setNomeEstilo({ modelo });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Retrato - BD</title>
      </Head>

      <CategoriaTitulo marginLeft={-14}>
        Fotografia retrato, é um tipo de fotografia que <br />
        visa capturar a personalidade de uma pessoa ou grupo
        <br />
        de pessoas usando iluminação,cenários e poses eficazes. <br />
        Uma fotografia retrato
        <br />
        pode ser artística.
        <br />
        <br />
      </CategoriaTitulo>

      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ display: "flex", flexWrap: smDown ? "wrap" : "nowrap" }}
      >
        <CarrocelFoto titulo="Retrato" scrollbarTrackBackground="#b67cc1">
          {AllImage.map((item, codigo) => {
            return (
              <Box
                onClick={(e: any) =>
                  handledImagemSelected(item.image, item.id,item.width,item.height,item.modelo)
                }
                component="img"
                src={item.image}
                key={codigo}
                sx={{
                  width: 125,
                  height: 125,
                  padding: "1mm",
                  borderRadius: 10,
                  margin: smDown ? 1 : 0,
                  backgroundColor: getImagem.id === item.id ? "#b71a1a" : "",
                  cursor: "pointer",
                }}
              />
            );
          })}
        </CarrocelFoto>

        <SelectedFoto
          modelo={getNomeEstilo.modelo}
          imagem={getImagem}
          modalTitulo="Preçário provisório"
          modalDescricao="Fotografia Retrato cada 500kz."
          modeloText="Modelo:"
        >
          <Box
            component="span"
            sx={{
              backgroundColor: "#0000009f",
              color: "#fff",
              padding: "0px 4px",
              fontSize: 10,
              position: "absolute",
            }}
          >
            {" "}
            {getImagem.id} / {AllImage.length}{" "}
          </Box>
        </SelectedFoto>
      </Grid>

      <CategoriaDescricao>
        <Typography
          variant="h2"
          component="h2"
          fontSize={13}
          sx={{ color: "#b71a1a" }}
        >
          ATT.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          Como funciona as fotos Retratos.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - Fotos retratos são fotografadas somente no studio.
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          fontSize={13}
          sx={{ color: "#b71a1a", marginTop: 1, marginBottom: 1 }}
        >
          A foto só pode ser tirada com a nossa câmara.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          Para mais informações entre em contacto com a nossa equipe.
        </Typography>
      </CategoriaDescricao>
    </React.Fragment>
  );
}
