import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Head from "next/head";
import { CategoriaTitulo } from "components/global/categoria/categoria-titulo";
import { CategoriaDescricao } from "components/global/categoria/categoria-descricao";
import { CarrocelDesigner } from "components/global/conteudo/carrocel-designer";
import { SelectedDesigner } from "components/global/conteudo/selected-designer";

export function Branding() {
  const AllImage = [
    {
      id: 1,
      modelo: "Mundo T",
      image: "/img/designers/branding/1.jpg",
      width: 1080,
      height: 1080,
    },
    {
      id: 2,
      modelo: "RN",
      image: "/img/designers/branding/2.jpg",
      width: 1440,
      height: 1440,
    },
    {
      id: 3,
      modelo: "RN",
      image: "/img/designers/branding/3.jpg",
      width: 1440,
      height: 1440,
    },
    { id: 4, modelo: "RN", image: "/img/designers/branding/4.jpg",width: 1440,height: 1440, },
    {
      id: 5,
      modelo: "RN",
      image: "/img/designers/branding/5.jpg",
      width: 1440,
      height: 1440,
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
    setImagem({ src, id, naturalWidth, naturalHeight });
    setNomeEstilo({ modelo });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Branding - BD</title>
      </Head>

      <CategoriaTitulo marginLeft={-14}>
        Um branding, marca ou simplemente logo, <br />
        é um conjunto formado por duas ou
        <br />
        mais letras fundidas em um só tipo, compondo uma<br />
        sigla. Essa peça de design identifica
        <br />
        ou represente uma entidade.
        <br />
        <br />
      </CategoriaTitulo>

      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ display: "flex", flexWrap: smDown ? "wrap" : "nowrap" }}
      >
        <CarrocelDesigner titulo="Branding" >
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
          Como funciona o Branding.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente pode comprar um dos Branding disponível pelo site.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente nos informa sobre o seu projecto e nós ficaremos par e passo  até terminar o Branding.
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          fontSize={13}
          sx={{ color: "#b71a1a", marginTop: 1, marginBottom: 1 }}
        >
          O Branding é acompanhado com uma documentação.
        </Typography>
 
        <Typography variant="h2" component="h2" fontSize={13} >
          Para mais informações entre em contacto com a nossa equipe.
        </Typography>
      </CategoriaDescricao>
    </React.Fragment>
  );
}
