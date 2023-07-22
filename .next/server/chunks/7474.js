"use strict";
exports.id = 7474;
exports.ids = [7474];
exports.modules = {

/***/ 7474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_fotos_art_carrocel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6506);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_fotos_retrato__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(823);
/* harmony import */ var _components_fotos_de_rua__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7951);
/* harmony import */ var _components_fotos_fpp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6817);
/* harmony import */ var _components_fotos_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1888);
/* harmony import */ var _components_designer_marcas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2781);
/* harmony import */ var _components_designer_templants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2008);
/* harmony import */ var _components_animacao_animacao__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8457);













function Home() {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const smDown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)(theme.breakpoints.down("sm"));
    const { 0: getScrollY , 1: setScrollY  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: getEstilo , 1: setEstilo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        categoria: "FOTOS",
        estilo: "Art",
        cor: "000000ea"
    });
    function handledScrollY() {
        setScrollY(scrollY);
        if (smDown) getScrollY < 660 ? setEstilo({
            categoria: "FOTOS",
            estilo: "Art",
            cor: "#000000ea"
        }) : getScrollY < 1800 ? setEstilo({
            categoria: "FOTOS",
            estilo: "Retrato",
            cor: "#cf11ecea"
        }) : getScrollY < 2850 ? setEstilo({
            categoria: "FOTOS",
            estilo: "De Rua",
            cor: "#eca711ea"
        }) : getScrollY < 3420 ? setEstilo({
            categoria: "FOTOS",
            estilo: "FPP",
            cor: "#ec3911ea"
        }) : getScrollY < 3658 ? setEstilo({
            categoria: "FOTOS",
            estilo: "Gif",
            cor: "#73ec11ea"
        }) : getScrollY < 4943 ? setEstilo({
            categoria: "DESIGNER",
            estilo: "Designer",
            cor: "#000000ea"
        }) : getScrollY < 9999 ? setEstilo({
            categoria: "ANIMA\xc7\xc3O",
            estilo: "Anima\xe7\xe3o",
            cor: "#000000ea"
        }) : "";
        else getScrollY < 684 ? setEstilo({
            categoria: "FOTOS",
            estilo: "Art",
            cor: "#000000ea"
        }) : getScrollY < 1140 ? setEstilo({
            categoria: "FOTOS",
            estilo: "Retrato",
            cor: "#cf11ecea"
        }) : getScrollY < 1710 ? setEstilo({
            categoria: "FOTOS",
            estilo: "De Rua",
            cor: "#eca711ea"
        }) : getScrollY < 2052 ? setEstilo({
            categoria: "FOTOS",
            estilo: "FPP",
            cor: "#ec3911ea"
        }) : getScrollY < 2508 ? setEstilo({
            categoria: "FOTOS",
            estilo: "Gif",
            cor: "#73ec11ea"
        }) : getScrollY < 3568 ? setEstilo({
            categoria: "DESIGNER",
            estilo: "Designer",
            cor: "#000000ea"
        }) : getScrollY < 9999 ? setEstilo({
            categoria: "ANIMA\xc7\xc3O",
            estilo: "Anima\xe7\xe3o",
            cor: "#000000ea"
        }) : "";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Home - BD"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    overflowX: "hidden"
                },
                onWheel: ()=>{
                    handledScrollY();
                },
                onTouchEnd: ()=>{
                    handledScrollY();
                },
                onClick: ()=>{
                    handledScrollY();
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            variant: "h1",
                            component: "div",
                            fontSize: 13,
                            align: "center",
                            lineHeight: 2,
                            marginLeft: smDown ? -14 : 0,
                            children: [
                                "A qualidade come\xe7a com a intera\xe7\xe3o ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "que \xe9 determinada pela alta administra\xe7\xe3o.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "BD (Brilho Digital), ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "empresa de presta\xe7\xe3o de servi\xe7o de,",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Fotos, Designer e Anima\xe7\xe3o (V\xeddeos).",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        sx: {
                            backgroundColor: "yellow",
                            display: "flex"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                sx: {
                                    position: "fixed",
                                    color: "#ddd3d3",
                                    bgcolor: "#110707",
                                    left: smDown ? 0 : 50,
                                    top: 180,
                                    fontSize: 12,
                                    pl: 2,
                                    zIndex: 3
                                },
                                children: getEstilo?.categoria
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                sx: {
                                    position: "fixed",
                                    right: 10,
                                    top: 150,
                                    zIndex: 3
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    sx: {
                                        bgcolor: getEstilo?.cor,
                                        width: 90,
                                        height: 90
                                    },
                                    children: getEstilo?.estilo
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_fotos_art_carrocel__WEBPACK_IMPORTED_MODULE_4__.ArtCarrocel, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_fotos_retrato__WEBPACK_IMPORTED_MODULE_6__.Retrato, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_fotos_de_rua__WEBPACK_IMPORTED_MODULE_7__.DeRua, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_fotos_fpp__WEBPACK_IMPORTED_MODULE_8__.Fpp, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_fotos_gif__WEBPACK_IMPORTED_MODULE_9__.Gif, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designer_marcas__WEBPACK_IMPORTED_MODULE_10__.Marcas, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_designer_templants__WEBPACK_IMPORTED_MODULE_11__.Templants, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_animacao_animacao__WEBPACK_IMPORTED_MODULE_12__.Animacao, {})
                ]
            })
        ]
    });
}


/***/ })

};
;