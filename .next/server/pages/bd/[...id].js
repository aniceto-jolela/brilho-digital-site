"use strict";
(() => {
var exports = {};
exports.id = 9453;
exports.ids = [9453,7034,2188,1052,9485,4452,6839,8584,5550,2476,6841,5850,814,3071,6250,8719,4068,8763,3191,482,7524,6110,3952,4710,9265,8053,1990];
exports.modules = {

/***/ 831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Romance": () => (/* binding */ Romance)
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








function Romance() {
    const AllVideos = [
        {
            id: 1,
            modelo: "Love",
            video: "/videos/romance/love.mp4"
        }
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
                    children: "Romance - BD"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_global_categoria_categoria_titulo__WEBPACK_IMPORTED_MODULE_4__/* .CategoriaTitulo */ .$, {
                marginLeft: -14,
                children: [
                    "Romance \xe9 uma obra liter\xe1ria que apresenta ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "narrativa em prosa, normalmente longa, com fatos criados",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "ou relacionados a personagens, que vivem diferentes conflitos ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "ou situa\xe7\xf5es dram\xe1ticas, numa",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "sequ\xeancia de tempo relativamente ampla.",
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
                        titulo: "Romance",
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
                        modalTitulo: "Pre\xe7\xe1rio provis\xf3rio",
                        modalDescricao: "Romance cada [...]kz.",
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
                        children: "Como funciona o v\xeddeo de Romance."
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
                        children: "- O cliente nos informa sobre o tema do romance."
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


/***/ }),

/***/ 8762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/SwipeableDrawer"
const SwipeableDrawer_namespaceObject = require("@mui/material/SwipeableDrawer");
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemButton"
const ListItemButton_namespaceObject = require("@mui/material/ListItemButton");
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemIcon"
const ListItemIcon_namespaceObject = require("@mui/material/ListItemIcon");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemText"
const ListItemText_namespaceObject = require("@mui/material/ListItemText");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListSubheader"
const ListSubheader_namespaceObject = require("@mui/material/ListSubheader");
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Collapse"
const Collapse_namespaceObject = require("@mui/material/Collapse");
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Home"
const Home_namespaceObject = require("@mui/icons-material/Home");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ExpandLess"
const ExpandLess_namespaceObject = require("@mui/icons-material/ExpandLess");
var ExpandLess_default = /*#__PURE__*/__webpack_require__.n(ExpandLess_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ExpandMore"
const ExpandMore_namespaceObject = require("@mui/icons-material/ExpandMore");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Cookie"
const Cookie_namespaceObject = require("@mui/icons-material/Cookie");
var Cookie_default = /*#__PURE__*/__webpack_require__.n(Cookie_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Landslide"
const Landslide_namespaceObject = require("@mui/icons-material/Landslide");
var Landslide_default = /*#__PURE__*/__webpack_require__.n(Landslide_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Animation"
const Animation_namespaceObject = require("@mui/icons-material/Animation");
var Animation_default = /*#__PURE__*/__webpack_require__.n(Animation_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Call"
const Call_namespaceObject = require("@mui/icons-material/Call");
var Call_default = /*#__PURE__*/__webpack_require__.n(Call_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/AllOut"
const AllOut_namespaceObject = require("@mui/icons-material/AllOut");
var AllOut_default = /*#__PURE__*/__webpack_require__.n(AllOut_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/menu/sidebar-mobile.tsx






















function SidebarMobile({ menuProp , submenuProp  }) {
    const [state, setState] = external_react_.useState({
        left: false
    });
    const [open, setOpen] = external_react_.useState(false);
    const [openMenu, setMenu] = external_react_.useState(0);
    const [selectedSubMenu, setSelectedSubMenu] = external_react_.useState(0);
    function LayoutLoad() {
        setMenu(menuProp);
        setSelectedSubMenu(submenuProp);
        console.log("Menus => " + menuProp);
    }
    external_react_.useInsertionEffect(()=>LayoutLoad(), [
        menuProp !== 0
    ]);
    const handleClick = (index)=>{
        setOpen(index !== openMenu ? true : !open);
        setMenu(index);
    };
    const handleClickStatic = (index)=>{
        setMenu(index);
        setSelectedSubMenu(0);
    };
    const handleClickSubMenu = (index)=>{
        setSelectedSubMenu(index);
    };
    const toggleDrawer = (anchor, open)=>(event)=>{
            if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            setState({
                ...state,
                [anchor]: open
            });
        };
    const ListMenu = [
        {
            menu: {
                id: 11,
                name: "DESIGNER",
                icon: (Cookie_default())
            },
            submenu: [
                {
                    id: 1,
                    name: "Mockup",
                    href: "/bd/Mockup"
                },
                {
                    id: 2,
                    name: "Branding",
                    href: "/bd/Branding"
                },
                {
                    id: 3,
                    name: "Template",
                    href: "/bd/Template"
                },
                {
                    id: 4,
                    name: "Flyer",
                    href: "/bd/Flyer"
                },
                {
                    id: 5,
                    name: "Cart\xe3o de Visita",
                    href: "/bd/CartaoVisita"
                }, 
            ]
        },
        {
            menu: {
                id: 22,
                name: "FOTOS",
                icon: (Landslide_default())
            },
            submenu: [
                {
                    id: 6,
                    name: "Art\xedstica",
                    href: "/bd/Artistica"
                },
                {
                    id: 7,
                    name: "Retrato",
                    href: "/bd/Retrato"
                },
                {
                    id: 8,
                    name: "De Rua",
                    href: "/bd/DeRua"
                },
                {
                    id: 9,
                    name: "FPP",
                    href: "/bd/FPP"
                },
                {
                    id: 10,
                    name: "Gif",
                    href: "/bd/Gif"
                }, 
            ]
        },
        {
            menu: {
                id: 33,
                name: "ANIMA\xc7\xc3O",
                icon: (Animation_default())
            },
            submenu: [
                {
                    id: 11,
                    name: "Romance",
                    href: "/bd/Romance"
                },
                {
                    id: 12,
                    name: "Fic\xe7\xe3o",
                    href: "/bd/Ficcao"
                },
                {
                    id: 13,
                    name: "Dedicat\xf3ria",
                    href: "/bd/Dedicatoria"
                }, 
            ]
        },
        {
            menu: {
                id: 44,
                name: "CONTATO",
                icon: (Call_default())
            },
            submenu: [
                {
                    id: 14,
                    name: "Whatsapp",
                    href: "/bd/Whatsapp"
                },
                {
                    id: 15,
                    name: "E-mail",
                    href: "/bd/Email"
                },
                {
                    id: 16,
                    name: "Facebook",
                    href: "/bd/Facebook"
                },
                {
                    id: 17,
                    name: "Instagram",
                    href: "/bd/Instagram"
                },
                {
                    id: 18,
                    name: "Telefone",
                    href: "/bd/Telefone"
                }, 
            ]
        }, 
    ];
    const list = (anchor)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                width: 211
            },
            role: "presentation",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                sx: {
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper"
                },
                component: "nav",
                "aria-labelledby": "Brilho-Digital",
                subheader: /*#__PURE__*/ jsx_runtime_.jsx((ListSubheader_default()), {
                    component: "div",
                    id: "Brilho-Digital",
                    sx: {
                        backgroundColor: "#E5E5E5",
                        fontSize: 14,
                        color: "#674141"
                    },
                    children: "Brilho Digital"
                }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                        onClick: ()=>handleClickStatic(0),
                        sx: {
                            pt: 0,
                            pb: 0,
                            bgcolor: openMenu === 0 ? "#CC4D4D" : "",
                            color: openMenu === 0 ? "#ffffff" : ""
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                sx: {
                                    mr: -3
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Home_default()), {
                                    fontSize: "small"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/bd/Home",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        textDecorationLine: "none",
                                        color: "#454242",
                                        paddingRight: 120
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        primary: "HOME",
                                        primaryTypographyProps: {
                                            fontSize: 14
                                        }
                                    })
                                })
                            })
                        ]
                    }),
                    ListMenu.map((item)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                    onClick: ()=>handleClick(item.menu.id),
                                    sx: {
                                        pt: 0,
                                        pb: 0,
                                        bgcolor: openMenu === item.menu.id ? "#CC4D4D" : "",
                                        color: openMenu === item.menu.id ? "#ffffff" : ""
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                            sx: {
                                                mr: -3
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(item.menu.icon, {
                                                fontSize: "small"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                            primary: item.menu.name,
                                            primaryTypographyProps: {
                                                fontSize: 14
                                            }
                                        }, item.menu.id),
                                        open && openMenu === item.menu.id ? /*#__PURE__*/ jsx_runtime_.jsx((ExpandLess_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Collapse_default()), {
                                    in: openMenu === item.menu.id ? open : false,
                                    timeout: "auto",
                                    unmountOnExit: true,
                                    children: item.submenu.map((i)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                            component: "div",
                                            disablePadding: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                                                sx: {
                                                    padding: 0,
                                                    display: "block"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: i.href,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        style: {
                                                            textDecorationLine: "none",
                                                            color: "#454242",
                                                            backgroundColor: "greenyellow"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                            onClick: ()=>handleClickSubMenu(i.id),
                                                            primary: i.name,
                                                            primaryTypographyProps: {
                                                                fontSize: 12,
                                                                color: selectedSubMenu === i.id ? "red" : "",
                                                                pl: 6,
                                                                marginTop: "-4px",
                                                                marginBottom: "-4px",
                                                                paddingTop: "4px",
                                                                paddingBottom: "4px"
                                                            }
                                                        })
                                                    })
                                                })
                                            })
                                        }, i.id);
                                    })
                                })
                            ]
                        });
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                        onClick: ()=>handleClickStatic(55),
                        sx: {
                            pt: 0,
                            pb: 0,
                            bgcolor: openMenu === 55 ? "#CC4D4D" : "",
                            color: openMenu === 55 ? "#ffffff" : ""
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                sx: {
                                    mr: -3
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((AllOut_default()), {
                                    fontSize: "small"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/bd/Sobre",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: {
                                        textDecorationLine: "none",
                                        color: "#454242",
                                        paddingRight: 120
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        primary: "BD",
                                        primaryTypographyProps: {
                                            fontSize: 14
                                        }
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        });
    const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const theme = (0,material_.useTheme)();
    const smDownLeft = (0,material_.useMediaQuery)(theme.breakpoints.down("sm"));
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    color: "inherit",
                    "aria-label": "open drawer",
                    onClick: toggleDrawer("left", true),
                    edge: "start",
                    sx: {
                        marginLeft: 1
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                }),
                smDownLeft ? /*#__PURE__*/ jsx_runtime_.jsx((SwipeableDrawer_default()), {
                    anchor: "left",
                    open: state["left"],
                    onClose: toggleDrawer("left", false),
                    onOpen: toggleDrawer("left", true),
                    disableBackdropTransition: !iOS,
                    disableDiscovery: iOS,
                    children: list("left")
                }) : ""
            ]
        })
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/menu/header.tsx








