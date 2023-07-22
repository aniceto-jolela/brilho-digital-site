"use strict";
exports.id = 7240;
exports.ids = [7240];
exports.modules = {

/***/ 7240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeRua": () => (/* binding */ DeRua)
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








function DeRua() {
    const AllImage = [
        {
            id: 1,
            modelo: "Ba\xeda",
            image: "/img/fotos/de-rua/IMG_0728.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 2,
            modelo: "Alvalade",
            image: "/img/fotos/de-rua/IMG_2326.jpg",
            width: 4272,
            height: 2848
        },
        {
            id: 3,
            modelo: "Ba\xeda",
            image: "/img/fotos/de-rua/IMG_0836.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 4,
            modelo: "Alvalade",
            image: "/img/fotos/de-rua/IMG_20444.jpg",
            width: 2848,
            height: 2848
        },
        {
            id: 5,
            modelo: "Alvalade",
            image: "/img/fotos/de-rua/IMG_2327.jpg",
            width: 4272,
            height: 2848
        },
        {
            id: 6,
            modelo: "Alvalade",
            image: "/img/fotos/de-rua/IMG_2043.jpg",
            width: 2848,
            height: 3560
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
                    children: "De rua - BD"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_global_categoria_categoria_titulo__WEBPACK_IMPORTED_MODULE_4__/* .CategoriaTitulo */ .$, {
                marginLeft: -14,
                children: [
                    "A fotografia de rua, tamb\xe9m chamada \xe0s vezes ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "de fotografia espont\xe2nea, \xe9 a fotografia com o objetivo",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "de express\xe3o ou investiga\xe7\xe3o art\xedstica, ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "feita atrav\xe9s de encontros n\xe3o programados",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "e aleat\xf3rios em locais p\xfablicos",
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
                        titulo: "De rua",
                        scrollbarTrackBackground: "#e78d48",
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
                        modalDescricao: "Fotografia De Rua cada 600kz.",
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
                        children: "Como funciona as fotos De Rua."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "- O cliente escolhe o local que vai ser fotografado ou podemos sugeri-lo."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        sx: {
                            marginTop: 1
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