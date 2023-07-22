exports.id = 8457;
exports.ids = [8457];
exports.modules = {

/***/ 3729:
/***/ ((module) => {

// Exports
module.exports = {
	"marca": "FontInter_marca__hNdvM",
	"templants": "FontInter_templants__ed5xi",
	"templantsConteudo": "FontInter_templantsConteudo__Rlg3r",
	"templantsLetraTop": "FontInter_templantsLetraTop__ob2Do",
	"templantsCirculo": "FontInter_templantsCirculo__tvt16",
	"marcas": "FontInter_marcas__Zld_M",
	"marcasConteudo": "FontInter_marcasConteudo__Ru4RC",
	"marcasLetaTop": "FontInter_marcasLetaTop__0gBbd",
	"marcasCirculo": "FontInter_marcasCirculo__XJjP_",
	"animacao": "FontInter_animacao__0kyfE",
	"animacaoConteudo": "FontInter_animacaoConteudo__B_huO",
	"animacaoLetraTop": "FontInter_animacaoLetraTop__SE5Ep",
	"animacaoLetraTopMobile": "FontInter_animacaoLetraTopMobile__aNod7",
	"cvMdSelecionado": "FontInter_cvMdSelecionado__UKJPq",
	"cvLgSelecionado": "FontInter_cvLgSelecionado__Beoj_",
	"cvLegenda": "FontInter_cvLegenda__u49aq",
	"cvLegendaRight": "FontInter_cvLegendaRight__k4jpD"
};


/***/ }),

/***/ 8457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animacao": () => (/* binding */ Animacao)
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
        src: "/videos/ficcao/1.webm"
    },
    {
        id: 1,
        src: "/videos/romance/love.mp4"
    },
    {
        id: 1,
        src: "/videos/dedicatoria/dicas.mp4"
    }
];
const Animacao = ()=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const smDown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("sm"));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            xs: 12,
                            sm: 4,
                            md: 4,
                            sx: {
                                textAlign: "center",
                                pt: smDown ? 10 : 25
                            },
                            className: smDown ? (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().animacaoLetraTopMobile) : (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().animacaoLetraTop),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                    children: "Fic\xe7\xe3o"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                    width: 115,
                                    height: 100,
                                    autoPlay: true,
                                    loop: true,
                                    muted: true,
                                    style: {
                                        backgroundColor: "#000000ea"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                        src: AllImagens[0].src,
                                        type: "video/mp4"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            xs: 12,
                            sm: 8,
                            md: 6,
                            sx: {
                                textAlign: "center"
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
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            sx: {
                                                transform: "rotate(-90deg)",
                                                bgcolor: "indigo",
                                                width: 0,
                                                MozMarginStart: 75
                                            },
                                            children: [
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: `${(_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().marca)} ${(_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().animacao)}`,
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
                                                marginTop: -124,
                                                marginLeft: -3,
                                                MozMarginEnd: 35
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().marca),
                                                children: "D"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        marginTop: -44
                                    },
                                    className: (_public_fotes_FontInter_module_css__WEBPACK_IMPORTED_MODULE_3___default().animacaoConteudo),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        sx: {
                                            marginBottom: 32
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                sx: {
                                                    marginRight: 24
                                                },
                                                children: "Romance"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                sx: {
                                                    marginLeft: 20,
                                                    marginTop: -3,
                                                    marginBottom: 3
                                                },
                                                children: "Dedicat\xf3ria"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                width: 120,
                                                height: 85,
                                                autoPlay: true,
                                                loop: true,
                                                muted: true,
                                                style: {
                                                    marginLeft: -15,
                                                    backgroundColor: "#000000ea"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                    src: AllImagens[1].src,
                                                    type: "video/mp4"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                width: 120,
                                                height: 85,
                                                autoPlay: true,
                                                loop: true,
                                                muted: true,
                                                style: {
                                                    marginLeft: 55,
                                                    backgroundColor: "#000000ea"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                    src: AllImagens[2].src,
                                                    type: "video/mp4"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        marginLeft: -10
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            bgcolor: "#73f00d4f",
                            width: 200,
                            height: 200
                        },
                        children: " "
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        display: "flex",
                        justifyContent: "flex-end",
                        marginRight: -10
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {
                        sx: {
                            bgcolor: "#f0b30d4c",
                            width: 150,
                            height: 150
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