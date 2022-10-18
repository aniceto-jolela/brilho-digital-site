import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Head from "next/head";
import { CategoriaTitulo } from "components/global/categoria/categoria-titulo";
import { CategoriaDescricao } from "components/global/categoria/categoria-descricao";
import { CarrocelDesigner } from "components/global/conteudo/carrocel-designer";
import { ModalBasic } from "components/global/modal/modal-precario";

export function Template() {
  const AllImage = [
    {
      id: 1,
      modelo: "Creative TM",
      image: "/img/designers/template/1.jpg",
    },
    {
      id: 2,
      modelo: "Adminty",
      image: "/img/designers/template/2.png",
    },
    {
      id: 3,
      modelo: "Dashbord",
      image: "/img/designers/template/3.png",
    },
    { id: 4, modelo: "Star Admin", image: "/img/designers/template/4.jpg" },
  ];

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const responsivo = useMediaQuery(theme.breakpoints.down("md"));
  const [getNomeEstilo, setNomeEstilo] = useState<{
    modelo?: string;
  }>({ modelo: AllImage[0].modelo });
  const [getImagem, setImagem] = useState<{
    src: string;
    id: number;
  }>({ src: AllImage[0].image, id: AllImage[0].id });

  const handledImagemSelected = (src: string, id: number, modelo?: string) => {
    setImagem({ src, id });
    setNomeEstilo({ modelo });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Template - BD</title>
      </Head>

      <CategoriaTitulo marginLeft={-14}>
        Um template, também chamado de tema, <br />
        atribui ao site o aspecto visual e também
        <br />
        funcionalidades que otimizem a sua performance <br />
        Trata-se de um modelo
        <br />
        de layout que já está finalizado.
        <br />
        <br />
      </CategoriaTitulo>

      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ display: "flex", flexWrap: smDown ? "wrap" : "nowrap" }}
      >
        <CarrocelDesigner titulo="Template">
          {AllImage.map((item, codigo) => {
            return (
              <Box
                onClick={(e: any) =>
                  handledImagemSelected(item.image, item.id, item.modelo)
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

        <Box
          sx={{
            textAlign: "center",
            paddingTop: 15,
            width: "100%",
            zIndex: 0,
          }}
        >
          <Grid item xs={12} sm={12} md={10}>
            <Box
              component="span"
              sx={{
                backgroundColor: "#0000009f",
                color: "#ffffff",
                padding: "0px 4px",
                fontSize: 10,
                position: "absolute",
                zIndex:1
              }}
            >
              {getImagem.id} / {AllImage.length}
            </Box>

            <Button
              sx={{
                backgroundColor: "#ffffff9f",
                border: "2px solid red",
                borderRadius: 10,
                color: "#fff",
                padding: "0px 4px",
                fontSize: 18,
                position: "absolute",
                marginLeft: 23,
                marginTop: 26,
                width: 80,
                height: 30,
                zIndex: 1,
              }}
            >
              Clik
            </Button>
            <Box
              component="img"
              src={getImagem.src}
              sx={{
                width: 440,
                height: 440,
                filter: "brightness(0.2)",
              }}
            />

            <Box sx={{ justifyContent: "center", display: "flex" }}>
              <Box
                sx={{
                  textAlign: "center",
                  paddingTop: 1,
                  position: responsivo ? "static" : "absolute",
                  right: 60,
                  top: 550,
                  backgroundColor: responsivo ? "#454242" : "none",
                  width: responsivo ? 440 : "none",
                  color: responsivo ? "#fff" : "#000",
                }}
              >
                <Typography variant="h2" component="h2" fontSize={13}>
                  {getNomeEstilo.modelo}
                </Typography>
                <ModalBasic modalTitulo="Templante" modalDescricao="Preçario" />
              </Box>
            </Box>
          </Grid>
        </Box>
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
          Como funciona o Template.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente pode comprar um dos Templates disponível pelo site.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente nos informa sobre o seu projecto e ficaremos par e passo
          até terminar o Template.
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          fontSize={13}
          sx={{ color: "#b71a1a", marginTop: 1, marginBottom: 1 }}
        >
          O Template é acompanhado com uma documentação.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          Para mais informações entre em contacto com a nossa equipe.
        </Typography>
      </CategoriaDescricao>
    </React.Fragment>
  );
}
