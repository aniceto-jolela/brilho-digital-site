import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Head from "next/head";
import { CategoriaTitulo } from "components/global/categoria/categoria-titulo";
import { CategoriaDescricao } from "components/global/categoria/categoria-descricao";
import { CarrocelDesigner } from "components/global/conteudo/carrocel-designer";
import { SelectedDesigner } from "components/global/conteudo/selected-designer";

export function Flyer() {
  const AllImage = [
    {
      id: 1,
      modelo: "Nossa Angola",
      image: "/img/designers/flyer/2.jpg",
      width: 1349,
      height: 1687,
    },
    {
      id: 2,
      modelo: "Dia da África",
      image: "/img/designers/flyer/1.jpg",
      width: 1440,
      height: 1440,
    },
    {
      id: 3,
      modelo: "Mukuolua",
      image: "/img/designers/flyer/3.jpg",
      width: 1080,
      height: 1080,
    },
    { id: 4, modelo: "Março Mulher", image: "/img/designers/flyer/4.jpg",width: 640,height: 640, },
    { id: 5, modelo: "Dia da paz", image: "/img/designers/flyer/5.jpg",width: 1344,height: 1673, },
    { id: 6, modelo: "Aniceto", image: "/img/designers/flyer/6.jpg",width: 640,height: 640, }
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
    naturalHeight: number,
    modelo?: string,
  ) => {
    setImagem({ src, id, naturalWidth,naturalHeight });
    setNomeEstilo({ modelo });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Flyer - BD</title>
      </Head>

      <CategoriaTitulo marginLeft={-14}>
        Flyer é um pequeno anúncio <br />
        impresso em papel
        <br />
        de maior gramatura e que <br />
        contém informações sobre
        <br />
        determinada empresa.
        <br />
        <br />
      </CategoriaTitulo>

      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ display: "flex", flexWrap: smDown ? "wrap" : "nowrap" }}
      >
        <CarrocelDesigner titulo="Flyer">
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
        </CarrocelDesigner>

        <SelectedDesigner
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
        </SelectedDesigner>
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
          Como funciona o Flyer.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente pode comprar um dos Flyer disponível pelo site.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente nos informa sobre os dados do flyer.
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          fontSize={13}
          sx={{ marginTop: 2 }}
        >
          Para mais informações entre em contacto com a nossa equipe.
        </Typography>
      </CategoriaDescricao>
    </React.Fragment>
  );
}
