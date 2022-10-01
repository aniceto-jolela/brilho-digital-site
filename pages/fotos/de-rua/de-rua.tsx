import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Head from "next/head";
import { CategoriaTitulo } from "components/global/categoria/categoria-titulo";
import { CategoriaDescricao } from "components/global/categoria/categoria-descricao";
import { CarrocelFoto } from "components/global/conteudo/carrocel-foto";
import { SelectedFoto } from "components/global/conteudo/selected-foto";

export function DeRua() {
  const AllImage = [
    {
      id: 1,
      modelo: "Baía",
      image: "/img/fotos/de-rua/IMG_0728.jpg",
      width: 2848,
      height: 2848,
    },
    {
      id: 2,
      modelo: "Alvalade",
      image: "/img/fotos/de-rua/IMG_2326.jpg",
      width: 4272,
      height: 2848,
    },
    {
      id: 3,
      modelo: "Baía",
      image: "/img/fotos/de-rua/IMG_0836.jpg",
      width: 2848,
      height: 2848,
    },
    { id: 4, modelo: "Alvalade", image: "/img/fotos/de-rua/IMG_20444.jpg",width: 2848,height: 2848, },
    {
      id: 5,
      modelo: "Alvalade",
      image: "/img/fotos/de-rua/IMG_2327.jpg",
      width: 4272,
      height: 2848,
    },
    { id: 6, modelo: "Alvalade", image: "/img/fotos/de-rua/IMG_2043.jpg",width: 2848,height: 3560, },
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
    modelo?: string
  ) => {
    setImagem({ src, id, naturalWidth,naturalHeight });
    setNomeEstilo({ modelo });
  };

  return (
    <React.Fragment>
      <Head>
        <title>De rua - BD</title>
      </Head>

      <CategoriaTitulo marginLeft={-14}>
        A fotografia de rua, também chamada às vezes <br />
        de fotografia espontânea, é a fotografia com o objetivo
        <br />
        de expressão ou investigação artística, <br />
        feita através de encontros não programados
        <br />
        e aleatórios em locais públicos
        <br />
        <br />
      </CategoriaTitulo>

      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ display: "flex", flexWrap: smDown ? "wrap" : "nowrap" }}
      >
        <CarrocelFoto titulo="De rua" scrollbarTrackBackground="#e78d48">
          {AllImage.map((item, codigo) => {
            return (
              <Box
                onClick={(e: any) =>
                  handledImagemSelected(item.image, item.id,item.width,item.height, item.modelo)
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
          modalDescricao="Fotografia De Rua cada 600kz."
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
          Como funciona as fotos De Rua.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente escolhe o local que vai ser fotografado ou podemos
          sugeri-lo.
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          fontSize={13}
          sx={{ marginTop: 1 }}
        >
          Para mais informações entre em contacto com a nossa equipe.
        </Typography>
      </CategoriaDescricao>
    </React.Fragment>
  );
}
