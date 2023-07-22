"use strict";
exports.id = 1888;
exports.ids = [1888];
exports.modules = {

/***/ 1888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gif": () => (/* binding */ Gif)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const AllImagens = [
    {
        id: 0,
        src: "/img/fotos/gif/IMG_0426.gif"
    },
    {
        id: 1,
        src: "/img/fotos/gif/IMG_0760.gif"
    },
    {
        id: 2,
        src: "/img/fotos/gif/IMG_0682.gif"
    }, 
];
const Gif = ()=>{
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
                    xs: 8,
                    sm: 12,
                    md: 12
                },
                sx: {
                    justifyContent: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 2,
                        sm: 2,
                        md: 2,
                        sx: {
                            textAlign: "center",
                            pt: 15
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            component: "img",
                            src: AllImagens[0].src,
                            sx: {
                                width: 150,
                                height: 150,
                                padding: 1,
                                borderRadius: 30
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 2,
                        sm: 2,
                        md: 2,
                        sx: {
                            textAlign: "center",
                            pt: 4
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            component: "img",
                            src: AllImagens[1].src,
                            sx: {
                                width: 150,
                                height: 150,
                                padding: 1,
                                borderRadius: 30
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 2,
                        sm: 2,
                        md: 2,
                        sx: {
                            textAlign: "center",
                            pt: 4
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            component: "img",
                            src: AllImagens[2].src,
                            sx: {
                                width: 150,
                                height: 150,
                                padding: 1,
                                borderRadius: 30
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