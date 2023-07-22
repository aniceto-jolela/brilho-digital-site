"use strict";
exports.id = 2382;
exports.ids = [2382];
exports.modules = {

/***/ 2382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Artistica": () => (/* binding */ Artistica)
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








function Artistica() {
    const AllImage = [
        {
            id: 1,
            modelo: "Tavares",
            estilo: "Radial",
            image: "/img/fotos/art/IMG_0841.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 2,
            modelo: "Aniceto",
            estilo: "Parede de art",
            image: "/img/fotos/art/IMG_0472.jpg",
            width: 2834,
            height: 2848
        },
        {
            id: 3,
            modelo: "Necaidy",
            estilo: "Radial",
            image: "/img/fotos/art/IMG_1674.jpg",
            width: 2848,
            height: 4272
        },
        {
            id: 4,
            modelo: "Kessmar",
            estilo: "!",
            image: "/img/fotos/art/IMG_0489.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 5,
            modelo: "Jacinto & Tavares",
            estilo: "Parede de Art",
            image: "/img/fotos/art/IMG_0826.jpg",
            width: 4272,
            height: 2848
        },
        {
            id: 6,
            modelo: "Estrelinha",
            estilo: "Desfoque",
            image: "/img/fotos/art/IMG_0663.jpg",
            width: 2848,
            height: 4272
        },
        {
            id: 7,
            modelo: "Necaidy",
            estilo: "C\xe9u quente",
            image: "/img/fotos/art/IMG_1710FB.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 8,
            modelo: "Jacinto & Tavares",
            estilo: "Parede de Art",
            image: "/img/fotos/art/IMG_0768.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 9,
            modelo: "D\xe9rcio",
            estilo: "Fumo",
            image: "/img/fotos/art/IMG_1488ArtFB.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 10,
            modelo: "!",
            estilo: "An\xf4nimo",
            image: "/img/fotos/art/IMG_0843.jpg",
            width: 4272,
            height: 2848
        },
        {
            id: 11,
            modelo: "Teia",
            estilo: "Tavares",
            image: "/img/fotos/art/IMG_0760.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 12,
            modelo: "Wave",
            estilo: "Estrelinha",
            image: "/img/fotos/art/IMG_0567.jpg",
            width: 2279,
            height: 2848
        },
        {
            id: 13,
            modelo: "Recorte",
            estilo: "Aniceto",
            image: "/img/fotos/art/IMG_0419Art.png",
            width: 2848,
            height: 2848
        }, 
    ];
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const smDown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("sm"));
    const { 0: getNomeEstilo , 1: setNomeEstilo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        modelo: AllImage[0].modelo,
        estilo: AllImage[0].estilo
    });
    const { 0: getImagem , 1: setImagem  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        src: AllImage[0].image,
        id: AllImage[0].id,
        naturalWidth: AllImage[0].width,
        naturalHeight: AllImage[0].height
    });
    const handledImagemSelected = (src, id, naturalWidth, naturalHeight, modelo, estilo)=>{
        setImagem({
            src,
            id,
            naturalWidth,
            naturalHeight
        });
        setNomeEstilo({
            modelo,
            estilo
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Art - BD"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_global_categoria_categoria_titulo__WEBPACK_IMPORTED_MODULE_4__/* .CategoriaTitulo */ .$, {
                marginLeft: -14,
                children: [
                    "Fotografia fine art \xe9 a fotografia criada de acordo ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "com a vis\xe3o do artista fot\xf3grafo,",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "que utiliza o meio ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "para expressar algo que apenas,",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "vive em sua mente.",
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
                        titulo: "Art",
                        scrollbarTrackBackground: "#1a1b19",
                        children: AllImage.map((item, codigo)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                onClick: (e)=>handledImagemSelected(item.image, item.id, item.width, item.height, item.modelo, item.estilo),
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
                        estilo: getNomeEstilo.estilo,
                        imagem: getImagem,
                        modalTitulo: "Pre\xe7\xe1rio provis\xf3rio",
                        modalDescricao: "Fotografia Artistica cada 700kz.",
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
                        children: "Como funciona as fotos Art\xedsticas."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "- O cliente escolhe o estilo da art que quer na sua foto."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "- Pode escolher uma que j\xe1 foi feita por n\xf3s, uma que viu em um local ou mesmo se tiver alguma em mente."
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
                        children: "A foto pode ser tirada por n\xf3s ou o cliente vir com uma desde que tenha qualidade."
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