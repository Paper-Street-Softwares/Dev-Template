import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0dec9dc2"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"];
import { BrowserRouter as Router, Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=0dec9dc2";
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=0dec9dc2"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import "/src/i18n.js?t=1755527841231"; // ← importa a configuração do idioma
import Index from "/src/pages/Index.jsx?t=1755528117705";
import Lp01 from "/src/pages/Lp01.jsx?t=1755522493023";
import WhatsAppLinks from "/src/components/interactives/WhatsappLinks.jsx?t=1755522493023";
// Layout fixo para o modo "site"
import SiteLayout from "/src/pages/SiteLayoult.jsx?t=1755528117705";
import Features from "/src/components/sections/Features.jsx?t=1755528117705";
import About from "/src/components/sections/About.jsx?t=1755525063390";
import Faq from "/src/components/sections/Faq.jsx?t=1755522493023";
import "/src/index.css?t=1755528117705";
import "/src/styles/backgrounds.css?t=1755518807867";
import BlogPosts from "/src/components/sections/BlogPosts.jsx?t=1755522493023";
import Maps from "/src/components/sections/Maps.jsx?t=1755522493023";
import AboutInstagram from "/src/components/sections/AboutInstagram.jsx?t=1755525116934";
// Altere aqui para "LP" ou "site"
const mode = "LP"; // só muda isso e o resto se adapta
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/ _jsxDEV(Router, {
    children: mode === "LP" ? /*#__PURE__*/ _jsxDEV(Routes, {
        children: /*#__PURE__*/ _jsxDEV(Route, {
            path: "/",
            element: /*#__PURE__*/ _jsxDEV(Index, {
                mode: mode
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                lineNumber: 29,
                columnNumber: 34
            }, void 0)
        }, void 0, false, {
            fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
            lineNumber: 29,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
        lineNumber: 28,
        columnNumber: 7
    }, this) : /*#__PURE__*/ _jsxDEV(Routes, {
        children: [
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                    lineNumber: 37,
                    columnNumber: 34
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "home",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                    lineNumber: 38,
                    columnNumber: 37
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/service",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode,
                    section: /*#__PURE__*/ _jsxDEV(Features, {
                        defaultFeature: true
                    }, void 0, false, {
                        fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                        lineNumber: 44,
                        columnNumber: 24
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                    lineNumber: 42,
                    columnNumber: 13
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/about",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode,
                    section: /*#__PURE__*/ _jsxDEV(_Fragment, {
                        children: [
                            /*#__PURE__*/ _jsxDEV(About, {}, void 0, false, {
                                fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                                lineNumber: 55,
                                columnNumber: 19
                            }, void 0),
                            /*#__PURE__*/ _jsxDEV(AboutInstagram, {
                                instagram: true
                            }, void 0, false, {
                                fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                                lineNumber: 56,
                                columnNumber: 19
                            }, void 0)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                    lineNumber: 51,
                    columnNumber: 13
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/blog",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode,
                    section: /*#__PURE__*/ _jsxDEV(BlogPosts, {}, void 0, false, {
                        fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                        lineNumber: 65,
                        columnNumber: 53
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                    lineNumber: 65,
                    columnNumber: 20
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/faq",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode,
                    section: /*#__PURE__*/ _jsxDEV(Faq, {}, void 0, false, {
                        fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                        lineNumber: 70,
                        columnNumber: 53
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                    lineNumber: 70,
                    columnNumber: 20
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(Route, {
                path: "/maps",
                element: /*#__PURE__*/ _jsxDEV(SiteLayout, {
                    mode: mode,
                    section: /*#__PURE__*/ _jsxDEV(Maps, {}, void 0, false, {
                        fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                        lineNumber: 75,
                        columnNumber: 53
                    }, void 0)
                }, void 0, false, {
                    fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                    lineNumber: 75,
                    columnNumber: 20
                }, void 0)
            }, void 0, false, {
                fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
        lineNumber: 36,
        columnNumber: 7
    }, this)
}, void 0, false, {
    fileName: "/Users/biell/Desktop/Repositorios/Template/Dev-Template/src/main.jsx",
    lineNumber: 26,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFwiLi9pMThuXCI7IC8vIOKGkCBpbXBvcnRhIGEgY29uZmlndXJhw6fDo28gZG8gaWRpb21hXG5cbmltcG9ydCBJbmRleCBmcm9tIFwiLi9wYWdlcy9JbmRleC5qc3hcIjtcbmltcG9ydCBMcDAxIGZyb20gXCIuL3BhZ2VzL0xwMDEuanN4XCI7XG5cbmltcG9ydCBXaGF0c0FwcExpbmtzIGZyb20gXCIuL2NvbXBvbmVudHMvaW50ZXJhY3RpdmVzL1doYXRzYXBwTGlua3MuanN4XCI7XG5cbi8vIExheW91dCBmaXhvIHBhcmEgbyBtb2RvIFwic2l0ZVwiXG5pbXBvcnQgU2l0ZUxheW91dCBmcm9tIFwiLi9wYWdlcy9TaXRlTGF5b3VsdC5qc3hcIjtcbmltcG9ydCBGZWF0dXJlcyBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb25zL0ZlYXR1cmVzLmpzeFwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbnMvQWJvdXQuanN4XCI7XG5pbXBvcnQgRmFxIGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbnMvRmFxLmpzeFwiO1xuXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvYmFja2dyb3VuZHMuY3NzXCI7XG5pbXBvcnQgQmxvZ1Bvc3RzIGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbnMvQmxvZ1Bvc3RzLmpzeFwiO1xuaW1wb3J0IE1hcHMgZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9ucy9NYXBzLmpzeFwiO1xuaW1wb3J0IEFib3V0SW5zdGFncmFtIGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbnMvQWJvdXRJbnN0YWdyYW0uanN4XCI7XG5cbi8vIEFsdGVyZSBhcXVpIHBhcmEgXCJMUFwiIG91IFwic2l0ZVwiXG5jb25zdCBtb2RlID0gXCJMUFwiOyAvLyBzw7MgbXVkYSBpc3NvIGUgbyByZXN0byBzZSBhZGFwdGFcblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpLnJlbmRlcihcbiAgPFJvdXRlcj5cbiAgICB7bW9kZSA9PT0gXCJMUFwiID8gKFxuICAgICAgPFJvdXRlcz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEluZGV4IG1vZGU9e21vZGV9IC8+fSAvPlxuICAgICAgICB7LyogPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PExwMDEgLz59IC8+ICovfVxuICAgICAgICB7LyogPFJvdXRlIHBhdGg9XCIvd2hhdHNhcHBcIiBlbGVtZW50PXs8V2hhdHNBcHBMaW5rcyAvPn0gLz4gKi99XG5cbiAgICAgICAgey8qIDxSb3V0ZSBwYXRoPVwiL3doYXRzYXBwXCIgZWxlbWVudD17PFdoYXRzQXBwTGlua3MgZm9ybT17dHJ1ZX0gLz59IC8+ICovfVxuICAgICAgPC9Sb3V0ZXM+XG4gICAgKSA6IChcbiAgICAgIDxSb3V0ZXM+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxTaXRlTGF5b3V0IG1vZGU9e21vZGV9IC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cImhvbWVcIiBlbGVtZW50PXs8U2l0ZUxheW91dCBtb2RlPXttb2RlfSAvPn0gLz5cbiAgICAgICAgPFJvdXRlXG4gICAgICAgICAgcGF0aD1cIi9zZXJ2aWNlXCJcbiAgICAgICAgICBlbGVtZW50PXtcbiAgICAgICAgICAgIDxTaXRlTGF5b3V0XG4gICAgICAgICAgICAgIG1vZGU9e21vZGV9XG4gICAgICAgICAgICAgIHNlY3Rpb249ezxGZWF0dXJlcyBkZWZhdWx0RmVhdHVyZT17dHJ1ZX0gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPFJvdXRlXG4gICAgICAgICAgcGF0aD1cIi9hYm91dFwiXG4gICAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgICA8U2l0ZUxheW91dFxuICAgICAgICAgICAgICBtb2RlPXttb2RlfVxuICAgICAgICAgICAgICBzZWN0aW9uPXtcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEFib3V0IC8+XG4gICAgICAgICAgICAgICAgICA8QWJvdXRJbnN0YWdyYW0gaW5zdGFncmFtPXt0cnVlfSAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgICA8Um91dGVcbiAgICAgICAgICBwYXRoPVwiL2Jsb2dcIlxuICAgICAgICAgIGVsZW1lbnQ9ezxTaXRlTGF5b3V0IG1vZGU9e21vZGV9IHNlY3Rpb249ezxCbG9nUG9zdHMgLz59IC8+fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxSb3V0ZVxuICAgICAgICAgIHBhdGg9XCIvZmFxXCJcbiAgICAgICAgICBlbGVtZW50PXs8U2l0ZUxheW91dCBtb2RlPXttb2RlfSBzZWN0aW9uPXs8RmFxIC8+fSAvPn1cbiAgICAgICAgLz5cblxuICAgICAgICA8Um91dGVcbiAgICAgICAgICBwYXRoPVwiL21hcHNcIlxuICAgICAgICAgIGVsZW1lbnQ9ezxTaXRlTGF5b3V0IG1vZGU9e21vZGV9IHNlY3Rpb249ezxNYXBzIC8+fSAvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvUm91dGVzPlxuICAgICl9XG4gIDwvUm91dGVyPlxuKTtcbiJdLCJuYW1lcyI6WyJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJSZWFjdERPTSIsIkluZGV4IiwiTHAwMSIsIldoYXRzQXBwTGlua3MiLCJTaXRlTGF5b3V0IiwiRmVhdHVyZXMiLCJBYm91dCIsIkZhcSIsIkJsb2dQb3N0cyIsIk1hcHMiLCJBYm91dEluc3RhZ3JhbSIsIm1vZGUiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInBhdGgiLCJlbGVtZW50Iiwic2VjdGlvbiIsImRlZmF1bHRGZWF0dXJlIiwiaW5zdGFncmFtIl0sIm1hcHBpbmdzIjoiO0FBQUEsU0FBU0EsaUJBQWlCQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxRQUFRLG1CQUFtQjtBQUMxRSxPQUFPQyxjQUFjLG1CQUFtQjtBQUN4QyxPQUFPLFNBQVMsQ0FBQyxxQ0FBcUM7QUFFdEQsT0FBT0MsV0FBVyxvQkFBb0I7QUFDdEMsT0FBT0MsVUFBVSxtQkFBbUI7QUFFcEMsT0FBT0MsbUJBQW1CLDhDQUE4QztBQUV4RSxpQ0FBaUM7QUFDakMsT0FBT0MsZ0JBQWdCLDBCQUEwQjtBQUNqRCxPQUFPQyxjQUFjLHFDQUFxQztBQUMxRCxPQUFPQyxXQUFXLGtDQUFrQztBQUNwRCxPQUFPQyxTQUFTLGdDQUFnQztBQUVoRCxPQUFPLGNBQWM7QUFDckIsT0FBTywyQkFBMkI7QUFDbEMsT0FBT0MsZUFBZSxzQ0FBc0M7QUFDNUQsT0FBT0MsVUFBVSxpQ0FBaUM7QUFDbEQsT0FBT0Msb0JBQW9CLDJDQUEyQztBQUV0RSxrQ0FBa0M7QUFDbEMsTUFBTUMsT0FBTyxNQUFNLG1DQUFtQztBQUV0RFgsU0FBU1ksVUFBVSxDQUFDQyxTQUFTQyxjQUFjLENBQUMsU0FBU0MsTUFBTSxlQUN6RCxRQUFDbEI7Y0FDRWMsU0FBUyxxQkFDUixRQUFDYjtrQkFDQyxjQUFBLFFBQUNDO1lBQU1pQixNQUFLO1lBQUlDLHVCQUFTLFFBQUNoQjtnQkFBTVUsTUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs2QkFPeEMsUUFBQ2I7OzBCQUNDLFFBQUNDO2dCQUFNaUIsTUFBSztnQkFBSUMsdUJBQVMsUUFBQ2I7b0JBQVdPLE1BQU1BOzs7Ozs7Ozs7OzswQkFDM0MsUUFBQ1o7Z0JBQU1pQixNQUFLO2dCQUFPQyx1QkFBUyxRQUFDYjtvQkFBV08sTUFBTUE7Ozs7Ozs7Ozs7OzBCQUM5QyxRQUFDWjtnQkFDQ2lCLE1BQUs7Z0JBQ0xDLHVCQUNFLFFBQUNiO29CQUNDTyxNQUFNQTtvQkFDTk8sdUJBQVMsUUFBQ2I7d0JBQVNjLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7OzswQkFJekMsUUFBQ3BCO2dCQUNDaUIsTUFBSztnQkFDTEMsdUJBQ0UsUUFBQ2I7b0JBQ0NPLE1BQU1BO29CQUNOTyx1QkFDRTs7MENBQ0UsUUFBQ1o7Ozs7OzBDQUNELFFBQUNJO2dDQUFlVSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3JDLFFBQUNyQjtnQkFDQ2lCLE1BQUs7Z0JBQ0xDLHVCQUFTLFFBQUNiO29CQUFXTyxNQUFNQTtvQkFBTU8sdUJBQVMsUUFBQ1Y7Ozs7Ozs7Ozs7Ozs7OzswQkFHN0MsUUFBQ1Q7Z0JBQ0NpQixNQUFLO2dCQUNMQyx1QkFBUyxRQUFDYjtvQkFBV08sTUFBTUE7b0JBQU1PLHVCQUFTLFFBQUNYOzs7Ozs7Ozs7Ozs7Ozs7MEJBRzdDLFFBQUNSO2dCQUNDaUIsTUFBSztnQkFDTEMsdUJBQVMsUUFBQ2I7b0JBQVdPLE1BQU1BO29CQUFNTyx1QkFBUyxRQUFDVCJ9