"use strict";
exports.id = 3443;
exports.ids = [3443];
exports.modules = {

/***/ 3538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ CarrocelFoto)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__);





const CarrocelFoto = ({ children , titulo , scrollbarTrackBackground  })=>{
    const Carrocel = (_emotion_styled__WEBPACK_IMPORTED_MODULE_4___default().div)`
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${scrollbarTrackBackground};
      margin-bottom: 18px;
      margin-top: 18px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgb(216, 216, 232);
      border-radius: 20px;
      border: 2px solid ${scrollbarTrackBackground};
    }
  `;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const smDown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("sm"));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        item: true,
        xs: 12,
        sm: 3,
        md: 2,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Carrocel, {
            style: {
                textAlign: "center",
                backgroundColor: scrollbarTrackBackground,
                width: smDown ? "100%" : 150,
                height: smDown ? 157 : 620,
                overflowX: smDown ? "scroll" : "hidden",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                overflowY: smDown ? "hidden" : "scroll",
                display: smDown ? "flex" : "block",
                paddingTop: smDown ? 0 : 10
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        position: "absolute",
                        left: smDown ? -10 : 118,
                        top: 180
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            bgcolor: scrollbarTrackBackground,
                            width: 80,
                            height: 80,
                            fontSize: 20
                        },
                        children: titulo
                    })
                }),
                children
            ]
        })
    });
};


/***/ }),

/***/ 3717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ SelectedFoto)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_global_modal_modal_precario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6863);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_4__);





const SelectedFoto = ({ children , modelo , estilo , imagem , modalTitulo , modalDescricao , modeloText  })=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const smDown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("sm"));
    const responsivo = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("md"));
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const handledOpen = ()=>setOpen(true);
    const handledClose = ()=>setOpen(false);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: smDown ? 500 : responsivo ? 500 : imagem?.naturalWidth === 2834 ? 500 : imagem?.naturalHeight === 4272 ? 500 : imagem?.naturalWidth === 4272 ? 900 : 600,
        bgcolor: "#c4bebed3",
        border: "2px solid #000000",
        boxShadow: 24,
        p: 1
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            textAlign: "center",
            paddingTop: 15,
            width: "100%",
            zIndex: 0
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                xs: 12,
                sm: 12,
                md: 10,
                children: [
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        onClick: handledOpen,
                        component: "img",
                        src: imagem?.src,
                        sx: {
                            width: 440,
                            height: 440,
                            backgroundColor: "#454242"
                        }
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
                                width: responsivo ? 440 : "none",
                                color: responsivo ? "#fff" : "#000"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "h2",
                                    component: "h2",
                                    fontSize: 13,
                                    children: [
                                        modeloText,
                                        " ",
                                        modelo
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    component: "span",
                                    sx: {
                                        display: estilo ? "block" : "none"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        variant: "h2",
                                        component: "h2",
                                        fontSize: 13,
                                        children: [
                                            "Estilo: ",
                                            estilo
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    variant: "h3",
                                    component: "h3",
                                    fontSize: 9,
                                    children: [
                                        imagem?.naturalWidth,
                                        " x ",
                                        imagem?.naturalHeight
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_global_modal_modal_precario__WEBPACK_IMPORTED_MODULE_3__/* .ModalBasic */ .S, {
                                    modalTitulo: modalTitulo,
                                    modalDescricao: modalDescricao
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {
                open: open,
                onClose: handledClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: style,
                    onClick: handledClose,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        component: "img",
                        width: "100%",
                        src: imagem?.src
                    })
                })
            })
        ]
    });
};


/***/ })

};
;