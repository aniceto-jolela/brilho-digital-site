import {
  Box,
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
import styles from "/public/fotes/FontInter.module.css";

export function CartaoVisita() {
  const AllImage = [
    {
      id: 1,
      modelo: "Design",
      image: "/img/designers/cartao-visita/1.jpg",
      imag2: "/img/designers/cartao-visita/2.jpg",
    },
    {
      id: 2,
      modelo: "Tavares",
      image: "/img/designers/cartao-visita/3.jpg",
      imag2: "/img/designers/cartao-visita/3.jpg",
    },
    {
      id: 3,
      modelo: "Necaidy",
      image: "/img/designers/cartao-visita/4.jpg",
      imag2: "/img/designers/cartao-visita/4.jpg",
    },
    {
      id: 4,
      modelo: "liliana",
      image: "/img/designers/cartao-visita/5.jpg",
      imag2: "/img/designers/cartao-visita/5.jpg",
    },
  ];

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const responsivo = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const [getNomeEstilo, setNomeEstilo] = useState<{
    modelo?: string;
  }>({ modelo: AllImage[0].modelo });
  const [getImagem, setImagem] = useState<{
    src: string;
    src2?: string;
    id: number;
  }>({ src: AllImage[0].image,src2: AllImage[0].imag2, id: AllImage[0].id });

  const handledImagemSelected = (src: string, id: number, modelo?: string,src2?: string) => {
    setImagem({ src,src2, id });
    setNomeEstilo({ modelo });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Cartão De Visita - BD</title>
      </Head>

      <CategoriaTitulo marginLeft={-14}>
        Cartão de visita é, num sentido genérico, <br />
        um pequeno cartão contendo
        <br />
        os dados de contacto <br />
        de pessoas
        <br />
        ou empresas.
        <br />
        <br />
      </CategoriaTitulo>

      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ display: "flex", flexWrap: smDown ? "wrap" : "nowrap" }}
      >
        <CarrocelDesigner titulo="Cartão De Visita">
          {AllImage.map((item, codigo) => {
            return (
              <Box
                onClick={(e: any) =>
                  handledImagemSelected(item.image, item.id, item.modelo,item.imag2)
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
            paddingTop: 5,
            width: "100%",
            zIndex: 0,
          }}
        >
          <Grid item xs={12} sm={12} md={10}>
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
              {getImagem.id} / {AllImage.length}
            </Box>

          
            <Box
              component="img"
              src={getImagem.src}
              sx={{
                width: 485,
                height: 300,
                marginBottom:5
              }}
              className={lgDown?styles.cvMdSelecionado:styles.cvLgSelecionado}
            />
            <Box
              component="img"
              src={getImagem.src2}
              sx={{
                width: 485,
                height: 300,
              }}
              className={lgDown?styles.cvMdSelecionado:styles.cvLgSelecionado}
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
                  width: responsivo ? 484 : "none",
                  color: responsivo ? "#fff" : "#000",
                }}
                className={`${styles.cvLegenda} ${styles.cvLegendaRight}`}
              >
                <Typography variant="h2" component="h2" fontSize={13}>
                  {getNomeEstilo.modelo}
                </Typography>
                <ModalBasic modalTitulo="Cartão De Visita" modalDescricao="Preçario" />
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
          Como funciona o Cartão De Visita.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente pode comprar um dos Cartões disponível pelo site.
        </Typography>
        <Typography variant="h2" component="h2" fontSize={13}>
          - O cliente nos informa sobre os dados do cartão de visita.
        </Typography>
   
        <Typography variant="h2" component="h2" fontSize={13} sx={{  marginTop: 2 }}>
          Para mais informações entre em contacto com a nossa equipe.
        </Typography>
      </CategoriaDescricao>
    </React.Fragment>
  );
}
