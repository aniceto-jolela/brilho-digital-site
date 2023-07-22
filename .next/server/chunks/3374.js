"use strict";
exports.id = 3374;
exports.ids = [3374];
exports.modules = {

/***/ 3374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ CarrocelDesigner)
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





const CarrocelDesigner = ({ children , titulo  })=>{
    const Carrocel = (_emotion_styled__WEBPACK_IMPORTED_MODULE_4___default().div)`
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: #f7f6f6;
      margin-bottom: 18px;
      margin-top: 18px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius: 20px;
      border: 2px solid #f7f6f6;
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
                backgroundColor: "#f7f6f6",
                width: smDown ? "100%" : 150,
                height: smDown ? 157 : 620,
                overflowX: smDown ? "scroll" : "hidden",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                overflowY: smDown ? "hidden" : "scroll",
                display: smDown ? "flex" : "block",
                border: "solid 3px #000",
                paddingTop: smDown ? 0 : 10
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        position: "absolute",
                        left: smDown ? 50 : 180,
                        top: 170
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            bgcolor: "#000",
                            width: 30,
                            height: 30
                        },
                        children: " "
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        position: "absolute",
                        left: smDown ? -10 : 118,
                        top: 180
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
                        sx: {
                            bgcolor: "#000",
                            width: 80,
                            height: 80,
                            fontSize: 14
                        },
                        children: titulo
                    })
                }),
                children
            ]
        })
    });
};


/***/ })

};
;