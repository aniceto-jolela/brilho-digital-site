import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Head from "next/head";
import { CategoriaTitulo } from "components/global/categoria/categoria-titulo";
import { CategoriaDescricao } from "components/global/categoria/categoria-descricao";
import { CarrocelFoto } from "components/global/conteudo/carrocel-foto";
import { SelectedFoto } from "components/global/conteudo/selected-foto";

export function Gif() {
  const AllImage = [
    {
      id: 1,
      modelo: "Sliced",
      image: "/img/fotos/gif/IMG_0426.gif",
      width: 2848,
      height: 2848,
    },
    {
      id: 2,
      modelo: "Sliced",
      image: "/img/fotos/gif/IMG_0760.gif",
      width: 2848,
      height: 2848,
    },
    {
      id: 3,
      modelo: "!",
      image: "/img/fotos/gif/IMG_0682.gif",
      width: 2848,
      height: 2848,
    },
    { id: 4, modelo: "!", image: "/img/fotos/gif/IMG_2067.gif",width: 2848,height: 2848, },
    {
      id: 5,
      modelo: "Sliced",
      image: "/img/fotos/gif/IMG_0535.png",
      width: 2848,
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
        <title>Gif - BD</title>
      </Head>

      <CategoriaTitulo marginLeft={-14}>
        GIFs são sequências de fotos <br />
        para passar uma mensagem
        <br />
        ou cortes de um vídeo que são passados <br />
        sem o recurso
        <br />
        do áudio.
        <br />
        <br />
      </CategoriaTitulo>

      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ display: "flex", flexWrap: smDown ? "wrap" : "nowrap" }}
      >
        <CarrocelFoto titulo="Gif" scrollbarTrackBackground="#9dc970">
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
          modalDescricao="Fotografia Artistica cada 700kz."
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
          Como funciona as fotos Gifs.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente escolhe as fotos que deseja animar (por em movimento).
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          fontSize={13}
          sx={{ color: "#b71a1a", marginTop: 1, marginBottom: 1 }}
        >
          A foto pode ser tirada por nós ou o cliente vir com uma desde que
          tenha qualidade.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          Para mais informações entre em contacto com a nossa equipe.
        </Typography>
      </CategoriaDescricao>
    </React.Fragment>
  );
}
