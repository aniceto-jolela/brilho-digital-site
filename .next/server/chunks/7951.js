"use strict";
exports.id = 7951;
exports.ids = [7951];
exports.modules = {

/***/ 7951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeRua": () => (/* binding */ DeRua)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const AllImagens = [
    {
        id: 0,
        src: "/img/fotos/de-rua/IMG_2043.jpg"
    },
    {
        id: 1,
        src: "/img/fotos/de-rua/IMG_2326.jpg"
    },
    {
        id: 2,
        src: "/img/fotos/de-rua/IMG_2327.jpg"
    },
    {
        id: 3,
        src: "/img/fotos/de-rua/IMG_20444.jpg"
    }
];
const DeRua = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                flexGrow: 1,
                marginTop: 15
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
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
                        md: 4,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                xs: 12,
                                sm: 12,
                                md: 12,
                                sx: {
                                    textAlign: "center",
                                    pt: 4
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        component: "img",
                                        src: AllImagens[0].src,
                                        sx: {
                                            width: 150,
                                            height: 150,
                                            padding: 1,
                                            borderTopLeftRadius: 50,
                                            borderTopRightRadius: 50
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        component: "img",
                                        src: AllImagens[1].src,
                                        sx: {
                                            width: 150,
                                            height: 150,
                                            padding: 1,
                                            borderTopRightRadius: 50,
                                            borderTopLeftRadius: 50
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                xs: 12,
                                sm: 12,
                                md: 12,
                                sx: {
                                    textAlign: "center",
                                    pt: 1
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    component: "img",
                                    src: AllImagens[2].src,
                                    sx: {
                                        width: 300,
                                        height: 200,
                                        padding: 1,
                                        borderBottomLeftRadius: 100,
                                        borderBottomRightRadius: 100
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 12,
                        sm: 12,
                        md: 6,
                        sx: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            component: "img",
                            src: AllImagens[3].src,
                            alt: "Rua",
                            sx: {
                                width: 400,
                                height: 400,
                                backgroundColor: "#eca711ea"
                            }
                        })
                    })
                ]
            })
        })
    });
};


/***/ })

};
;