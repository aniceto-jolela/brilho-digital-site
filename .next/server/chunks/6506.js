"use strict";
exports.id = 6506;
exports.ids = [6506];
exports.modules = {

/***/ 6506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtCarrocel": () => (/* binding */ ArtCarrocel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8261);
/* harmony import */ var _mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7834);
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(547);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9980);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7930);
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_13__);














//Máximo de imagens - 10
const images = [
    {
        label: "Aniceto Jolela \u2013 Recorte",
        imgPath: "/img/fotos/art/IMG_0419Art.png"
    },
    {
        label: "Kessmar Da Cruz \u2013 Flor",
        imgPath: "/img/fotos/art/IMG_0489.jpg"
    },
    {
        label: "AJJ \u2013 Wave",
        imgPath: "/img/fotos/art/Sem-titulo-11.png"
    },
    {
        label: "Joseane e Jacinto \u2013 C\xe9u noturno",
        imgPath: "/img/fotos/art/IMG_0826.jpg"
    }, 
];
//Máximo de imagens - 3
const leftImagens = [
    {
        src: "/img/fotos/art/IMG_1488ArtFB.jpg"
    },
    {
        src: "/img/fotos/art/IMG_0768.jpg"
    },
    {
        src: "/img/fotos/art/IMG_0841.jpg"
    }, 
];
const ArtCarrocel = (props)=>{
    const { loading =false  } = props;
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_2__.useState(0);
    const maxSteps = images.length;
    const AutoPlaySwipeableViews = (0,react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_11__.autoPlay)((react_swipeable_views__WEBPACK_IMPORTED_MODULE_10___default()));
    const handleNext = ()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep + 1);
    };
    const handleBack = ()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep - 1);
    };
    const handleStepChange = (step)=>{
        setActiveStep(step);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            flexGrow: 1
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
            container: true,
            spacing: {
                xs: 2,
                md: 1
            },
            columns: {
                xs: 4,
                sm: 12,
                md: 12
            },
            sx: {
                justifyContent: "center"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
                    xs: 12,
                    sm: 12,
                    md: 2,
                    sx: {
                        textAlign: "center",
                        pt: 4
                    },
                    children: leftImagens.map((item, codigo)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            component: "img",
                            src: item.src,
                            sx: {
                                width: 120,
                                height: 120,
                                backgroundColor: "#ffffff",
                                padding: 1
                            }
                        }, codigo))
                }),
                loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                    animation: "wave",
                    width: 500,
                    height: 500,
                    sx: {
                        marginTop: -5
                    }
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12___default()), {
                    item: true,
                    xs: 12,
                    sm: 12,
                    md: 6,
                    sx: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            maxWidth: 500,
                            flexGrow: 1,
                            mt: -1,
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_5___default()), {
                                square: true,
                                elevation: 0,
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    height: 25,
                                    justifyContent: "center",
                                    bgcolor: "background.default"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    children: images[activeStep].label
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AutoPlaySwipeableViews, {
                                axis: theme.direction === "rtl" ? "x-reverse" : "x",
                                index: activeStep,
                                onChangeIndex: handleStepChange,
                                enableMouseEvents: true,
                                children: images.map((step, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: Math.abs(activeStep - index) <= 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            component: "img",
                                            sx: {
                                                height: 400,
                                                display: "block",
                                                maxWidth: 500,
                                                overflow: "hidden",
                                                width: "100%"
                                            },
                                            src: step.imgPath,
                                            alt: step.label
                                        }) : null
                                    }, index))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_4___default()), {
                                steps: maxSteps,
                                position: "static",
                                activeStep: activeStep,
                                sx: {
                                    bgcolor: "#000000"
                                },
                                nextButton: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    size: "small",
                                    onClick: handleNext,
                                    disabled: activeStep === maxSteps - 1,
                                    children: [
                                        "Next",
                                        theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9___default()), {})
                                    ]
                                }),
                                backButton: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    size: "small",
                                    onClick: handleBack,
                                    disabled: activeStep === 0,
                                    children: [
                                        theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_9___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                                        "Back"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    mt: -15,
                                    ml: 50
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_13___default()), {
                                    sx: {
                                        bgcolor: "#000000ea",
                                        width: 160,
                                        height: 160,
                                        zIndex: -1
                                    },
                                    children: " "
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};


/***/ })

};
;