const UlFather = (styled_default()).ul`
  list-style-type: none;
  display: flex;
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0px;
  cursor: pointer;
  li:hover {
    background-color: white;
    ul {
      display: block;
    }
  }
`;
const Ulson = (styled_default()).ul`
  background-color: #0a0a0ad9;
  color: #e4eced;
  display: none;
  position: fixed;
  list-style-type: none;
  margin-top: 15px;
  margin-left: -10px;
  padding-left: 10px;
  li:hover {
    color: black;
  }
  li {
    a {
      background-color: #4d4848;
      text-decoration-line: none;
      color: #e4eced;
      padding-right: 50px;
      padding-top: 2px;
      padding-bottom: 2px;
      margin-bottom: -4px;
      margin-top: -2px;
      margin-right: -25px;
      display: block;
    }
  }
`;
function Menu() {
    const [setSubMenuSelected, getSubMenuSelected] = external_react_.useState(0);
    const [setSubMenuSelectedMapCod, getSubMenuSelectedMapCod] = external_react_.useState(0);
    const [setSubMenuSelectedMapName, getSubMenuSelectedName] = external_react_.useState("");
    function handleMenu(index) {
        getSubMenuSelectedMapCod(index);
    }
    function handleSubMenu(index, name, cod) {
        getSubMenuSelected(index);
        getSubMenuSelectedName(name);
        getSubMenuSelectedMapCod(cod);
    }
    const theme = (0,material_.useTheme)();
    const smDown = (0,material_.useMediaQuery)(theme.breakpoints.down("sm"));
    const ListMenu = [
        {
            menu: {
                id: 11,
                name: "DESIGNER"
            },
            submenu: [
                {
                    id: 1,
                    name: "Mockup",
                    href: "/bd/Mockup",
                    cod: 11
                },
                {
                    id: 2,
                    name: "Branding",
                    href: "/bd/Branding",
                    cod: 11
                },
                {
                    id: 3,
                    name: "Template",
                    href: "/bd/Template",
                    cod: 11
                },
                {
                    id: 4,
                    name: "Flyer",
                    href: "/bd/Flyer",
                    cod: 11
                },
                {
                    id: 5,
                    name: "Cart\xe3o de Visita",
                    href: "/bd/CartaoVisita",
                    cod: 11
                }, 
            ]
        },
        {
            menu: {
                id: 22,
                name: "FOTOS"
            },
            submenu: [
                {
                    id: 6,
                    name: "Art\xedstica",
                    href: "/bd/Artistica",
                    cod: 22
                },
                {
                    id: 7,
                    name: "Retrato",
                    href: "/bd/Retrato",
                    cod: 22
                },
                {
                    id: 8,
                    name: "De Rua",
                    href: "/bd/DeRua",
                    cod: 22
                },
                {
                    id: 9,
                    name: "FPP",
                    href: "/bd/FPP",
                    cod: 22
                },
                {
                    id: 10,
                    name: "Gif",
                    href: "/bd/Gif",
                    cod: 22
                }, 
            ]
        },
        {
            menu: {
                id: 33,
                name: "ANIMA\xc7\xc3O"
            },
            submenu: [
                {
                    id: 11,
                    name: "Romance",
                    href: "/bd/Romance",
                    cod: 33
                },
                {
                    id: 12,
                    name: "Fic\xe7\xe3o",
                    href: "/bd/Ficcao",
                    cod: 33
                },
                {
                    id: 13,
                    name: "Dedicat\xf3ria",
                    href: "/bd/Dedicatoria",
                    cod: 33
                }, 
            ]
        },
        {
            menu: {
                id: 44,
                name: "CONTATO"
            },
            submenu: [
                {
                    id: 14,
                    name: "Whatsapp",
                    href: "/bd/Whatsapp",
                    cod: 44
                },
                {
                    id: 15,
                    name: "E-mail",
                    href: "/bd/Email",
                    cod: 44
                },
                {
                    id: 16,
                    name: "Facebook",
                    href: "/bd/Facebook",
                    cod: 44
                },
                {
                    id: 17,
                    name: "Intagram",
                    href: "/bd/Instagram",
                    cod: 44
                },
                {
                    id: 18,
                    name: "Telefone",
                    href: "/bd/Telefone",
                    cod: 44
                }, 
            ]
        }, 
    ];
    const { query , asPath  } = (0,router_.useRouter)();
    const { id  } = query;
    function LayoutLoad() {
        ListMenu.map((m)=>{
            m.submenu.map((sub)=>{
                asPath === sub.href ? handleMenu(m.menu.id) : "";
                asPath === sub.href ? handleSubMenu(sub.id, sub.name, sub.cod) : "";
                asPath === "/bd/Sobre" ? handleMenu(55) : "";
            });
        });
    }
    external_react_.useInsertionEffect(()=>LayoutLoad(), [
        id !== undefined
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    backgroundColor: "#E5E5E5",
                    display: "flex",
                    position: "fixed",
                    width: "100%",
                    justifyContent: "space-between",
                    marginTop: -6,
                    zIndex: 4
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: smDown ? "#" : "/bd/Home",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            style: {
                                paddingTop: 5
                            },
                            onClick: ()=>handleMenu(0),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                sx: {
                                    paddingLeft: 1
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/img/logo.svg",
                                    alt: "BD",
                                    width: 40,
                                    height: 40
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            display: smDown ? "none" : "flex"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(UlFather, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        onClick: ()=>handleMenu(0),
                                        style: {
                                            backgroundColor: setSubMenuSelectedMapCod === 0 ? "#CC4D4D" : "",
                                            padding: "15px 10px",
                                            fontSize: 15
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/bd/Home",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                style: {
                                                    padding: "19px 10px",
                                                    margin: -10,
                                                    color: setSubMenuSelectedMapCod === 0 ? "#ffffff" : "#212020",
                                                    textDecorationLine: "none"
                                                },
                                                children: "HOME"
                                            })
                                        })
                                    }),
                                    ListMenu.map((item)=>{
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            style: {
                                                backgroundColor: setSubMenuSelectedMapCod === item.menu.id ? "#CC4D4D" : "",
                                                color: setSubMenuSelectedMapCod === item.menu.id ? "#ffffff" : "",
                                                padding: "15px 10px",
                                                fontSize: 15
                                            },
                                            children: [
                                                item.menu.name,
                                                setSubMenuSelectedMapCod === item.menu.id ? /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                                                    style: {
                                                        fontSize: 9,
                                                        position: "absolute",
                                                        margin: 0,
                                                        fontStyle: "italic",
                                                        color: "#131514e1"
                                                    },
                                                    children: setSubMenuSelected === setSubMenuSelected && setSubMenuSelectedMapCod !== 0 && setSubMenuSelectedMapCod !== 55 ? setSubMenuSelectedMapName : ""
                                                }) : "",
                                                /*#__PURE__*/ jsx_runtime_.jsx(Ulson, {
                                                    children: item.submenu?.map((i)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            onClick: ()=>handleSubMenu(i.id, i.name, i.cod),
                                                            style: {
                                                                backgroundColor: setSubMenuSelected === i.id && setSubMenuSelectedMapCod !== 0 && setSubMenuSelectedMapCod !== 55 ? "#CC4D4D" : "",
                                                                padding: "2px 25px 4px 2px"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: i.href,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: i.name
                                                                })
                                                            })
                                                        }, i.id);
                                                    })
                                                })
                                            ]
                                        }, item.menu.id);
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        onClick: ()=>handleMenu(55),
                                        style: {
                                            backgroundColor: setSubMenuSelectedMapCod === 55 ? "#CC4D4D" : "",
                                            color: setSubMenuSelectedMapCod === 55 ? "#ffffff" : "",
                                            padding: "15px 10px",
                                            fontSize: 15
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/bd/Sobre",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                style: {
                                                    padding: "19px 10px",
                                                    margin: -10,
                                                    color: setSubMenuSelectedMapCod === 55 ? "#ffffff" : "#212020",
                                                    textDecorationLine: "none"
                                                },
                                                children: "BD"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            paddingTop: 1,
                            visibility: smDown ? "visible" : "hidden"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SidebarMobile, {
                            menuProp: setSubMenuSelectedMapCod,
                            submenuProp: setSubMenuSelected
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    position: "fixed",
                    right: -140,
                    top: -2,
                    transform: "rotate(48deg)",
                    zIndex: 3
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        width: 450,
                        height: 150,
                        backgroundColor: "#E5E5E5"
                    }
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/menu/footer.tsx



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
                background: "#000000",
                color: "white",
                fontSize: 12,
                paddingTop: 1,
                textAlign: "center"
            },
            children: "\xa9 2022"
        })
    });
};

