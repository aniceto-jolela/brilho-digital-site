import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Head from "next/head";
import { CategoriaTitulo } from "components/global/categoria/categoria-titulo";
import { CategoriaDescricao } from "components/global/categoria/categoria-descricao";
import { CarrocelFoto } from "components/global/conteudo/carrocel-foto";
import { SelectedFoto } from "components/global/conteudo/selected-foto";

export function Artistica() {
  const AllImage = [
    {
      id: 1,
      modelo: "Tavares",
      estilo: "Radial",
      image: "/img/fotos/art/IMG_0841.jpg",
      width: 2848,
      height: 2848,
    },
    {
      id: 2,
      modelo: "Aniceto",
      estilo: "Parede de art",
      image: "/img/fotos/art/IMG_0472.jpg",
      width: 2834,
      height: 2848,
    },
    {
      id: 3,
      modelo: "Necaidy",
      estilo: "Radial",
      image: "/img/fotos/art/IMG_1674.jpg",
      width: 2848,
      height: 4272,
    },
    { id: 4, modelo: "Kessmar", estilo: "!", image: "/img/fotos/art/IMG_0489.jpg",width: 2848,height: 2848, },
    {
      id: 5,
      modelo: "Jacinto & Tavares",
      estilo: "Parede de Art",
      image: "/img/fotos/art/IMG_0826.jpg",
      width: 4272,
      height: 2848,
    },
    {
      id: 6,
      modelo: "Estrelinha",
      estilo: "Desfoque",
      image: "/img/fotos/art/IMG_0663.jpg",
      width: 2848,
      height: 4272,
    },
    {
      id: 7,
      modelo: "Necaidy",
      estilo: "Céu quente",
      image: "/img/fotos/art/IMG_1710FB.jpg",
      width: 2848,
      height: 2848,
    },
    {
      id: 8,
      modelo: "Jacinto & Tavares",
      estilo: "Parede de Art",
      image: "/img/fotos/art/IMG_0768.jpg",
      width: 2848,
      height: 2848,
    },
    {
      id: 9,
      modelo: "Dércio",
      estilo: "Fumo",
      image: "/img/fotos/art/IMG_1488ArtFB.jpg",
      width: 2848,
      height: 2848,
    },
    { id: 10, modelo: "!", estilo: "Anônimo", image: "/img/fotos/art/IMG_0843.jpg", width: 4272,height: 2848, },
    { id: 11, modelo: "Teia", estilo: "Tavares", image: "/img/fotos/art/IMG_0760.jpg",width: 2848,height: 2848, },
    { id: 12, modelo: "Wave", estilo: "Estrelinha", image: "/img/fotos/art/IMG_0567.jpg",width: 2279,height: 2848, },
    { id: 13, modelo: "Recorte", estilo: "Aniceto", image: "/img/fotos/art/IMG_0419Art.png",width: 2848,height: 2848, },
  ];

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [getNomeEstilo, setNomeEstilo] = useState<{
    modelo?: string;
    estilo?: string;
  }>({ modelo: AllImage[0].modelo, estilo: AllImage[0].estilo });
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
    estilo?: string
  ) => {
    setImagem({ src, id, naturalWidth,naturalHeight });
    setNomeEstilo({ modelo, estilo });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Art - BD</title>
      </Head>

      <CategoriaTitulo marginLeft={-14}>
        Fotografia fine art é a fotografia criada de acordo <br />
        com a visão do artista fotógrafo,
        <br />
        que utiliza o meio <br />
        para expressar algo que apenas,
        <br />
        vive em sua mente.
        <br />
        <br />
      </CategoriaTitulo>

      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ display: "flex", flexWrap: smDown ? "wrap" : "nowrap" }}
      >
        <CarrocelFoto titulo="Art" scrollbarTrackBackground="#1a1b19">
          {AllImage.map((item, codigo) => {
            return (
              <Box
                onClick={(e: any) =>
                  handledImagemSelected(
                    item.image,
                    item.id,
                    item.width,
                    item.height,
                    item.modelo,
                    item.estilo
                  )
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
          estilo={getNomeEstilo.estilo}
          imagem={getImagem}
          modalTitulo="Preçário provisório"
          modalDescricao="Fotografia Artistica cada 700kz."
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
          Como funciona as fotos Artísticas.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente escolhe o estilo da art que quer na sua foto.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - Pode escolher uma que já foi feita por nós, uma que viu em um local
          ou mesmo se tiver alguma em mente.
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
