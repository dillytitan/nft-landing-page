webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: StyledButton, StyledRoundButton, ResponsiveWrapper, StyledLogo, StyledImg, StyledLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledRoundButton", function() { return StyledRoundButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveWrapper", function() { return ResponsiveWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLogo", function() { return StyledLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledImg", function() { return StyledImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/blockchain/blockchainActions */ "./src/redux/blockchain/blockchainActions.js");
/* harmony import */ var _redux_data_dataActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/data/dataActions */ "./src/redux/data/dataActions.js");
/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/globalStyles */ "./src/styles/globalStyles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/daslappy/Desktop/Projects/playground/nft-minter-dapp/hashlips_nft_minting_dapp/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();










const truncate = (input, len) => input.length > len ? `${input.substring(0, len)}...` : input;

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button`
  padding: 10px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
_c = StyledButton;
const StyledRoundButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button`
  padding: 10px;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
_c2 = StyledRoundButton;
const ResponsiveWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;
_c3 = ResponsiveWrapper;
const StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img`
  width: 300px;
  @media (min-width: 767px) {
    width: 450px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;
_c4 = StyledLogo;
const StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  background-color: var(--accent);
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;
_c5 = StyledImg;
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a`
  color: var(--secondary);
  text-decoration: none;
`;
_c6 = StyledLink;

function App() {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const blockchain = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.blockchain);
  const data = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.data);
  const [claimingNft, setClaimingNft] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [feedback, setFeedback] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const [CONFIG, SET_CONFIG] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods.mint(mintAmount).send({
      gasLimit: String(totalGasLimit),
      to: CONFIG.CONTRACT_ADDRESS,
      from: blockchain.account,
      value: totalCostWei
    }).once("error", err => {
      console.log(err);
      setFeedback("Sorry, something went wrong please try again later.");
      setClaimingNft(false);
    }).then(receipt => {
      console.log(receipt);
      setFeedback(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`);
      setClaimingNft(false);
      dispatch(Object(_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_3__["fetchData"])(blockchain.account));
    });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;

    if (newMintAmount < 1) {
      newMintAmount = 1;
    }

    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;

    if (newMintAmount > 10) {
      newMintAmount = 10;
    }

    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(Object(_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_3__["fetchData"])(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getConfig();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getData();
  }, [blockchain.account]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Screen"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      flex: 1,
      ai: "center",
      style: {
        padding: 24,
        backgroundColor: "var(--primary)"
      },
      image: CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledLogo, {
        alt: "logo",
        src: "/config/images/logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ResponsiveWrapper, {
        flex: 1,
        style: {
          padding: 24
        },
        test: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
          flex: 1,
          jc: "center",
          ai: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledImg, {
            alt: "Stephen Sanchez",
            src: "/config/images/mintplacer.gif"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerLarge"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
          flex: 2,
          jc: "center",
          ai: "center",
          style: {
            backgroundColor: "var(--accent)",
            padding: 24,
            // border: "4px dashed var(--secondary)",
            boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextTitle"], {
            style: {
              textAlign: "center",
              fontSize: 50,
              fontWeight: "bold",
              color: "var(--accent-text)"
            },
            children: [data.totalSupply, " / ", CONFIG.MAX_SUPPLY]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
            style: {
              textAlign: "center",
              color: "var(--primary-text)"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledLink, {
              target: "_blank",
              href: CONFIG.SCAN_LINK,
              children: truncate(CONFIG.CONTRACT_ADDRESS, 15)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 13
          }, this), Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextTitle"], {
              style: {
                textAlign: "center",
                color: "var(--accent-text)"
              },
              children: "The sale has ended."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
              style: {
                textAlign: "center",
                color: "var(--accent-text)"
              },
              children: ["You can still find ", CONFIG.NFT_NAME, " on"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledLink, {
              target: "_blank",
              href: CONFIG.MARKETPLACE_LINK,
              children: CONFIG.MARKETPLACE
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 17
            }, this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextTitle"], {
              style: {
                textAlign: "center",
                color: "var(--accent-text)"
              },
              children: ["1 ", CONFIG.SYMBOL, " costs ", CONFIG.DISPLAY_COST, " ", CONFIG.NETWORK.SYMBOL, "."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerXSmall"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
              style: {
                textAlign: "center",
                color: "var(--accent-text)"
              },
              children: "Excluding gas fees."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 17
            }, this), blockchain.account === "" || blockchain.smartContract === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
              ai: "center",
              jc: "center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
                style: {
                  textAlign: "center",
                  color: "var(--accent-text)"
                },
                children: ["Connect to the ", CONFIG.NETWORK.NAME, " network"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledButton, {
                onClick: e => {
                  e.preventDefault();
                  dispatch(Object(_redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_2__["connect"])());
                  getData();
                },
                children: "CONNECT"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 284,
                columnNumber: 21
              }, this), blockchain.errorMsg !== "" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
                  style: {
                    textAlign: "center",
                    color: "var(--accent-text)"
                  },
                  children: blockchain.errorMsg
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 25
                }, this)]
              }, void 0, true) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
                style: {
                  textAlign: "center",
                  color: "var(--accent-text)"
                },
                children: feedback
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerMedium"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 317,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
                ai: "center",
                jc: "center",
                fd: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledRoundButton, {
                  style: {
                    lineHeight: 0.4
                  },
                  disabled: claimingNft ? 1 : 0,
                  onClick: e => {
                    e.preventDefault();
                    decrementMintAmount();
                  },
                  children: "-"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 319,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerMedium"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 329,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
                  style: {
                    textAlign: "center",
                    color: "var(--accent-text)"
                  },
                  children: mintAmount
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 330,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerMedium"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 338,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledRoundButton, {
                  disabled: claimingNft ? 1 : 0,
                  onClick: e => {
                    e.preventDefault();
                    incrementMintAmount();
                  },
                  children: "+"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 339,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
                ai: "center",
                jc: "center",
                fd: "row",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledButton, {
                  disabled: claimingNft ? 1 : 0,
                  onClick: e => {
                    e.preventDefault();
                    claimNFTs();
                    getData();
                  },
                  children: claimingNft ? "BUSY" : "BUY"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 351,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 21
              }, this)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerMedium"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerLarge"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
          flex: 1,
          jc: "center",
          ai: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledImg, {
            alt: "Stephen Sanchez",
            src: "/config/images/mintplacer.gif",
            style: {
              transform: "scaleX(-1)"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerMedium"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        jc: "center",
        ai: "center",
        style: {
          width: "70%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
          style: {
            textAlign: "center",
            color: "var(--primary-text)"
          },
          children: ["Please make sure you are connected to the right network (", CONFIG.NETWORK.NAME, " Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["SpacerSmall"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__["TextDescription"], {
          style: {
            textAlign: "center",
            color: "var(--primary-text)"
          },
          children: ["We have set the gas limit to ", CONFIG.GAS_LIMIT, " for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 194,
    columnNumber: 5
  }, this);
}

_s(App, "uGHMuOhLrgqiCNB2T8fum4j1Kv4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c7 = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

__webpack_require__.$Refresh$.register(_c, "StyledButton");
__webpack_require__.$Refresh$.register(_c2, "StyledRoundButton");
__webpack_require__.$Refresh$.register(_c3, "ResponsiveWrapper");
__webpack_require__.$Refresh$.register(_c4, "StyledLogo");
__webpack_require__.$Refresh$.register(_c5, "StyledImg");
__webpack_require__.$Refresh$.register(_c6, "StyledLink");
__webpack_require__.$Refresh$.register(_c7, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.88891fb068c4e3beb87c.hot-update.js.map