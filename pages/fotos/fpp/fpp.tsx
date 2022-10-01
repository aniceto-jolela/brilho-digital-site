import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Head from "next/head";
import { CategoriaTitulo } from "components/global/categoria/categoria-titulo";
import { CategoriaDescricao } from "components/global/categoria/categoria-descricao";
import { CarrocelFoto } from "components/global/conteudo/carrocel-foto";
import { SelectedFoto } from "components/global/conteudo/selected-foto";

export function FPP() {
  const AllImage = [
    {
      id: 1,
      modelo: "Camaro",
      image: "/img/fotos/fpp/IMG_2349.jpg",
      width: 4272,
      height: 2848,
    },
    {
      id: 2,
      modelo: "!",
      image: "/img/fotos/fpp/IMG_2359.jpg",
      width: 4272,
      height: 2848,
    },
    {
      id: 3,
      modelo: "!",
      image: "/img/fotos/fpp/IMG_2350.jpg",
      width: 4272,
      height: 2848,
    },
  ];

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [getNomeEstilo, setNomeEstilo] = useState<{
    modelo?: string;
  }>({ modelo: AllImage[0].modelo });
  const [getImagem, setImagem] = useState<{
    src: string;
    id: number;
    naturalWidth: number,
    naturalHeight:number,
  }>({ src: AllImage[0].image, id: AllImage[0].id, naturalWidth: AllImage[0].width,naturalHeight:AllImage[0].height });

  const handledImagemSelected = (
    src: string,
    id: number,
    naturalWidth: number,
    naturalHeight:number,
    modelo?: string
  ) => {
    setImagem({ src, id, naturalWidth,naturalHeight });
    setNomeEstilo({ modelo });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Foto para os teus projectos - BD</title>
      </Head>

      <CategoriaTitulo marginLeft={-14}>
        FPP (Foto para os teus projectos) são fotos que <br />
        podes utilizar nos teus projectos; as ilustradas
        <br />
        no site são alguns exemplos delas. É só entrares em contacto <br />
        com a nossa equipe, descrevendo a FPP que desejas,
        <br />
        e chegará até sí com boa qualidade.
        <br />
        <br />
      </CategoriaTitulo>

      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ display: "flex", flexWrap: smDown ? "wrap" : "nowrap" }}
      >
        <CarrocelFoto titulo="FPP" scrollbarTrackBackground="#e34438">
          {AllImage.map((item, codigo) => {
            return (
              <Box
                onClick={(e: any) =>
                  handledImagemSelected(item.image, item.id, item.width,item.height, item.modelo)
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
                  backgroundColor: getImagem.id === item.id ? "#eae6e6" : "",
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
          modalDescricao="Fotografia FPP (Foto para os teus projectos) cada 700kz."
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
          Como funciona as fotos FPP.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente nos informa o tipo de foto que quer para o seu projecto.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - Se nós tivermos as fotos que ele quer, nós enviaremos.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - Caso não tivermos, iremos de fotografa-las.
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          fontSize={13}
          sx={{ marginTop: 1, marginBottom: 1 }}
        >
          <span style={{ color: "#b71a1a" }}>Obs.:</span> As fotos FPP são
          compradas.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          Para mais informações entre em contacto com a nossa equipe.
        </Typography>
      </CategoriaDescricao>
    </React.Fragment>
  );
}