;// CONCATENATED MODULE: ./components/base-layout/index.tsx





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    backgroundColor: "#f7f6f6",
                    marginTop: 6,
                    marginBottom: -1,
                    paddingTop: 5,
                    paddingBottom: 2
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const base_layout = (Layout);

// EXTERNAL MODULE: ./pages/home/home.tsx
var home = __webpack_require__(7474);
// EXTERNAL MODULE: ./pages/bd/index.tsx
var bd = __webpack_require__(773);
// EXTERNAL MODULE: ./pages/designer/branding/branding.tsx
var branding = __webpack_require__(6727);
// EXTERNAL MODULE: ./pages/designer/mockup/mockup.tsx
var mockup = __webpack_require__(2509);
// EXTERNAL MODULE: ./pages/info/sobre.tsx
var sobre = __webpack_require__(6380);
// EXTERNAL MODULE: ./pages/designer/template/template.tsx
var template = __webpack_require__(1781);
// EXTERNAL MODULE: ./pages/designer/flayer/flyer.tsx
var flyer = __webpack_require__(7827);
// EXTERNAL MODULE: ./pages/designer/cartao-visita/cartao-visita.tsx
var cartao_visita = __webpack_require__(6814);
// EXTERNAL MODULE: ./pages/fotos/artistica/artistica.tsx
var artistica = __webpack_require__(2382);
// EXTERNAL MODULE: ./pages/fotos/retrato/retrato.tsx
var retrato = __webpack_require__(5114);
// EXTERNAL MODULE: ./pages/fotos/de-rua/de-rua.tsx
var de_rua = __webpack_require__(7240);
// EXTERNAL MODULE: ./pages/fotos/fpp/fpp.tsx
var fpp = __webpack_require__(4705);
// EXTERNAL MODULE: ./pages/animacao/ficcao/ficcao.tsx
var ficcao = __webpack_require__(5521);
// EXTERNAL MODULE: ./pages/animacao/dedicatoria/dedicatoria.tsx
var dedicatoria = __webpack_require__(9555);
// EXTERNAL MODULE: ./pages/fotos/gif/gif.tsx
var gif = __webpack_require__(1053);
// EXTERNAL MODULE: ./pages/animacao/romance/romance.tsx
var romance = __webpack_require__(831);
// EXTERNAL MODULE: ./pages/contacto/whatsapp/whatsapp.tsx
var whatsapp = __webpack_require__(5995);
// EXTERNAL MODULE: ./pages/contacto/e-mail/e-mail.tsx
var e_mail = __webpack_require__(6091);
// EXTERNAL MODULE: ./pages/contacto/facebook/facebook.tsx
var facebook = __webpack_require__(4128);
// EXTERNAL MODULE: ./pages/contacto/instagram/instagram.tsx
var instagram = __webpack_require__(7548);
// EXTERNAL MODULE: ./pages/contacto/telefone/telefone.tsx
var telefone = __webpack_require__(6343);
;// CONCATENATED MODULE: ./src/urls.tsx






















