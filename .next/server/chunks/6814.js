"use strict";
exports.id = 6814;
exports.ids = [6814];
exports.modules = {

/***/ 6814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartaoVisita": () => (/* binding */ CartaoVisita)
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
/* harmony import */ var components_global_conteudo_carrocel_designer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3374);
/* harmony import */ var components_global_modal_modal_precario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6863);
/* harmony import */ var _public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3729);
/* harmony import */ var _public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_8__);









function CartaoVisita() {
    const AllImage = [
        {
            id: 1,
            modelo: "Design",
            image: "/img/designers/cartao-visita/1.jpg",
            imag2: "/img/designers/cartao-visita/2.jpg",
            width: 616,
            height: 350
        },
        {
            id: 2,
            modelo: "Tavares",
            image: "/img/designers/cartao-visita/3.jpg",
            imag2: "/img/designers/cartao-visita/3.jpg",
            width: 356,
            height: 233
        },
        {
            id: 3,
            modelo: "Necaidy",
            image: "/img/designers/cartao-visita/4.jpg",
            imag2: "/img/designers/cartao-visita/4.jpg",
            width: 635,
            height: 365
        },
        {
            id: 4,
            modelo: "liliana",
            image: "/img/designers/cartao-visita/5.jpg",
            imag2: "/img/designers/cartao-visita/5.jpg",
            width: 750,
            height: 395
        }, 
    ];
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const smDown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("sm"));
    const responsivo = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("md"));
    const lgDown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("lg"));
    const { 0: getNomeEstilo , 1: setNomeEstilo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        modelo: AllImage[0].modelo
    });
    const { 0: getImagem , 1: setImagem  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        src: AllImage[0].image,
        src2: AllImage[0].imag2,
        id: AllImage[0].id,
        naturalWidth: AllImage[0].width,
        naturalHeight: AllImage[0].height
    });
    const handledImagemSelected = (src, id, naturalWidth, naturalHeight, modelo, src2)=>{
        setImagem({
            src,
            src2,
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
                    children: "Cart\xe3o De Visita - BD"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_global_categoria_categoria_titulo__WEBPACK_IMPORTED_MODULE_4__/* .CategoriaTitulo */ .$, {
                marginLeft: -14,
                children: [
                    "Cart\xe3o de visita \xe9, num sentido gen\xe9rico, ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "um pequeno cart\xe3o contendo",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "os dados de contacto ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "de pessoas",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "ou empresas.",
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_global_conteudo_carrocel_designer__WEBPACK_IMPORTED_MODULE_6__/* .CarrocelDesigner */ .i, {
                        titulo: "Cart\xe3o De Visita",
                        children: AllImage.map((item, codigo)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                onClick: (e)=>handledImagemSelected(item.image, item.id, item.width, item.height, item.modelo, item.imag2),
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            textAlign: "center",
                            paddingTop: 5,
                            width: "100%",
                            zIndex: 0
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            xs: 12,
                            sm: 12,
                            md: 10,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    component: "span",
                                    sx: {
                                        backgroundColor: "#0000009f",
                                        color: "#fff",
                                        padding: "0px 4px",
                                        fontSize: 10,
                                        position: "absolute"
                                    },
                                    children: [
                                        getImagem.id,
                                        " / ",
                                        AllImage.length
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    component: "img",
                                    src: getImagem.src,
                                    sx: {
                                        width: 485,
                                        height: 300,
                                        marginBottom: 5
                                    },
                                    className: lgDown ? (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_8___default().cvMdSelecionado) : (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_8___default().cvLgSelecionado)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    component: "img",
                                    src: getImagem.src2,
                                    sx: {
                                        width: 485,
                                        height: 300
                                    },
                                    className: lgDown ? (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_8___default().cvMdSelecionado) : (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_8___default().cvLgSelecionado)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        justifyContent: "center",
                                        display: "flex"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        sx: {
                                            textAlign: "center",
                                            paddingTop: 1,
                                            position: responsivo ? "static" : "absolute",
                                            right: 60,
                                            top: 550,
                                            backgroundColor: responsivo ? "#454242" : "none",
                                            width: responsivo ? 484 : "none",
                                            color: responsivo ? "#fff" : "#000"
                                        },
                                        className: `${(_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_8___default().cvLegenda)} ${(_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_8___default().cvLegendaRight)}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                variant: "h2",
                                                component: "h2",
                                                fontSize: 13,
                                                children: getNomeEstilo.modelo
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                variant: "h3",
                                                component: "h3",
                                                fontSize: 9,
                                                children: [
                                                    getImagem.naturalWidth,
                                                    " x ",
                                                    getImagem.naturalHeight
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_global_modal_modal_precario__WEBPACK_IMPORTED_MODULE_7__/* .ModalBasic */ .S, {
                                                modalTitulo: "Cart\xe3o De Visita",
                                                modalDescricao: "Pre\xe7ario"
                                            })
                                        ]
                                    })
                                })
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
                        children: "Como funciona o Cart\xe3o De Visita."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "- O cliente pode comprar um dos Cart\xf5es dispon\xedvel pelo site."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "- O cliente nos informa sobre os dados do cart\xe3o de visita."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        sx: {
                            marginTop: 2
                        },
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