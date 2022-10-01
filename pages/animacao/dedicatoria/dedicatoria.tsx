import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Head from "next/head";
import { CategoriaTitulo } from "components/global/categoria/categoria-titulo";
import { CategoriaDescricao } from "components/global/categoria/categoria-descricao";
import { CarrocelAnimacao } from "components/global/conteudo/carrocel-animacao";
import { SelectedAnimacao } from "components/global/conteudo/selected-animacao";

export function Dedicatoria() {
  const AllVideos = [
    {
      id: 1,
      modelo: "Love",
      video: "/videos/dedicatoria/dicas.mp4",
    },
    {
      id: 2,
      modelo: "Tavares",
      video: "/videos/dedicatoria/2.mp4",
    },
  ];

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [getNomeEstilo, setNomeEstilo] = useState<{
    modelo?: string;
  }>({ modelo: AllVideos[0].modelo });
  const [getVideo, setVideo] = useState<{
    src: string;
    id: number;
  }>({ src: AllVideos[0].video, id: AllVideos[0].id });

  const handledImagemSelected = (src: string, id: number, modelo?: string) => {
    setVideo({ src, id });
    setNomeEstilo({ modelo });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Dedicatoria - BD</title>
      </Head>

      <CategoriaTitulo marginLeft={-14}>
        Uma dedicatória <br />
        é a expressão de uma
        <br />
        ligação amigável ou <br />
        agradecimanto do autor
        <br />
        a outra pessoa.
        <br />
        <br />
      </CategoriaTitulo>

      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ display: "flex", flexWrap: smDown ? "wrap" : "nowrap" }}
      >
        <CarrocelAnimacao titulo="Dedicatória">
          {AllVideos.map((item, codigo) => {
            return (
              <Box
                onClick={() =>
                  handledImagemSelected(item.video, item.id, item.modelo)
                }
                key={codigo}
                width={125}
                height={125}
                component="video"
                autoPlay
                muted
                style={{
                  padding: "1mm",
                  borderRadius: 10,
                  margin: smDown ? 1 : 0,
                  backgroundColor: getVideo.id === item.id ? "#b71a1a" : "",
                  cursor: "pointer",
                }}
                src={item.video}
              />
            );
          })}
        </CarrocelAnimacao>

        <SelectedAnimacao
          modelo={getNomeEstilo.modelo}
          video={getVideo}
          modalTitulo="Dedicatória"
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
            {getVideo.id} / {AllVideos.length}
          </Box>
        </SelectedAnimacao>
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
          Como funciona o vídeo de Dedicatória.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente pode escolher um dos modelos disponível no site.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente nos informa sobre o tema da dedicatória.
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          fontSize={13}
          sx={{ color: "#b71a1a", marginTop: 1, marginBottom: 1 }}
        >
          O vídeo antes da edição é feito por nós ou o cliente pode trazer um já
          feito, mas desde que tenha qualidade.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          Para mais informações entre em contacto com a nossa equipe.
        </Typography>
      </CategoriaDescricao>
    </React.Fragment>
  );
}