const urls = {
    Home: /*#__PURE__*/ jsx_runtime_.jsx(home.Home, {}),
    Mockup: /*#__PURE__*/ jsx_runtime_.jsx(mockup.Mockup, {}),
    Branding: /*#__PURE__*/ jsx_runtime_.jsx(branding.Branding, {}),
    Template: /*#__PURE__*/ jsx_runtime_.jsx(template.Template, {}),
    Flyer: /*#__PURE__*/ jsx_runtime_.jsx(flyer.Flyer, {}),
    CartaoVisita: /*#__PURE__*/ jsx_runtime_.jsx(cartao_visita.CartaoVisita, {}),
    Artistica: /*#__PURE__*/ jsx_runtime_.jsx(artistica.Artistica, {}),
    Retrato: /*#__PURE__*/ jsx_runtime_.jsx(retrato.Retrato, {}),
    DeRua: /*#__PURE__*/ jsx_runtime_.jsx(de_rua.DeRua, {}),
    FPP: /*#__PURE__*/ jsx_runtime_.jsx(fpp.FPP, {}),
    Gif: /*#__PURE__*/ jsx_runtime_.jsx(gif.Gif, {}),
    Romance: /*#__PURE__*/ jsx_runtime_.jsx(romance.Romance, {}),
    Ficcao: /*#__PURE__*/ jsx_runtime_.jsx(ficcao.Ficcao, {}),
    Dedicatoria: /*#__PURE__*/ jsx_runtime_.jsx(dedicatoria.Dedicatoria, {}),
    Whatsapp: /*#__PURE__*/ jsx_runtime_.jsx(whatsapp.Whatsapp, {}),
    Email: /*#__PURE__*/ jsx_runtime_.jsx(e_mail.Email, {}),
    Facebook: /*#__PURE__*/ jsx_runtime_.jsx(facebook.Facebook, {}),
    Instagram: /*#__PURE__*/ jsx_runtime_.jsx(instagram.Instagram, {}),
    Telefone: /*#__PURE__*/ jsx_runtime_.jsx(telefone.Telefone, {}),
    Sobre: /*#__PURE__*/ jsx_runtime_.jsx(sobre.Sobre, {}),
    Pages404: /*#__PURE__*/ jsx_runtime_.jsx(bd.Pages404, {})
};

