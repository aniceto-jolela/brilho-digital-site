"use strict";
exports.id = 9555;
exports.ids = [9555];
exports.modules = {

/***/ 9555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dedicatoria": () => (/* binding */ Dedicatoria)
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
/* harmony import */ var components_global_conteudo_carrocel_animacao__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4082);
/* harmony import */ var components_global_conteudo_selected_animacao__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5135);








function Dedicatoria() {
    const AllVideos = [
        {
            id: 1,
            modelo: "Love",
            video: "/videos/dedicatoria/dicas.mp4"
        },
        {
            id: 2,
            modelo: "Tavares",
            video: "/videos/dedicatoria/2.mp4"
        }, 
    ];
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const smDown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("sm"));
    const { 0: getNomeEstilo , 1: setNomeEstilo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        modelo: AllVideos[0].modelo
    });
    const { 0: getVideo , 1: setVideo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        src: AllVideos[0].video,
        id: AllVideos[0].id
    });
    const handledImagemSelected = (src, id, modelo)=>{
        setVideo({
            src,
            id
        });
        setNomeEstilo({
            modelo
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Dedicatoria - BD"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_global_categoria_categoria_titulo__WEBPACK_IMPORTED_MODULE_4__/* .CategoriaTitulo */ .$, {
                marginLeft: -14,
                children: [
                    "Uma dedicat\xf3ria ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "\xe9 a express\xe3o de uma",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "liga\xe7\xe3o amig\xe1vel ou ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "agradecimanto do autor",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "a outra pessoa.",
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_global_conteudo_carrocel_animacao__WEBPACK_IMPORTED_MODULE_6__/* .CarrocelAnimacao */ .Z, {
                        titulo: "Dedicat\xf3ria",
                        children: AllVideos.map((item, codigo)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                onClick: ()=>handledImagemSelected(item.video, item.id, item.modelo),
                                width: 125,
                                height: 125,
                                component: "video",
                                autoPlay: true,
                                muted: true,
                                style: {
                                    padding: "1mm",
                                    borderRadius: 10,
                                    margin: smDown ? 1 : 0,
                                    backgroundColor: getVideo.id === item.id ? "#b71a1a" : "",
                                    cursor: "pointer"
                                },
                                src: item.video
                            }, codigo);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_global_conteudo_selected_animacao__WEBPACK_IMPORTED_MODULE_7__/* .SelectedAnimacao */ .I, {
                        modelo: getNomeEstilo.modelo,
                        video: getVideo,
                        modalTitulo: "Dedicat\xf3ria",
                        modalDescricao: "Dedicat\xf3ria cada [...]kz.",
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
                                getVideo.id,
                                " / ",
                                AllVideos.length
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
                        children: "Como funciona o v\xeddeo de Dedicat\xf3ria."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "- O cliente pode escolher um dos modelos dispon\xedvel no site."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "- O cliente nos informa sobre o tema da dedicat\xf3ria."
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
                        children: "O v\xeddeo antes da edi\xe7\xe3o \xe9 feito por n\xf3s ou o cliente pode trazer um j\xe1 feito, mas desde que tenha qualidade."
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