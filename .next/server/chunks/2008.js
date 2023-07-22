"use strict";
exports.id = 2008;
exports.ids = [2008];
exports.modules = {

/***/ 2008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Templants": () => (/* binding */ Templants)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3729);
/* harmony import */ var _public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);




const AllImagens = [
    {
        id: 0,
        src: "/img/designers/template/1.jpg"
    },
    {
        id: 1,
        src: "/img/designers/flyer/1.jpg"
    }, 
];
const Templants = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                flexGrow: 1,
                marginTop: 15
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        fontSize: 500,
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                marginBottom: -10
                            },
                            className: (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().templantsLetraTop),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                sx: {
                                    marginLeft: 25
                                },
                                children: "Flyer"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                transform: "rotate(-90deg)",
                                bgcolor: "indigo",
                                width: 0,
                                marginLeft: 1,
                                MozMarginStart: 60,
                                zIndex: 1
                            },
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().marca),
                                    children: "B"
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                transform: "rotate(90deg)",
                                bgcolor: "lightblue",
                                width: 0,
                                marginTop: -139,
                                marginLeft: -2,
                                MozMarginEnd: 50
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `${(_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().marca)} ${(_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().templants)}`,
                                children: "D"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                mt: -20,
                                ml: -58
                            },
                            className: (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().templantsCirculo),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
                                sx: {
                                    bgcolor: "#f07e0d62",
                                    width: 120,
                                    height: 120
                                },
                                children: " "
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        marginTop: -34,
                        marginBottom: 30,
                        textAlign: "center"
                    },
                    className: (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().templantsConteudo),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            sx: {
                                marginRight: 25,
                                bgColor: "red",
                                marginBottom: 5
                            },
                            children: "Template"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            component: "img",
                            src: AllImagens[0].src,
                            sx: {
                                width: 118,
                                height: 118,
                                marginLeft: -1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            component: "img",
                            src: AllImagens[1].src,
                            sx: {
                                width: 118,
                                height: 118,
                                marginLeft: 5
                            }
                        })
                    ]
                })
            ]
        })
    });
};


/***/ })

};
;