;// CONCATENATED MODULE: ./pages/bd/[...id].tsx




const RoutasAuto = ()=>{
    const { query  } = (0,router_.useRouter)();
    const { id  } = query;
    function Layouts() {
        return id == urls[id]?.type.name ? urls[id] : urls.Pages404;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(base_layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layouts, {})
    });
};
/* harmony default export */ const _id_ = (RoutasAuto);


/***/ }),

/***/ 773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pages404": () => (/* binding */ Pages404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const Pages404 = ()=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const smDown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("sm"));
    const responsivo = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.down("md"));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "404 ERROR Page"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    textAlign: "center",
                    backgroundColor: "white",
                    marginTop: "-35px",
                    marginBottom: "-7px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    component: "img",
                    src: "/img/404-error-dribbble-800x600.gif",
                    width: smDown ? 400 : responsivo ? 580 : 800,
                    height: 600
                })
            })
        ]
    });
};


/***/ }),

/***/ 6091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Email": () => (/* binding */ Email)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Email() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            children: "Welcome Email"
        })
    });
}


/***/ }),

/***/ 4128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Facebook": () => (/* binding */ Facebook)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Facebook() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            children: "Welcome Facebook"
        })
    });
}


/***/ }),

/***/ 7548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Instagram": () => (/* binding */ Instagram)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Instagram() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            children: "Welcome Instagram"
        })
    });
}


