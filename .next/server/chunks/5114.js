"use strict";
exports.id = 5114;
exports.ids = [5114];
exports.modules = {

/***/ 5114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Retrato": () => (/* binding */ Retrato)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_global_categoria_categoria_titulo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7193);
/* harmony import */ var components_global_categoria_categoria_descricao__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7178);
/* harmony import */ var components_global_conteudo_carrocel_foto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3538);
/* harmony import */ var components_global_conteudo_selected_foto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3717);








function Retrato() {
    const AllImage = [
        {
            id: 1,
            modelo: "Noronia",
            image: "/img/fotos/retrato/IMG_20733.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 2,
            modelo: "Tavares",
            image: "/img/fotos/retrato/IMG_0801.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 3,
            modelo: "Necaidy",
            image: "/img/fotos/retrato/IMG_1763FB.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 4,
            modelo: "Andr\xe9",
            image: "/img/fotos/retrato/IMG_1728FB.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 5,
            modelo: "liliana",
            image: "/img/fotos/retrato/IMG_0697.jpg",
            width: 2278,
            height: 2848
        },
        {
            id: 6,
            modelo: "Aniceto",
            image: "/img/fotos/retrato/IMG_2722.jpg",
            width: 4272,
            height: 2848
        },
        {
            id: 7,
            modelo: "!",
            image: "/img/fotos/retrato/IMG_1720.jpg",
            width: 2848,
            height: 2848
        }, 
    ];
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const smDown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("sm"));
    const { 0: getNomeEstilo , 1: setNomeEstilo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        modelo: AllImage[0].modelo
    });
    const { 0: getImagem , 1: setImagem  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        src: AllImage[0].image,
        id: AllImage[0].id,
        naturalWidth: AllImage[0].width,
        naturalHeight: AllImage[0].height
    });
    const handledImagemSelected = (src, id, naturalWidth, naturalHeight, modelo)=>{
        setImagem({
            src,
            id,
            naturalWidth,
            naturalHeight
        });
        setNomeEstilo({
            modelo
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Retrato - BD"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_global_categoria_categoria_titulo__WEBPACK_IMPORTED_MODULE_4__/* .CategoriaTitulo */ .$, {
                marginLeft: -14,
                children: [
                    "Fotografia retrato, \xe9 um tipo de fotografia que ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "visa capturar a personalidade de uma pessoa ou grupo",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "de pessoas usando ilumina\xe7\xe3o,cen\xe1rios e poses eficazes. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "Uma fotografia retrato",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "pode ser art\xedstica.",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                columns: {
                    xs: 12,
                    sm: 12,
                    md: 12
                },
                sx: {
                    display: "flex",
                    flexWrap: smDown ? "wrap" : "nowrap"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_global_conteudo_carrocel_foto__WEBPACK_IMPORTED_MODULE_6__/* .CarrocelFoto */ .W, {
                        titulo: "Retrato",
                        scrollbarTrackBackground: "#b67cc1",
                        children: AllImage.map((item, codigo)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                onClick: (e)=>handledImagemSelected(item.image, item.id, item.width, item.height, item.modelo),
                                component: "img",
                                src: item.image,
                                sx: {
                                    width: 125,
                                    height: 125,
                                    padding: "1mm",
                                    borderRadius: 10,
                                    margin: smDown ? 1 : 0,
                                    backgroundColor: getImagem.id === item.id ? "#b71a1a" : "",
                                    cursor: "pointer"
                                }
                            }, codigo);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_global_conteudo_selected_foto__WEBPACK_IMPORTED_MODULE_7__/* .SelectedFoto */ .m, {
                        modelo: getNomeEstilo.modelo,
                        imagem: getImagem,
                        modalTitulo: "Pre\xe7\xe1rio provis\xf3rio",
                        modalDescricao: "Fotografia Retrato cada 500kz.",
                        modeloText: "Modelo:",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            component: "span",
                            sx: {
                                backgroundColor: "#0000009f",
                                color: "#fff",
                                padding: "0px 4px",
                                fontSize: 10,
                                position: "absolute"
                            },
                            children: [
                                " ",
                                getImagem.id,
                                " / ",
                                AllImage.length,
                                " "
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_global_categoria_categoria_descricao__WEBPACK_IMPORTED_MODULE_5__/* .CategoriaDescricao */ .a, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        sx: {
                            color: "#b71a1a"
                        },
                        children: "ATT."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "Como funciona as fotos Retratos."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "- Fotos retratos s\xe3o fotografadas somente no studio."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        sx: {
                            color: "#b71a1a",
                            marginTop: 1,
                            marginBottom: 1
                        },
                        children: "A foto s\xf3 pode ser tirada com a nossa c\xe2mara."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "Para mais informa\xe7\xf5es entre em contacto com a nossa equipe."
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;