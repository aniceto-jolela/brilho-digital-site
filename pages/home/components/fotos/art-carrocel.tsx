import { Box, Skeleton } from "@mui/material";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

interface ArtCarrocelProps {
  loading?: boolean;
}
//Máximo de imagens - 10
const images = [
  {
    label: "Aniceto Jolela – Recorte",
    imgPath: "/img/fotos/art/IMG_0419Art.png",
  },
  {
    label: "Kessmar Da Cruz – Flor",
    imgPath: "/img/fotos/art/IMG_0489.jpg",
  },
  {
    label: "AJJ – Wave",
    imgPath: "/img/fotos/art/Sem-titulo-11.png",
  },
  {
    label: "Joseane e Jacinto – Céu noturno",
    imgPath: "/img/fotos/art/IMG_0826.jpg",
  },
];
//Máximo de imagens - 3
const leftImagens = [
  { src: "/img/fotos/art/IMG_1488ArtFB.jpg" },
  { src: "/img/fotos/art/IMG_0768.jpg" },
  { src: "/img/fotos/art/IMG_0841.jpg" },
];

export const ArtCarrocel = (props: ArtCarrocelProps) => {
  const { loading = false } = props;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 1 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
        sx={{ justifyContent: "center" }}
      >
        <Grid xs={12} sm={12} md={2} sx={{ textAlign: "center", pt: 4 }}>
          {leftImagens.map((item, codigo) => (
            <Box
              key={codigo}
              component="img"
              src={item.src}
              sx={{
                width: 120,
                height: 120,
                backgroundColor: "#ffffff",
                padding: 1,
              }}
            />
          ))}
        </Grid>

        {loading ? (
          <Skeleton
            animation="wave"
            width={500}
            height={500}
            sx={{ marginTop: -5 }}
          />
        ) : (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ maxWidth: 500, flexGrow: 1, mt: -1, zIndex: 1 }}>
              <Paper
                square
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: 25,
                  justifyContent: "center",
                  bgcolor: "background.default",
                }}
              >
                <Typography>{images[activeStep].label}</Typography>
              </Paper>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((step, index) => (
                  <div key={index}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: 400,
                          display: "block",
                          maxWidth: 500,
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{ bgcolor: "#000000" }}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />

              <Box sx={{ mt: -15, ml: 50 }}>
                <Avatar
                  sx={{
                    bgcolor: "#000000ea",
                    width: 160,
                    height: 160,
                    zIndex: -1,
                  }}
                >
                  {" "}
                </Avatar>
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