/***/ }),

/***/ 6343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Telefone": () => (/* binding */ Telefone)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Telefone() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            children: "Welcome Telefone"
        })
    });
}


/***/ }),

/***/ 5995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Whatsapp": () => (/* binding */ Whatsapp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Whatsapp() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            children: "Welcome Whatapp"
        })
    });
}


/***/ }),

/***/ 2509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mockup": () => (/* binding */ Mockup)
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
/* harmony import */ var components_global_conteudo_selected_designer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2119);








function Mockup() {
    const AllImage = [
        {
            id: 1,
            modelo: "Admin LTE",
            image: "/img/designers/mockup/1.png",
            width: 750,
            height: 395
        },
        {
            id: 2,
            modelo: "SCNE",
            image: "/img/designers/mockup/2.jpg",
            width: 924,
            height: 580
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
                    children: "Mockup - BD"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_global_categoria_categoria_titulo__WEBPACK_IMPORTED_MODULE_4__/* .CategoriaTitulo */ .$, {
                marginLeft: -14,
                children: [
                    "Em manufatura e design,um mockup ou mock-up ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "\xe9 um modelo em escala ou de tamanho real de um projeto",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "ou dispositivo, usado para ensino, demostra\xe7\xe3o, ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "avalia\xe7\xe3o de design, promo\xe7\xe3o e",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "outros prop\xf3sitos.",
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
                        titulo: "Mockup",
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_global_conteudo_selected_designer__WEBPACK_IMPORTED_MODULE_7__/* .SelectedDesigner */ .w, {
                        modelo: getNomeEstilo.modelo,
                        imagem: getImagem,
                        modalTitulo: "Pre\xe7\xe1rio provis\xf3rio",
                        modalDescricao: "Mockup cada [...]kz.",
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
                        children: "Como funciona o Mockup."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "- O cliente pode comprar um dos Mockups dispon\xedvel pelo site."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h2",
                        component: "h2",
                        fontSize: 13,
                        children: "- O cliente nos informa sobre o seu projecto e n\xf3s ficaremos par e passo  at\xe9 terminar o Mockup."
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


/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowLeft");

/***/ }),

/***/ 547:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowRight");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 8261:
/***/ ((module) => {

module.exports = require("@mui/material/MobileStepper");

/***/ }),

/***/ 9564:
/***/ ((module) => {

module.exports = require("@mui/material/Modal");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9980:
/***/ ((module) => {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ 7930:
/***/ ((module) => {

module.exports = require("react-swipeable-views-utils");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,4771,3443,3374,3329,2119,8457,2781,6506,6817,823,2008,7951,1888,6380,6814,1781,2382,4705,5114,6727,7827,1053,7240,7474,9555,5521], () => (__webpack_exec__(8762)));
module.exports = __webpack_exports__;

})();