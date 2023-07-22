"use strict";
exports.id = 6817;
exports.ids = [6817];
exports.modules = {

/***/ 6817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fpp": () => (/* binding */ Fpp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);



const AllImagens = [
    {
        id: 0,
        src: "/img/fotos/fpp/IMG_2350.jpg"
    },
    {
        id: 1,
        src: "/img/fotos/retrato/IMG_0697.jpg"
    },
    {
        id: 2,
        src: "/img/fotos/fpp/IMG_2349.jpg"
    },
    {
        id: 3,
        src: "/img/fotos/retrato/IMG_1728FB.jpg"
    },
    {
        id: 3,
        src: "/img/fotos/fpp/IMG_2359.jpg"
    }
];
const Fpp = ()=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const smDown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("sm"));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                flexGrow: 1,
                marginTop: 15
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    spacing: {
                        xs: 1
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            xs: 12,
                            sm: 12,
                            md: 1,
                            sx: {
                                textAlign: "center",
                                pt: 4
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    component: "img",
                                    src: AllImagens[0].src,
                                    sx: {
                                        width: 100,
                                        height: 100,
                                        padding: 1,
                                        mt: 3
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    component: "img",
                                    src: AllImagens[1].src,
                                    sx: {
                                        width: 100,
                                        height: 100,
                                        padding: 1
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            xs: 12,
                            sm: 12,
                            md: 7,
                            sx: {
                                textAlign: "center",
                                pt: 4,
                                zIndex: 1
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                component: "img",
                                src: AllImagens[2].src,
                                sx: {
                                    width: 500,
                                    height: 250,
                                    padding: 1
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            xs: 12,
                            sm: 12,
                            md: 1,
                            sx: {
                                textAlign: "center",
                                pt: 4,
                                zIndex: 1
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    component: "img",
                                    src: AllImagens[3].src,
                                    sx: {
                                        width: 100,
                                        height: 100,
                                        padding: 1,
                                        mt: 3
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    component: "img",
                                    src: AllImagens[4].src,
                                    sx: {
                                        width: 100,
                                        height: 100,
                                        padding: 1
                                    }
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        mt: -35,
                        ml: smDown ? 40 : 90
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            bgcolor: "#f283051c",
                            width: 300,
                            height: 300
                        },
                        children: " "
                    })
                })
            ]
        })
    });
};


/***/ })

};
;