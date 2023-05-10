/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 37:
/***/ (function() {

"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var t=/\((.*)\)/.exec(this.toString());return t?t[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(t,r){return r=this.concat.apply([],this),t>1&&r.some(Array.isArray)?r.flat(t-1):r},Array.prototype.flatMap=function(t,r){return this.map(t,r).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(t){if("function"!=typeof t)return this.then(t,t);var r=this.constructor||Promise;return this.then(function(o){return r.resolve(t()).then(function(){return o})},function(o){return r.resolve(t()).then(function(){throw o})})}),Object.fromEntries||(Object.fromEntries=function(t){return Array.from(t).reduce(function(t,r){return t[r[0]]=r[1],t},{})});


/***/ }),

/***/ 4848:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(6258);
const _normalizetrailingslash = __webpack_require__(7812);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)((0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 5116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(7812);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 5701:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "detectDomainLocale", ({
    enumerable: true,
    get: function() {
        return detectDomainLocale;
    }
}));
const detectDomainLocale = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    if (false) {}
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "hasBasePath", ({
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
}));
const _pathhasprefix = __webpack_require__(3546);
const basePath =  false || "";
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map


/***/ }),

/***/ 9997:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DOMAttributeNames: function() {
        return DOMAttributeNames;
    },
    isEqualNode: function() {
        return isEqualNode;
    },
    default: function() {
        return initHeadManager;
    }
});
const DOMAttributeNames = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv",
    noModule: "noModule"
};
function reactElementToDOM(param) {
    let { type , props  } = param;
    const el = document.createElement(type);
    for(const p in props){
        if (!props.hasOwnProperty(p)) continue;
        if (p === "children" || p === "dangerouslySetInnerHTML") continue;
        // we don't render undefined props to the DOM
        if (props[p] === undefined) continue;
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
            el[attr] = !!props[p];
        } else {
            el.setAttribute(attr, props[p]);
        }
    }
    const { children , dangerouslySetInnerHTML  } = props;
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
    }
    return el;
}
function isEqualNode(oldTag, newTag) {
    if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
        const nonce = newTag.getAttribute("nonce");
        // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
        // be stripped if there is no content security policy response header that includes a nonce.
        if (nonce && !oldTag.getAttribute("nonce")) {
            const cloneTag = newTag.cloneNode(true);
            cloneTag.setAttribute("nonce", "");
            cloneTag.nonce = nonce;
            return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
        }
    }
    return oldTag.isEqualNode(newTag);
}
let updateElements;
if (false) {} else {
    updateElements = (type, components)=>{
        const headEl = document.getElementsByTagName("head")[0];
        const headCountEl = headEl.querySelector("meta[name=next-head-count]");
        if (false) {}
        const headCount = Number(headCountEl.content);
        const oldTags = [];
        for(let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null){
            var _j_tagName;
            if ((j == null ? void 0 : (_j_tagName = j.tagName) == null ? void 0 : _j_tagName.toLowerCase()) === type) {
                oldTags.push(j);
            }
        }
        const newTags = components.map(reactElementToDOM).filter((newTag)=>{
            for(let k = 0, len = oldTags.length; k < len; k++){
                const oldTag = oldTags[k];
                if (isEqualNode(oldTag, newTag)) {
                    oldTags.splice(k, 1);
                    return false;
                }
            }
            return true;
        });
        oldTags.forEach((t)=>{
            var _t_parentNode;
            return (_t_parentNode = t.parentNode) == null ? void 0 : _t_parentNode.removeChild(t);
        });
        newTags.forEach((t)=>headEl.insertBefore(t, headCountEl));
        headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
    };
}
function initHeadManager() {
    return {
        mountedInstances: new Set(),
        updateHead: (head)=>{
            const tags = {};
            head.forEach((h)=>{
                if (// it won't be inlined. In this case revert to the original behavior
                h.type === "link" && h.props["data-optimized-fonts"]) {
                    if (document.querySelector('style[data-href="' + h.props["data-href"] + '"]')) {
                        return;
                    } else {
                        h.props.href = h.props["data-href"];
                        h.props["data-href"] = undefined;
                    }
                }
                const components = tags[h.type] || [];
                components.push(h);
                tags[h.type] = components;
            });
            const titleComponent = tags.title ? tags.title[0] : null;
            let title = "";
            if (titleComponent) {
                const { children  } = titleComponent.props;
                title = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
            }
            if (title !== document.title) document.title = title;
            [
                "meta",
                "base",
                "link",
                "style",
                "script"
            ].forEach((type)=>{
                updateElements(type, tags[type] || []);
            });
        }
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head-manager.js.map


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global location */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interop_require_wildcard = __webpack_require__(1757);
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    version: function() {
        return version;
    },
    router: function() {
        return router;
    },
    emitter: function() {
        return emitter;
    },
    initialize: function() {
        return initialize;
    },
    hydrate: function() {
        return hydrate;
    }
});
const _interop_require_default = __webpack_require__(8754);
__webpack_require__(37);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5784));
const _client = /*#__PURE__*/ _interop_require_default._(__webpack_require__(7618));
const _headmanagercontext = __webpack_require__(3142);
const _mitt = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5344));
const _routercontext = __webpack_require__(7220);
const _handlesmoothscroll = __webpack_require__(7232);
const _isdynamic = __webpack_require__(4030);
const _querystring = __webpack_require__(6607);
const _runtimeconfig = __webpack_require__(6333);
const _utils = __webpack_require__(6873);
const _portal = __webpack_require__(1826);
const _headmanager = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9997));
const _pageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(795));
const _performancerelayer = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9442));
const _routeannouncer = __webpack_require__(9190);
const _router = __webpack_require__(3598);
const _iserror = __webpack_require__(676);
const _imageconfigcontext = __webpack_require__(9677);
const _removebasepath = __webpack_require__(303);
const _hasbasepath = __webpack_require__(1219);
const _approutercontext = __webpack_require__(6102);
const _adapters = __webpack_require__(1066);
const _hooksclientcontext = __webpack_require__(8747);
const _onrecoverableerror = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9899));
const version = "13.4.1";
let router;
const emitter = (0, _mitt.default)();
const looseToArray = (input)=>[].slice.call(input);
let initialData;
let defaultLocale = undefined;
let asPath;
let pageLoader;
let appElement;
let headManager;
let initialMatchesMiddleware = false;
let lastAppProps;
let lastRenderReject;
let webpackHMR;
let CachedApp, onPerfEntry;
let CachedComponent;
self.__next_require__ = __webpack_require__;
class Container extends _react.default.Component {
    componentDidCatch(componentErr, info) {
        this.props.fn(componentErr, info);
    }
    componentDidMount() {
        this.scrollToHash();
        // We need to replace the router state if:
        // - the page was (auto) exported and has a query string or search (hash)
        // - it was auto exported and is a dynamic route (to provide params)
        // - if it is a client-side skeleton (fallback render)
        // - if middleware matches the current page (may have rewrite params)
        // - if rewrites in next.config.js match (may have rewrite params)
        if (router.isSsr && (initialData.isFallback || initialData.nextExport && ((0, _isdynamic.isDynamicRoute)(router.pathname) || location.search || false || initialMatchesMiddleware) || initialData.props && initialData.props.__N_SSG && (location.search || false || initialMatchesMiddleware))) {
            // update query on mount for exported pages
            router.replace(router.pathname + "?" + String((0, _querystring.assign)((0, _querystring.urlQueryToSearchParams)(router.query), new URLSearchParams(location.search))), asPath, {
                // @ts-ignore
                // WARNING: `_h` is an internal option for handing Next.js
                // client-side hydration. Your app should _never_ use this property.
                // It may change at any time without notice.
                _h: 1,
                // Fallback pages must trigger the data fetch, so the transition is
                // not shallow.
                // Other pages (strictly updating query) happens shallowly, as data
                // requirements would already be present.
                shallow: !initialData.isFallback && !initialMatchesMiddleware
            }).catch((err)=>{
                if (!err.cancelled) throw err;
            });
        }
    }
    componentDidUpdate() {
        this.scrollToHash();
    }
    scrollToHash() {
        let { hash  } = location;
        hash = hash && hash.substring(1);
        if (!hash) return;
        const el = document.getElementById(hash);
        if (!el) return;
        // If we call scrollIntoView() in here without a setTimeout
        // it won't scroll properly.
        setTimeout(()=>el.scrollIntoView(), 0);
    }
    render() {
        if (true) {
            return this.props.children;
        } else {}
    }
}
async function initialize(opts) {
    if (opts === void 0) opts = {};
    // This makes sure this specific lines are removed in production
    if (false) {}
    initialData = JSON.parse(document.getElementById("__NEXT_DATA__").textContent);
    window.__NEXT_DATA__ = initialData;
    defaultLocale = initialData.defaultLocale;
    const prefix = initialData.assetPrefix || "";
    // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
    // So, this is how we do it in the client side at runtime
    __webpack_require__.p = "" + prefix + "/_next/" //eslint-disable-line
    ;
    // Initialize next/config with the environment configuration
    (0, _runtimeconfig.setConfig)({
        serverRuntimeConfig: {},
        publicRuntimeConfig: initialData.runtimeConfig || {}
    });
    asPath = (0, _utils.getURL)();
    // make sure not to attempt stripping basePath for 404s
    if ((0, _hasbasepath.hasBasePath)(asPath)) {
        asPath = (0, _removebasepath.removeBasePath)(asPath);
    }
    if (false) {}
    if (initialData.scriptLoader) {
        const { initScriptLoader  } = __webpack_require__(6431);
        initScriptLoader(initialData.scriptLoader);
    }
    pageLoader = new _pageloader.default(initialData.buildId, prefix);
    const register = (param)=>{
        let [r, f] = param;
        return pageLoader.routeLoader.onEntrypoint(r, f);
    };
    if (window.__NEXT_P) {
        // Defer page registration for another tick. This will increase the overall
        // latency in hydrating the page, but reduce the total blocking time.
        window.__NEXT_P.map((p)=>setTimeout(()=>register(p), 0));
    }
    window.__NEXT_P = [];
    window.__NEXT_P.push = register;
    headManager = (0, _headmanager.default)();
    headManager.getIsSsr = ()=>{
        return router.isSsr;
    };
    appElement = document.getElementById("__next");
    return {
        assetPrefix: prefix
    };
}
function renderApp(App, appProps) {
    return /*#__PURE__*/ _react.default.createElement(App, appProps);
}
function AppContainer(param) {
    let { children  } = param;
    var _self___NEXT_DATA___autoExport;
    return /*#__PURE__*/ _react.default.createElement(Container, {
        fn: (error)=>// eslint-disable-next-line @typescript-eslint/no-use-before-define
            renderError({
                App: CachedApp,
                err: error
            }).catch((err)=>console.error("Error rendering page: ", err))
    }, /*#__PURE__*/ _react.default.createElement(_approutercontext.AppRouterContext.Provider, {
        value: (0, _adapters.adaptForAppRouterInstance)(router)
    }, /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.SearchParamsContext.Provider, {
        value: (0, _adapters.adaptForSearchParams)(router)
    }, /*#__PURE__*/ _react.default.createElement(_adapters.PathnameContextProviderAdapter, {
        router: router,
        isAutoExport: (_self___NEXT_DATA___autoExport = self.__NEXT_DATA__.autoExport) != null ? _self___NEXT_DATA___autoExport : false
    }, /*#__PURE__*/ _react.default.createElement(_routercontext.RouterContext.Provider, {
        value: (0, _router.makePublicRouterInstance)(router)
    }, /*#__PURE__*/ _react.default.createElement(_headmanagercontext.HeadManagerContext.Provider, {
        value: headManager
    }, /*#__PURE__*/ _react.default.createElement(_imageconfigcontext.ImageConfigContext.Provider, {
        value: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
    }, children)))))));
}
const wrapApp = (App)=>(wrappedAppProps)=>{
        const appProps = {
            ...wrappedAppProps,
            Component: CachedComponent,
            err: initialData.err,
            router
        };
        return /*#__PURE__*/ _react.default.createElement(AppContainer, null, renderApp(App, appProps));
    };
// This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.
function renderError(renderErrorProps) {
    let { App , err  } = renderErrorProps;
    // In development runtime errors are caught by our overlay
    // In production we catch runtime errors using componentDidCatch which will trigger renderError
    if (false) {}
    // Make sure we log the error to the console, otherwise users can't track down issues.
    console.error(err);
    console.error("A client-side exception has occurred, see here for more info: https://nextjs.org/docs/messages/client-side-exception-occurred");
    return pageLoader.loadPage("/_error").then((param)=>{
        let { page: ErrorComponent , styleSheets  } = param;
        return (lastAppProps == null ? void 0 : lastAppProps.Component) === ErrorComponent ? Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(2512))).then((errorModule)=>{
            return Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(3439))).then((appModule)=>{
                App = appModule.default;
                renderErrorProps.App = App;
                return errorModule;
            });
        }).then((m)=>({
                ErrorComponent: m.default,
                styleSheets: []
            })) : {
            ErrorComponent,
            styleSheets
        };
    }).then((param)=>{
        let { ErrorComponent , styleSheets  } = param;
        var _renderErrorProps_props;
        // In production we do a normal render with the `ErrorComponent` as component.
        // If we've gotten here upon initial render, we can use the props from the server.
        // Otherwise, we need to call `getInitialProps` on `App` before mounting.
        const AppTree = wrapApp(App);
        const appCtx = {
            Component: ErrorComponent,
            AppTree,
            router,
            ctx: {
                err,
                pathname: initialData.page,
                query: initialData.query,
                asPath,
                AppTree
            }
        };
        return Promise.resolve(((_renderErrorProps_props = renderErrorProps.props) == null ? void 0 : _renderErrorProps_props.err) ? renderErrorProps.props : (0, _utils.loadGetInitialProps)(App, appCtx)).then((initProps)=>// eslint-disable-next-line @typescript-eslint/no-use-before-define
            doRender({
                ...renderErrorProps,
                err,
                Component: ErrorComponent,
                styleSheets,
                props: initProps
            }));
    });
}
// Dummy component that we render as a child of Root so that we can
// toggle the correct styles before the page is rendered.
function Head(param) {
    let { callback  } = param;
    // We use `useLayoutEffect` to guarantee the callback is executed
    // as soon as React flushes the update.
    _react.default.useLayoutEffect(()=>callback(), [
        callback
    ]);
    return null;
}
let reactRoot = null;
// On initial render a hydrate should always happen
let shouldHydrate = true;
function clearMarks() {
    [
        "beforeRender",
        "afterHydrate",
        "afterRender",
        "routeChange"
    ].forEach((mark)=>performance.clearMarks(mark));
}
function markHydrateComplete() {
    if (!_utils.ST) return;
    performance.mark("afterHydrate") // mark end of hydration
    ;
    performance.measure("Next.js-before-hydration", "navigationStart", "beforeRender");
    performance.measure("Next.js-hydration", "beforeRender", "afterHydrate");
    if (onPerfEntry) {
        performance.getEntriesByName("Next.js-hydration").forEach(onPerfEntry);
    }
    clearMarks();
}
function markRenderComplete() {
    if (!_utils.ST) return;
    performance.mark("afterRender") // mark end of render
    ;
    const navStartEntries = performance.getEntriesByName("routeChange", "mark");
    if (!navStartEntries.length) return;
    performance.measure("Next.js-route-change-to-render", navStartEntries[0].name, "beforeRender");
    performance.measure("Next.js-render", "beforeRender", "afterRender");
    if (onPerfEntry) {
        performance.getEntriesByName("Next.js-render").forEach(onPerfEntry);
        performance.getEntriesByName("Next.js-route-change-to-render").forEach(onPerfEntry);
    }
    clearMarks();
    [
        "Next.js-route-change-to-render",
        "Next.js-render"
    ].forEach((measure)=>performance.clearMeasures(measure));
}
function renderReactElement(domEl, fn) {
    // mark start of hydrate/render
    if (_utils.ST) {
        performance.mark("beforeRender");
    }
    const reactEl = fn(shouldHydrate ? markHydrateComplete : markRenderComplete);
    if (!reactRoot) {
        // Unlike with createRoot, you don't need a separate root.render() call here
        reactRoot = _client.default.hydrateRoot(domEl, reactEl, {
            onRecoverableError: _onrecoverableerror.default
        });
        // TODO: Remove shouldHydrate variable when React 18 is stable as it can depend on `reactRoot` existing
        shouldHydrate = false;
    } else {
        const startTransition = _react.default.startTransition;
        startTransition(()=>{
            reactRoot.render(reactEl);
        });
    }
}
function Root(param) {
    let { callbacks , children  } = param;
    // We use `useLayoutEffect` to guarantee the callbacks are executed
    // as soon as React flushes the update
    _react.default.useLayoutEffect(()=>callbacks.forEach((callback)=>callback()), [
        callbacks
    ]);
    // We should ask to measure the Web Vitals after rendering completes so we
    // don't cause any hydration delay:
    _react.default.useEffect(()=>{
        (0, _performancerelayer.default)(onPerfEntry);
    }, []);
    if (false) {}
    return children;
}
function doRender(input) {
    let { App , Component , props , err  } = input;
    let styleSheets = "initial" in input ? undefined : input.styleSheets;
    Component = Component || lastAppProps.Component;
    props = props || lastAppProps.props;
    const appProps = {
        ...props,
        Component,
        err,
        router
    };
    // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.
    lastAppProps = appProps;
    let canceled = false;
    let resolvePromise;
    const renderPromise = new Promise((resolve, reject)=>{
        if (lastRenderReject) {
            lastRenderReject();
        }
        resolvePromise = ()=>{
            lastRenderReject = null;
            resolve();
        };
        lastRenderReject = ()=>{
            canceled = true;
            lastRenderReject = null;
            const error = new Error("Cancel rendering route");
            error.cancelled = true;
            reject(error);
        };
    });
    // This function has a return type to ensure it doesn't start returning a
    // Promise. It should remain synchronous.
    function onStart() {
        if (!styleSheets || // We use `style-loader` in development, so we don't need to do anything
        // unless we're in production:
        "production" !== "production") {
            return false;
        }
        const currentStyleTags = looseToArray(document.querySelectorAll("style[data-n-href]"));
        const currentHrefs = new Set(currentStyleTags.map((tag)=>tag.getAttribute("data-n-href")));
        const noscript = document.querySelector("noscript[data-n-css]");
        const nonce = noscript == null ? void 0 : noscript.getAttribute("data-n-css");
        styleSheets.forEach((param)=>{
            let { href , text  } = param;
            if (!currentHrefs.has(href)) {
                const styleTag = document.createElement("style");
                styleTag.setAttribute("data-n-href", href);
                styleTag.setAttribute("media", "x");
                if (nonce) {
                    styleTag.setAttribute("nonce", nonce);
                }
                document.head.appendChild(styleTag);
                styleTag.appendChild(document.createTextNode(text));
            }
        });
        return true;
    }
    function onHeadCommit() {
        if (// unless we're in production:
         true && // We can skip this during hydration. Running it wont cause any harm, but
        // we may as well save the CPU cycles:
        styleSheets && // Ensure this render was not canceled
        !canceled) {
            const desiredHrefs = new Set(styleSheets.map((s)=>s.href));
            const currentStyleTags = looseToArray(document.querySelectorAll("style[data-n-href]"));
            const currentHrefs = currentStyleTags.map((tag)=>tag.getAttribute("data-n-href"));
            // Toggle `<style>` tags on or off depending on if they're needed:
            for(let idx = 0; idx < currentHrefs.length; ++idx){
                if (desiredHrefs.has(currentHrefs[idx])) {
                    currentStyleTags[idx].removeAttribute("media");
                } else {
                    currentStyleTags[idx].setAttribute("media", "x");
                }
            }
            // Reorder styles into intended order:
            let referenceNode = document.querySelector("noscript[data-n-css]");
            if (referenceNode) {
                styleSheets.forEach((param)=>{
                    let { href  } = param;
                    const targetTag = document.querySelector('style[data-n-href="' + href + '"]');
                    if (targetTag) {
                        referenceNode.parentNode.insertBefore(targetTag, referenceNode.nextSibling);
                        referenceNode = targetTag;
                    }
                });
            }
            // Finally, clean up server rendered stylesheets:
            looseToArray(document.querySelectorAll("link[data-n-p]")).forEach((el)=>{
                el.parentNode.removeChild(el);
            });
        }
        if (input.scroll) {
            const { x , y  } = input.scroll;
            (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                window.scrollTo(x, y);
            });
        }
    }
    function onRootCommit() {
        resolvePromise();
    }
    onStart();
    const elem = /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(Head, {
        callback: onHeadCommit
    }), /*#__PURE__*/ _react.default.createElement(AppContainer, null, renderApp(App, appProps), /*#__PURE__*/ _react.default.createElement(_portal.Portal, {
        type: "next-route-announcer"
    }, /*#__PURE__*/ _react.default.createElement(_routeannouncer.RouteAnnouncer, null))));
    // We catch runtime errors using componentDidCatch which will trigger renderError
    renderReactElement(appElement, (callback)=>/*#__PURE__*/ _react.default.createElement(Root, {
            callbacks: [
                callback,
                onRootCommit
            ]
        },  false ? /*#__PURE__*/ 0 : elem));
    return renderPromise;
}
async function render(renderingProps) {
    if (renderingProps.err) {
        await renderError(renderingProps);
        return;
    }
    try {
        await doRender(renderingProps);
    } catch (err) {
        const renderErr = (0, _iserror.getProperError)(err);
        // bubble up cancelation errors
        if (renderErr.cancelled) {
            throw renderErr;
        }
        if (false) {}
        await renderError({
            ...renderingProps,
            err: renderErr
        });
    }
}
async function hydrate(opts) {
    let initialErr = initialData.err;
    try {
        const appEntrypoint = await pageLoader.routeLoader.whenEntrypoint("/_app");
        if ("error" in appEntrypoint) {
            throw appEntrypoint.error;
        }
        const { component: app , exports: mod  } = appEntrypoint;
        CachedApp = app;
        if (mod && mod.reportWebVitals) {
            onPerfEntry = (param)=>{
                let { id , name , startTime , value , duration , entryType , entries , attribution  } = param;
                // Combines timestamp with random number for unique ID
                const uniqueID = Date.now() + "-" + (Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                let perfStartEntry;
                if (entries && entries.length) {
                    perfStartEntry = entries[0].startTime;
                }
                const webVitals = {
                    id: id || uniqueID,
                    name,
                    startTime: startTime || perfStartEntry,
                    value: value == null ? duration : value,
                    label: entryType === "mark" || entryType === "measure" ? "custom" : "web-vital"
                };
                if (attribution) {
                    webVitals.attribution = attribution;
                }
                mod.reportWebVitals(webVitals);
            };
        }
        const pageEntrypoint = // error, so we need to skip waiting for the entrypoint.
         false ? 0 : await pageLoader.routeLoader.whenEntrypoint(initialData.page);
        if ("error" in pageEntrypoint) {
            throw pageEntrypoint.error;
        }
        CachedComponent = pageEntrypoint.component;
        if (false) {}
    } catch (error) {
        // This catches errors like throwing in the top level of a module
        initialErr = (0, _iserror.getProperError)(error);
    }
    if (false) {}
    if (window.__NEXT_PRELOADREADY) {
        await window.__NEXT_PRELOADREADY(initialData.dynamicIds);
    }
    router = (0, _router.createRouter)(initialData.page, initialData.query, asPath, {
        initialProps: initialData.props,
        pageLoader,
        App: CachedApp,
        Component: CachedComponent,
        wrapApp,
        err: initialErr,
        isFallback: Boolean(initialData.isFallback),
        subscription: (info, App, scroll)=>render(Object.assign({}, info, {
                App,
                scroll
            })),
        locale: initialData.locale,
        locales: initialData.locales,
        defaultLocale,
        domainLocales: initialData.domainLocales,
        isPreview: initialData.isPreview
    });
    initialMatchesMiddleware = await router._initialMatchesMiddlewarePromise;
    const renderCtx = {
        App: CachedApp,
        initial: true,
        Component: CachedComponent,
        props: initialData.props,
        err: initialErr
    };
    if (opts == null ? void 0 : opts.beforeRender) {
        await opts.beforeRender();
    }
    render(renderCtx);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map


/***/ }),

/***/ 2768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _ = __webpack_require__(35);
window.next = {
    version: _.version,
    // router is initialized later so it has to be live-binded
    get router () {
        return _.router;
    },
    emitter: _.emitter
};
(0, _.initialize)({}).then(()=>(0, _.hydrate)()).catch(console.error);
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=next.js.map


/***/ }),

/***/ 7812:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(386);
const _parsepath = __webpack_require__(5606);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsepath.parsePath)(path);
    if (false) {}
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 9899:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return onRecoverableError;
    }
}));
const _nossrerror = __webpack_require__(9757);
function onRecoverableError(err) {
    // Using default react onRecoverableError
    // x-ref: https://github.com/facebook/react/blob/d4bc16a7d69eb2ea38a88c8ac0b461d5f72cdcab/packages/react-dom/src/client/ReactDOMRoot.js#L83
    const defaultOnRecoverableError = typeof reportError === "function" ? reportError : (error)=>{
        window.console.error(error);
    };
    // Skip certain custom errors which are not expected to be reported on client
    if (err.digest === _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE) return;
    defaultOnRecoverableError(err);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=on-recoverable-error.js.map


/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return PageLoader;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _addbasepath = __webpack_require__(4848);
const _interpolateas = __webpack_require__(5466);
const _getassetpathfromroute = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8473));
const _addlocale = __webpack_require__(5116);
const _isdynamic = __webpack_require__(4030);
const _parserelativeurl = __webpack_require__(4393);
const _removetrailingslash = __webpack_require__(386);
const _routeloader = __webpack_require__(5202);
class PageLoader {
    getPageList() {
        if (true) {
            return (0, _routeloader.getClientBuildManifest)().then((manifest)=>manifest.sortedPages);
        } else {}
    }
    getMiddleware() {
        if (true) {
            const middlewareMatchers = [];
            window.__MIDDLEWARE_MATCHERS = middlewareMatchers ? middlewareMatchers : undefined;
            return window.__MIDDLEWARE_MATCHERS;
        } else {}
    }
    getDataHref(params) {
        const { asPath , href , locale  } = params;
        const { pathname: hrefPathname , query , search  } = (0, _parserelativeurl.parseRelativeUrl)(href);
        const { pathname: asPathname  } = (0, _parserelativeurl.parseRelativeUrl)(asPath);
        const route = (0, _removetrailingslash.removeTrailingSlash)(hrefPathname);
        if (route[0] !== "/") {
            throw new Error('Route name should start with a "/", got "' + route + '"');
        }
        const getHrefForSlug = (path)=>{
            const dataRoute = (0, _getassetpathfromroute.default)((0, _removetrailingslash.removeTrailingSlash)((0, _addlocale.addLocale)(path, locale)), ".json");
            return (0, _addbasepath.addBasePath)("/_next/data/" + this.buildId + dataRoute + search, true);
        };
        return getHrefForSlug(params.skipInterpolation ? asPathname : (0, _isdynamic.isDynamicRoute)(route) ? (0, _interpolateas.interpolateAs)(hrefPathname, asPathname, query).result : route);
    }
    _isSsg(/** the route (file-system path) */ route) {
        return this.promisedSsgManifest.then((manifest)=>manifest.has(route));
    }
    loadPage(route) {
        return this.routeLoader.loadRoute(route).then((res)=>{
            if ("component" in res) {
                return {
                    page: res.component,
                    mod: res.exports,
                    styleSheets: res.styles.map((o)=>({
                            href: o.href,
                            text: o.content
                        }))
                };
            }
            throw res.error;
        });
    }
    prefetch(route) {
        return this.routeLoader.prefetch(route);
    }
    constructor(buildId, assetPrefix){
        this.routeLoader = (0, _routeloader.createRouteLoader)(assetPrefix);
        this.buildId = buildId;
        this.assetPrefix = assetPrefix;
        this.promisedSsgManifest = new Promise((resolve)=>{
            if (window.__SSG_MANIFEST) {
                resolve(window.__SSG_MANIFEST);
            } else {
                window.__SSG_MANIFEST_CB = ()=>{
                    resolve(window.__SSG_MANIFEST);
                };
            }
        });
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=page-loader.js.map


/***/ }),

/***/ 9442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global location */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
// copied to prevent pulling in un-necessary utils
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
const initialHref = location.href;
let isRegistered = false;
let userReportHandler;
function onReport(metric) {
    if (userReportHandler) {
        userReportHandler(metric);
    }
    // This code is not shipped, executed, or present in the client-side
    // JavaScript bundle unless explicitly enabled in your application.
    //
    // When this feature is enabled, we'll make it very clear by printing a
    // message during the build (`next build`).
    if (false) { var _window___NEXT_DATA__; }
}
const _default = (onPerfEntry)=>{
    // Update function if it changes:
    userReportHandler = onPerfEntry;
    // Only register listeners once:
    if (isRegistered) {
        return;
    }
    isRegistered = true;
    const attributions = undefined;
    for (const webVital of WEB_VITALS){
        try {
            let mod;
            if (false) {}
            if (!mod) {
                mod = __webpack_require__(8018);
            }
            mod["on" + webVital](onReport);
        } catch (err) {
            // Do nothing if the module fails to load
            console.warn("Failed to track " + webVital + " web-vital", err);
        }
    }
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=performance-relayer.js.map


/***/ }),

/***/ 1826:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Portal", ({
    enumerable: true,
    get: function() {
        return Portal;
    }
}));
const _react = __webpack_require__(5784);
const _reactdom = __webpack_require__(8369);
const Portal = (param)=>{
    let { children , type  } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const element = document.createElement(type);
        document.body.appendChild(element);
        setPortalNode(element);
        return ()=>{
            document.body.removeChild(element);
        };
    }, [
        type
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(children, portalNode) : null;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeBasePath", ({
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
}));
const _hasbasepath = __webpack_require__(1219);
const basePath =  false || "";
function removeBasePath(path) {
    if (false) {}
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = "/" + path;
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map


/***/ }),

/***/ 3215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeLocale", ({
    enumerable: true,
    get: function() {
        return removeLocale;
    }
}));
const _parsepath = __webpack_require__(5606);
function removeLocale(path, locale) {
    if (false) {}
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-locale.js.map


/***/ }),

/***/ 7027:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 9190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RouteAnnouncer: function() {
        return RouteAnnouncer;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = __webpack_require__(8754);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5784));
const _router = __webpack_require__(3598);
const nextjsRouteAnnouncerStyles = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 0,
    width: "1px",
    // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
    whiteSpace: "nowrap",
    wordWrap: "normal"
};
const RouteAnnouncer = ()=>{
    const { asPath  } = (0, _router.useRouter)();
    const [routeAnnouncement, setRouteAnnouncement] = _react.default.useState("");
    // Only announce the path change, but not for the first load because screen
    // reader will do that automatically.
    const previouslyLoadedPath = _react.default.useRef(asPath);
    // Every time the path changes, announce the new page’s title following this
    // priority: first the document title (from head), otherwise the first h1, or
    // if none of these exist, then the pathname from the URL. This methodology is
    // inspired by Marcy Sutton’s accessible client routing user testing. More
    // information can be found here:
    // https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/
    _react.default.useEffect(()=>{
        // If the path hasn't change, we do nothing.
        if (previouslyLoadedPath.current === asPath) return;
        previouslyLoadedPath.current = asPath;
        if (document.title) {
            setRouteAnnouncement(document.title);
        } else {
            const pageHeader = document.querySelector("h1");
            var _pageHeader_innerText;
            const content = (_pageHeader_innerText = pageHeader == null ? void 0 : pageHeader.innerText) != null ? _pageHeader_innerText : pageHeader == null ? void 0 : pageHeader.textContent;
            setRouteAnnouncement(content || asPath);
        }
    }, [
        asPath
    ]);
    return /*#__PURE__*/ _react.default.createElement("p", {
        "aria-live": "assertive" // Make the announcement immediately.
        ,
        id: "__next-route-announcer__",
        role: "alert",
        style: nextjsRouteAnnouncerStyles
    }, routeAnnouncement);
};
const _default = RouteAnnouncer;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-announcer.js.map


/***/ }),

/***/ 5202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    markAssetError: function() {
        return markAssetError;
    },
    isAssetError: function() {
        return isAssetError;
    },
    getClientBuildManifest: function() {
        return getClientBuildManifest;
    },
    createRouteLoader: function() {
        return createRouteLoader;
    }
});
const _interop_require_default = __webpack_require__(8754);
const _getassetpathfromroute = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8473));
const _trustedtypes = __webpack_require__(5980);
const _requestidlecallback = __webpack_require__(7027);
// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY = 3800;
function withFuture(key, map, generator) {
    let entry = map.get(key);
    if (entry) {
        if ("future" in entry) {
            return entry.future;
        }
        return Promise.resolve(entry);
    }
    let resolver;
    const prom = new Promise((resolve)=>{
        resolver = resolve;
    });
    map.set(key, entry = {
        resolve: resolver,
        future: prom
    });
    return generator ? generator() // eslint-disable-next-line no-sequences
    .then((value)=>(resolver(value), value)).catch((err)=>{
        map.delete(key);
        throw err;
    }) : prom;
}
const ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR");
function markAssetError(err) {
    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}
function isAssetError(err) {
    return err && ASSET_LOAD_ERROR in err;
}
function hasPrefetch(link) {
    try {
        link = document.createElement("link");
        return(// with relList.support
        !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports("prefetch"));
    } catch (e) {
        return false;
    }
}
const canPrefetch = hasPrefetch();
function prefetchViaDom(href, as, link) {
    return new Promise((resolve, reject)=>{
        const selector = '\n      link[rel="prefetch"][href^="' + href + '"],\n      link[rel="preload"][href^="' + href + '"],\n      script[src^="' + href + '"]';
        if (document.querySelector(selector)) {
            return resolve();
        }
        link = document.createElement("link");
        // The order of property assignment here is intentional:
        if (as) link.as = as;
        link.rel = "prefetch";
        link.crossOrigin = undefined;
        link.onload = resolve;
        link.onerror = ()=>reject(markAssetError(new Error("Failed to prefetch: " + href)));
        // `href` should always be last:
        link.href = href;
        document.head.appendChild(link);
    });
}
function appendScript(src, script) {
    return new Promise((resolve, reject)=>{
        script = document.createElement("script");
        // The order of property assignment here is intentional.
        // 1. Setup success/failure hooks in case the browser synchronously
        //    executes when `src` is set.
        script.onload = resolve;
        script.onerror = ()=>reject(markAssetError(new Error("Failed to load script: " + src)));
        // 2. Configure the cross-origin attribute before setting `src` in case the
        //    browser begins to fetch.
        script.crossOrigin = undefined;
        // 3. Finally, set the source and inject into the DOM in case the child
        //    must be appended for fetching to start.
        script.src = src;
        document.body.appendChild(script);
    });
}
// We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.
let devBuildPromise;
// Resolve a promise that times out after given amount of milliseconds.
function resolvePromiseWithTimeout(p, ms, err) {
    return new Promise((resolve, reject)=>{
        let cancelled = false;
        p.then((r)=>{
            // Resolved, cancel the timeout
            cancelled = true;
            resolve(r);
        }).catch(reject);
        // We wrap these checks separately for better dead-code elimination in
        // production bundles.
        if (false) {}
        if (true) {
            (0, _requestidlecallback.requestIdleCallback)(()=>setTimeout(()=>{
                    if (!cancelled) {
                        reject(err);
                    }
                }, ms));
        }
    });
}
function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
    }
    const onBuildManifest = new Promise((resolve)=>{
        // Mandatory because this is not concurrent safe:
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = ()=>{
            resolve(self.__BUILD_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client build manifest")));
}
function getFilesForRoute(assetPrefix, route) {
    if (false) {}
    return getClientBuildManifest().then((manifest)=>{
        if (!(route in manifest)) {
            throw markAssetError(new Error("Failed to lookup route: " + route));
        }
        const allFiles = manifest[route].map((entry)=>assetPrefix + "/_next/" + encodeURI(entry));
        return {
            scripts: allFiles.filter((v)=>v.endsWith(".js")).map((v)=>(0, _trustedtypes.__unsafeCreateTrustedScriptURL)(v)),
            css: allFiles.filter((v)=>v.endsWith(".css"))
        };
    });
}
function createRouteLoader(assetPrefix) {
    const entrypoints = new Map();
    const loadedScripts = new Map();
    const styleSheets = new Map();
    const routes = new Map();
    function maybeExecuteScript(src) {
        // With HMR we might need to "reload" scripts when they are
        // disposed and readded. Executing scripts twice has no functional
        // differences
        if (true) {
            let prom = loadedScripts.get(src.toString());
            if (prom) {
                return prom;
            }
            // Skip executing script if it's already in the DOM:
            if (document.querySelector('script[src^="' + src + '"]')) {
                return Promise.resolve();
            }
            loadedScripts.set(src.toString(), prom = appendScript(src));
            return prom;
        } else {}
    }
    function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
            return prom;
        }
        styleSheets.set(href, prom = fetch(href).then((res)=>{
            if (!res.ok) {
                throw new Error("Failed to load stylesheet: " + href);
            }
            return res.text().then((text)=>({
                    href: href,
                    content: text
                }));
        }).catch((err)=>{
            throw markAssetError(err);
        }));
        return prom;
    }
    return {
        whenEntrypoint (route) {
            return withFuture(route, entrypoints);
        },
        onEntrypoint (route, execute) {
            (execute ? Promise.resolve().then(()=>execute()).then((exports1)=>({
                    component: exports1 && exports1.default || exports1,
                    exports: exports1
                }), (err)=>({
                    error: err
                })) : Promise.resolve(undefined)).then((input)=>{
                const old = entrypoints.get(route);
                if (old && "resolve" in old) {
                    if (input) {
                        entrypoints.set(route, input);
                        old.resolve(input);
                    }
                } else {
                    if (input) {
                        entrypoints.set(route, input);
                    } else {
                        entrypoints.delete(route);
                    }
                    // when this entrypoint has been resolved before
                    // the route is outdated and we want to invalidate
                    // this cache entry
                    routes.delete(route);
                }
            });
        },
        loadRoute (route, prefetch) {
            return withFuture(route, routes, ()=>{
                let devBuildPromiseResolve;
                if (false) {}
                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then((param)=>{
                    let { scripts , css  } = param;
                    return Promise.all([
                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                        Promise.all(css.map(fetchStyleSheet))
                    ]);
                }).then((res)=>{
                    return this.whenEntrypoint(route).then((entrypoint)=>({
                            entrypoint,
                            styles: res[1]
                        }));
                }), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: " + route))).then((param)=>{
                    let { entrypoint , styles  } = param;
                    const res = Object.assign({
                        styles: styles
                    }, entrypoint);
                    return "error" in entrypoint ? entrypoint : res;
                }).catch((err)=>{
                    if (prefetch) {
                        // we don't want to cache errors during prefetch
                        throw err;
                    }
                    return {
                        error: err
                    };
                }).finally(()=>{
                    return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
                });
            });
        },
        prefetch (route) {
            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
            // License: Apache 2.0
            let cn;
            if (cn = navigator.connection) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
            }
            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script.toString(), "script")) : [])).then(()=>{
                (0, _requestidlecallback.requestIdleCallback)(()=>this.loadRoute(route, true).catch(()=>{}));
            }).catch(()=>{});
        }
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-loader.js.map


/***/ }),

/***/ 3598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global window */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Router: function() {
        return _router.default;
    },
    // Export the singletonRouter and this is the public API.
    default: function() {
        return _default;
    },
    withRouter: function() {
        return _withrouter.default;
    },
    useRouter: function() {
        return useRouter;
    },
    createRouter: function() {
        return createRouter;
    },
    makePublicRouterInstance: function() {
        return makePublicRouterInstance;
    }
});
const _interop_require_default = __webpack_require__(8754);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5784));
const _router = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9004));
const _routercontext = __webpack_require__(7220);
const _iserror = /*#__PURE__*/ _interop_require_default._(__webpack_require__(676));
const _withrouter = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8799));
const singletonRouter = {
    router: null,
    readyCallbacks: [],
    ready (cb) {
        if (this.router) return cb();
        if (true) {
            this.readyCallbacks.push(cb);
        }
    }
};
// Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = [
    "pathname",
    "route",
    "query",
    "asPath",
    "components",
    "isFallback",
    "basePath",
    "locale",
    "locales",
    "defaultLocale",
    "isReady",
    "isPreview",
    "isLocaleDomain",
    "domainLocales"
];
const routerEvents = [
    "routeChangeStart",
    "beforeHistoryChange",
    "routeChangeComplete",
    "routeChangeError",
    "hashChangeStart",
    "hashChangeComplete"
];
const coreMethodFields = [
    "push",
    "replace",
    "reload",
    "back",
    "prefetch",
    "beforePopState"
];
// Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, "events", {
    get () {
        return _router.default.events;
    }
});
function getRouter() {
    if (!singletonRouter.router) {
        const message = "No router instance found.\n" + 'You should only use "next/router" on the client side of your app.\n';
        throw new Error(message);
    }
    return singletonRouter.router;
}
urlPropertyFields.forEach((field)=>{
    // Here we need to use Object.defineProperty because we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    Object.defineProperty(singletonRouter, field, {
        get () {
            const router = getRouter();
            return router[field];
        }
    });
});
coreMethodFields.forEach((field)=>{
    singletonRouter[field] = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const router = getRouter();
        return router[field](...args);
    };
});
routerEvents.forEach((event)=>{
    singletonRouter.ready(()=>{
        _router.default.events.on(event, function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
            const _singletonRouter = singletonRouter;
            if (_singletonRouter[eventField]) {
                try {
                    _singletonRouter[eventField](...args);
                } catch (err) {
                    console.error("Error when running the Router event: " + eventField);
                    console.error((0, _iserror.default)(err) ? err.message + "\n" + err.stack : err + "");
                }
            }
        });
    });
});
const _default = singletonRouter;
function useRouter() {
    const router = _react.default.useContext(_routercontext.RouterContext);
    if (!router) {
        throw new Error("NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted");
    }
    return router;
}
function createRouter() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    singletonRouter.router = new _router.default(...args);
    singletonRouter.readyCallbacks.forEach((cb)=>cb());
    singletonRouter.readyCallbacks = [];
    return singletonRouter.router;
}
function makePublicRouterInstance(router) {
    const scopedRouter = router;
    const instance = {};
    for (const property of urlPropertyFields){
        if (typeof scopedRouter[property] === "object") {
            instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful
            ;
            continue;
        }
        instance[property] = scopedRouter[property];
    }
    // Events is a static property on the router, the router doesn't have to be initialized to use it
    instance.events = _router.default.events;
    coreMethodFields.forEach((field)=>{
        instance[field] = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return scopedRouter[field](...args);
        };
    });
    return instance;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router.js.map


/***/ }),

/***/ 6431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = __webpack_require__(8754);
const _interop_require_wildcard = __webpack_require__(1757);
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8369));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(5784));
const _headmanagercontext = __webpack_require__(3142);
const _headmanager = __webpack_require__(9997);
const _requestidlecallback = __webpack_require__(7027);
const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = [
    "onLoad",
    "onReady",
    "dangerouslySetInnerHTML",
    "children",
    "onError",
    "strategy"
];
const loadScript = (props)=>{
    const { src , id , onLoad =()=>{} , onReady =null , dangerouslySetInnerHTML , children ="" , strategy ="afterInteractive" , onError  } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement("script");
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener("load", function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener("error", function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    for (const [k, value] of Object.entries(props)){
        if (value === undefined || ignoreProps.includes(k)) {
            continue;
        }
        const attr = _headmanager.DOMAttributeNames[k] || k.toLowerCase();
        el.setAttribute(attr, value);
    }
    if (strategy === "worker") {
        el.setAttribute("type", "text/partytown");
    }
    el.setAttribute("data-nscript", strategy);
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy ="afterInteractive"  } = props;
    if (strategy === "lazyOnload") {
        window.addEventListener("load", ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === "complete") {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener("load", ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute("src");
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
function Script(props) {
    const { id , src ="" , onLoad =()=>{} , onReady =null , strategy ="afterInteractive" , onError , ...restProps } = props;
    // Context is available only during SSR
    const { updateScripts , scripts , getIsSsr , appDir , nonce  } = (0, _react.useContext)(_headmanagercontext.HeadManagerContext);
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === "afterInteractive") {
                loadScript(props);
            } else if (strategy === "lazyOnload") {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === "beforeInteractive" || strategy === "worker") {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript(props);
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === "beforeInteractive") {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ _react.default.createElement("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            0,
                            {
                                ...restProps
                            }
                        ]) + ")"
                    }
                });
            }
            // @ts-ignore
            _reactdom.default.preload(src, restProps.integrity ? {
                as: "script",
                integrity: restProps.integrity
            } : {
                as: "script"
            });
            return /*#__PURE__*/ _react.default.createElement("script", {
                nonce: nonce,
                dangerouslySetInnerHTML: {
                    __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                        src
                    ]) + ")"
                }
            });
        } else if (strategy === "afterInteractive") {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: "script",
                    integrity: restProps.integrity
                } : {
                    as: "script"
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, "__nextScript", {
    value: true
});
const _default = Script;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map


/***/ }),

/***/ 5980:
/***/ (function(module, exports) {

"use strict";
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "__unsafeCreateTrustedScriptURL", ({
    enumerable: true,
    get: function() {
        return __unsafeCreateTrustedScriptURL;
    }
}));
let policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */ function getPolicy() {
    if (typeof policy === "undefined" && "object" !== "undefined") {
        var _window_trustedTypes;
        policy = ((_window_trustedTypes = window.trustedTypes) == null ? void 0 : _window_trustedTypes.createPolicy("nextjs", {
            createHTML: (input)=>input,
            createScript: (input)=>input,
            createScriptURL: (input)=>input
        })) || null;
    }
    return policy;
}
function __unsafeCreateTrustedScriptURL(url) {
    var _getPolicy;
    return ((_getPolicy = getPolicy()) == null ? void 0 : _getPolicy.createScriptURL(url)) || url;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=trusted-types.js.map


/***/ }),

/***/ 8799:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return withRouter;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5784));
const _router = __webpack_require__(3598);
function withRouter(ComposedComponent) {
    function WithRouterWrapper(props) {
        return /*#__PURE__*/ _react.default.createElement(ComposedComponent, {
            router: (0, _router.useRouter)(),
            ...props
        });
    }
    WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
    WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
    if (false) {}
    return WithRouterWrapper;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=with-router.js.map


/***/ }),

/***/ 3439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return App;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5784));
const _utils = __webpack_require__(6873);
/**
 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
 * This allows for keeping state between navigation, custom error handling, injecting additional data.
 */ async function appGetInitialProps(param) {
    let { Component , ctx  } = param;
    const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
        pageProps
    };
}
class App extends _react.default.Component {
    render() {
        const { Component , pageProps  } = this.props;
        return /*#__PURE__*/ _react.default.createElement(Component, pageProps);
    }
}
(()=>{
    App.origGetInitialProps = appGetInitialProps;
})();
(()=>{
    App.getInitialProps = appGetInitialProps;
})();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_app.js.map


/***/ }),

/***/ 2512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return Error;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5784));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8316));
const statusCodes = {
    400: "Bad Request",
    404: "This page could not be found",
    405: "Method Not Allowed",
    500: "Internal Server Error"
};
function _getInitialProps(param) {
    let { res , err  } = param;
    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
}
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        display: "inline-block",
        textAlign: "left"
    },
    h1: {
        display: "inline-block",
        margin: "0 20px 0 0",
        paddingRight: 23,
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: "top",
        lineHeight: "49px"
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "49px",
        margin: 0
    }
};
class Error extends _react.default.Component {
    render() {
        const { statusCode , withDarkMode =true  } = this.props;
        const title = this.props.title || statusCodes[statusCode] || "An unexpected error has occurred";
        return /*#__PURE__*/ _react.default.createElement("div", {
            style: styles.error
        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("title", null, statusCode ? statusCode + ": " + title : "Application error: a client-side exception has occurred")), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("style", {
            dangerouslySetInnerHTML: {
                /* CSS minified from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                ${
                  withDarkMode
                    ? `@media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }`
                    : ''
                }
               */ __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" + (withDarkMode ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}" : "")
            }
        }), statusCode ? /*#__PURE__*/ _react.default.createElement("h1", {
            className: "next-error-h1",
            style: styles.h1
        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement("div", {
            style: styles.desc
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            style: styles.h2
        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
    }
}
(()=>{
    Error.displayName = "ErrorPage";
})();
(()=>{
    Error.getInitialProps = _getInitialProps;
})();
(()=>{
    Error.origGetInitialProps = _getInitialProps;
})();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_error.js.map


/***/ }),

/***/ 7401:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "AmpStateContext", ({
    enumerable: true,
    get: function() {
        return AmpStateContext;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5784));
const AmpStateContext = _react.default.createContext({});
if (false) {} //# sourceMappingURL=amp-context.js.map


/***/ }),

/***/ 6561:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isInAmpMode", ({
    enumerable: true,
    get: function() {
        return isInAmpMode;
    }
}));
function isInAmpMode(param) {
    let { ampFirst =false , hybrid =false , hasQuery =false  } = param === void 0 ? {} : param;
    return ampFirst || hybrid && hasQuery;
} //# sourceMappingURL=amp-mode.js.map


/***/ }),

/***/ 6102:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CacheStates: function() {
        return CacheStates;
    },
    AppRouterContext: function() {
        return AppRouterContext;
    },
    LayoutRouterContext: function() {
        return LayoutRouterContext;
    },
    GlobalLayoutRouterContext: function() {
        return GlobalLayoutRouterContext;
    },
    TemplateContext: function() {
        return TemplateContext;
    }
});
const _interop_require_default = __webpack_require__(8754);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5784));
var CacheStates;
(function(CacheStates) {
    CacheStates["LAZY_INITIALIZED"] = "LAZYINITIALIZED";
    CacheStates["DATA_FETCH"] = "DATAFETCH";
    CacheStates["READY"] = "READY";
})(CacheStates || (CacheStates = {}));
const AppRouterContext = _react.default.createContext(null);
const LayoutRouterContext = _react.default.createContext(null);
const GlobalLayoutRouterContext = _react.default.createContext(null);
const TemplateContext = _react.default.createContext(null);
if (false) {} //# sourceMappingURL=app-router-context.js.map


/***/ }),

/***/ 6812:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* file : base-filter.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return BaseFilter;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _hashing = /*#__PURE__*/ _interop_require_default._(__webpack_require__(4758));
const _utils = __webpack_require__(6911);
function randomInt32() {
    if (false) {}
    return crypto.getRandomValues(new Uint32Array(1))[0];
}
function seedrandom() {
    return {
        int32: randomInt32,
        quick: randomInt32
    };
}
class BaseFilter {
    /**
   * Get the seed used in this structure
   */ get seed() {
        return this._seed;
    }
    /**
   * Set the seed for this structure
   * @param  seed the new seed that will be used in this structure
   */ set seed(seed) {
        this._seed = seed;
        this._rng = seedrandom();
    }
    /**
   * Get a function used to draw random number
   * @return A factory function used to draw random integer
   */ get random() {
        return this._rng;
    }
    /**
   * Return a next random seeded int32 integer
   * @returns
   */ nextInt32() {
        return this._rng.int32();
    }
    /**
   * Save the current structure as a JSON
   */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    saveAsJSON() {
        throw new Error("not-implemented");
    }
    /**
   * Load an Object from a provided JSON object
   * @param json the JSON object to load
   * @return Return the Object loaded from the provided JSON object
   */ // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    static fromJSON(json) {
        throw new Error("not-implemented");
    }
    constructor(){
        this._seed = (0, _utils.getDefaultSeed)();
        this._rng = seedrandom();
        this._hashing = new _hashing.default();
    }
} //# sourceMappingURL=base-filter.js.map


/***/ }),

/***/ 4226:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
// original source: https://github.com/niklasvh/base64-arraybuffer/blob/master/src/index.ts

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    encode: function() {
        return encode;
    },
    decode: function() {
        return decode;
    }
});
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
// Use a lookup table to find the index.
const lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for(let i = 0; i < chars.length; i++){
    lookup[chars.charCodeAt(i)] = i;
}
const encode = (arraybuffer)=>{
    let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";
    for(i = 0; i < len; i += 3){
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
    }
    return base64;
};
const decode = (base64)=>{
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") {
            bufferLength--;
        }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for(i = 0; i < len; i += 4){
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
}; //# sourceMappingURL=base64-arraybuffer.js.map


/***/ }),

/***/ 7783:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return BitSet;
    }
}));
const _base64arraybuffer = __webpack_require__(4226);
const bitsPerWord = 8;
class BitSet {
    /**
   * Returns the value of the bit at the given index
   * @param index position of the bit, zero-indexed
   */ has(index) {
        const wordIndex = Math.floor(index / bitsPerWord);
        const mask = 1 << index % bitsPerWord;
        return (this.array[wordIndex] & mask) !== 0;
    }
    /**
   * Set the bit to true
   * @param index position of the bit, zero-indexed
   */ add(index) {
        const wordIndex = Math.floor(index / bitsPerWord);
        const mask = 1 << index % bitsPerWord;
        this.array[wordIndex] = this.array[wordIndex] | mask;
    }
    /**
   * Returns the maximum true bit.
   */ max() {
        for(let i = this.array.length - 1; i >= 0; i--){
            const bits = this.array[i];
            if (bits) {
                return BitSet.highBit(bits) + i * bitsPerWord;
            }
        }
        return 0;
    }
    /**
   * Returns the number of true bits.
   */ bitCount() {
        let result = 0;
        for(let i = 0; i < this.array.length; i++){
            result += BitSet.countBits(this.array[i]) // Assumes we never have bits set beyond the end
            ;
        }
        return result;
    }
    /**
   * Returns true if the size and contents are identical.
   * @param other another BitSet
   */ equals(other) {
        if (other.size !== this.size) {
            return false;
        }
        for(let i = 0; i < this.array.length; i++){
            if (this.array[i] !== other.array[i]) {
                return false;
            }
        }
        return true;
    }
    /**
   * Returns a JSON-encodable object readable by {@link import}.
   */ export() {
        return {
            size: this.size,
            content: (0, _base64arraybuffer.encode)(this.array)
        };
    }
    /**
   * Returns an object written by {@link export}.
   * @param data an object written by {@link export}
   */ static import(data) {
        if (typeof data.size !== "number") {
            throw Error("BitSet missing size");
        }
        if (typeof data.content !== "string") {
            throw Error("BitSet: missing content");
        }
        const result = new BitSet(data.size);
        const buffer = (0, _base64arraybuffer.decode)(data.content);
        result.array = new Uint8Array(buffer);
        return result;
    }
    /**
   * Returns the index of the maximum bit in the number, or -1 for 0
   * @bits an unsigned 8-bit number
   * ```js
   * @example
   * BitSet.highBit(0) // returns -1
   * BitSet.highBit(5) // returns 2
   * ```
   */ static highBit(bits) {
        let result = bitsPerWord - 1;
        let mask = 1 << result;
        while(result >= 0 && (mask & bits) !== mask){
            mask >>>= 1;
            result--;
        }
        return result;
    }
    /**
   * Returns the number of true bits in the number
   * @bits an unsigned 8-bit number
   * @example
   * ```js
   * BitSet.countBits(0) // returns 0
   * BitSet.countBits(3) // returns 2
   * ```
   */ static countBits(bits) {
        let result = bits & 1;
        while(bits !== 0){
            bits = bits >>> 1;
            result += bits & 1;
        }
        return result;
    }
    /**
   * Constructor. All bits are initially set to false.
   * @param size the number of bits that can be stored. (This is NOT required to be a multiple of 8.)
   */ constructor(size){
        const diff = bitsPerWord - size % bitsPerWord;
        this.size = size + ([
            0,
            8
        ].includes(diff) ? 0 : diff);
        this.array = new Uint8Array(Math.ceil(this.size / bitsPerWord));
    }
} //# sourceMappingURL=bit-set.js.map


/***/ }),

/***/ 5057:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/* file : formulas.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ /**
 * Various formulas used with Bloom Filters
 * @namespace Formulas
 * @private
 */ /**
 * Compute the optimal size of a Bloom Filter
 * @param  length - The length of the set used to fill the filter
 * @param  errorRate - The targeted false positive rate
 * @return The optimal size of a Bloom Filter
 * @memberof Formulas
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    optimalFilterSize: function() {
        return optimalFilterSize;
    },
    optimalHashes: function() {
        return optimalHashes;
    }
});
function optimalFilterSize(length, errorRate) {
    return Math.ceil(-(length * Math.log(errorRate) / Math.pow(Math.log(2), 2)));
}
function optimalHashes(size, length) {
    return Math.ceil(size / length * Math.log(2));
} //# sourceMappingURL=formulas.js.map


/***/ }),

/***/ 4758:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return Hashing;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _fnv1a = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2461));
const _utils = __webpack_require__(6911);
class Hashing {
    /**
   * Apply enhanced Double Hashing to produce a n-hash
   * @see {@link http://peterd.org/pcd-diss.pdf} s6.5.4
   * @param  n - The indice of the hash function we want to produce
   * @param  hashA - The result of the first hash function applied to a value.
   * @param  hashB - The result of the second hash function applied to a value.
   * @param  size - The size of the datastructures associated to the hash context (ex: the size of a Bloom Filter)
   * @return The result of hash_n applied to a value.
   * @memberof Hashing
   * @author Thomas Minier
   * @author Arnaud Grall
   */ doubleHashing(n, hashA, hashB, size) {
        return Math.abs((hashA + n * hashB + Math.floor((n ** 3 - n) / 6)) % size);
    }
    /**
   * Generate a set of distinct indexes on interval [0, size) using the double hashing technique
   * For generating efficiently distinct indexes we re-hash after detecting a cycle by changing slightly the seed.
   * It has the effect of generating faster distinct indexes without loosing entirely the utility of the double hashing.
   * For small number of indexes it will work perfectly. For a number close to the size, and size very large
   * Advise: do not generate `size` indexes for a large interval. In practice, size should be equal
   * to the number of hash functions used and is often low.
   *
   * @param  element  - The element to hash
   * @param  size     - the range on which we can generate an index [0, size) = size
   * @param  number   - The number of indexes desired
   * @param  seed     - The seed used
   * @return Array<number>
   * @author Arnaud Grall
   * @author Simon Woolf (SimonWoolf)
   */ getDistinctIndexes(element, size, number, seed) {
        if (seed === undefined) {
            seed = (0, _utils.getDefaultSeed)();
        }
        let n = 0;
        const indexes = new Set();
        let hashes = this.hashTwice(element, seed);
        // let cycle = 0
        while(indexes.size < number){
            const ind = hashes.first % size;
            if (!indexes.has(ind)) {
                indexes.add(ind);
            }
            hashes.first = (hashes.first + hashes.second) % size;
            hashes.second = (hashes.second + n) % size;
            n++;
            if (n > size) {
                // Enhanced double hashing stops cycles of length less than `size` in the case where
                // size is coprime with the second hash. But you still get cycles of length `size`.
                // So if we reach there and haven't finished, append a prime to the input and
                // rehash.
                seed++;
                hashes = this.hashTwice(element, seed);
            }
        }
        return [
            ...indexes.values()
        ];
    }
    /**
   * Generate N indexes on range [0, size)
   * It uses the double hashing technique to generate the indexes.
   * It hash twice the value only once before generating the indexes.
   * Warning: you can have a lot of modulo collisions.
   * @param  element    - The element to hash
   * @param  size       - The range on which we can generate the index, exclusive
   * @param  hashCount  - The number of indexes we want
   * @return An array of indexes on range [0, size)
   */ getIndexes(element, size, hashCount, seed) {
        if (seed === undefined) {
            seed = (0, _utils.getDefaultSeed)();
        }
        const arr = [];
        const hashes = this.hashTwice(element, seed);
        for(let i = 0; i < hashCount; i++){
            arr.push(this.doubleHashing(i, hashes.first, hashes.second, size));
        }
        return arr;
    }
    /**
   * @internal
   * Hash an element of type {@link HashableInput} into {@link Number}
   * Can be overrided as long as you return a value of type {@link Number}
   * Don't forget to use the seed when hashing, otherwise if some kind of randomness is in the process
   * you may have inconsistent behaviors between 2 runs.
   * @param element
   * @param seed
   * @returns A 64bits floating point {@link Number}
   */ serialize(element, seed) {
        if (!seed) {
            seed = (0, _utils.getDefaultSeed)();
        }
        return Number((0, _fnv1a.default)(element, {
            seed
        }));
    }
    /**
   * (64-bits only) Hash a value into two values (in hex or integer format)
   * @param  value - The value to hash
   * @param  asInt - (optional) If True, the values will be returned as an integer. Otherwise, as hexadecimal values.
   * @param seed the seed used for hashing
   * @return The results of the hash functions applied to the value (in hex or integer)
   * @author Arnaud Grall & Thomas Minier
   */ hashTwice(value, seed) {
        if (seed === undefined) {
            seed = (0, _utils.getDefaultSeed)();
        }
        return {
            first: this.serialize(value, seed + 1),
            second: this.serialize(value, seed + 2)
        };
    }
    /**
   * Hash twice an element into their HEX string representations
   * @param value
   * @param seed
   * @returns TwoHashesTemplated<string>
   */ hashTwiceAsString(value, seed) {
        const { first , second  } = this.hashTwice(value, seed);
        return {
            first: (0, _utils.numberToHex)(first),
            second: (0, _utils.numberToHex)(second)
        };
    }
    /**
   * (64-bits only) Same as hashTwice but return Numbers and String equivalent
   * @param  val the value to hash
   * @param  seed the seed to change when hashing
   * @return TwoHashesIntAndString
   * @author Arnaud Grall
   */ hashTwiceIntAndString(val, seed) {
        if (seed === undefined) {
            seed = (0, _utils.getDefaultSeed)();
        }
        const one = this.hashIntAndString(val, seed + 1);
        const two = this.hashIntAndString(val, seed + 2);
        return {
            int: {
                first: one.int,
                second: two.int
            },
            string: {
                first: one.string,
                second: two.string
            }
        };
    }
    /**
   * Hash an item as an unsigned int
   * @param  elem - Element to hash
   * @param  seed - The hash seed. If its is UINT32 make sure to set the length to 32
   * @param  length - The length of hashes (defaults to 32 bits)
   * @return The hash value as an unsigned int
   * @author Arnaud Grall
   */ hashAsInt(elem, seed) {
        if (seed === undefined) {
            seed = (0, _utils.getDefaultSeed)();
        }
        return this.serialize(elem, seed);
    }
    /**
   * Hash an item and return its number and HEX string representation
   * @param  elem - Element to hash
   * @param  seed - The hash seed. If its is UINT32 make sure to set the length to 32
   * @param  base - The base in which the string will be returned, default: 16
   * @param  length - The length of hashes (defaults to 32 bits)
   * @return The item hased as an int and a string
   * @author Arnaud Grall
   */ hashIntAndString(elem, seed) {
        const hash = this.hashAsInt(elem, seed);
        return {
            int: hash,
            string: (0, _utils.numberToHex)(hash)
        };
    }
} //# sourceMappingURL=hashing.js.map


/***/ }),

/***/ 6030:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
// original source: https://github.com/Callidon/bloom-filters
/* file : bloom-filter.ts
MIT License

Copyright (c) 2017 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "BloomFilter", ({
    enumerable: true,
    get: function() {
        return BloomFilter;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _basefilter = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6812));
const _bitset = /*#__PURE__*/ _interop_require_default._(__webpack_require__(7783));
const _formulas = __webpack_require__(5057);
class BloomFilter extends _basefilter.default {
    /**
   * Create an optimal bloom filter providing the maximum of elements stored and the error rate desired
   * @param  nbItems      - The maximum number of item to store
   * @param  errorRate  - The error rate desired for a maximum of items inserted
   * @return A new {@link BloomFilter}
   */ static create(nbItems, errorRate) {
        const size = (0, _formulas.optimalFilterSize)(nbItems, errorRate);
        const hashes = (0, _formulas.optimalHashes)(size, nbItems);
        return new this(size, hashes);
    }
    /**
   * Build a new Bloom Filter from an existing iterable with a fixed error rate
   * @param items - The iterable used to populate the filter
   * @param errorRate - The error rate, i.e. 'false positive' rate, targeted by the filter
   * @param seed - The random number seed (optional)
   * @return A new Bloom Filter filled with the iterable's elements
   * @example
   * ```js
   * // create a filter with a false positive rate of 0.1
   * const filter = BloomFilter.from(['alice', 'bob', 'carl'], 0.1);
   * ```
   */ static from(items, errorRate, seed) {
        const array = Array.from(items);
        const filter = BloomFilter.create(array.length, errorRate);
        if (typeof seed === "number") {
            filter.seed = seed;
        }
        array.forEach((element)=>filter.add(element));
        return filter;
    }
    /**
   * Get the optimal size of the filter
   * @return The size of the filter
   */ get size() {
        return this._size;
    }
    /**
   * Get the number of bits currently set in the filter
   * @return The filter length
   */ get length() {
        return this._filter.bitCount();
    }
    /**
   * Add an element to the filter
   * @param element - The element to add
   * @example
   * ```js
   * const filter = new BloomFilter(15, 0.1);
   * filter.add('foo');
   * ```
   */ add(element) {
        const indexes = this._hashing.getIndexes(element, this._size, this._nbHashes, this.seed);
        for(let i = 0; i < indexes.length; i++){
            this._filter.add(indexes[i]);
        }
    }
    /**
   * Test an element for membership
   * @param element - The element to look for in the filter
   * @return False if the element is definitively not in the filter, True is the element might be in the filter
   * @example
   * ```js
   * const filter = new BloomFilter(15, 0.1);
   * filter.add('foo');
   * console.log(filter.has('foo')); // output: true
   * console.log(filter.has('bar')); // output: false
   * ```
   */ has(element) {
        const indexes = this._hashing.getIndexes(element, this._size, this._nbHashes, this.seed);
        for(let i = 0; i < indexes.length; i++){
            if (!this._filter.has(indexes[i])) {
                return false;
            }
        }
        return true;
    }
    /**
   * Get the current false positive rate (or error rate) of the filter
   * @return The current false positive rate of the filter
   * @example
   * ```js
   * const filter = new BloomFilter(15, 0.1);
   * console.log(filter.rate()); // output: something around 0.1
   * ```
   */ rate() {
        return Math.pow(1 - Math.exp(-this.length / this._size), this._nbHashes);
    }
    /**
   * Check if another Bloom Filter is equal to this one
   * @param  other - The filter to compare to this one
   * @return True if they are equal, false otherwise
   */ equals(other) {
        if (this._size !== other._size || this._nbHashes !== other._nbHashes) {
            return false;
        }
        return this._filter.equals(other._filter);
    }
    export() {
        return {
            bitset: this._filter.export(),
            hashes: this._nbHashes,
            size: this._size
        };
    }
    import(data) {
        this._filter = _bitset.default.import(data.bitset);
    }
    /**
   * Constructor
   * @param size - The number of cells
   * @param nbHashes - The number of hash functions used
   */ constructor(size, nbHashes){
        super();
        if (nbHashes < 1) {
            throw new Error("A BloomFilter cannot uses less than one hash function, while you tried to use " + nbHashes + ".");
        }
        this._size = size;
        this._nbHashes = nbHashes;
        this._filter = new _bitset.default(size);
    }
} //# sourceMappingURL=index.js.map


/***/ }),

/***/ 6911:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/* file : utils.ts
MIT License

Copyright (c) 2017-2020 Thomas Minier & Arnaud Grall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ /**
 * Utilitaries functions
 * @namespace Utils
 * @private
 */ /* JSDOC typedef */ /**
 * @typedef {TwoHashes} Two hashes of the same value, as computed by {@link hashTwice}.
 * @property {number} first - The result of the first hashing function applied to a value
 * @property {number} second - The result of the second hashing function applied to a value
 * @memberof Utils
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    numberToHex: function() {
        return numberToHex;
    },
    randomInt: function() {
        return randomInt;
    },
    getDefaultSeed: function() {
        return getDefaultSeed;
    }
});
function numberToHex(elem) {
    let e = Number(elem).toString(16);
    if (e.length % 4 !== 0) {
        e = "0".repeat(4 - e.length % 4) + e;
    }
    return e;
}
function randomInt(min, max, random) {
    if (random === undefined) {
        random = Math.random;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    const rn = random();
    return Math.floor(rn * (max - min + 1)) + min;
}
function getDefaultSeed() {
    return 0x1234567890;
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 9489:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
// regexp is based on https://github.com/sindresorhus/escape-string-regexp

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "escapeStringRegexp", ({
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
}));
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map


/***/ }),

/***/ 2461:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
// source: https://github.com/sindresorhus/fnv1a
// FNV_PRIMES and FNV_OFFSETS from
// http://www.isthe.com/chongo/tech/comp/fnv/index.html#FNV-param

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return fnv1a;
    }
}));
const FNV_PRIMES = {
    32: BigInt(16777619),
    64: BigInt(1099511628211),
    128: BigInt(309485009821345068724781371),
    256: BigInt(374144419156711147060143317175368453031918731002211),
    512: BigInt(35835915874844867368919076489095108449946327955754392558399825615420669938882575126094039892345713852759),
    1024: BigInt(5016456510113118655434598811035278955030765345404790744303017523831112055108147451509157692220295382716162651878526895249385292291816524375083746691371804094271873160484737966720260389217684476157468082573)
};
const FNV_OFFSETS = {
    32: BigInt(2166136261),
    64: BigInt(14695981039346656037),
    128: BigInt(144066263297769815596495629667062367629),
    256: BigInt(100029257958052580907070968620625704837092796014241193945225284501741471925557),
    512: BigInt(9659303129496669498009435400716310466090418745672637896108374329434462657994582932197716438449813051892206539805784495328239340083876191928701583869517785),
    1024: BigInt(14197795064947621068722070641403218320880622795441933960878474914617582723252296732303717722150864096521202355549365628174669108571814760471015076148029755969804077320157692458563003215304957150157403644460363550505412711285966361610267868082893823963790439336411086884584107735010676915)
};
function fnv1a(inputString, param) {
    let { size =32 , seed =0  } = param === void 0 ? {} : param;
    if (!FNV_PRIMES[size]) {
        throw new Error("The `size` option must be one of 32, 64, 128, 256, 512, or 1024");
    }
    let hash = FNV_OFFSETS[size] ^ BigInt(seed);
    const fnvPrime = FNV_PRIMES[size];
    // Handle Unicode code points > 0x7f
    let isUnicoded = false;
    for(let index = 0; index < inputString.length; index++){
        let characterCode = inputString.charCodeAt(index);
        // Non-ASCII characters trigger the Unicode escape logic
        if (characterCode > 0x7f && !isUnicoded) {
            inputString = unescape(encodeURIComponent(inputString));
            characterCode = inputString.charCodeAt(index);
            isUnicoded = true;
        }
        hash ^= BigInt(characterCode);
        hash = BigInt.asUintN(size, hash * fnvPrime);
    }
    return hash;
} //# sourceMappingURL=fnv1a.js.map


/***/ }),

/***/ 3142:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "HeadManagerContext", ({
    enumerable: true,
    get: function() {
        return HeadManagerContext;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5784));
const HeadManagerContext = _react.default.createContext({});
if (false) {} //# sourceMappingURL=head-manager-context.js.map


/***/ }),

/***/ 8316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    defaultHead: function() {
        return defaultHead;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = __webpack_require__(8754);
const _interop_require_wildcard = __webpack_require__(1757);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(5784));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__webpack_require__(4323));
const _ampcontext = __webpack_require__(7401);
const _headmanagercontext = __webpack_require__(3142);
const _ampmode = __webpack_require__(6561);
const _warnonce = __webpack_require__(9627);
function defaultHead(inAmpMode) {
    if (inAmpMode === void 0) inAmpMode = false;
    const head = [
        /*#__PURE__*/ _react.default.createElement("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ _react.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode  } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ( true && !inAmpMode) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
            ].some((url)=>c.props["href"].startsWith(url))) {
                const newProps = {
                    ...c.props || {}
                };
                newProps["data-href"] = newProps["href"];
                newProps["href"] = undefined;
                // Add this attribute to make it easy to identify optimized tags
                newProps["data-optimized-fonts"] = true;
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
        }
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head(param) {
    let { children  } = param;
    const ampState = (0, _react.useContext)(_ampcontext.AmpStateContext);
    const headManager = (0, _react.useContext)(_headmanagercontext.HeadManagerContext);
    return /*#__PURE__*/ _react.default.createElement(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState)
    }, children);
}
const _default = Head;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map


/***/ }),

/***/ 8747:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    SearchParamsContext: function() {
        return SearchParamsContext;
    },
    PathnameContext: function() {
        return PathnameContext;
    }
});
const _react = __webpack_require__(5784);
const SearchParamsContext = (0, _react.createContext)(null);
const PathnameContext = (0, _react.createContext)(null);
if (false) {} //# sourceMappingURL=hooks-client-context.js.map


/***/ }),

/***/ 4324:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizeLocalePath", ({
    enumerable: true,
    get: function() {
        return normalizeLocalePath;
    }
}));
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map


/***/ }),

/***/ 9677:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ImageConfigContext", ({
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5784));
const _imageconfig = __webpack_require__(1410);
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if (false) {} //# sourceMappingURL=image-config-context.js.map


/***/ }),

/***/ 1410:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        "image/webp"
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "inline",
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map


/***/ }),

/***/ 5306:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getObjectClassLabel: function() {
        return getObjectClassLabel;
    },
    isPlainObject: function() {
        return isPlainObject;
    }
});
function getObjectClassLabel(value) {
    return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
    if (getObjectClassLabel(value) !== "[object Object]") {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    /**
   * this used to be previously:
   *
   * `return prototype === null || prototype === Object.prototype`
   *
   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
   *
   * It was changed to the current implementation since it's resilient to serialization.
   */ return prototype === null || prototype.hasOwnProperty("isPrototypeOf");
} //# sourceMappingURL=is-plain-object.js.map


/***/ }),

/***/ 9757:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
// This has to be a shared module which is shared between client component error boundary and dynamic component

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NEXT_DYNAMIC_NO_SSR_CODE", ({
    enumerable: true,
    get: function() {
        return NEXT_DYNAMIC_NO_SSR_CODE;
    }
}));
const NEXT_DYNAMIC_NO_SSR_CODE = "DYNAMIC_SERVER_USAGE"; //# sourceMappingURL=no-ssr-error.js.map


/***/ }),

/***/ 5344:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return mitt;
    }
}));
function mitt() {
    const all = Object.create(null);
    return {
        on (type, handler) {
            (all[type] || (all[type] = [])).push(handler);
        },
        off (type, handler) {
            if (all[type]) {
                all[type].splice(all[type].indexOf(handler) >>> 0, 1);
            }
        },
        emit (type) {
            for(var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                evts[_key - 1] = arguments[_key];
            }
            (all[type] || []).slice().map((handler)=>{
                handler(...evts);
            });
        }
    };
} //# sourceMappingURL=mitt.js.map


/***/ }),

/***/ 7965:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "denormalizePagePath", ({
    enumerable: true,
    get: function() {
        return denormalizePagePath;
    }
}));
const _utils = __webpack_require__(2647);
const _normalizepathsep = __webpack_require__(1821);
function denormalizePagePath(page) {
    let _page = (0, _normalizepathsep.normalizePathSep)(page);
    return _page.startsWith("/index/") && !(0, _utils.isDynamicRoute)(_page) ? _page.slice(6) : _page !== "/index" ? _page : "/";
} //# sourceMappingURL=denormalize-page-path.js.map


/***/ }),

/***/ 1821:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathSep", ({
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
}));
function normalizePathSep(path) {
    return path.replace(/\\/g, "/");
} //# sourceMappingURL=normalize-path-sep.js.map


/***/ }),

/***/ 7220:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "RouterContext", ({
    enumerable: true,
    get: function() {
        return RouterContext;
    }
}));
const _interop_require_default = __webpack_require__(8754);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5784));
const RouterContext = _react.default.createContext(null);
if (false) {} //# sourceMappingURL=router-context.js.map


/***/ }),

/***/ 1066:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    adaptForAppRouterInstance: function() {
        return adaptForAppRouterInstance;
    },
    adaptForSearchParams: function() {
        return adaptForSearchParams;
    },
    PathnameContextProviderAdapter: function() {
        return PathnameContextProviderAdapter;
    }
});
const _interop_require_wildcard = __webpack_require__(1757);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(5784));
const _hooksclientcontext = __webpack_require__(8747);
const _utils = __webpack_require__(2647);
function adaptForAppRouterInstance(router) {
    return {
        back () {
            router.back();
        },
        forward () {
            router.forward();
        },
        refresh () {
            router.reload();
        },
        push (href) {
            void router.push(href);
        },
        replace (href) {
            void router.replace(href);
        },
        prefetch (href) {
            void router.prefetch(href);
        }
    };
}
/**
 * transforms the ParsedUrlQuery into a URLSearchParams.
 *
 * @param query the query to transform
 * @returns URLSearchParams
 */ function transformQuery(query) {
    const params = new URLSearchParams();
    for (const [name, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const val of value){
                params.append(name, val);
            }
        } else if (typeof value !== "undefined") {
            params.append(name, value);
        }
    }
    return params;
}
function adaptForSearchParams(router) {
    if (!router.isReady || !router.query) {
        return new URLSearchParams();
    }
    return transformQuery(router.query);
}
function PathnameContextProviderAdapter(param) {
    let { children , router , ...props } = param;
    const ref = (0, _react.useRef)(props.isAutoExport);
    const value = (0, _react.useMemo)(()=>{
        // isAutoExport is only ever `true` on the first render from the server,
        // so reset it to `false` after we read it for the first time as `true`. If
        // we don't use the value, then we don't need it.
        const isAutoExport = ref.current;
        if (isAutoExport) {
            ref.current = false;
        }
        // When the route is a dynamic route, we need to do more processing to
        // determine if we need to stop showing the pathname.
        if ((0, _utils.isDynamicRoute)(router.pathname)) {
            // When the router is rendering the fallback page, it can't possibly know
            // the path, so return `null` here. Read more about fallback pages over
            // at:
            // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-pages
            if (router.isFallback) {
                return null;
            }
            // When `isAutoExport` is true, meaning this is a page page has been
            // automatically statically optimized, and the router is not ready, then
            // we can't know the pathname yet. Read more about automatic static
            // optimization at:
            // https://nextjs.org/docs/advanced-features/automatic-static-optimization
            if (isAutoExport && !router.isReady) {
                return null;
            }
        }
        // The `router.asPath` contains the pathname seen by the browser (including
        // any query strings), so it should have that stripped. Read more about the
        // `asPath` option over at:
        // https://nextjs.org/docs/api-reference/next/router#router-object
        let url;
        try {
            url = new URL(router.asPath, "http://f");
        } catch (_) {
            // fallback to / for invalid asPath values e.g. //
            return "/";
        }
        return url.pathname;
    }, [
        router.asPath,
        router.isFallback,
        router.isReady,
        router.pathname
    ]);
    return /*#__PURE__*/ _react.default.createElement(_hooksclientcontext.PathnameContext.Provider, {
        value: value
    }, children);
} //# sourceMappingURL=adapters.js.map


/***/ }),

/***/ 9004:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
// tslint:disable:no-console

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return Router;
    },
    matchesMiddleware: function() {
        return matchesMiddleware;
    },
    createKey: function() {
        return createKey;
    }
});
const _interop_require_default = __webpack_require__(8754);
const _interop_require_wildcard = __webpack_require__(1757);
const _removetrailingslash = __webpack_require__(386);
const _routeloader = __webpack_require__(5202);
const _script = __webpack_require__(6431);
const _iserror = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(676));
const _denormalizepagepath = __webpack_require__(7965);
const _normalizelocalepath = __webpack_require__(4324);
const _mitt = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5344));
const _utils = __webpack_require__(6873);
const _isdynamic = __webpack_require__(4030);
const _parserelativeurl = __webpack_require__(4393);
const _resolverewrites = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2431));
const _routematcher = __webpack_require__(6616);
const _routeregex = __webpack_require__(248);
const _formaturl = __webpack_require__(242);
const _detectdomainlocale = __webpack_require__(5701);
const _parsepath = __webpack_require__(5606);
const _addlocale = __webpack_require__(5116);
const _removelocale = __webpack_require__(3215);
const _removebasepath = __webpack_require__(303);
const _addbasepath = __webpack_require__(4848);
const _hasbasepath = __webpack_require__(1219);
const _isapiroute = __webpack_require__(9423);
const _getnextpathnameinfo = __webpack_require__(5907);
const _formatnextpathnameinfo = __webpack_require__(5456);
const _comparestates = __webpack_require__(1336);
const _islocalurl = __webpack_require__(1901);
const _isbot = __webpack_require__(7211);
const _omit = __webpack_require__(4532);
const _resolvehref = __webpack_require__(947);
const _interpolateas = __webpack_require__(5466);
const _handlesmoothscroll = __webpack_require__(7232);
function buildCancellationError() {
    return Object.assign(new Error("Route Cancelled"), {
        cancelled: true
    });
}
async function matchesMiddleware(options) {
    const matchers = await Promise.resolve(options.router.pageLoader.getMiddleware());
    if (!matchers) return false;
    const { pathname: asPathname  } = (0, _parsepath.parsePath)(options.asPath);
    // remove basePath first since path prefix has to be in the order of `/${basePath}/${locale}`
    const cleanedAs = (0, _hasbasepath.hasBasePath)(asPathname) ? (0, _removebasepath.removeBasePath)(asPathname) : asPathname;
    const asWithBasePathAndLocale = (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(cleanedAs, options.locale));
    // Check only path match on client. Matching "has" should be done on server
    // where we can access more info such as headers, HttpOnly cookie, etc.
    return matchers.some((m)=>new RegExp(m.regexp).test(asWithBasePathAndLocale));
}
function stripOrigin(url) {
    const origin = (0, _utils.getLocationOrigin)();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}
function prepareUrlAs(router, url, as) {
    // If url and as provided as an object representation,
    // we'll format them into the string version here.
    let [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, url, true);
    const origin = (0, _utils.getLocationOrigin)();
    const hrefWasAbsolute = resolvedHref.startsWith(origin);
    const asWasAbsolute = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    const preparedUrl = hrefWasAbsolute ? resolvedHref : (0, _addbasepath.addBasePath)(resolvedHref);
    const preparedAs = as ? stripOrigin((0, _resolvehref.resolveHref)(router, as)) : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asWasAbsolute ? preparedAs : (0, _addbasepath.addBasePath)(preparedAs)
    };
}
function resolveDynamicRoute(pathname, pages) {
    const cleanPathname = (0, _removetrailingslash.removeTrailingSlash)((0, _denormalizepagepath.denormalizePagePath)(pathname));
    if (cleanPathname === "/404" || cleanPathname === "/_error") {
        return pathname;
    }
    // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some((page)=>{
            if ((0, _isdynamic.isDynamicRoute)(page) && (0, _routeregex.getRouteRegex)(page).re.test(cleanPathname)) {
                pathname = page;
                return true;
            }
        });
    }
    return (0, _removetrailingslash.removeTrailingSlash)(pathname);
}
function getMiddlewareData(source, response, options) {
    const nextConfig = {
        basePath: options.router.basePath,
        i18n: {
            locales: options.router.locales
        },
        trailingSlash: Boolean(false)
    };
    const rewriteHeader = response.headers.get("x-nextjs-rewrite");
    let rewriteTarget = rewriteHeader || response.headers.get("x-nextjs-matched-path");
    const matchedPath = response.headers.get("x-matched-path");
    if (matchedPath && !rewriteTarget && !matchedPath.includes("__next_data_catchall") && !matchedPath.includes("/_error") && !matchedPath.includes("/404")) {
        // leverage x-matched-path to detect next.config.js rewrites
        rewriteTarget = matchedPath;
    }
    if (rewriteTarget) {
        if (rewriteTarget.startsWith("/") || undefined) {
            const parsedRewriteTarget = (0, _parserelativeurl.parseRelativeUrl)(rewriteTarget);
            const pathnameInfo = (0, _getnextpathnameinfo.getNextPathnameInfo)(parsedRewriteTarget.pathname, {
                nextConfig,
                parseData: true
            });
            let fsPathname = (0, _removetrailingslash.removeTrailingSlash)(pathnameInfo.pathname);
            return Promise.all([
                options.router.pageLoader.getPageList(),
                (0, _routeloader.getClientBuildManifest)()
            ]).then((param)=>{
                let [pages, { __rewrites: rewrites  }] = param;
                let as = (0, _addlocale.addLocale)(pathnameInfo.pathname, pathnameInfo.locale);
                if ((0, _isdynamic.isDynamicRoute)(as) || !rewriteHeader && pages.includes((0, _normalizelocalepath.normalizeLocalePath)((0, _removebasepath.removeBasePath)(as), options.router.locales).pathname)) {
                    const parsedSource = (0, _getnextpathnameinfo.getNextPathnameInfo)((0, _parserelativeurl.parseRelativeUrl)(source).pathname, {
                        parseData: true
                    });
                    as = (0, _addbasepath.addBasePath)(parsedSource.pathname);
                    parsedRewriteTarget.pathname = as;
                }
                if (false) {} else if (!pages.includes(fsPathname)) {
                    const resolvedPathname = resolveDynamicRoute(fsPathname, pages);
                    if (resolvedPathname !== fsPathname) {
                        fsPathname = resolvedPathname;
                    }
                }
                const resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizelocalepath.normalizeLocalePath)((0, _removebasepath.removeBasePath)(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;
                if ((0, _isdynamic.isDynamicRoute)(resolvedHref)) {
                    const matches = (0, _routematcher.getRouteMatcher)((0, _routeregex.getRouteRegex)(resolvedHref))(as);
                    Object.assign(parsedRewriteTarget.query, matches || {});
                }
                return {
                    type: "rewrite",
                    parsedAs: parsedRewriteTarget,
                    resolvedHref
                };
            });
        }
        const src = (0, _parsepath.parsePath)(source);
        const pathname = (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
            ...(0, _getnextpathnameinfo.getNextPathnameInfo)(src.pathname, {
                nextConfig,
                parseData: true
            }),
            defaultLocale: options.router.defaultLocale,
            buildId: ""
        });
        return Promise.resolve({
            type: "redirect-external",
            destination: "" + pathname + src.query + src.hash
        });
    }
    const redirectTarget = response.headers.get("x-nextjs-redirect");
    if (redirectTarget) {
        if (redirectTarget.startsWith("/")) {
            const src = (0, _parsepath.parsePath)(redirectTarget);
            const pathname = (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
                ...(0, _getnextpathnameinfo.getNextPathnameInfo)(src.pathname, {
                    nextConfig,
                    parseData: true
                }),
                defaultLocale: options.router.defaultLocale,
                buildId: ""
            });
            return Promise.resolve({
                type: "redirect-internal",
                newAs: "" + pathname + src.query + src.hash,
                newUrl: "" + pathname + src.query + src.hash
            });
        }
        return Promise.resolve({
            type: "redirect-external",
            destination: redirectTarget
        });
    }
    return Promise.resolve({
        type: "next"
    });
}
async function withMiddlewareEffects(options) {
    const matches = await matchesMiddleware(options);
    if (!matches || !options.fetchData) {
        return null;
    }
    try {
        const data = await options.fetchData();
        const effect = await getMiddlewareData(data.dataHref, data.response, options);
        return {
            dataHref: data.dataHref,
            json: data.json,
            response: data.response,
            text: data.text,
            cacheKey: data.cacheKey,
            effect
        };
    } catch (e) {
        /**
     * TODO: Revisit this in the future.
     * For now we will not consider middleware data errors to be fatal.
     * maybe we should revisit in the future.
     */ return null;
    }
}
const manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
const SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");
function fetchRetry(url, attempts, options) {
    return fetch(url, {
        // Cookies are required to be present for Next.js' SSG "Preview Mode".
        // Cookies may also be required for `getServerSideProps`.
        //
        // > `fetch` won’t send cookies, unless you set the credentials init
        // > option.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        //
        // > For maximum browser compatibility when it comes to sending &
        // > receiving cookies, always supply the `credentials: 'same-origin'`
        // > option instead of relying on the default.
        // https://github.com/github/fetch#caveats
        credentials: "same-origin",
        method: options.method || "GET",
        headers: Object.assign({}, options.headers, {
            "x-nextjs-data": "1"
        })
    }).then((response)=>{
        return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
    });
}
function tryToParseAsJSON(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        return null;
    }
}
function fetchNextData(param) {
    let { dataHref , inflightCache , isPrefetch , hasMiddleware , isServerRender , parseJSON , persistCache , isBackground , unstable_skipClientCache  } = param;
    const { href: cacheKey  } = new URL(dataHref, window.location.href);
    var _params_method;
    const getData = (params)=>{
        return fetchRetry(dataHref, isServerRender ? 3 : 1, {
            headers: Object.assign({}, isPrefetch ? {
                purpose: "prefetch"
            } : {}, isPrefetch && hasMiddleware ? {
                "x-middleware-prefetch": "1"
            } : {}),
            method: (_params_method = params == null ? void 0 : params.method) != null ? _params_method : "GET"
        }).then((response)=>{
            if (response.ok && (params == null ? void 0 : params.method) === "HEAD") {
                return {
                    dataHref,
                    response,
                    text: "",
                    json: {},
                    cacheKey
                };
            }
            return response.text().then((text)=>{
                if (!response.ok) {
                    /**
             * When the data response is a redirect because of a middleware
             * we do not consider it an error. The headers must bring the
             * mapped location.
             * TODO: Change the status code in the handler.
             */ if (hasMiddleware && [
                        301,
                        302,
                        307,
                        308
                    ].includes(response.status)) {
                        return {
                            dataHref,
                            response,
                            text,
                            json: {},
                            cacheKey
                        };
                    }
                    if (response.status === 404) {
                        var _tryToParseAsJSON;
                        if ((_tryToParseAsJSON = tryToParseAsJSON(text)) == null ? void 0 : _tryToParseAsJSON.notFound) {
                            return {
                                dataHref,
                                json: {
                                    notFound: SSG_DATA_NOT_FOUND
                                },
                                response,
                                text,
                                cacheKey
                            };
                        }
                    }
                    const error = new Error("Failed to load static props");
                    /**
             * We should only trigger a server-side transition if this was
             * caused on a client-side transition. Otherwise, we'd get into
             * an infinite loop.
             */ if (!isServerRender) {
                        (0, _routeloader.markAssetError)(error);
                    }
                    throw error;
                }
                return {
                    dataHref,
                    json: parseJSON ? tryToParseAsJSON(text) : null,
                    response,
                    text,
                    cacheKey
                };
            });
        }).then((data)=>{
            if (!persistCache || "production" !== "production" || data.response.headers.get("x-middleware-cache") === "no-cache") {
                delete inflightCache[cacheKey];
            }
            return data;
        }).catch((err)=>{
            if (!unstable_skipClientCache) {
                delete inflightCache[cacheKey];
            }
            if (err.message === "Failed to fetch" || // firefox
            err.message === "NetworkError when attempting to fetch resource." || // safari
            err.message === "Load failed") {
                (0, _routeloader.markAssetError)(err);
            }
            throw err;
        });
    };
    // when skipping client cache we wait to update
    // inflight cache until successful data response
    // this allows racing click event with fetching newer data
    // without blocking navigation when stale data is available
    if (unstable_skipClientCache && persistCache) {
        return getData({}).then((data)=>{
            inflightCache[cacheKey] = Promise.resolve(data);
            return data;
        });
    }
    if (inflightCache[cacheKey] !== undefined) {
        return inflightCache[cacheKey];
    }
    return inflightCache[cacheKey] = getData(isBackground ? {
        method: "HEAD"
    } : {});
}
function createKey() {
    return Math.random().toString(36).slice(2, 10);
}
function handleHardNavigation(param) {
    let { url , router  } = param;
    // ensure we don't trigger a hard navigation to the same
    // URL as this can end up with an infinite refresh
    if (url === (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(router.asPath, router.locale))) {
        throw new Error("Invariant: attempted to hard navigate to the same URL " + url + " " + location.href);
    }
    window.location.href = url;
}
const getCancelledHandler = (param)=>{
    let { route , router  } = param;
    let cancelled = false;
    const cancel = router.clc = ()=>{
        cancelled = true;
    };
    const handleCancelled = ()=>{
        if (cancelled) {
            const error = new Error('Abort fetching component for route: "' + route + '"');
            error.cancelled = true;
            throw error;
        }
        if (cancel === router.clc) {
            router.clc = null;
        }
    };
    return handleCancelled;
};
class Router {
    reload() {
        window.location.reload();
    }
    /**
   * Go back in history
   */ back() {
        window.history.back();
    }
    /**
   * Go forward in history
   */ forward() {
        window.history.forward();
    }
    /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ push(url, as, options) {
        if (options === void 0) options = {};
        if (false) {}
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change("pushState", url, as, options);
    }
    /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ replace(url, as, options) {
        if (options === void 0) options = {};
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change("replaceState", url, as, options);
    }
    async _bfl(as, resolvedAs, locale, skipNavigate) {
        if (true) {
            let matchesBflStatic = false;
            let matchesBflDynamic = false;
            for (const curAs of [
                as,
                resolvedAs
            ]){
                if (curAs) {
                    const asNoSlash = (0, _removetrailingslash.removeTrailingSlash)(new URL(curAs, "http://n").pathname);
                    const asNoSlashLocale = (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(asNoSlash, locale || this.locale));
                    if (asNoSlash !== (0, _removetrailingslash.removeTrailingSlash)(new URL(this.asPath, "http://n").pathname)) {
                        var _this__bfl_s, _this__bfl_s1;
                        matchesBflStatic = matchesBflStatic || !!((_this__bfl_s = this._bfl_s) == null ? void 0 : _this__bfl_s.has(asNoSlash)) || !!((_this__bfl_s1 = this._bfl_s) == null ? void 0 : _this__bfl_s1.has(asNoSlashLocale));
                        for (const normalizedAS of [
                            asNoSlash,
                            asNoSlashLocale
                        ]){
                            // if any sub-path of as matches a dynamic filter path
                            // it should be hard navigated
                            const curAsParts = normalizedAS.split("/");
                            for(let i = 0; !matchesBflDynamic && i < curAsParts.length + 1; i++){
                                var _this__bfl_d;
                                const currentPart = curAsParts.slice(0, i).join("/");
                                if (currentPart && ((_this__bfl_d = this._bfl_d) == null ? void 0 : _this__bfl_d.has(currentPart))) {
                                    matchesBflDynamic = true;
                                    break;
                                }
                            }
                        }
                        // if the client router filter is matched then we trigger
                        // a hard navigation
                        if (matchesBflStatic || matchesBflDynamic) {
                            if (skipNavigate) {
                                return true;
                            }
                            handleHardNavigation({
                                url: (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, locale || this.locale, this.defaultLocale)),
                                router: this
                            });
                            return new Promise(()=>{});
                        }
                    }
                }
            }
        }
        return false;
    }
    async change(method, url, as, options, forcedScroll) {
        var _this_components_pathname;
        if (!(0, _islocalurl.isLocalURL)(url)) {
            handleHardNavigation({
                url,
                router: this
            });
            return false;
        }
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.
        const isQueryUpdating = options._h === 1;
        if (!isQueryUpdating && !options.shallow) {
            await this._bfl(as, undefined, options.locale);
        }
        let shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsepath.parsePath)(url).pathname === (0, _parsepath.parsePath)(as).pathname;
        const nextState = {
            ...this.state
        };
        // for static pages with query params in the URL we delay
        // marking the router ready until after the query is updated
        // or a navigation has occurred
        const readyStateChange = this.isReady !== true;
        this.isReady = true;
        const isSsr = this.isSsr;
        if (!isQueryUpdating) {
            this.isSsr = false;
        }
        // if a route transition is already in progress before
        // the query updating is triggered ignore query updating
        if (isQueryUpdating && this.clc) {
            return false;
        }
        const prevLocale = nextState.locale;
        if (false) { var _this_locales; }
        // marking route changes as a navigation start entry
        if (_utils.ST) {
            performance.mark("routeChange");
        }
        const { shallow =false , scroll =true  } = options;
        const routeProps = {
            shallow
        };
        if (this._inFlightRoute && this.clc) {
            if (!isSsr) {
                Router.events.emit("routeChangeError", buildCancellationError(), this._inFlightRoute, routeProps);
            }
            this.clc();
            this.clc = null;
        }
        as = (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)((0, _hasbasepath.hasBasePath)(as) ? (0, _removebasepath.removeBasePath)(as) : as, options.locale, this.defaultLocale));
        const cleanedAs = (0, _removelocale.removeLocale)((0, _hasbasepath.hasBasePath)(as) ? (0, _removebasepath.removeBasePath)(as) : as, nextState.locale);
        this._inFlightRoute = as;
        const localeChange = prevLocale !== nextState.locale;
        // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        if (!isQueryUpdating && this.onlyAHashChange(cleanedAs) && !localeChange) {
            nextState.asPath = cleanedAs;
            Router.events.emit("hashChangeStart", as, routeProps);
            // TODO: do we need the resolved href when only a hash change?
            this.changeState(method, url, as, {
                ...options,
                scroll: false
            });
            if (scroll) {
                this.scrollToHash(cleanedAs);
            }
            try {
                await this.set(nextState, this.components[nextState.route], null);
            } catch (err) {
                if ((0, _iserror.default)(err) && err.cancelled) {
                    Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
                }
                throw err;
            }
            Router.events.emit("hashChangeComplete", as, routeProps);
            return true;
        }
        let parsed = (0, _parserelativeurl.parseRelativeUrl)(url);
        let { pathname , query  } = parsed;
        // if we detected the path as app route during prefetching
        // trigger hard navigation
        if ((_this_components_pathname = this.components[pathname]) == null ? void 0 : _this_components_pathname.__appRouter) {
            handleHardNavigation({
                url: as,
                router: this
            });
            return new Promise(()=>{});
        }
        // The build manifest needs to be loaded before auto-static dynamic pages
        // get their query parameters to allow ensuring they can be parsed properly
        // when rewritten to
        let pages, rewrites;
        try {
            [pages, { __rewrites: rewrites  }] = await Promise.all([
                this.pageLoader.getPageList(),
                (0, _routeloader.getClientBuildManifest)(),
                this.pageLoader.getMiddleware()
            ]);
        } catch (err) {
            // If we fail to resolve the page list or client-build manifest, we must
            // do a server-side transition:
            handleHardNavigation({
                url: as,
                router: this
            });
            return false;
        }
        // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url
        if (!this.urlIsNew(cleanedAs) && !localeChange) {
            method = "replaceState";
        }
        // we need to resolve the as value using rewrites for dynamic SSG
        // pages to allow building the data URL correctly
        let resolvedAs = as;
        // url and as should always be prefixed with basePath by this
        // point by either next/link or router.push/replace so strip the
        // basePath from the pathname to match the pages dir 1-to-1
        pathname = pathname ? (0, _removetrailingslash.removeTrailingSlash)((0, _removebasepath.removeBasePath)(pathname)) : pathname;
        let route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
        const parsedAsPathname = as.startsWith("/") && (0, _parserelativeurl.parseRelativeUrl)(as).pathname;
        const isMiddlewareRewrite = !!(parsedAsPathname && route !== parsedAsPathname && (!(0, _isdynamic.isDynamicRoute)(route) || !(0, _routematcher.getRouteMatcher)((0, _routeregex.getRouteRegex)(route))(parsedAsPathname)));
        // we don't attempt resolve asPath when we need to execute
        // middleware as the resolving will occur server-side
        const isMiddlewareMatch = !options.shallow && await matchesMiddleware({
            asPath: as,
            locale: nextState.locale,
            router: this
        });
        if (isQueryUpdating && isMiddlewareMatch) {
            shouldResolveHref = false;
        }
        if (shouldResolveHref && pathname !== "/_error") {
            options._shouldResolveHref = true;
            if (false) {} else {
                parsed.pathname = resolveDynamicRoute(pathname, pages);
                if (parsed.pathname !== pathname) {
                    pathname = parsed.pathname;
                    parsed.pathname = (0, _addbasepath.addBasePath)(pathname);
                    if (!isMiddlewareMatch) {
                        url = (0, _formaturl.formatWithValidation)(parsed);
                    }
                }
            }
        }
        if (!(0, _islocalurl.isLocalURL)(as)) {
            if (false) {}
            handleHardNavigation({
                url: as,
                router: this
            });
            return false;
        }
        resolvedAs = (0, _removelocale.removeLocale)((0, _removebasepath.removeBasePath)(resolvedAs), nextState.locale);
        route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
        let routeMatch = false;
        if ((0, _isdynamic.isDynamicRoute)(route)) {
            const parsedAs = (0, _parserelativeurl.parseRelativeUrl)(resolvedAs);
            const asPathname = parsedAs.pathname;
            const routeRegex = (0, _routeregex.getRouteRegex)(route);
            routeMatch = (0, _routematcher.getRouteMatcher)(routeRegex)(asPathname);
            const shouldInterpolate = route === asPathname;
            const interpolatedAs = shouldInterpolate ? (0, _interpolateas.interpolateAs)(route, asPathname, query) : {};
            if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
                const missingParams = Object.keys(routeRegex.groups).filter((param)=>!query[param] && !routeRegex.groups[param].optional);
                if (missingParams.length > 0 && !isMiddlewareMatch) {
                    if (false) {}
                    throw new Error((shouldInterpolate ? "The provided `href` (" + url + ") value is missing query values (" + missingParams.join(", ") + ") to be interpolated properly. " : "The provided `as` value (" + asPathname + ") is incompatible with the `href` value (" + route + "). ") + ("Read more: https://nextjs.org/docs/messages/" + (shouldInterpolate ? "href-interpolation-failed" : "incompatible-href-as")));
                }
            } else if (shouldInterpolate) {
                as = (0, _formaturl.formatWithValidation)(Object.assign({}, parsedAs, {
                    pathname: interpolatedAs.result,
                    query: (0, _omit.omit)(query, interpolatedAs.params)
                }));
            } else {
                // Merge params into `query`, overwriting any specified in search
                Object.assign(query, routeMatch);
            }
        }
        if (!isQueryUpdating) {
            Router.events.emit("routeChangeStart", as, routeProps);
        }
        const isErrorRoute = this.pathname === "/404" || this.pathname === "/_error";
        try {
            var _self___NEXT_DATA___props, _self___NEXT_DATA___props_pageProps, _routeInfo_props;
            let routeInfo = await this.getRouteInfo({
                route,
                pathname,
                query,
                as,
                resolvedAs,
                routeProps,
                locale: nextState.locale,
                isPreview: nextState.isPreview,
                hasMiddleware: isMiddlewareMatch,
                unstable_skipClientCache: options.unstable_skipClientCache,
                isQueryUpdating: isQueryUpdating && !this.isFallback,
                isMiddlewareRewrite
            });
            if (!isQueryUpdating && !options.shallow) {
                await this._bfl(as, "resolvedAs" in routeInfo ? routeInfo.resolvedAs : undefined, nextState.locale);
            }
            if ("route" in routeInfo && isMiddlewareMatch) {
                pathname = routeInfo.route || route;
                route = pathname;
                if (!routeProps.shallow) {
                    query = Object.assign({}, routeInfo.query || {}, query);
                }
                const cleanedParsedPathname = (0, _hasbasepath.hasBasePath)(parsed.pathname) ? (0, _removebasepath.removeBasePath)(parsed.pathname) : parsed.pathname;
                if (routeMatch && pathname !== cleanedParsedPathname) {
                    Object.keys(routeMatch).forEach((key)=>{
                        if (routeMatch && query[key] === routeMatch[key]) {
                            delete query[key];
                        }
                    });
                }
                if ((0, _isdynamic.isDynamicRoute)(pathname)) {
                    const prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(new URL(as, location.href).pathname, nextState.locale), true);
                    let rewriteAs = prefixedAs;
                    if ((0, _hasbasepath.hasBasePath)(rewriteAs)) {
                        rewriteAs = (0, _removebasepath.removeBasePath)(rewriteAs);
                    }
                    if (false) {}
                    const routeRegex = (0, _routeregex.getRouteRegex)(pathname);
                    const curRouteMatch = (0, _routematcher.getRouteMatcher)(routeRegex)(new URL(rewriteAs, location.href).pathname);
                    if (curRouteMatch) {
                        Object.assign(query, curRouteMatch);
                    }
                }
            }
            // If the routeInfo brings a redirect we simply apply it.
            if ("type" in routeInfo) {
                if (routeInfo.type === "redirect-internal") {
                    return this.change(method, routeInfo.newUrl, routeInfo.newAs, options);
                } else {
                    handleHardNavigation({
                        url: routeInfo.destination,
                        router: this
                    });
                    return new Promise(()=>{});
                }
            }
            const component = routeInfo.Component;
            if (component && component.unstable_scriptLoader) {
                const scripts = [].concat(component.unstable_scriptLoader());
                scripts.forEach((script)=>{
                    (0, _script.handleClientScriptLoad)(script.props);
                });
            }
            // handle redirect on client-transition
            if ((routeInfo.__N_SSG || routeInfo.__N_SSP) && routeInfo.props) {
                if (routeInfo.props.pageProps && routeInfo.props.pageProps.__N_REDIRECT) {
                    // Use the destination from redirect without adding locale
                    options.locale = false;
                    const destination = routeInfo.props.pageProps.__N_REDIRECT;
                    // check if destination is internal (resolves to a page) and attempt
                    // client-navigation if it is falling back to hard navigation if
                    // it's not
                    if (destination.startsWith("/") && routeInfo.props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
                        const parsedHref = (0, _parserelativeurl.parseRelativeUrl)(destination);
                        parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                        const { url: newUrl , as: newAs  } = prepareUrlAs(this, destination, destination);
                        return this.change(method, newUrl, newAs, options);
                    }
                    handleHardNavigation({
                        url: destination,
                        router: this
                    });
                    return new Promise(()=>{});
                }
                nextState.isPreview = !!routeInfo.props.__N_PREVIEW;
                // handle SSG data 404
                if (routeInfo.props.notFound === SSG_DATA_NOT_FOUND) {
                    let notFoundRoute;
                    try {
                        await this.fetchComponent("/404");
                        notFoundRoute = "/404";
                    } catch (_) {
                        notFoundRoute = "/_error";
                    }
                    routeInfo = await this.getRouteInfo({
                        route: notFoundRoute,
                        pathname: notFoundRoute,
                        query,
                        as,
                        resolvedAs,
                        routeProps: {
                            shallow: false
                        },
                        locale: nextState.locale,
                        isPreview: nextState.isPreview,
                        isNotFound: true
                    });
                    if ("type" in routeInfo) {
                        throw new Error("Unexpected middleware effect on /404");
                    }
                }
            }
            if (isQueryUpdating && this.pathname === "/_error" && ((_self___NEXT_DATA___props = self.__NEXT_DATA__.props) == null ? void 0 : (_self___NEXT_DATA___props_pageProps = _self___NEXT_DATA___props.pageProps) == null ? void 0 : _self___NEXT_DATA___props_pageProps.statusCode) === 500 && ((_routeInfo_props = routeInfo.props) == null ? void 0 : _routeInfo_props.pageProps)) {
                // ensure statusCode is still correct for static 500 page
                // when updating query information
                routeInfo.props.pageProps.statusCode = 500;
            }
            var _routeInfo_route;
            // shallow routing is only allowed for same page URL changes.
            const isValidShallowRoute = options.shallow && nextState.route === ((_routeInfo_route = routeInfo.route) != null ? _routeInfo_route : route);
            var _options_scroll;
            const shouldScroll = (_options_scroll = options.scroll) != null ? _options_scroll : !isQueryUpdating && !isValidShallowRoute;
            const resetScroll = shouldScroll ? {
                x: 0,
                y: 0
            } : null;
            const upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll;
            // the new state that the router gonna set
            const upcomingRouterState = {
                ...nextState,
                route,
                pathname,
                query,
                asPath: cleanedAs,
                isFallback: false
            };
            // When the page being rendered is the 404 page, we should only update the
            // query parameters. Route changes here might add the basePath when it
            // wasn't originally present. This is also why this block is before the
            // below `changeState` call which updates the browser's history (changing
            // the URL).
            if (isQueryUpdating && isErrorRoute) {
                var _self___NEXT_DATA___props1, _self___NEXT_DATA___props_pageProps1, _routeInfo_props1;
                routeInfo = await this.getRouteInfo({
                    route: this.pathname,
                    pathname: this.pathname,
                    query,
                    as,
                    resolvedAs,
                    routeProps: {
                        shallow: false
                    },
                    locale: nextState.locale,
                    isPreview: nextState.isPreview,
                    isQueryUpdating: isQueryUpdating && !this.isFallback
                });
                if ("type" in routeInfo) {
                    throw new Error("Unexpected middleware effect on " + this.pathname);
                }
                if (this.pathname === "/_error" && ((_self___NEXT_DATA___props1 = self.__NEXT_DATA__.props) == null ? void 0 : (_self___NEXT_DATA___props_pageProps1 = _self___NEXT_DATA___props1.pageProps) == null ? void 0 : _self___NEXT_DATA___props_pageProps1.statusCode) === 500 && ((_routeInfo_props1 = routeInfo.props) == null ? void 0 : _routeInfo_props1.pageProps)) {
                    // ensure statusCode is still correct for static 500 page
                    // when updating query information
                    routeInfo.props.pageProps.statusCode = 500;
                }
                try {
                    await this.set(upcomingRouterState, routeInfo, upcomingScrollState);
                } catch (err) {
                    if ((0, _iserror.default)(err) && err.cancelled) {
                        Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
                    }
                    throw err;
                }
                return true;
            }
            Router.events.emit("beforeHistoryChange", as, routeProps);
            this.changeState(method, url, as, options);
            // for query updates we can skip it if the state is unchanged and we don't
            // need to scroll
            // https://github.com/vercel/next.js/issues/37139
            const canSkipUpdating = isQueryUpdating && !upcomingScrollState && !readyStateChange && !localeChange && (0, _comparestates.compareRouterStates)(upcomingRouterState, this.state);
            if (!canSkipUpdating) {
                try {
                    await this.set(upcomingRouterState, routeInfo, upcomingScrollState);
                } catch (e) {
                    if (e.cancelled) routeInfo.error = routeInfo.error || e;
                    else throw e;
                }
                if (routeInfo.error) {
                    if (!isQueryUpdating) {
                        Router.events.emit("routeChangeError", routeInfo.error, cleanedAs, routeProps);
                    }
                    throw routeInfo.error;
                }
                if (false) {}
                if (!isQueryUpdating) {
                    Router.events.emit("routeChangeComplete", as, routeProps);
                }
                // A hash mark # is the optional last part of a URL
                const hashRegex = /#.+$/;
                if (shouldScroll && hashRegex.test(as)) {
                    this.scrollToHash(as);
                }
            }
            return true;
        } catch (err) {
            if ((0, _iserror.default)(err) && err.cancelled) {
                return false;
            }
            throw err;
        }
    }
    changeState(method, url, as, options) {
        if (options === void 0) options = {};
        if (false) {}
        if (method !== "pushState" || (0, _utils.getURL)() !== as) {
            this._shallow = options.shallow;
            window.history[method]({
                url,
                as,
                options,
                __N: true,
                key: this._key = method !== "pushState" ? this._key : createKey()
            }, // Passing the empty string here should be safe against future changes to the method.
            // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
            "", as);
        }
    }
    async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        console.error(err);
        if (err.cancelled) {
            // bubble up cancellation errors
            throw err;
        }
        if ((0, _routeloader.isAssetError)(err) || loadErrorFail) {
            Router.events.emit("routeChangeError", err, as, routeProps);
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            handleHardNavigation({
                url: as,
                router: this
            });
            // Changing the URL doesn't block executing the current code path.
            // So let's throw a cancellation error stop the routing logic.
            throw buildCancellationError();
        }
        try {
            let props;
            const { page: Component , styleSheets  } = await this.fetchComponent("/_error");
            const routeInfo = {
                props,
                Component,
                styleSheets,
                err,
                error: err
            };
            if (!routeInfo.props) {
                try {
                    routeInfo.props = await this.getInitialProps(Component, {
                        err,
                        pathname,
                        query
                    });
                } catch (gipErr) {
                    console.error("Error in error page `getInitialProps`: ", gipErr);
                    routeInfo.props = {};
                }
            }
            return routeInfo;
        } catch (routeInfoErr) {
            return this.handleRouteInfoError((0, _iserror.default)(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ""), pathname, query, as, routeProps, true);
        }
    }
    async getRouteInfo(param) {
        let { route: requestedRoute , pathname , query , as , resolvedAs , routeProps , locale , hasMiddleware , isPreview , unstable_skipClientCache , isQueryUpdating , isMiddlewareRewrite , isNotFound  } = param;
        /**
     * This `route` binding can change if there's a rewrite
     * so we keep a reference to the original requested route
     * so we can store the cache for it and avoid re-requesting every time
     * for shallow routing purposes.
     */ let route = requestedRoute;
        try {
            var _data_effect, _data_effect1, _data_effect2, _data_response;
            const handleCancelled = getCancelledHandler({
                route,
                router: this
            });
            let existingInfo = this.components[route];
            if (routeProps.shallow && existingInfo && this.route === route) {
                return existingInfo;
            }
            if (hasMiddleware) {
                existingInfo = undefined;
            }
            let cachedRouteInfo = existingInfo && !("initial" in existingInfo) && "production" !== "development" ? existingInfo : undefined;
            const isBackground = isQueryUpdating;
            const fetchNextDataParams = {
                dataHref: this.pageLoader.getDataHref({
                    href: (0, _formaturl.formatWithValidation)({
                        pathname,
                        query
                    }),
                    skipInterpolation: true,
                    asPath: isNotFound ? "/404" : resolvedAs,
                    locale
                }),
                hasMiddleware: true,
                isServerRender: this.isSsr,
                parseJSON: true,
                inflightCache: isBackground ? this.sbc : this.sdc,
                persistCache: !isPreview,
                isPrefetch: false,
                unstable_skipClientCache,
                isBackground
            };
            let data = isQueryUpdating && !isMiddlewareRewrite ? null : await withMiddlewareEffects({
                fetchData: ()=>fetchNextData(fetchNextDataParams),
                asPath: isNotFound ? "/404" : resolvedAs,
                locale: locale,
                router: this
            }).catch((err)=>{
                // we don't hard error during query updating
                // as it's un-necessary and doesn't need to be fatal
                // unless it is a fallback route and the props can't
                // be loaded
                if (isQueryUpdating) {
                    return null;
                }
                throw err;
            });
            // when rendering error routes we don't apply middleware
            // effects
            if (data && (pathname === "/_error" || pathname === "/404")) {
                data.effect = undefined;
            }
            if (isQueryUpdating) {
                if (!data) {
                    data = {
                        json: self.__NEXT_DATA__.props
                    };
                } else {
                    data.json = self.__NEXT_DATA__.props;
                }
            }
            handleCancelled();
            if ((data == null ? void 0 : (_data_effect = data.effect) == null ? void 0 : _data_effect.type) === "redirect-internal" || (data == null ? void 0 : (_data_effect1 = data.effect) == null ? void 0 : _data_effect1.type) === "redirect-external") {
                return data.effect;
            }
            if ((data == null ? void 0 : (_data_effect2 = data.effect) == null ? void 0 : _data_effect2.type) === "rewrite") {
                const resolvedRoute = (0, _removetrailingslash.removeTrailingSlash)(data.effect.resolvedHref);
                const pages = await this.pageLoader.getPageList();
                // during query updating the page must match although during
                // client-transition a redirect that doesn't match a page
                // can be returned and this should trigger a hard navigation
                // which is valid for incremental migration
                if (!isQueryUpdating || pages.includes(resolvedRoute)) {
                    route = resolvedRoute;
                    pathname = data.effect.resolvedHref;
                    query = {
                        ...query,
                        ...data.effect.parsedAs.query
                    };
                    resolvedAs = (0, _removebasepath.removeBasePath)((0, _normalizelocalepath.normalizeLocalePath)(data.effect.parsedAs.pathname, this.locales).pathname);
                    // Check again the cache with the new destination.
                    existingInfo = this.components[route];
                    if (routeProps.shallow && existingInfo && this.route === route && !hasMiddleware) {
                        // If we have a match with the current route due to rewrite,
                        // we can copy the existing information to the rewritten one.
                        // Then, we return the information along with the matched route.
                        return {
                            ...existingInfo,
                            route
                        };
                    }
                }
            }
            if ((0, _isapiroute.isAPIRoute)(route)) {
                handleHardNavigation({
                    url: as,
                    router: this
                });
                return new Promise(()=>{});
            }
            const routeInfo = cachedRouteInfo || await this.fetchComponent(route).then((res)=>({
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                }));
            if (false) {}
            const wasBailedPrefetch = data == null ? void 0 : (_data_response = data.response) == null ? void 0 : _data_response.headers.get("x-middleware-skip");
            const shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP;
            // For non-SSG prefetches that bailed before sending data
            // we clear the cache to fetch full response
            if (wasBailedPrefetch && (data == null ? void 0 : data.dataHref)) {
                delete this.sdc[data.dataHref];
            }
            const { props , cacheKey  } = await this._getData(async ()=>{
                if (shouldFetchData) {
                    if ((data == null ? void 0 : data.json) && !wasBailedPrefetch) {
                        return {
                            cacheKey: data.cacheKey,
                            props: data.json
                        };
                    }
                    const dataHref = (data == null ? void 0 : data.dataHref) ? data.dataHref : this.pageLoader.getDataHref({
                        href: (0, _formaturl.formatWithValidation)({
                            pathname,
                            query
                        }),
                        asPath: resolvedAs,
                        locale
                    });
                    const fetched = await fetchNextData({
                        dataHref,
                        isServerRender: this.isSsr,
                        parseJSON: true,
                        inflightCache: wasBailedPrefetch ? {} : this.sdc,
                        persistCache: !isPreview,
                        isPrefetch: false,
                        unstable_skipClientCache
                    });
                    return {
                        cacheKey: fetched.cacheKey,
                        props: fetched.json || {}
                    };
                }
                return {
                    headers: {},
                    props: await this.getInitialProps(routeInfo.Component, {
                        pathname,
                        query,
                        asPath: as,
                        locale,
                        locales: this.locales,
                        defaultLocale: this.defaultLocale
                    })
                };
            });
            // Only bust the data cache for SSP routes although
            // middleware can skip cache per request with
            // x-middleware-cache: no-cache as well
            if (routeInfo.__N_SSP && fetchNextDataParams.dataHref && cacheKey) {
                delete this.sdc[cacheKey];
            }
            // we kick off a HEAD request in the background
            // when a non-prefetch request is made to signal revalidation
            if (!this.isPreview && routeInfo.__N_SSG && "production" !== "development" && !isQueryUpdating) {
                fetchNextData(Object.assign({}, fetchNextDataParams, {
                    isBackground: true,
                    persistCache: false,
                    inflightCache: this.sbc
                })).catch(()=>{});
            }
            props.pageProps = Object.assign({}, props.pageProps);
            routeInfo.props = props;
            routeInfo.route = route;
            routeInfo.query = query;
            routeInfo.resolvedAs = resolvedAs;
            this.components[route] = routeInfo;
            return routeInfo;
        } catch (err) {
            return this.handleRouteInfoError((0, _iserror.getProperError)(err), pathname, query, as, routeProps);
        }
    }
    set(state, data, resetScroll) {
        this.state = state;
        return this.sub(data, this.components["/_app"].Component, resetScroll);
    }
    /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */ beforePopState(cb) {
        this._bps = cb;
    }
    onlyAHashChange(as) {
        if (!this.asPath) return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split("#");
        const [newUrlNoHash, newHash] = as.split("#");
        // Makes sure we scroll to the provided hash if the url/hash are the same
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
            return true;
        }
        // If the urls are change, there's more than a hash change
        if (oldUrlNoHash !== newUrlNoHash) {
            return false;
        }
        // If the hash has changed, then it's a hash only change.
        // This check is necessary to handle both the enter and
        // leave hash === '' cases. The identity case falls through
        // and is treated as a next reload.
        return oldHash !== newHash;
    }
    scrollToHash(as) {
        const [, hash = ""] = as.split("#");
        // Scroll to top if the hash is just `#` with no value or `#top`
        // To mirror browsers
        if (hash === "" || hash === "top") {
            (0, _handlesmoothscroll.handleSmoothScroll)(()=>window.scrollTo(0, 0));
            return;
        }
        // Decode hash to make non-latin anchor works.
        const rawHash = decodeURIComponent(hash);
        // First we check if the element by id is found
        const idEl = document.getElementById(rawHash);
        if (idEl) {
            (0, _handlesmoothscroll.handleSmoothScroll)(()=>idEl.scrollIntoView());
            return;
        }
        // If there's no element with the id, we check the `name` property
        // To mirror browsers
        const nameEl = document.getElementsByName(rawHash)[0];
        if (nameEl) {
            (0, _handlesmoothscroll.handleSmoothScroll)(()=>nameEl.scrollIntoView());
        }
    }
    urlIsNew(asPath) {
        return this.asPath !== asPath;
    }
    /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */ async prefetch(url, asPath, options) {
        if (asPath === void 0) asPath = url;
        if (options === void 0) options = {};
        // Prefetch is not supported in development mode because it would trigger on-demand-entries
        if (false) {}
        if ( true && (0, _isbot.isBot)(window.navigator.userAgent)) {
            // No prefetches for bots that render the link since they are typically navigating
            // links via the equivalent of a hard navigation and hence never utilize these
            // prefetches.
            return;
        }
        let parsed = (0, _parserelativeurl.parseRelativeUrl)(url);
        const urlPathname = parsed.pathname;
        let { pathname , query  } = parsed;
        const originalPathname = pathname;
        if (false) {}
        const pages = await this.pageLoader.getPageList();
        let resolvedAs = asPath;
        const locale = typeof options.locale !== "undefined" ? options.locale || undefined : this.locale;
        const isMiddlewareMatch = await matchesMiddleware({
            asPath: asPath,
            locale: locale,
            router: this
        });
        if (false) {}
        parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
        if ((0, _isdynamic.isDynamicRoute)(parsed.pathname)) {
            pathname = parsed.pathname;
            parsed.pathname = pathname;
            Object.assign(query, (0, _routematcher.getRouteMatcher)((0, _routeregex.getRouteRegex)(parsed.pathname))((0, _parsepath.parsePath)(asPath).pathname) || {});
            if (!isMiddlewareMatch) {
                url = (0, _formaturl.formatWithValidation)(parsed);
            }
        }
        const data =  false ? 0 : await withMiddlewareEffects({
            fetchData: ()=>fetchNextData({
                    dataHref: this.pageLoader.getDataHref({
                        href: (0, _formaturl.formatWithValidation)({
                            pathname: originalPathname,
                            query
                        }),
                        skipInterpolation: true,
                        asPath: resolvedAs,
                        locale
                    }),
                    hasMiddleware: true,
                    isServerRender: this.isSsr,
                    parseJSON: true,
                    inflightCache: this.sdc,
                    persistCache: !this.isPreview,
                    isPrefetch: true
                }),
            asPath: asPath,
            locale: locale,
            router: this
        });
        /**
     * If there was a rewrite we apply the effects of the rewrite on the
     * current parameters for the prefetch.
     */ if ((data == null ? void 0 : data.effect.type) === "rewrite") {
            parsed.pathname = data.effect.resolvedHref;
            pathname = data.effect.resolvedHref;
            query = {
                ...query,
                ...data.effect.parsedAs.query
            };
            resolvedAs = data.effect.parsedAs.pathname;
            url = (0, _formaturl.formatWithValidation)(parsed);
        }
        /**
     * If there is a redirect to an external destination then we don't have
     * to prefetch content as it will be unused.
     */ if ((data == null ? void 0 : data.effect.type) === "redirect-external") {
            return;
        }
        const route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
        if (await this._bfl(asPath, resolvedAs, options.locale, true)) {
            this.components[urlPathname] = {
                __appRouter: true
            };
        }
        await Promise.all([
            this.pageLoader._isSsg(route).then((isSsg)=>{
                return isSsg ? fetchNextData({
                    dataHref: (data == null ? void 0 : data.json) ? data == null ? void 0 : data.dataHref : this.pageLoader.getDataHref({
                        href: url,
                        asPath: resolvedAs,
                        locale: locale
                    }),
                    isServerRender: false,
                    parseJSON: true,
                    inflightCache: this.sdc,
                    persistCache: !this.isPreview,
                    isPrefetch: true,
                    unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!true
                }).then(()=>false).catch(()=>false) : false;
            }),
            this.pageLoader[options.priority ? "loadPage" : "prefetch"](route)
        ]);
    }
    async fetchComponent(route) {
        const handleCancelled = getCancelledHandler({
            route,
            router: this
        });
        try {
            const componentResult = await this.pageLoader.loadPage(route);
            handleCancelled();
            return componentResult;
        } catch (err) {
            handleCancelled();
            throw err;
        }
    }
    _getData(fn) {
        let cancelled = false;
        const cancel = ()=>{
            cancelled = true;
        };
        this.clc = cancel;
        return fn().then((data)=>{
            if (cancel === this.clc) {
                this.clc = null;
            }
            if (cancelled) {
                const err = new Error("Loading initial props cancelled");
                err.cancelled = true;
                throw err;
            }
            return data;
        });
    }
    _getFlightData(dataHref) {
        // Do not cache RSC flight response since it's not a static resource
        return fetchNextData({
            dataHref,
            isServerRender: true,
            parseJSON: false,
            inflightCache: this.sdc,
            persistCache: false,
            isPrefetch: false
        }).then((param)=>{
            let { text  } = param;
            return {
                data: text
            };
        });
    }
    getInitialProps(Component, ctx) {
        const { Component: App  } = this.components["/_app"];
        const AppTree = this._wrapApp(App);
        ctx.AppTree = AppTree;
        return (0, _utils.loadGetInitialProps)(App, {
            AppTree,
            Component,
            router: this,
            ctx
        });
    }
    get route() {
        return this.state.route;
    }
    get pathname() {
        return this.state.pathname;
    }
    get query() {
        return this.state.query;
    }
    get asPath() {
        return this.state.asPath;
    }
    get locale() {
        return this.state.locale;
    }
    get isFallback() {
        return this.state.isFallback;
    }
    get isPreview() {
        return this.state.isPreview;
    }
    constructor(pathname, query, as, { initialProps , pageLoader , App , wrapApp , Component , err , subscription , isFallback , locale , locales , defaultLocale , domainLocales , isPreview  }){
        // Server Data Cache (full data requests)
        this.sdc = {};
        // Server Background Cache (HEAD requests)
        this.sbc = {};
        this.isFirstPopStateEvent = true;
        this._key = createKey();
        this.onPopState = (e)=>{
            const { isFirstPopStateEvent  } = this;
            this.isFirstPopStateEvent = false;
            const state = e.state;
            if (!state) {
                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                const { pathname , query  } = this;
                this.changeState("replaceState", (0, _formaturl.formatWithValidation)({
                    pathname: (0, _addbasepath.addBasePath)(pathname),
                    query
                }), (0, _utils.getURL)());
                return;
            }
            // __NA is used to identify if the history entry can be handled by the app-router.
            if (state.__NA) {
                window.location.reload();
                return;
            }
            if (!state.__N) {
                return;
            }
            // Safari fires popstateevent when reopening the browser.
            if (isFirstPopStateEvent && this.locale === state.options.locale && state.as === this.asPath) {
                return;
            }
            let forcedScroll;
            const { url , as , options , key  } = state;
            if (false) {}
            this._key = key;
            const { pathname  } = (0, _parserelativeurl.parseRelativeUrl)(url);
            // Make sure we don't re-render on initial load,
            // can be caused by navigating back from an external site
            if (this.isSsr && as === (0, _addbasepath.addBasePath)(this.asPath) && pathname === (0, _addbasepath.addBasePath)(this.pathname)) {
                return;
            }
            // If the downstream application returns falsy, return.
            // They will then be responsible for handling the event.
            if (this._bps && !this._bps(state)) {
                return;
            }
            this.change("replaceState", url, as, Object.assign({}, options, {
                shallow: options.shallow && this._shallow,
                locale: options.locale || this.defaultLocale,
                // @ts-ignore internal value not exposed on types
                _h: 0
            }), forcedScroll);
        };
        // represents the current component key
        const route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
        // set up the component cache (by route keys)
        this.components = {};
        // We should not keep the cache, if there's an error
        // Otherwise, this cause issues when when going back and
        // come again to the errored page.
        if (pathname !== "/_error") {
            this.components[route] = {
                Component,
                initial: true,
                props: initialProps,
                err,
                __N_SSG: initialProps && initialProps.__N_SSG,
                __N_SSP: initialProps && initialProps.__N_SSP
            };
        }
        this.components["/_app"] = {
            Component: App,
            styleSheets: []
        };
        if (true) {
            const { BloomFilter  } = __webpack_require__(6030);
            const staticFilterData = {"bitset":{"size":32,"content":"kSCvGw=="},"hashes":7,"size":29};
            const dynamicFilterData = {"bitset":{"size":0,"content":""},"hashes":null,"size":0};
            if (staticFilterData == null ? void 0 : staticFilterData.hashes) {
                this._bfl_s = new BloomFilter(staticFilterData.size, staticFilterData.hashes);
                this._bfl_s.import(staticFilterData);
            }
            if (dynamicFilterData == null ? void 0 : dynamicFilterData.hashes) {
                this._bfl_d = new BloomFilter(dynamicFilterData.size, dynamicFilterData.hashes);
                this._bfl_d.import(dynamicFilterData);
            }
        }
        // Backwards compat for Router.router.events
        // TODO: Should be remove the following major version as it was never documented
        this.events = Router.events;
        this.pageLoader = pageLoader;
        // if auto prerendered and dynamic route wait to update asPath
        // until after mount to prevent hydration mismatch
        const autoExportDynamic = (0, _isdynamic.isDynamicRoute)(pathname) && self.__NEXT_DATA__.autoExport;
        this.basePath =  false || "";
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        // make sure to ignore extra popState in safari on navigating
        // back from external site
        this.isSsr = true;
        this.isLocaleDomain = false;
        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
        if (false) {}
        this.state = {
            route,
            pathname,
            query,
            asPath: autoExportDynamic ? pathname : as,
            isPreview: !!isPreview,
            locale:  false ? 0 : undefined,
            isFallback
        };
        this._initialMatchesMiddlewarePromise = Promise.resolve(false);
        if (true) {
            // make sure "as" doesn't start with double slashes or else it can
            // throw an error as it's considered invalid
            if (!as.startsWith("//")) {
                // in order for `e.state` to work on the `onpopstate` event
                // we have to register the initial route upon initialization
                const options = {
                    locale
                };
                const asPath = (0, _utils.getURL)();
                this._initialMatchesMiddlewarePromise = matchesMiddleware({
                    router: this,
                    locale,
                    asPath
                }).then((matches)=>{
                    options._shouldResolveHref = as !== pathname;
                    this.changeState("replaceState", matches ? asPath : (0, _formaturl.formatWithValidation)({
                        pathname: (0, _addbasepath.addBasePath)(pathname),
                        query
                    }), asPath, options);
                    return matches;
                });
            }
            window.addEventListener("popstate", this.onPopState);
            // enable custom scroll restoration handling when available
            // otherwise fallback to browser's default handling
            if (false) {}
        }
    }
}
(()=>{
    Router.events = (0, _mitt.default)();
})(); //# sourceMappingURL=router.js.map


/***/ }),

/***/ 6323:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _addpathprefix = __webpack_require__(6258);
const _pathhasprefix = __webpack_require__(3546);
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 6258:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathPrefix", ({
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
}));
const _parsepath = __webpack_require__(5606);
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map


/***/ }),

/***/ 1151:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathSuffix", ({
    enumerable: true,
    get: function() {
        return addPathSuffix;
    }
}));
const _parsepath = __webpack_require__(5606);
function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsepath.parsePath)(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map


/***/ }),

/***/ 1336:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "compareRouterStates", ({
    enumerable: true,
    get: function() {
        return compareRouterStates;
    }
}));
function compareRouterStates(a, b) {
    const stateKeys = Object.keys(a);
    if (stateKeys.length !== Object.keys(b).length) return false;
    for(let i = stateKeys.length; i--;){
        const key = stateKeys[i];
        if (key === "query") {
            const queryKeys = Object.keys(a.query);
            if (queryKeys.length !== Object.keys(b.query).length) {
                return false;
            }
            for(let j = queryKeys.length; j--;){
                const queryKey = queryKeys[j];
                if (!b.query.hasOwnProperty(queryKey) || a.query[queryKey] !== b.query[queryKey]) {
                    return false;
                }
            }
        } else if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=compare-states.js.map


/***/ }),

/***/ 5456:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "formatNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return formatNextPathnameInfo;
    }
}));
const _removetrailingslash = __webpack_require__(386);
const _addpathprefix = __webpack_require__(6258);
const _addpathsuffix = __webpack_require__(1151);
const _addlocale = __webpack_require__(6323);
function formatNextPathnameInfo(info) {
    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
    }
    if (info.buildId) {
        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addpathsuffix.addPathSuffix)(pathname, "/") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map


/***/ }),

/***/ 242:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    }
});
const _interop_require_wildcard = __webpack_require__(1757);
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(6607));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth , hostname  } = urlObj;
    let protocol = urlObj.protocol || "";
    let pathname = urlObj.pathname || "";
    let hash = urlObj.hash || "";
    let query = urlObj.query || "";
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ":" + urlObj.port;
        }
    }
    if (query && typeof query === "object") {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || "";
    if (protocol && !protocol.endsWith(":")) protocol += ":";
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
    } else if (!host) {
        host = "";
    }
    if (hash && hash[0] !== "#") hash = "#" + hash;
    if (search && search[0] !== "?") search = "?" + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace("#", "%23");
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    "auth",
    "hash",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "slashes"
];
function formatWithValidation(url) {
    if (false) {}
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map


/***/ }),

/***/ 8473:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
// Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return getAssetPathFromRoute;
    }
}));
function getAssetPathFromRoute(route, ext) {
    if (ext === void 0) ext = "";
    const path = route === "/" ? "/index" : /^\/index(\/|$)/.test(route) ? "/index" + route : "" + route;
    return path + ext;
} //# sourceMappingURL=get-asset-path-from-route.js.map


/***/ }),

/***/ 5907:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return getNextPathnameInfo;
    }
}));
const _normalizelocalepath = __webpack_require__(4324);
const _removepathprefix = __webpack_require__(5054);
const _pathhasprefix = __webpack_require__(3546);
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath , i18n , trailingSlash  } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        info.buildId = buildId;
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (options.i18nProvider) {
        const result = options.i18nProvider.analyze(info.pathname);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
    } else if (i18n) {
        const pathLocale = (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
        info.locale = pathLocale.detectedLocale;
        var _pathLocale_pathname;
        info.pathname = (_pathLocale_pathname = pathLocale.pathname) != null ? _pathLocale_pathname : info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map


/***/ }),

/***/ 7232:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleSmoothScroll", ({
    enumerable: true,
    get: function() {
        return handleSmoothScroll;
    }
}));
function handleSmoothScroll(fn, options) {
    if (options === void 0) options = {};
    const htmlElement = document.documentElement;
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = "auto";
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=handle-smooth-scroll.js.map


/***/ }),

/***/ 2647:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __webpack_require__(1965);
const _isdynamic = __webpack_require__(4030); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 5466:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "interpolateAs", ({
    enumerable: true,
    get: function() {
        return interpolateAs;
    }
}));
const _routematcher = __webpack_require__(6616);
const _routeregex = __webpack_require__(248);
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = "";
    const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
    // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || "";
        const { repeat , optional  } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = "[" + (repeat ? "..." : "") + param + "]";
        if (optional) {
            replaced = (!value ? "/" : "") + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
    })) {
        interpolatedRoute = "" // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
} //# sourceMappingURL=interpolate-as.js.map


/***/ }),

/***/ 7211:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isBot", ({
    enumerable: true,
    get: function() {
        return isBot;
    }
}));
function isBot(userAgent) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(userAgent);
} //# sourceMappingURL=is-bot.js.map


/***/ }),

/***/ 4030:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
// Identify /[param]/ in route string

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isDynamicRoute", ({
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
}));
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map


/***/ }),

/***/ 1901:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isLocalURL", ({
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
}));
const _utils = __webpack_require__(6873);
const _hasbasepath = __webpack_require__(1219);
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map


/***/ }),

/***/ 4532:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "omit", ({
    enumerable: true,
    get: function() {
        return omit;
    }
}));
function omit(object, keys) {
    const omitted = {};
    Object.keys(object).forEach((key)=>{
        if (!keys.includes(key)) {
            omitted[key] = object[key];
        }
    });
    return omitted;
} //# sourceMappingURL=omit.js.map


/***/ }),

/***/ 5606:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parsePath", ({
    enumerable: true,
    get: function() {
        return parsePath;
    }
}));
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map


/***/ }),

/***/ 4393:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parseRelativeUrl", ({
    enumerable: true,
    get: function() {
        return parseRelativeUrl;
    }
}));
const _utils = __webpack_require__(6873);
const _querystring = __webpack_require__(6607);
function parseRelativeUrl(url, base) {
    const globalBase = new URL( false ? 0 : (0, _utils.getLocationOrigin)());
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL( false ? 0 : window.location.href) : globalBase;
    const { pathname , searchParams , search , hash , href , origin  } = new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw new Error("invariant: invalid relative URL, router received " + url);
    }
    return {
        pathname,
        query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length)
    };
} //# sourceMappingURL=parse-relative-url.js.map


/***/ }),

/***/ 3546:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "pathHasPrefix", ({
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
}));
const _parsepath = __webpack_require__(5606);
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname  } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map


/***/ }),

/***/ 6607:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    },
    assign: function() {
        return assign;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map


/***/ }),

/***/ 5054:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removePathPrefix", ({
    enumerable: true,
    get: function() {
        return removePathPrefix;
    }
}));
const _pathhasprefix = __webpack_require__(3546);
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map


/***/ }),

/***/ 386:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeTrailingSlash", ({
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
}));
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 947:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "resolveHref", ({
    enumerable: true,
    get: function() {
        return resolveHref;
    }
}));
const _querystring = __webpack_require__(6607);
const _formaturl = __webpack_require__(242);
const _omit = __webpack_require__(4532);
const _utils = __webpack_require__(6873);
const _normalizetrailingslash = __webpack_require__(7812);
const _islocalurl = __webpack_require__(1901);
const _isdynamic = __webpack_require__(4030);
const _interpolateas = __webpack_require__(5466);
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split("?");
    if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL("/", "http://n");
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _isdynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
            const { result , params  } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formaturl.formatWithValidation)({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: (0, _omit.omit)(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
} //# sourceMappingURL=resolve-href.js.map


/***/ }),

/***/ 6616:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getRouteMatcher", ({
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
}));
const _utils = __webpack_require__(6873);
function getRouteMatcher(param) {
    let { re , groups  } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new _utils.DecodeError("failed to decode param");
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map


/***/ }),

/***/ 248:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRouteRegex: function() {
        return getRouteRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    }
});
const _escaperegexp = __webpack_require__(9489);
const _removetrailingslash = __webpack_require__(386);
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 */ function parseParameter(param) {
    const optional = param.startsWith("[") && param.endsWith("]");
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith("...");
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            if (segment.startsWith("[") && segment.endsWith("]")) {
                const { key , optional , repeat  } = parseParameter(segment.slice(1, -1));
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        groups
    };
}
function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute , groups  } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1;
    return ()=>{
        let routeKey = "";
        for(let i = 0; i < routeKeyCharLength; i++){
            routeKey += String.fromCharCode(routeKeyCharCode);
            routeKeyCharCode++;
            if (routeKeyCharCode > 122) {
                routeKeyCharLength++;
                routeKeyCharCode = 97;
            }
        }
        return routeKey;
    };
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            if (segment.startsWith("[") && segment.endsWith("]")) {
                const { key , optional , repeat  } = parseParameter(segment.slice(1, -1));
                // replace any non-word characters since they can break
                // the named regex
                let cleanedKey = key.replace(/\W/g, "");
                if (prefixRouteKeys) {
                    cleanedKey = "" + NEXT_QUERY_PARAM_PREFIX + cleanedKey;
                }
                let invalidKey = false;
                // check if the key is still invalid and fallback to using a known
                // safe key
                if (cleanedKey.length === 0 || cleanedKey.length > 30) {
                    invalidKey = true;
                }
                if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
                    invalidKey = true;
                }
                if (invalidKey) {
                    cleanedKey = getSafeRouteKey();
                }
                if (prefixRouteKeys) {
                    routeKeys[cleanedKey] = "" + NEXT_QUERY_PARAM_PREFIX + key;
                } else {
                    routeKeys[cleanedKey] = "" + key;
                }
                return repeat ? optional ? "(?:/(?<" + cleanedKey + ">.+?))?" : "/(?<" + cleanedKey + ">.+?)" : "/(?<" + cleanedKey + ">[^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute  } = getParametrizedRoute(normalizedRoute);
    const { catchAll =true  } = options;
    if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute  } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map


/***/ }),

/***/ 1965:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSortedRoutes", ({
    enumerable: true,
    get: function() {
        return getSortedRoutes;
    }
}));
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith("...")) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = "[[...]]";
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = "[...]";
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = "[]";
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
} //# sourceMappingURL=sorted-routes.js.map


/***/ }),

/***/ 6333:
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    setConfig: function() {
        return setConfig;
    }
});
let runtimeConfig;
const _default = ()=>{
    return runtimeConfig;
};
function setConfig(configValue) {
    runtimeConfig = configValue;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=runtime-config.js.map


/***/ }),

/***/ 4323:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return SideEffect;
    }
}));
const _interop_require_wildcard = __webpack_require__(1757);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(5784));
const isServer = "object" === "undefined";
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager , reduceComponentsToState  } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements, props));
        }
    }
    if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect(()=>{
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        return ()=>{
            var _headManager_mountedInstances;
            headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.delete(props.children);
        };
    });
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect(()=>{
        if (headManager) {
            headManager._pendingUpdate = emitChange;
        }
        return ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
        };
    });
    useClientOnlyEffect(()=>{
        if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
        }
        return ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
        };
    });
    return null;
} //# sourceMappingURL=side-effect.js.map


/***/ }),

/***/ 6873:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    isResSent: function() {
        return isResSent;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    DecodeError: function() {
        return DecodeError;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    }
});
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol , hostname , port  } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href  } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 9627:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "warnOnce", ({
    enumerable: true,
    get: function() {
        return warnOnce;
    }
}));
let warnOnce = (_)=>{};
if (false) {} //# sourceMappingURL=warn-once.js.map


/***/ }),

/***/ 7544:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(5784),ba=__webpack_require__(9954),da={usingClientEntryPoint:!1,Events:null,Dispatcher:{current:null}};function r(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var C=Object.assign,ea=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=[],ha=-1;function ia(a){return{current:a}}function D(a){0>ha||(a.current=fa[ha],fa[ha]=null,ha--)}function E(a,b){ha++;fa[ha]=a.current;a.current=b}
var ja=Symbol.for("react.element"),ka=Symbol.for("react.portal"),la=Symbol.for("react.fragment"),ma=Symbol.for("react.strict_mode"),na=Symbol.for("react.profiler"),oa=Symbol.for("react.provider"),pa=Symbol.for("react.context"),qa=Symbol.for("react.server_context"),ra=Symbol.for("react.forward_ref"),sa=Symbol.for("react.suspense"),ta=Symbol.for("react.suspense_list"),ua=Symbol.for("react.memo"),va=Symbol.for("react.lazy"),wa=Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var xa=Symbol.for("react.offscreen"),ya=Symbol.for("react.legacy_hidden"),za=Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Aa=Symbol.for("react.default_value"),Ba=Symbol.iterator;function Ca(a){if(null===a||"object"!==typeof a)return null;a=Ba&&a[Ba]||a["@@iterator"];return"function"===typeof a?a:null}var Da=ia(null),Ea=ia(null),Fa=ia(null);
function Ga(a,b){E(Fa,b);E(Ea,a);E(Da,null);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?(b=b.namespaceURI)?Ha(b):0:0;break;default:if(a=8===a?b.parentNode:b,b=a.tagName,a=a.namespaceURI)a=Ha(a),b=Ia(a,b);else switch(b){case "svg":b=1;break;case "math":b=2;break;default:b=0}}D(Da);E(Da,b)}function Ja(){D(Da);D(Ea);D(Fa)}function Ka(a){var b=Da.current;var c=Ia(b,a.type);b!==c&&(E(Ea,a),E(Da,c))}function La(a){Ea.current===a&&(D(Da),D(Ea))}
var Ma=ba.unstable_scheduleCallback,Na=ba.unstable_cancelCallback,Oa=ba.unstable_shouldYield,Pa=ba.unstable_requestPaint,Qa=ba.unstable_now,Ra=ba.unstable_getCurrentPriorityLevel,Sa=ba.unstable_ImmediatePriority,Ta=ba.unstable_UserBlockingPriority,Ua=ba.unstable_NormalPriority,Va=ba.unstable_LowPriority,Wa=ba.unstable_IdlePriority,Xa=null,Ya=null;function Za(a){if(Ya&&"function"===typeof Ya.onCommitFiberRoot)try{Ya.onCommitFiberRoot(Xa,a,void 0,128===(a.current.flags&128))}catch(b){}}
var ab=Math.clz32?Math.clz32:$a,bb=Math.log,cb=Math.LN2;function $a(a){a>>>=0;return 0===a?32:31-(bb(a)/cb|0)|0}var db=128,eb=8388608;
function fb(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:return a&8388480;case 8388608:case 16777216:case 33554432:case 67108864:return a&125829120;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;
case 1073741824:return 1073741824;default:return a}}function gb(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=fb(h):(f&=g,0!==f&&(d=fb(f)))}else g=c&~e,0!==g?d=fb(g):0!==f&&(d=fb(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||32===e&&0!==(f&8388480)))return b;0!==(d&8)&&(d|=c&32);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-ab(b),e=1<<c,d|=a[c],b&=~e;return d}
function hb(a,b){switch(a){case 1:case 2:case 4:case 8:return b+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:return b+5E3;case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function ib(a,b){if(a.errorRecoveryDisabledLanes&b)return 0;a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function jb(){var a=db;db<<=1;0===(db&8388480)&&(db=128);return a}function kb(){var a=eb;eb<<=1;0===(eb&125829120)&&(eb=8388608);return a}function lb(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}function mb(a,b){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0)}
function nb(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;a.errorRecoveryDisabledLanes&=b;b=a.entanglements;var d=a.expirationTimes;for(a=a.hiddenUpdates;0<c;){var e=31-ab(c),f=1<<e;b[e]=0;d[e]=-1;var g=a[e];if(null!==g)for(a[e]=null,e=0;e<g.length;e++){var h=g[e];null!==h&&(h.lane&=-1073741825)}c&=~f}}
function ob(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-ab(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var H=0;function pb(a,b){var c=H;try{return H=a,b()}finally{H=c}}function qb(a){a&=-a;return 2<a?8<a?0!==(a&268435455)?32:536870912:8:2}
var rb=Object.prototype.hasOwnProperty,sb=Math.random().toString(36).slice(2),tb="__reactFiber$"+sb,ub="__reactProps$"+sb,vb="__reactContainer$"+sb,wb="__reactEvents$"+sb,xb="__reactListeners$"+sb,yb="__reactHandles$"+sb,Ab="__reactResources$"+sb,Bb="__reactMarker$"+sb;function Cb(a){delete a[tb];delete a[ub];delete a[wb];delete a[xb];delete a[yb]}
function Db(a){var b=a[tb];if(b)return b;for(var c=a.parentNode;c;){if(b=c[vb]||c[tb]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Eb(a);null!==a;){if(c=a[tb])return c;a=Eb(a)}return b}a=c;c=a.parentNode}return null}function Fb(a){if(a=a[tb]||a[vb]){var b=a.tag;if(5===b||6===b||13===b||26===b||27===b||3===b)return a}return null}function Gb(a){var b=a.tag;if(5===b||26===b||27===b||6===b)return a.stateNode;throw Error(r(33));}function Hb(a){return a[ub]||null}
function Ib(a){var b=a[Ab];b||(b=a[Ab]={hoistableStyles:new Map,hoistableScripts:new Map});return b}function Jb(a){a[Bb]=!0}var Kb=new Set,Lb={};function Mb(a,b){Nb(a,b);Nb(a+"Capture",b)}function Nb(a,b){Lb[a]=b;for(a=0;a<b.length;a++)Kb.add(b[a])}
var Ob=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Pb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qb=
{},Rb={};function Sb(a){if(rb.call(Rb,a))return!0;if(rb.call(Qb,a))return!1;if(Pb.test(a))return Rb[a]=!0;Qb[a]=!0;return!1}function Tb(a,b,c){if(Sb(b))if(null===c)a.removeAttribute(b);else{switch(typeof c){case "undefined":case "function":case "symbol":a.removeAttribute(b);return;case "boolean":var d=b.toLowerCase().slice(0,5);if("data-"!==d&&"aria-"!==d){a.removeAttribute(b);return}}a.setAttribute(b,""+c)}}
function Ub(a,b,c){if(null===c)a.removeAttribute(b);else{switch(typeof c){case "undefined":case "function":case "symbol":case "boolean":a.removeAttribute(b);return}a.setAttribute(b,""+c)}}function Vb(a,b,c,d){if(null===d)a.removeAttribute(c);else{switch(typeof d){case "undefined":case "function":case "symbol":case "boolean":a.removeAttribute(c);return}a.setAttributeNS(b,c,""+d)}}var Wb;
function Xb(a){if(void 0===Wb)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Wb=b&&b[1]||""}return"\n"+Wb+a}var Yb=!1;
function Zb(a,b){if(!a||Yb)return"";Yb=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(p){var d=p}Reflect.construct(a,[],b)}else{try{b.call()}catch(p){d=p}a.call(b.prototype)}else{try{throw Error();}catch(p){d=p}a()}}catch(p){if(p&&d&&"string"===typeof p.stack){for(var e=p.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var l="\n"+e[g].replace(" at new "," at ");a.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",a.displayName));return l}while(1<=g&&0<=h)}break}}}finally{Yb=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Xb(a):""}
function $b(a){switch(a.tag){case 26:case 27:case 5:return Xb(a.type);case 16:return Xb("Lazy");case 13:return Xb("Suspense");case 19:return Xb("SuspenseList");case 0:case 2:case 15:return a=Zb(a.type,!1),a;case 11:return a=Zb(a.type.render,!1),a;case 1:return a=Zb(a.type,!0),a;default:return""}}
function ac(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case la:return"Fragment";case ka:return"Portal";case na:return"Profiler";case ma:return"StrictMode";case sa:return"Suspense";case ta:return"SuspenseList";case za:return"Cache"}if("object"===typeof a)switch(a.$$typeof){case pa:return(a.displayName||"Context")+".Consumer";case oa:return(a._context.displayName||"Context")+".Provider";case ra:var b=a.render;a=a.displayName;
a||(a=b.displayName||b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case ua:return b=a.displayName||null,null!==b?b:ac(a.type)||"Memo";case va:b=a._payload;a=a._init;try{return ac(a(b))}catch(c){break}case qa:return(a.displayName||a._globalName)+".Provider"}return null}
function bc(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ac(b);case 8:return b===ma?"StrictMode":"Mode";
case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function cc(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function dc(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function ec(a){var b=dc(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(g){d=""+g;f.call(this,g)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(g){d=""+g},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function fc(a){a._valueTracker||(a._valueTracker=ec(a))}function gc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=dc(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function hc(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}var ic=/[\n"\\]/g;
function jc(a){return a.replace(ic,function(b){return"\\"+b.charCodeAt(0).toString(16)+" "})}
function kc(a,b,c,d,e,f,g,h){a.name="";null!=g&&"function"!==typeof g&&"symbol"!==typeof g&&"boolean"!==typeof g?a.type=g:a.removeAttribute("type");if(null!=b)if("number"===g){if(0===b&&""===a.value||a.value!=b)a.value=""+cc(b)}else a.value!==""+cc(b)&&(a.value=""+cc(b));else"submit"!==g&&"reset"!==g||a.removeAttribute("value");null!=b?lc(a,g,cc(b)):null!=c?lc(a,g,cc(c)):null!=d&&a.removeAttribute("value");null==e&&null!=f&&(a.defaultChecked=!!f);null!=e&&a.checked!==!!e&&(a.checked=e);null!=h&&"function"!==
typeof h&&"symbol"!==typeof h&&"boolean"!==typeof h?a.name=""+cc(h):a.removeAttribute("name")}
function mc(a,b,c,d,e,f,g,h){null!=f&&"function"!==typeof f&&"symbol"!==typeof f&&"boolean"!==typeof f&&(a.type=f);if(null!=b||null!=c){if(!("submit"!==f&&"reset"!==f||void 0!==b&&null!==b))return;c=null!=c?""+cc(c):"";b=null!=b?""+cc(b):c;h||b===a.value||(a.value=b);a.defaultValue=b}d=null!=d?d:e;d="function"!==typeof d&&"symbol"!==typeof d&&!!d;h||(a.checked=!!d);a.defaultChecked=!!d;null!=g&&"function"!==typeof g&&"symbol"!==typeof g&&"boolean"!==typeof g&&(a.name=g)}
function lc(a,b,c){"number"===b&&hc(a.ownerDocument)===a||a.defaultValue===""+c||(a.defaultValue=""+c)}var nc=Array.isArray;
function oc(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+cc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function pc(a,b,c){if(null!=b&&(b=""+cc(b),b!==a.value&&(a.value=b),null==c)){a.defaultValue!==b&&(a.defaultValue=b);return}a.defaultValue=null!=c?""+cc(c):""}function qc(a,b,c,d){if(null==b){if(null!=d){if(null!=c)throw Error(r(92));if(nc(d)){if(1<d.length)throw Error(r(93));d=d[0]}c=d}null==c&&(c="");b=c}c=cc(b);a.defaultValue=c;d=a.textContent;d===c&&""!==d&&null!==d&&(a.value=d)}var rc;
function sc(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{rc=rc||document.createElement("div");rc.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=rc.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}var tc=sc;"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction&&(tc=function(a,b){return MSApp.execUnsafeLocalFunction(function(){return sc(a,b)})});var uc=tc;
function vc(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}var wc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
function xc(a,b){if(null!=b&&"object"!==typeof b)throw Error(r(62));a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=b[c],e=0===c.indexOf("--");null==d||"boolean"===typeof d||""===d?e?a.setProperty(c,""):"float"===c?a.cssFloat="":a[c]="":e?a.setProperty(c,d):"number"!==typeof d||0===d||wc.has(c)?"float"===c?a.cssFloat=d:a[c]=(""+d).trim():a[c]=d+"px"}}
function yc(a){if(-1===a.indexOf("-"))return!1;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
var zc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],
["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical",
"glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering",
"shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],
["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],
["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ac=null;function Bc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var Cc=null,Dc=null;
function Ec(a){var b=Fb(a);if(b&&(a=b.stateNode)){var c=Hb(a);a:switch(a=b.stateNode,b.type){case "input":kc(a,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll('input[name="'+jc(""+b)+'"][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Hb(d);if(!e)throw Error(r(90));gc(d);kc(d,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,
e.type,e.name)}}}break a;case "textarea":pc(a,c.value,c.defaultValue);break a;case "select":b=c.value,null!=b&&oc(a,!!c.multiple,b,!1)}}}function Fc(a){Cc?Dc?Dc.push(a):Dc=[a]:Cc=a}function Gc(){if(Cc){var a=Cc,b=Dc;Dc=Cc=null;Ec(a);if(b)for(a=0;a<b.length;a++)Ec(b[a])}}function Hc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}
function Ic(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Jc(a){if(Hc(a)!==a)throw Error(r(188));}
function Kc(a){var b=a.alternate;if(!b){b=Hc(a);if(null===b)throw Error(r(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Jc(e),a;if(f===d)return Jc(e),b;f=f.sibling}throw Error(r(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(r(189));}}if(c.alternate!==d)throw Error(r(190));}if(3!==c.tag)throw Error(r(188));return c.stateNode.current===c?a:b}function Lc(a){a=Kc(a);return null!==a?Mc(a):null}function Mc(a){var b=a.tag;if(5===b||26===b||27===b||6===b)return a;for(a=a.child;null!==a;){b=Mc(a);if(null!==b)return b;a=a.sibling}return null}var Nc={},Oc=ia(Nc),Pc=ia(!1),Qc=Nc;
function Rc(a,b){var c=a.type.contextTypes;if(!c)return Nc;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Sc(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Tc(){D(Pc);D(Oc)}
function Uc(a,b,c){if(Oc.current!==Nc)throw Error(r(168));E(Oc,b);E(Pc,c)}function Vc(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(r(108,bc(a)||"Unknown",e));return C({},c,d)}function Wc(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Nc;Qc=Oc.current;E(Oc,a);E(Pc,Pc.current);return!0}
function Xc(a,b,c){var d=a.stateNode;if(!d)throw Error(r(169));c?(a=Vc(a,b,Qc),d.__reactInternalMemoizedMergedChildContext=a,D(Pc),D(Oc),E(Oc,a)):D(Pc);E(Pc,c)}function Yc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var Zc="function"===typeof Object.is?Object.is:Yc,$c=[],ad=0,bd=null,cd=0,dd=[],ed=0,fd=null,gd=1,hd="";function id(a,b){$c[ad++]=cd;$c[ad++]=bd;bd=a;cd=b}
function jd(a,b,c){dd[ed++]=gd;dd[ed++]=hd;dd[ed++]=fd;fd=a;var d=gd;a=hd;var e=32-ab(d)-1;d&=~(1<<e);c+=1;var f=32-ab(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;gd=1<<32-ab(b)+e|c<<e|d;hd=f+a}else gd=1<<f|c<<e|d,hd=a}function kd(a){null!==a.return&&(id(a,1),jd(a,1,0))}function ld(a){for(;a===bd;)bd=$c[--ad],$c[ad]=null,cd=$c[--ad],$c[ad]=null;for(;a===fd;)fd=dd[--ed],dd[ed]=null,hd=dd[--ed],dd[ed]=null,gd=dd[--ed],dd[ed]=null}var I=null,J=null,K=!1,md=null,nd=!1;
function od(a,b){var c=pd(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}function qd(a,b){b.flags=b.flags&-4097|2}function rd(a,b){b=sd(b,a.type,a.pendingProps,nd);return null!==b?(a.stateNode=b,I=a,J=td(b.firstChild),nd=!1,!0):!1}function ud(a,b){b=vd(b,a.pendingProps,nd);return null!==b?(a.stateNode=b,I=a,J=null,!0):!1}
function wd(a,b){a:{var c=b;for(b=nd;8!==c.nodeType;){if(!b){b=null;break a}c=td(c.nextSibling);if(null===c){b=null;break a}}b=c}return null!==b?(c=null!==fd?{id:gd,overflow:hd}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=pd(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,I=a,J=null,!0):!1}function xd(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function yd(){throw Error(r(418));}
function zd(a){var b=a.stateNode,c=a.type,d=a.memoizedProps;b[tb]=a;b[ub]=d;var e=0!==(a.mode&1);switch(c){case "dialog":L("cancel",b);L("close",b);break;case "iframe":case "object":case "embed":L("load",b);break;case "video":case "audio":for(c=0;c<Ad.length;c++)L(Ad[c],b);break;case "source":L("error",b);break;case "img":case "image":case "link":L("error",b);L("load",b);break;case "details":L("toggle",b);break;case "input":L("invalid",b);mc(b,d.value,d.defaultValue,d.checked,d.defaultChecked,d.type,
d.name,!0);fc(b);break;case "select":L("invalid",b);break;case "textarea":L("invalid",b),qc(b,d.value,d.defaultValue,d.children),fc(b)}c=null;var f=d.children;"string"!==typeof f&&"number"!==typeof f||b.textContent===""+f||(!0!==d.suppressHydrationWarning&&Bd(b.textContent,f,e),e||(c=["children",f]));null!=d.onScroll&&L("scroll",b);null!=d.onClick&&(b.onclick=Cd);b=c;a.updateQueue=b;return null!==b?!0:!1}
function Dd(a){for(I=a.return;I;)switch(I.tag){case 3:case 27:nd=!0;return;case 5:case 13:nd=!1;return;default:I=I.return}}
function Ed(a){if(a!==I)return!1;if(!K)return Dd(a),K=!0,!1;var b=!1;3===a.tag||27===a.tag||5===a.tag&&Fd(a.type,a.memoizedProps)||(b=!0);if(b&&(b=J))if(xd(a))Gd(),yd();else for(;b;)od(a,b),b=td(b.nextSibling);Dd(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(r(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){J=td(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}J=null}}else J=I?td(a.stateNode.nextSibling):
null;return!0}function Gd(){for(var a=J;a;)a=td(a.nextSibling)}function Hd(){J=I=null;K=!1}function Id(a){null===md?md=[a]:md.push(a)}var Jd=[],Kd=0,Ld=0;function Md(){for(var a=Kd,b=Ld=Kd=0;b<a;){var c=Jd[b];Jd[b++]=null;var d=Jd[b];Jd[b++]=null;var e=Jd[b];Jd[b++]=null;var f=Jd[b];Jd[b++]=null;if(null!==d&&null!==e){var g=d.pending;null===g?e.next=e:(e.next=g.next,g.next=e);d.pending=e}0!==f&&Nd(c,e,f)}}
function Od(a,b,c,d){Jd[Kd++]=a;Jd[Kd++]=b;Jd[Kd++]=c;Jd[Kd++]=d;Ld|=d;a.lanes|=d;a=a.alternate;null!==a&&(a.lanes|=d)}function Pd(a,b){Od(a,null,null,b);return Qd(a)}
function Nd(a,b,c){a.lanes|=c;var d=a.alternate;null!==d&&(d.lanes|=c);for(var e=!1,f=a.return;null!==f;)f.childLanes|=c,d=f.alternate,null!==d&&(d.childLanes|=c),22===f.tag&&(a=f.stateNode,null===a||a._visibility&1||(e=!0)),a=f,f=f.return;e&&null!==b&&3===a.tag&&(f=a.stateNode,e=31-ab(c),f=f.hiddenUpdates,a=f[e],null===a?f[e]=[b]:a.push(b),b.lane=c|1073741824)}function Qd(a){if(50<Rd)throw Rd=0,Sd=null,Error(r(185));for(var b=a.return;null!==b;)a=b,b=a.return;return 3===a.tag?a.stateNode:null}
var Td=!1;function Ud(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vd(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function Wd(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}
function Xd(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(M&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;b=Qd(a);Nd(a,null,c);return b}Od(a,d,b,c);return Qd(a)}function Yd(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&8388480))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;ob(a,c)}}
function Zd(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={lane:c.lane,tag:c.tag,payload:c.payload,callback:null,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,callbacks:d.callbacks};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=b;c.lastBaseUpdate=b}
function $d(a,b,c,d){var e=a.updateQueue;Td=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var l=h,p=l.next;l.next=null;null===g?f=p:g.next=p;g=l;var q=a.alternate;null!==q&&(q=q.updateQueue,h=q.lastBaseUpdate,h!==g&&(null===h?q.firstBaseUpdate=p:h.next=p,q.lastBaseUpdate=l))}if(null!==f){var w=e.baseState;g=0;q=p=l=null;h=f;do{var t=h.lane&-1073741825,u=t!==h.lane;if(u?(N&t)===t:(d&t)===t){null!==q&&(q=q.next={lane:0,tag:h.tag,payload:h.payload,
callback:null,next:null});a:{var z=a,B=h;t=b;var R=c;switch(B.tag){case 1:z=B.payload;if("function"===typeof z){w=z.call(R,w,t);break a}w=z;break a;case 3:z.flags=z.flags&-65537|128;case 0:z=B.payload;t="function"===typeof z?z.call(R,w,t):z;if(null===t||void 0===t)break a;w=C({},w,t);break a;case 2:Td=!0}}t=h.callback;null!==t&&(a.flags|=64,u&&(a.flags|=8192),u=e.callbacks,null===u?e.callbacks=[t]:u.push(t))}else u={lane:t,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===q?(p=q=u,
l=w):q=q.next=u,g|=t;h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else u=h,h=u.next,u.next=null,e.lastBaseUpdate=u,e.shared.pending=null}while(1);null===q&&(l=w);e.baseState=l;e.firstBaseUpdate=p;e.lastBaseUpdate=q;null===f&&(e.shared.lanes=0);ae|=g;a.lanes=g;a.memoizedState=w}}function be(a,b){if("function"!==typeof a)throw Error(r(191,a));a.call(b)}function ce(a,b){var c=a.callbacks;if(null!==c)for(a.callbacks=null,a=0;a<c.length;a++)be(c[a],b)}
function de(a,b){if(Zc(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!rb.call(b,e)||!Zc(a[e],b[e]))return!1}return!0}var ee=Error(r(460)),fe=Error(r(474)),ge={then:function(){}};function he(a){a=a.status;return"fulfilled"===a||"rejected"===a}function ie(){}
function je(a,b,c){c=a[c];void 0===c?a.push(b):c!==b&&(b.then(ie,ie),b=c);switch(b.status){case "fulfilled":return b.value;case "rejected":throw b.reason;default:"string"===typeof b.status?b.then(ie,ie):(a=b,a.status="pending",a.then(function(d){if("pending"===b.status){var e=b;e.status="fulfilled";e.value=d}},function(d){if("pending"===b.status){var e=b;e.status="rejected";e.reason=d}}));switch(b.status){case "fulfilled":return b.value;case "rejected":throw b.reason;}ke=b;throw ee;}}var ke=null;
function le(){if(null===ke)throw Error(r(459));var a=ke;ke=null;return a}var me=null,ne=0;function oe(a){var b=ne;ne+=1;null===me&&(me=[]);return je(me,a,b)}
function pe(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(r(309));var d=c.stateNode}if(!d)throw Error(r(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(g){var h=e.refs;null===g?delete h[f]:h[f]=g};b._stringRef=f;return b}if("string"!==typeof a)throw Error(r(284));if(!c._owner)throw Error(r(290,a));}return a}
function qe(a,b){a=Object.prototype.toString.call(b);throw Error(r(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function re(a){var b=a._init;return b(a._payload)}
function se(a){function b(m,k){if(a){var n=m.deletions;null===n?(m.deletions=[k],m.flags|=16):n.push(k)}}function c(m,k){if(!a)return null;for(;null!==k;)b(m,k),k=k.sibling;return null}function d(m,k){for(m=new Map;null!==k;)null!==k.key?m.set(k.key,k):m.set(k.index,k),k=k.sibling;return m}function e(m,k){m=te(m,k);m.index=0;m.sibling=null;return m}function f(m,k,n){m.index=n;if(!a)return m.flags|=1048576,k;n=m.alternate;if(null!==n)return n=n.index,n<k?(m.flags|=33554434,k):n;m.flags|=33554434;return k}
function g(m){a&&null===m.alternate&&(m.flags|=33554434);return m}function h(m,k,n,v){if(null===k||6!==k.tag)return k=ue(n,m.mode,v),k.return=m,k;k=e(k,n);k.return=m;return k}function l(m,k,n,v){var x=n.type;if(x===la)return q(m,k,n.props.children,v,n.key);if(null!==k&&(k.elementType===x||"object"===typeof x&&null!==x&&x.$$typeof===va&&re(x)===k.type))return v=e(k,n.props),v.ref=pe(m,k,n),v.return=m,v;v=ve(n.type,n.key,n.props,null,m.mode,v);v.ref=pe(m,k,n);v.return=m;return v}function p(m,k,n,v){if(null===
k||4!==k.tag||k.stateNode.containerInfo!==n.containerInfo||k.stateNode.implementation!==n.implementation)return k=we(n,m.mode,v),k.return=m,k;k=e(k,n.children||[]);k.return=m;return k}function q(m,k,n,v,x){if(null===k||7!==k.tag)return k=xe(n,m.mode,v,x),k.return=m,k;k=e(k,n);k.return=m;return k}function w(m,k,n){if("string"===typeof k&&""!==k||"number"===typeof k)return k=ue(""+k,m.mode,n),k.return=m,k;if("object"===typeof k&&null!==k){switch(k.$$typeof){case ja:return n=ve(k.type,k.key,k.props,
null,m.mode,n),n.ref=pe(m,null,k),n.return=m,n;case ka:return k=we(k,m.mode,n),k.return=m,k;case va:var v=k._init;return w(m,v(k._payload),n)}if(nc(k)||Ca(k))return k=xe(k,m.mode,n,null),k.return=m,k;if("function"===typeof k.then)return w(m,oe(k),n);if(k.$$typeof===pa||k.$$typeof===qa)return w(m,ye(m,k,n),n);qe(m,k)}return null}function t(m,k,n,v){var x=null!==k?k.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==x?null:h(m,k,""+n,v);if("object"===typeof n&&null!==n){switch(n.$$typeof){case ja:return n.key===
x?l(m,k,n,v):null;case ka:return n.key===x?p(m,k,n,v):null;case va:return x=n._init,t(m,k,x(n._payload),v)}if(nc(n)||Ca(n))return null!==x?null:q(m,k,n,v,null);if("function"===typeof n.then)return t(m,k,oe(n),v);if(n.$$typeof===pa||n.$$typeof===qa)return t(m,k,ye(m,n,v),v);qe(m,n)}return null}function u(m,k,n,v,x){if("string"===typeof v&&""!==v||"number"===typeof v)return m=m.get(n)||null,h(k,m,""+v,x);if("object"===typeof v&&null!==v){switch(v.$$typeof){case ja:return m=m.get(null===v.key?n:v.key)||
null,l(k,m,v,x);case ka:return m=m.get(null===v.key?n:v.key)||null,p(k,m,v,x);case va:var A=v._init;return u(m,k,n,A(v._payload),x)}if(nc(v)||Ca(v))return m=m.get(n)||null,q(k,m,v,x,null);if("function"===typeof v.then)return u(m,k,n,oe(v),x);if(v.$$typeof===pa||v.$$typeof===qa)return u(m,k,n,ye(k,v,x),x);qe(k,v)}return null}function z(m,k,n,v){for(var x=null,A=null,y=k,F=k=0,ca=null;null!==y&&F<n.length;F++){y.index>F?(ca=y,y=null):ca=y.sibling;var G=t(m,y,n[F],v);if(null===G){null===y&&(y=ca);break}a&&
y&&null===G.alternate&&b(m,y);k=f(G,k,F);null===A?x=G:A.sibling=G;A=G;y=ca}if(F===n.length)return c(m,y),K&&id(m,F),x;if(null===y){for(;F<n.length;F++)y=w(m,n[F],v),null!==y&&(k=f(y,k,F),null===A?x=y:A.sibling=y,A=y);K&&id(m,F);return x}for(y=d(m,y);F<n.length;F++)ca=u(y,m,F,n[F],v),null!==ca&&(a&&null!==ca.alternate&&y.delete(null===ca.key?F:ca.key),k=f(ca,k,F),null===A?x=ca:A.sibling=ca,A=ca);a&&y.forEach(function(zb){return b(m,zb)});K&&id(m,F);return x}function B(m,k,n,v){var x=Ca(n);if("function"!==
typeof x)throw Error(r(150));n=x.call(n);if(null==n)throw Error(r(151));for(var A=x=null,y=k,F=k=0,ca=null,G=n.next();null!==y&&!G.done;F++,G=n.next()){y.index>F?(ca=y,y=null):ca=y.sibling;var zb=t(m,y,G.value,v);if(null===zb){null===y&&(y=ca);break}a&&y&&null===zb.alternate&&b(m,y);k=f(zb,k,F);null===A?x=zb:A.sibling=zb;A=zb;y=ca}if(G.done)return c(m,y),K&&id(m,F),x;if(null===y){for(;!G.done;F++,G=n.next())G=w(m,G.value,v),null!==G&&(k=f(G,k,F),null===A?x=G:A.sibling=G,A=G);K&&id(m,F);return x}for(y=
d(m,y);!G.done;F++,G=n.next())G=u(y,m,F,G.value,v),null!==G&&(a&&null!==G.alternate&&y.delete(null===G.key?F:G.key),k=f(G,k,F),null===A?x=G:A.sibling=G,A=G);a&&y.forEach(function(hm){return b(m,hm)});K&&id(m,F);return x}function R(m,k,n,v){"object"===typeof n&&null!==n&&n.type===la&&null===n.key&&(n=n.props.children);if("object"===typeof n&&null!==n){switch(n.$$typeof){case ja:a:{for(var x=n.key,A=k;null!==A;){if(A.key===x){x=n.type;if(x===la){if(7===A.tag){c(m,A.sibling);k=e(A,n.props.children);
k.return=m;m=k;break a}}else if(A.elementType===x||"object"===typeof x&&null!==x&&x.$$typeof===va&&re(x)===A.type){c(m,A.sibling);k=e(A,n.props);k.ref=pe(m,A,n);k.return=m;m=k;break a}c(m,A);break}else b(m,A);A=A.sibling}n.type===la?(k=xe(n.props.children,m.mode,v,n.key),k.return=m,m=k):(v=ve(n.type,n.key,n.props,null,m.mode,v),v.ref=pe(m,k,n),v.return=m,m=v)}return g(m);case ka:a:{for(A=n.key;null!==k;){if(k.key===A)if(4===k.tag&&k.stateNode.containerInfo===n.containerInfo&&k.stateNode.implementation===
n.implementation){c(m,k.sibling);k=e(k,n.children||[]);k.return=m;m=k;break a}else{c(m,k);break}else b(m,k);k=k.sibling}k=we(n,m.mode,v);k.return=m;m=k}return g(m);case va:return A=n._init,U(m,k,A(n._payload),v)}if(nc(n))return z(m,k,n,v);if(Ca(n))return B(m,k,n,v);if("function"===typeof n.then)return R(m,k,oe(n),v);if(n.$$typeof===pa||n.$$typeof===qa)return R(m,k,ye(m,n,v),v);qe(m,n)}return"string"===typeof n&&""!==n||"number"===typeof n?(n=""+n,null!==k&&6===k.tag?(c(m,k.sibling),k=e(k,n),k.return=
m,m=k):(c(m,k),k=ue(n,m.mode,v),k.return=m,m=k),g(m)):c(m,k)}function U(m,k,n,v){ne=0;m=R(m,k,n,v);me=null;return m}return U}var ze=se(!0),Ae=se(!1),Be=ia(null),Ce=ia(0);function De(a,b){a=Ee;E(Ce,a);E(Be,b);Ee=a|b.baseLanes}function Fe(){E(Ce,Ee);E(Be,Be.current)}function Ge(){Ee=Ce.current;D(Be);D(Ce)}var He=ia(null),Ie=null;function Je(a){var b=a.alternate;E(Ke,Ke.current&1);E(He,a);null===Ie&&(null===b||null!==Be.current?Ie=a:null!==b.memoizedState&&(Ie=a))}
function Le(a){if(22===a.tag){if(E(Ke,Ke.current),E(He,a),null===Ie){var b=a.alternate;null!==b&&null!==b.memoizedState&&(Ie=a)}}else Me(a)}function Me(){E(Ke,Ke.current);E(He,He.current)}function Ne(a){D(He);Ie===a&&(Ie=null);D(Ke)}var Ke=ia(0);
function Oe(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Pe=[];
function Qe(){for(var a=0;a<Pe.length;a++)Pe[a]._workInProgressVersionPrimary=null;Pe.length=0}var Re=null,Se=null,Te=!1,Ue=!1,Ve=!1,We=0;function Xe(a){a!==Se&&null===a.next&&(null===Se?Re=Se=a:Se=Se.next=a);Ue=!0;Te||(Te=!0,Ye(Ze))}
function $e(a){if(!Ve&&Ue){var b=O,c=N,d=null;Ve=!0;do{var e=!1;for(var f=Re;null!==f;){if((!a||0===f.tag)&&0!==(gb(f,f===b?c:0)&3))try{e=!0;var g=f;if(0!==(M&6))throw Error(r(327));af();var h=gb(g,0);if(0!==(h&3)){var l=bf(g,h);if(0!==g.tag&&2===l){var p=h,q=ib(g,p);0!==q&&(h=q,l=cf(g,p,q))}if(1===l)throw p=df,ef(g,0),ff(g,h),Xe(g),p;6===l?ff(g,h):(g.finishedWork=g.current.alternate,g.finishedLanes=h,gf(g,hf,jf))}Xe(g)}catch(w){null===d?d=[w]:d.push(w)}f=f.next}}while(e);Ve=!1;if(null!==d){if(1<
d.length){if("function"===typeof AggregateError)throw new AggregateError(d);for(a=1;a<d.length;a++)Ye(kf.bind(null,d[a]))}throw d[0];}}}function kf(a){throw a;}function Ze(){Ue=Te=!1;for(var a=Qa(),b=null,c=Re;null!==c;){var d=c.next;0!==We&&window.event&&"popstate"===window.event.type&&ob(c,We|2);var e=lf(c,a);0===e?(c.next=null,null===b?Re=d:b.next=d,null===d&&(Se=b)):(b=c,0!==(e&3)&&(Ue=!0));c=d}We=0;$e(!1)}
function lf(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes&-125829121;0<f;){var g=31-ab(f),h=1<<g,l=e[g];if(-1===l){if(0===(h&c)||0!==(h&d))e[g]=hb(h,b)}else l<=b&&(a.expiredLanes|=h);f&=~h}b=O;c=N;c=gb(a,a===b?c:0);d=a.callbackNode;if(0===c||a===b&&2===P||null!==a.cancelPendingCommit)return null!==d&&null!==d&&Na(d),a.callbackNode=null,a.callbackPriority=0;if(0!==(c&3))return null!==d&&null!==d&&Na(d),a.callbackPriority=2,a.callbackNode=null,2;b=c&-c;if(b===
a.callbackPriority)return b;null!==d&&Na(d);switch(qb(c)){case 2:c=Sa;break;case 8:c=Ta;break;case 32:c=Ua;break;case 536870912:c=Wa;break;default:c=Ua}d=mf.bind(null,a);c=Ma(c,d);a.callbackPriority=b;a.callbackNode=c;return b}function Ye(a){nf(function(){0!==(M&6)?Ma(Sa,a):a()})}var of=0,pf=ea.ReactCurrentDispatcher,qf=ea.ReactCurrentBatchConfig,rf=0,Q=null,S=null,T=null,sf=!1,tf=!1,uf=!1,vf=0,wf=0,xf=null,yf=0;function zf(){throw Error(r(321));}
function Af(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Zc(a[c],b[c]))return!1;return!0}function Bf(a,b,c,d,e,f){rf=f;Q=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;pf.current=null===a||null===a.memoizedState?Cf:Df;uf=!1;a=c(d,e);uf=!1;tf&&(a=Ef(b,c,d,e));Ff();return a}function Ff(){pf.current=Gf;var a=null!==S&&null!==S.next;rf=0;T=S=Q=null;sf=!1;wf=0;xf=null;if(a)throw Error(r(300));}
function Ef(a,b,c,d){Q=a;var e=0;do{tf&&(xf=null);wf=0;tf=!1;if(25<=e)throw Error(r(301));e+=1;T=S=null;a.updateQueue=null;pf.current=Hf;var f=b(c,d)}while(tf);return f}function If(){var a=0!==vf;vf=0;return a}function Jf(a,b,c){b.updateQueue=a.updateQueue;b.flags&=-2053;a.lanes&=~c}function Kf(a){if(sf){for(a=a.memoizedState;null!==a;){var b=a.queue;null!==b&&(b.pending=null);a=a.next}sf=!1}rf=0;T=S=Q=null;tf=!1;wf=vf=0;xf=null}
function Lf(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?Q.memoizedState=T=a:T=T.next=a;return T}
function Mf(){if(null===S){var a=Q.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?Q.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a){if(null===Q.alternate)throw Error(r(467));throw Error(r(310));}S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?Q.memoizedState=T=a:T=T.next=a}return T}var Nf;Nf=function(){return{lastEffect:null,events:null,stores:null}};
function Of(a){var b=wf;wf+=1;null===xf&&(xf=[]);a=je(xf,a,b);null===Q.alternate&&(null===T?null===Q.memoizedState:null===T.next)&&(pf.current=Cf);return a}function Pf(a){if(null!==a&&"object"===typeof a){if("function"===typeof a.then)return Of(a);if(a.$$typeof===pa||a.$$typeof===qa)return Qf(a)}throw Error(r(438,String(a)));}function Rf(a,b){return"function"===typeof b?b(a):b}
function Sf(a){var b=Mf(),c=S,d=b.queue;if(null===d)throw Error(r(311));d.lastRenderedReducer=a;var e=b.baseQueue,f=d.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}c.baseQueue=e=f;d.pending=null}if(null!==e){c=e.next;f=b.baseState;var h=g=null,l=null,p=c;do{var q=p.lane&-1073741825;if(q!==p.lane?(N&q)===q:(rf&q)===q)null!==l&&(l=l.next={lane:0,revertLane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),q=p.action,uf&&a(f,q),f=p.hasEagerState?
p.eagerState:a(f,q);else{var w={lane:q,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};null===l?(h=l=w,g=f):l=l.next=w;Q.lanes|=q;ae|=q}p=p.next}while(null!==p&&p!==c);null===l?g=f:l.next=h;Zc(f,b.memoizedState)||(Tf=!0);b.memoizedState=f;b.baseState=g;b.baseQueue=l;d.lastRenderedState=f}null===e&&(d.lanes=0);return[b.memoizedState,d.dispatch]}
function Uf(a){var b=Mf(),c=b.queue;if(null===c)throw Error(r(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);Zc(f,b.memoizedState)||(Tf=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Vf(){}
function Wf(a,b){var c=Q,d=Mf(),e=b(),f=!Zc((S||d).memoizedState,e);f&&(d.memoizedState=e,Tf=!0);d=d.queue;Xf(Yf.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==T&&T.memoizedState.tag&1){c.flags|=2048;Zf(9,$f.bind(null,c,d,e,b),{destroy:void 0},null);if(null===O)throw Error(r(349));0!==(rf&60)||ag(c,b,e)}return e}function ag(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=Q.updateQueue;null===b?(b=Nf(),Q.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function $f(a,b,c,d){b.value=c;b.getSnapshot=d;bg(b)&&cg(a)}function Yf(a,b,c){return c(function(){bg(b)&&cg(a)})}function bg(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!Zc(a,c)}catch(d){return!0}}function cg(a){var b=Pd(a,2);null!==b&&dg(b,a,2)}function eg(a){var b=Lf();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;b.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rf,lastRenderedState:a};return b}
function Zf(a,b,c,d){a={tag:a,create:b,inst:c,deps:d,next:null};b=Q.updateQueue;null===b?(b=Nf(),Q.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function fg(){return Mf().memoizedState}function gg(a,b,c,d){var e=Lf();Q.flags|=a;e.memoizedState=Zf(1|b,c,{destroy:void 0},void 0===d?null:d)}
function hg(a,b,c,d){var e=Mf();d=void 0===d?null:d;var f=e.memoizedState.inst;null!==S&&null!==d&&Af(d,S.memoizedState.deps)?e.memoizedState=Zf(b,c,f,d):(Q.flags|=a,e.memoizedState=Zf(1|b,c,f,d))}function ig(a,b){gg(8390656,8,a,b)}function Xf(a,b){hg(2048,8,a,b)}function jg(a,b){return hg(4,2,a,b)}function kg(a,b){return hg(4,4,a,b)}function lg(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function mg(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;hg(4,4,lg.bind(null,b,a),c)}function ng(){}function og(a,b){var c=Mf();b=void 0===b?null:b;var d=c.memoizedState;if(null!==b&&Af(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function pg(a,b){var c=Mf();b=void 0===b?null:b;var d=c.memoizedState;if(null!==b&&Af(b,d[1]))return d[0];uf&&a();a=a();c.memoizedState=[a,b];return a}
function qg(a,b,c){if(0===(rf&42))return a.baseState&&(a.baseState=!1,Tf=!0),a.memoizedState=c;Zc(c,b)||(c=jb(),Q.lanes|=c,ae|=c,a.baseState=!0);return b}function rg(a,b,c,d,e){var f=H;H=0!==f&&8>f?f:8;var g=qf.transition;qf.transition=null;sg(a,b,c);qf.transition={};try{sg(a,b,d),e()}catch(h){throw h;}finally{H=f,qf.transition=g}}function tg(){return Mf().memoizedState}function ug(){return Mf().memoizedState}
function vg(a){for(var b=a.return;null!==b;){switch(b.tag){case 24:case 3:var c=wg(b);a=Wd(c);var d=Xd(b,a,c);null!==d&&(dg(d,b,c),Yd(d,b,c));b={cache:xg()};a.payload=b;return}b=b.return}}function yg(a,b,c){var d=wg(a);c={lane:d,revertLane:0,action:c,hasEagerState:!1,eagerState:null,next:null};zg(a)?Ag(b,c):(Od(a,b,c,d),c=Qd(a),null!==c&&(dg(c,a,d),Bg(c,b,d)))}
function sg(a,b,c){var d=wg(a),e={lane:d,revertLane:0,action:c,hasEagerState:!1,eagerState:null,next:null};if(zg(a))Ag(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(Zc(h,g)){Od(a,b,e,0);null===O&&Md();return}}catch(l){}finally{}Od(a,b,e,d);c=Qd(a);null!==c&&(dg(c,a,d),Bg(c,b,d))}}function zg(a){var b=a.alternate;return a===Q||null!==b&&b===Q}
function Ag(a,b){tf=sf=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bg(a,b,c){if(0!==(c&8388480)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;ob(a,c)}}var Gf={readContext:Qf,use:Pf,useCallback:zf,useContext:zf,useEffect:zf,useImperativeHandle:zf,useInsertionEffect:zf,useLayoutEffect:zf,useMemo:zf,useReducer:zf,useRef:zf,useState:zf,useDebugValue:zf,useDeferredValue:zf,useTransition:zf,useMutableSource:zf,useSyncExternalStore:zf,useId:zf};
Gf.useCacheRefresh=zf;
var Cf={readContext:Qf,use:Pf,useCallback:function(a,b){Lf().memoizedState=[a,void 0===b?null:b];return a},useContext:Qf,useEffect:ig,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;gg(4194308,4,lg.bind(null,b,a),c)},useLayoutEffect:function(a,b){return gg(4194308,4,a,b)},useInsertionEffect:function(a,b){gg(4,2,a,b)},useMemo:function(a,b){var c=Lf();b=void 0===b?null:b;uf&&a();a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Lf();b=void 0!==c?c(b):
b;d.memoizedState=d.baseState=b;a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=yg.bind(null,Q,a);return[d.memoizedState,a]},useRef:function(a){var b=Lf();a={current:a};return b.memoizedState=a},useState:function(a){a=eg(a);var b=a.queue,c=sg.bind(null,Q,b);b.dispatch=c;return[a.memoizedState,c]},useDebugValue:ng,useDeferredValue:function(a){return Lf().memoizedState=a},useTransition:function(){var a=eg(!1);a=rg.bind(null,Q,a.queue,!0,!1);Lf().memoizedState=
a;return[!1,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=Q,e=Lf();if(K){if(void 0===c)throw Error(r(407));c=c()}else{c=b();if(null===O)throw Error(r(349));0!==(rf&60)||ag(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;ig(Yf.bind(null,d,f,a),[a]);d.flags|=2048;Zf(9,$f.bind(null,d,f,c,b),{destroy:void 0},null);return c},useId:function(){var a=Lf(),b=O.identifierPrefix;if(K){var c=hd;var d=gd;c=(d&~(1<<32-ab(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=vf++;
0<c&&(b+="H"+c.toString(32));b+=":"}else c=yf++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},useCacheRefresh:function(){return Lf().memoizedState=vg.bind(null,Q)}},Df={readContext:Qf,use:Pf,useCallback:og,useContext:Qf,useEffect:Xf,useImperativeHandle:mg,useInsertionEffect:jg,useLayoutEffect:kg,useMemo:pg,useReducer:Sf,useRef:fg,useState:function(){return Sf(Rf)},useDebugValue:ng,useDeferredValue:function(a){var b=Mf();return qg(b,S.memoizedState,a)},useTransition:function(){var a=Sf(Rf)[0],
b=Mf().memoizedState;return["boolean"===typeof a?a:Of(a),b]},useMutableSource:Vf,useSyncExternalStore:Wf,useId:tg};Df.useCacheRefresh=ug;
var Hf={readContext:Qf,use:Pf,useCallback:og,useContext:Qf,useEffect:Xf,useImperativeHandle:mg,useInsertionEffect:jg,useLayoutEffect:kg,useMemo:pg,useReducer:Uf,useRef:fg,useState:function(){return Uf(Rf)},useDebugValue:ng,useDeferredValue:function(a){var b=Mf();return null===S?b.memoizedState=a:qg(b,S.memoizedState,a)},useTransition:function(){var a=Uf(Rf)[0],b=Mf().memoizedState;return["boolean"===typeof a?a:Of(a),b]},useMutableSource:Vf,useSyncExternalStore:Wf,useId:tg};Hf.useCacheRefresh=ug;
function Cg(a,b){if(a&&a.defaultProps){b=C({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Dg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:C({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Eg={isMounted:function(a){return(a=a._reactInternals)?Hc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=wg(a),e=Wd(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);b=Xd(a,e,d);null!==b&&(dg(b,a,d),Yd(b,a,d))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=wg(a),e=Wd(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);b=Xd(a,e,d);null!==b&&(dg(b,a,d),Yd(b,a,d))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=wg(a),d=Wd(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);b=Xd(a,d,c);null!==b&&(dg(b,a,c),Yd(b,a,c))}};function Fg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!de(c,d)||!de(e,f):!0}
function Gg(a,b,c){var d=!1,e=Nc;var f=b.contextType;"object"===typeof f&&null!==f?f=Qf(f):(e=Sc(b)?Qc:Oc.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Rc(a,e):Nc);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Eg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Eg.enqueueReplaceState(b,b.state,null)}
function Ig(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};Ud(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Qf(f):(f=Sc(b)?Qc:Oc.current,e.context=Rc(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Dg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Eg.enqueueReplaceState(e,e.state,null),$d(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Jg(a,b){try{var c="",d=b;do c+=$b(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Kg(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Lg(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}function Mg(a,b,c){c=Wd(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Ng||(Ng=!0,Og=d);Lg(a,b)};return c}
function Pg(a,b,c){c=Wd(c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Lg(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Lg(a,b);"function"!==typeof d&&(null===Qg?Qg=new Set([this]):Qg.add(this));var g=b.stack;this.componentDidCatch(b.value,{componentStack:null!==g?g:""})});return c}
function Rg(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=Wd(2),b.tag=2,Xd(c,b,2))),c.lanes|=2),a;a.flags|=65536;a.lanes=e;return a}var Sg=ea.ReactCurrentOwner,Tg=Error(r(461)),Tf=!1;function Ug(a,b,c,d){b.child=null===a?Ae(b,null,c,d):ze(b,a.child,c,d)}
function Vg(a,b,c,d,e){c=c.render;var f=b.ref;Wg(b,e);d=Bf(a,b,c,d,f,e);c=If();if(null!==a&&!Tf)return Jf(a,b,e),Xg(a,b,e);K&&c&&kd(b);b.flags|=1;Ug(a,b,d,e);return b.child}
function Yg(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!Zg(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,$g(a,b,f,d,e);a=ve(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:de;if(c(g,d)&&a.ref===b.ref)return Xg(a,b,e)}b.flags|=1;a=te(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function $g(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(de(f,d)&&a.ref===b.ref)if(Tf=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Tf=!0);else return b.lanes=a.lanes,Xg(a,b,e)}return ah(a,b,c,d,e)}
function bh(a,b,c){var d=b.pendingProps,e=d.children,f=0!==(b.stateNode._pendingVisibility&2),g=null!==a?a.memoizedState:null;ch(a,b);if("hidden"===d.mode||f){if(0!==(b.flags&128)){c=null!==g?g.baseLanes|c:c;if(null!==a){d=b.child=a.child;for(e=0;null!==d;)e=e|d.lanes|d.childLanes,d=d.sibling;b.childLanes=e&~c}else b.childLanes=0,b.child=null;return dh(a,b,c)}if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null},null!==a&&eh(b,null),Fe(),Le(b);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0,
cachePool:null},null!==a&&eh(b,null!==g?g.cachePool:null),null!==g?De(b,g):Fe(),Le(b);else return b.lanes=b.childLanes=1073741824,dh(a,b,null!==g?g.baseLanes|c:c)}else null!==g?(eh(b,g.cachePool),De(b,g),Me(b),b.memoizedState=null):(null!==a&&eh(b,null),Fe(),Me(b));Ug(a,b,e,c);return b.child}function dh(a,b,c){var d=fh();d=null===d?null:{parent:V._currentValue,pool:d};b.memoizedState={baseLanes:c,cachePool:d};null!==a&&eh(b,null);Fe();Le(b);return null}
function ch(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function ah(a,b,c,d,e){var f=Sc(c)?Qc:Oc.current;f=Rc(b,f);Wg(b,e);c=Bf(a,b,c,d,f,e);d=If();if(null!==a&&!Tf)return Jf(a,b,e),Xg(a,b,e);K&&d&&kd(b);b.flags|=1;Ug(a,b,c,e);return b.child}function gh(a,b,c,d,e,f){Wg(b,f);c=Ef(b,d,c,e);Ff();d=If();if(null!==a&&!Tf)return Jf(a,b,f),Xg(a,b,f);K&&d&&kd(b);b.flags|=1;Ug(a,b,c,f);return b.child}
function hh(a,b,c,d,e){if(Sc(c)){var f=!0;Wc(b)}else f=!1;Wg(b,e);if(null===b.stateNode)ih(a,b),Gg(b,c,d),Ig(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,p=c.contextType;"object"===typeof p&&null!==p?p=Qf(p):(p=Sc(c)?Qc:Oc.current,p=Rc(b,p));var q=c.getDerivedStateFromProps,w="function"===typeof q||"function"===typeof g.getSnapshotBeforeUpdate;w||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||l!==p)&&Hg(b,g,d,p);Td=!1;var t=b.memoizedState;g.state=t;$d(b,d,g,e);l=b.memoizedState;h!==d||t!==l||Pc.current||Td?("function"===typeof q&&(Dg(b,c,q,d),l=b.memoizedState),(h=Td||Fg(b,c,h,d,t,l,p))?(w||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=p,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;Vd(a,b);h=b.memoizedProps;p=b.type===b.elementType?h:Cg(b.type,h);g.props=p;w=b.pendingProps;t=g.context;l=c.contextType;"object"===typeof l&&null!==l?l=Qf(l):(l=Sc(c)?Qc:Oc.current,l=Rc(b,l));var u=c.getDerivedStateFromProps;(q="function"===typeof u||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==w||t!==l)&&Hg(b,g,d,l);Td=!1;t=b.memoizedState;g.state=t;$d(b,d,g,e);var z=b.memoizedState;h!==w||t!==z||Pc.current||Td?("function"===typeof u&&(Dg(b,c,u,d),z=b.memoizedState),(p=Td||Fg(b,c,p,d,t,z,l)||!1)?(q||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,z,l),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,z,l)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&t===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&t===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=z),g.props=d,g.state=z,g.context=l,d=p):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&t===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&t===a.memoizedState||(b.flags|=1024),d=!1)}return jh(a,b,c,d,f,e)}
function jh(a,b,c,d,e,f){ch(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&Xc(b,c,!1),Xg(a,b,f);d=b.stateNode;Sg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=ze(b,a.child,null,f),b.child=ze(b,null,h,f)):Ug(a,b,h,f);b.memoizedState=d.state;e&&Xc(b,c,!0);return b.child}function kh(a){var b=a.stateNode;b.pendingContext?Uc(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Uc(a,b.context,!1);Ga(a,b.containerInfo)}
function lh(a,b,c,d,e){Hd();Id(e);b.flags|=256;Ug(a,b,c,d);return b.child}var mh={dehydrated:null,treeContext:null,retryLane:0};function nh(a){return{baseLanes:a,cachePool:oh()}}
function ph(a,b,c){var d=b.pendingProps,e=!1,f=0!==(b.flags&128),g;(g=f)||(g=null!==a&&null===a.memoizedState?!1:0!==(Ke.current&2));g&&(e=!0,b.flags&=-129);if(null===a){if(K){e?Je(b):Me(b);K&&((f=a=J,f)?wd(b,f)||(xd(b)&&yd(),J=td(f.nextSibling),g=I,J&&wd(b,J)?od(g,f):(qd(I,b),K=!1,I=b,J=a)):(xd(b)&&yd(),qd(I,b),K=!1,I=b,J=a));a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=2:"$!"===a.data?b.lanes=16:b.lanes=1073741824,null;Ne(b)}f=d.children;a=d.fallback;if(e)return Me(b),
d=b.mode,e=b.child,f={mode:"hidden",children:f},0===(d&1)&&null!==e?(e.childLanes=0,e.pendingProps=f):e=qh(f,d,0,null),a=xe(a,d,c,null),e.return=b,a.return=b,e.sibling=a,b.child=e,b.child.memoizedState=nh(c),b.memoizedState=mh,a;Je(b);return rh(b,f)}g=a.memoizedState;if(null!==g){var h=g.dehydrated;if(null!==h)return sh(a,b,f,d,h,g,c)}if(e){Me(b);e=d.fallback;f=b.mode;g=a.child;h=g.sibling;var l={mode:"hidden",children:d.children};0===(f&1)&&b.child!==g?(d=b.child,d.childLanes=0,d.pendingProps=l,
b.deletions=null):(d=te(g,l),d.subtreeFlags=g.subtreeFlags&31457280);null!==h?e=te(h,e):(e=xe(e,f,c,null),e.flags|=2);e.return=b;d.return=b;d.sibling=e;b.child=d;d=e;e=b.child;f=a.child.memoizedState;null===f?f=nh(c):(g=f.cachePool,null!==g?(h=V._currentValue,g=g.parent!==h?{parent:h,pool:h}:g):g=oh(),f={baseLanes:f.baseLanes|c,cachePool:g});e.memoizedState=f;e.childLanes=a.childLanes&~c;b.memoizedState=mh;return d}Je(b);e=a.child;a=e.sibling;d=te(e,{mode:"visible",children:d.children});0===(b.mode&
1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}function rh(a,b){b=qh({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function th(a,b,c,d){null!==d&&Id(d);ze(b,a.child,null,c);a=rh(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sh(a,b,c,d,e,f,g){if(c){if(b.flags&256)return Je(b),b.flags&=-257,d=Kg(Error(r(422))),th(a,b,g,d);if(null!==b.memoizedState)return Me(b),b.child=a.child,b.flags|=128,null;Me(b);f=d.fallback;e=b.mode;d=qh({mode:"visible",children:d.children},e,0,null);f=xe(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&ze(b,a.child,null,g);b.child.memoizedState=nh(g);b.memoizedState=mh;return f}Je(b);if(0===(b.mode&1))return th(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&
e.nextSibling.dataset;if(d)var h=d.dgst;d=h;f=Error(r(419));f.digest=d;d=Kg(f,d,void 0);return th(a,b,g,d)}h=0!==(g&a.childLanes);if(Tf||h){d=O;if(null!==d){switch(g&-g){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=64;break;case 536870912:e=268435456;break;default:e=
0}e=0!==(e&(d.suspendedLanes|g))?0:e;if(0!==e&&e!==f.retryLane)throw f.retryLane=e,Pd(a,e),dg(d,a,e),Tg;}uh();return th(a,b,g,null)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vh.bind(null,a),e._reactRetry=b,null;a=f.treeContext;J=td(e.nextSibling);I=b;K=!0;md=null;nd=!1;null!==a&&(dd[ed++]=gd,dd[ed++]=hd,dd[ed++]=fd,gd=a.id,hd=a.overflow,fd=b);b=rh(b,d.children);b.flags|=4096;return b}function wh(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);xh(a.return,b,c)}
function yh(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function zh(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Ug(a,b,d.children,c);d=Ke.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wh(a,c,b);else if(19===a.tag)wh(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}E(Ke,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Oe(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);yh(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Oe(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}yh(b,!0,c,null,f);break;case "together":yh(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ih(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Xg(a,b,c){null!==a&&(b.dependencies=a.dependencies);ae|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(r(153));if(null!==b.child){a=b.child;c=te(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=te(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function Ah(a,b,c){switch(b.tag){case 3:kh(b);Bh(b,V,a.memoizedState.cache);Hd();break;case 27:case 5:Ka(b);break;case 1:Sc(b.type)&&Wc(b);break;case 4:Ga(b,b.stateNode.containerInfo);break;case 10:Bh(b,b.type._context,b.memoizedProps.value);break;case 13:var d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return Je(b),b.flags|=128,null;if(0!==(c&b.child.childLanes))return ph(a,b,c);Je(b);a=Xg(a,b,c);return null!==a?a.sibling:null}Je(b);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&128)){if(d)return zh(a,
b,c);b.flags|=128}var e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);E(Ke,Ke.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,bh(a,b,c);case 24:Bh(b,V,a.memoizedState.cache)}return Xg(a,b,c)}var Ch=ia(null),Dh=null,Eh=null,Fh=null;function Gh(){Fh=Eh=Dh=null}function Bh(a,b,c){E(Ch,b._currentValue);b._currentValue=c}function Hh(a){var b=Ch.current;a._currentValue=b===Aa?a._defaultValue:b;D(Ch)}
function xh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function Ih(a,b,c){var d=a.child;null!==d&&(d.return=a);for(;null!==d;){var e=d.dependencies;if(null!==e){var f=d.child;for(var g=e.firstContext;null!==g;){if(g.context===b){if(1===d.tag){g=Wd(c&-c);g.tag=2;var h=d.updateQueue;if(null!==h){h=h.shared;var l=h.pending;null===l?g.next=g:(g.next=l.next,l.next=g);h.pending=g}}d.lanes|=c;g=d.alternate;null!==g&&(g.lanes|=c);xh(d.return,c,a);e.lanes|=c;break}g=g.next}}else if(10===d.tag)f=d.type===a.type?null:d.child;else if(18===d.tag){f=d.return;if(null===
f)throw Error(r(341));f.lanes|=c;e=f.alternate;null!==e&&(e.lanes|=c);xh(f,c,a);f=d.sibling}else f=d.child;if(null!==f)f.return=d;else for(f=d;null!==f;){if(f===a){f=null;break}d=f.sibling;if(null!==d){d.return=f.return;f=d;break}f=f.return}d=f}}function Wg(a,b){Dh=a;Fh=Eh=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Tf=!0),a.firstContext=null)}function Qf(a){return Jh(Dh,a)}function ye(a,b,c){null===Dh&&Wg(a,c);return Jh(a,b)}
function Jh(a,b){var c=b._currentValue;if(Fh!==b)if(b={context:b,memoizedValue:c,next:null},null===Eh){if(null===a)throw Error(r(308));Eh=b;a.dependencies={lanes:0,firstContext:b}}else Eh=Eh.next=b;return c}
var Kh="undefined"!==typeof AbortController?AbortController:function(){var a=[],b=this.signal={aborted:!1,addEventListener:function(c,d){a.push(d)}};this.abort=function(){b.aborted=!0;a.forEach(function(c){return c()})}},Lh=ba.unstable_scheduleCallback,Mh=ba.unstable_NormalPriority,V={$$typeof:pa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_defaultValue:null,_globalName:null};function xg(){return{controller:new Kh,data:new Map,refCount:0}}
function Nh(a){a.refCount--;0===a.refCount&&Lh(Mh,function(){a.controller.abort()})}var Oh=ea.ReactCurrentBatchConfig,Ph=ia(null);function fh(){var a=Ph.current;return null!==a?a:O.pooledCache}function eh(a,b){null===b?E(Ph,Ph.current):E(Ph,b.pool)}function oh(){var a=fh();return null===a?null:{parent:V._currentValue,pool:a}}function Qh(a){a.flags|=4}function Rh(a){a.flags|=2097664}
function Sh(a,b,c,d){a=a.memoizedProps;if(a!==d){c=null;var e,f,g=null;for(e in a)if(!d.hasOwnProperty(e)&&a.hasOwnProperty(e)&&null!=a[e])switch(e){case "style":var h=a[e];for(f in h)h.hasOwnProperty(f)&&(g||(g={}),g[f]="");break;default:(c=c||[]).push(e,null)}for(e in d){h=d[e];var l=null!=a?a[e]:void 0;if(d.hasOwnProperty(e)&&h!==l&&(null!=h||null!=l))switch(e){case "style":if(l){for(f in l)!l.hasOwnProperty(f)||h&&h.hasOwnProperty(f)||(g||(g={}),g[f]="");for(f in h)h.hasOwnProperty(f)&&l[f]!==
h[f]&&(g||(g={}),g[f]=h[f])}else g||(c||(c=[]),c.push(e,g)),g=h;break;default:(c=c||[]).push(e,h)}}g&&(c=c||[]).push("style",g);d=c;(b.updateQueue=d)&&Qh(b)}}function Th(a,b){if("stylesheet"!==b.type||0!==(b.state.loading&4))a.flags&=-16777217;else if(a.flags|=16777216,0===(N&42)&&(b="stylesheet"===b.type&&0===(b.state.loading&3)?!1:!0,!b))if(Uh())a.flags|=8192;else throw ke=ge,fe;}function Vh(a,b){null!==b?a.flags|=4:a.flags&16384&&(b=22!==a.tag?kb():1073741824,a.lanes|=b)}
function Wh(a,b){if(!K)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function W(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&31457280,d|=e.flags&31457280,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Xh(a,b,c){var d=b.pendingProps;ld(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(b),null;case 1:return Sc(b.type)&&Tc(),W(b),null;case 3:d=b.stateNode;c=null;null!==a&&(c=a.memoizedState.cache);b.memoizedState.cache!==c&&(b.flags|=2048);Hh(V);Ja();D(Pc);D(Oc);Qe();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Ed(b)?Qh(b):null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=
1024,null!==md&&(Yh(md),md=null));W(b);return null;case 26:c=b.type;var e=b.memoizedState;if(null===a)Qh(b),null!==b.ref&&Rh(b),null!==e?(W(b),Th(b,e)):(W(b),b.flags&=-16777217);else{var f=a.memoizedState;e!==f&&Qh(b);a.ref!==b.ref&&Rh(b);null!==e?(W(b),e===f?b.flags&=-16777217:Th(b,e)):(Sh(a,b,c,d),W(b),b.flags&=-16777217)}return null;case 27:La(b);c=Fa.current;e=b.type;if(null!==a&&null!=b.stateNode)Sh(a,b,e,d),a.ref!==b.ref&&Rh(b);else{if(!d){if(null===b.stateNode)throw Error(r(166));W(b);return null}a=
Da.current;Ed(b)?zd(b,a):(a=Zh(e,d,c),b.stateNode=a,Qh(b));null!==b.ref&&Rh(b)}W(b);return null;case 5:La(b);c=b.type;if(null!==a&&null!=b.stateNode)Sh(a,b,c,d),a.ref!==b.ref&&Rh(b);else{if(!d){if(null===b.stateNode)throw Error(r(166));W(b);return null}a=Da.current;if(Ed(b))zd(b,a)&&Qh(b);else{e=$h(Fa.current);switch(a){case 1:a=e.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:a=e.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case "svg":a=e.createElementNS("http://www.w3.org/2000/svg",
c);break;case "math":a=e.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case "script":a=e.createElement("div");a.innerHTML="<script>\x3c/script>";a=a.removeChild(a.firstChild);break;case "select":a="string"===typeof d.is?e.createElement("select",{is:d.is}):e.createElement("select");d.multiple?a.multiple=!0:d.size&&(a.size=d.size);break;default:a="string"===typeof d.is?e.createElement(c,{is:d.is}):e.createElement(c)}}a[tb]=b;a[ub]=d;a:for(e=b.child;null!==e;){if(5===e.tag||6===e.tag)a.appendChild(e.stateNode);
else if(4!==e.tag&&27!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===b)break a;for(;null===e.sibling;){if(null===e.return||e.return===b)break a;e=e.return}e.sibling.return=e.return;e=e.sibling}b.stateNode=a;a:switch(ai(a,c,d),c){case "button":case "input":case "select":case "textarea":a=!!d.autoFocus;break a;case "img":a=!0;break a;default:a=!1}a&&Qh(b)}null!==b.ref&&Rh(b)}W(b);b.flags&=-16777217;return null;case 6:if(a&&null!=b.stateNode)a.memoizedProps!==d&&Qh(b);else{if("string"!==
typeof d&&null===b.stateNode)throw Error(r(166));a=Fa.current;if(Ed(b)){a:{a=b.stateNode;d=b.memoizedProps;a[tb]=b;if(c=a.nodeValue!==d)if(e=I,null!==e)switch(e.tag){case 3:e=0!==(e.mode&1);Bd(a.nodeValue,d,e);if(e){a=!1;break a}break;case 27:case 5:if(f=0!==(e.mode&1),!0!==e.memoizedProps.suppressHydrationWarning&&Bd(a.nodeValue,d,f),f){a=!1;break a}}a=c}a&&Qh(b)}else a=$h(a).createTextNode(d),a[tb]=b,b.stateNode=a}W(b);return null;case 13:Ne(b);d=b.memoizedState;if(null===a||null!==a.memoizedState&&
null!==a.memoizedState.dehydrated){if(K&&null!==J&&0!==(b.mode&1)&&0===(b.flags&128))Gd(),Hd(),b.flags|=384,e=!1;else if(e=Ed(b),null!==d&&null!==d.dehydrated){if(null===a){if(!e)throw Error(r(318));e=b.memoizedState;e=null!==e?e.dehydrated:null;if(!e)throw Error(r(317));e[tb]=b}else Hd(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;W(b);e=!1}else null!==md&&(Yh(md),md=null),e=!0;if(!e)return b.flags&256?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;a=null!==a&&null!==a.memoizedState;
d&&(c=b.child,e=null,null!==c.alternate&&null!==c.alternate.memoizedState&&null!==c.alternate.memoizedState.cachePool&&(e=c.alternate.memoizedState.cachePool.pool),f=null,null!==c.memoizedState&&null!==c.memoizedState.cachePool&&(f=c.memoizedState.cachePool.pool),f!==e&&(c.flags|=2048));d!==a&&d&&(b.child.flags|=8192);Vh(b,b.updateQueue);W(b);return null;case 4:return Ja(),null===a&&bi(b.stateNode.containerInfo),W(b),null;case 10:return Hh(b.type._context),W(b),null;case 17:return Sc(b.type)&&Tc(),
W(b),null;case 19:D(Ke);e=b.memoizedState;if(null===e)return W(b),null;d=0!==(b.flags&128);f=e.rendering;if(null===f)if(d)Wh(e,!1);else{if(0!==ci||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){f=Oe(a);if(null!==f){b.flags|=128;Wh(e,!1);a=f.updateQueue;b.updateQueue=a;Vh(b,a);b.subtreeFlags=0;a=c;for(d=b.child;null!==d;)di(d,a),d=d.sibling;E(Ke,Ke.current&1|2);return b.child}a=a.sibling}null!==e.tail&&Qa()>ei&&(b.flags|=128,d=!0,Wh(e,!1),b.lanes=8388608)}else{if(!d)if(a=Oe(f),null!==a){if(b.flags|=
128,d=!0,a=a.updateQueue,b.updateQueue=a,Vh(b,a),Wh(e,!0),null===e.tail&&"hidden"===e.tailMode&&!f.alternate&&!K)return W(b),null}else 2*Qa()-e.renderingStartTime>ei&&1073741824!==c&&(b.flags|=128,d=!0,Wh(e,!1),b.lanes=8388608);e.isBackwards?(f.sibling=b.child,b.child=f):(a=e.last,null!==a?a.sibling=f:b.child=f,e.last=f)}if(null!==e.tail)return b=e.tail,e.rendering=b,e.tail=b.sibling,e.renderingStartTime=Qa(),b.sibling=null,a=Ke.current,E(Ke,d?a&1|2:a&1),b;W(b);return null;case 22:case 23:return Ne(b),
Ge(),d=null!==b.memoizedState,null!==a?null!==a.memoizedState!==d&&(b.flags|=8192):d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(c&1073741824)&&0===(b.flags&128)&&(W(b),b.subtreeFlags&6&&(b.flags|=8192)):W(b),d=b.updateQueue,null!==d&&Vh(b,d.retryQueue),d=null,null!==a&&null!==a.memoizedState&&null!==a.memoizedState.cachePool&&(d=a.memoizedState.cachePool.pool),c=null,null!==b.memoizedState&&null!==b.memoizedState.cachePool&&(c=b.memoizedState.cachePool.pool),c!==d&&(b.flags|=2048),null!==a&&D(Ph),null;
case 24:return d=null,null!==a&&(d=a.memoizedState.cache),b.memoizedState.cache!==d&&(b.flags|=2048),Hh(V),W(b),null;case 25:return null}throw Error(r(156,b.tag));}
function fi(a,b){ld(b);switch(b.tag){case 1:return Sc(b.type)&&Tc(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Hh(V),Ja(),D(Pc),D(Oc),Qe(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 26:case 27:case 5:return La(b),null;case 13:Ne(b);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(r(340));Hd()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return D(Ke),null;case 4:return Ja(),null;case 10:return Hh(b.type._context),
null;case 22:case 23:return Ne(b),Ge(),null!==a&&D(Ph),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 24:return Hh(V),null;case 25:return null;default:return null}}
function gi(a,b){ld(b);switch(b.tag){case 1:a=b.type.childContextTypes;null!==a&&void 0!==a&&Tc();break;case 3:Hh(V);Ja();D(Pc);D(Oc);Qe();break;case 26:case 27:case 5:La(b);break;case 4:Ja();break;case 13:Ne(b);break;case 19:D(Ke);break;case 10:Hh(b.type._context);break;case 22:case 23:Ne(b);Ge();null!==a&&D(Ph);break;case 24:Hh(V)}}function hi(a,b,c){var d=Array.prototype.slice.call(arguments,3);try{b.apply(c,d)}catch(e){this.onError(e)}}
var ii=!1,ji=null,ki=!1,li=null,mi={onError:function(a){ii=!0;ji=a}};function ni(a,b,c,d,e,f,g,h,l){ii=!1;ji=null;hi.apply(mi,arguments)}function oi(a,b,c,d,e,f,g,h,l){ni.apply(this,arguments);if(ii){if(ii){var p=ji;ii=!1;ji=null}else throw Error(r(198));ki||(ki=!0,li=p)}}var pi=!1,qi=!1,ri="function"===typeof WeakSet?WeakSet:Set,si=null;
function ti(a,b){try{var c=a.ref;if(null!==c){var d=a.stateNode;switch(a.tag){case 26:case 27:case 5:var e=d;break;default:e=d}"function"===typeof c?a.refCleanup=c(e):c.current=e}}catch(f){X(a,b,f)}}function ui(a,b){var c=a.ref,d=a.refCleanup;if(null!==c)if("function"===typeof d)try{d()}catch(e){X(a,b,e)}finally{a.refCleanup=null,a=a.alternate,null!=a&&(a.refCleanup=null)}else if("function"===typeof c)try{c(null)}catch(e){X(a,b,e)}else c.current=null}
function vi(a,b,c){try{c()}catch(d){X(a,b,d)}}var wi=!1;
function xi(a,b){yi=zi;a=Ai();if(Bi(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(n){c=null;break a}var g=0,h=-1,l=-1,p=0,q=0,w=a,t=null;b:for(;;){for(var u;;){w!==c||0!==e&&3!==w.nodeType||(h=g+e);w!==f||0!==d&&3!==w.nodeType||(l=g+d);3===w.nodeType&&(g+=
w.nodeValue.length);if(null===(u=w.firstChild))break;t=w;w=u}for(;;){if(w===a)break b;t===c&&++p===e&&(h=g);t===f&&++q===d&&(l=g);if(null!==(u=w.nextSibling))break;w=t;t=w.parentNode}w=u}c=-1===h||-1===l?null:{start:h,end:l}}else c=null}c=c||{start:0,end:0}}else c=null;Ci={focusedElem:a,selectionRange:c};zi=!1;for(si=b;null!==si;)if(b=si,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,si=a;else for(;null!==si;){b=si;try{var z=b.alternate,B=b.flags;switch(b.tag){case 0:break;case 11:case 15:break;
case 1:if(0!==(B&1024)&&null!==z){var R=z.memoizedProps,U=z.memoizedState,m=b.stateNode,k=m.getSnapshotBeforeUpdate(b.elementType===b.type?R:Cg(b.type,R),U);m.__reactInternalSnapshotBeforeUpdate=k}break;case 3:0!==(B&1024)&&Di(b.stateNode.containerInfo);break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(0!==(B&1024))throw Error(r(163));}}catch(n){X(b,b.return,n)}a=b.sibling;if(null!==a){a.return=b.return;si=a;break}si=b.return}z=wi;wi=!1;return z}
function Ei(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.inst,g=f.destroy;void 0!==g&&(f.destroy=void 0,vi(b,c,g))}e=e.next}while(e!==d)}}function Fi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create,e=c.inst;d=d();e.destroy=d}c=c.next}while(c!==b)}}function Gi(a,b){try{Fi(b,a)}catch(c){X(a,a.return,c)}}
function Hi(a){var b=a.updateQueue;if(null!==b){var c=a.stateNode;try{ce(b,c)}catch(d){X(a,a.return,d)}}}function Ii(a){var b=a.type,c=a.memoizedProps,d=a.stateNode;try{a:switch(b){case "button":case "input":case "select":case "textarea":c.autoFocus&&d.focus();break a;case "img":c.src&&(d.src=c.src)}}catch(e){X(a,a.return,e)}}
function Ji(a,b,c){var d=c.flags;switch(c.tag){case 0:case 11:case 15:Ki(a,c);d&4&&Gi(c,5);break;case 1:Ki(a,c);if(d&4)if(a=c.stateNode,null===b)try{a.componentDidMount()}catch(h){X(c,c.return,h)}else{var e=c.elementType===c.type?b.memoizedProps:Cg(c.type,b.memoizedProps);b=b.memoizedState;try{a.componentDidUpdate(e,b,a.__reactInternalSnapshotBeforeUpdate)}catch(h){X(c,c.return,h)}}d&64&&Hi(c);d&512&&ti(c,c.return);break;case 3:Ki(a,c);if(d&64&&(d=c.updateQueue,null!==d)){a=null;if(null!==c.child)switch(c.child.tag){case 27:case 5:a=
c.child.stateNode;break;case 1:a=c.child.stateNode}try{ce(d,a)}catch(h){X(c,c.return,h)}}break;case 26:Ki(a,c);d&512&&ti(c,c.return);break;case 27:case 5:Ki(a,c);null===b&&d&4&&Ii(c);d&512&&ti(c,c.return);break;case 12:Ki(a,c);break;case 13:Ki(a,c);d&4&&Li(a,c);break;case 22:if(0!==(c.mode&1)){if(e=null!==c.memoizedState||pi,!e){b=null!==b&&null!==b.memoizedState||qi;var f=pi,g=qi;pi=e;(qi=b)&&!g?Mi(a,c,0!==(c.subtreeFlags&8772)):Ki(a,c);pi=f;qi=g}}else Ki(a,c);d&512&&("manual"===c.memoizedProps.mode?
ti(c,c.return):ui(c,c.return));break;default:Ki(a,c)}}function Ni(a){var b=a.alternate;null!==b&&(a.alternate=null,Ni(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&Cb(b));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Oi(a){return 5===a.tag||3===a.tag||26===a.tag||27===a.tag||4===a.tag}
function Pi(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Oi(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&27!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Qi(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Cd));else if(4!==d&&27!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&27!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}var Y=null,Si=!1;function Ti(a,b,c){for(c=c.child;null!==c;)Ui(a,b,c),c=c.sibling}
function Ui(a,b,c){if(Ya&&"function"===typeof Ya.onCommitFiberUnmount)try{Ya.onCommitFiberUnmount(Xa,c)}catch(l){}switch(c.tag){case 26:qi||ui(c,b);Ti(a,b,c);c.memoizedState?c.memoizedState.count--:c.stateNode&&(c=c.stateNode,c.parentNode.removeChild(c));break;case 27:qi||ui(c,b);var d=Y,e=Si;Y=c.stateNode;Ti(a,b,c);c=c.stateNode;for(a=c.attributes;a.length;)c.removeAttributeNode(a[0]);Cb(c);Y=d;Si=e;break;case 5:qi||ui(c,b);case 6:d=Y;e=Si;Y=null;Ti(a,b,c);Y=d;Si=e;null!==Y&&(Si?(a=Y,c=c.stateNode,
8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):Y.removeChild(c.stateNode));break;case 18:null!==Y&&(Si?(a=Y,c=c.stateNode,8===a.nodeType?Vi(a.parentNode,c):1===a.nodeType&&Vi(a,c),Wi(a)):Vi(Y,c.stateNode));break;case 4:d=Y;e=Si;Y=c.stateNode.containerInfo;Si=!0;Ti(a,b,c);Y=d;Si=e;break;case 0:case 11:case 14:case 15:if(!qi&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e.tag,g=e.inst,h=g.destroy;void 0!==h&&(0!==(f&2)?(g.destroy=void 0,vi(c,b,h)):0!==(f&
4)&&(g.destroy=void 0,vi(c,b,h)));e=e.next}while(e!==d)}Ti(a,b,c);break;case 1:if(!qi&&(ui(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(l){X(c,b,l)}Ti(a,b,c);break;case 21:Ti(a,b,c);break;case 22:ui(c,b);c.mode&1?(qi=(d=qi)||null!==c.memoizedState,Ti(a,b,c),qi=d):Ti(a,b,c);break;default:Ti(a,b,c)}}
function Li(a,b){if(null===b.memoizedState&&(a=b.alternate,null!==a&&(a=a.memoizedState,null!==a&&(a=a.dehydrated,null!==a))))try{Wi(a)}catch(c){X(b,b.return,c)}}function Xi(a){switch(a.tag){case 13:case 19:var b=a.stateNode;null===b&&(b=a.stateNode=new ri);return b;case 22:return a=a.stateNode,b=a._retryCache,null===b&&(b=a._retryCache=new ri),b;default:throw Error(r(435,a.tag));}}function Yi(a,b){var c=Xi(a);b.forEach(function(d){var e=Zi.bind(null,a,d);c.has(d)||(c.add(d),d.then(e,e))})}
function $i(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 27:case 5:Y=h.stateNode;Si=!1;break a;case 3:Y=h.stateNode.containerInfo;Si=!0;break a;case 4:Y=h.stateNode.containerInfo;Si=!0;break a}h=h.return}if(null===Y)throw Error(r(160));Ui(f,g,e);Y=null;Si=!1;var l=e.alternate;null!==l&&(l.return=null);e.return=null}catch(p){X(e,b,p)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)aj(b,a),b=b.sibling}var bj=null;
function aj(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:$i(b,a);cj(a);if(d&4){try{Ei(3,a,a.return),Fi(3,a)}catch(u){X(a,a.return,u)}try{Ei(5,a,a.return)}catch(u){X(a,a.return,u)}}break;case 1:$i(b,a);cj(a);d&512&&null!==c&&ui(c,c.return);d&64&&pi&&(a=a.updateQueue,null!==a&&(c=a.callbacks,null!==c&&(d=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=null===d?c:d.concat(c))));break;case 26:var e=bj;$i(b,a);cj(a);d&512&&null!==c&&ui(c,c.return);if(d&4)if(b=null!==
c?c.memoizedState:null,d=a.memoizedState,null===c)if(null===d)if(null===a.stateNode){a:{c=a.type;d=a.memoizedProps;b=e.ownerDocument||e;b:switch(c){case "title":e=b.getElementsByTagName("title")[0];if(!e||e[Bb]||e[tb]||"http://www.w3.org/2000/svg"===e.namespaceURI||e.hasAttribute("itemprop"))e=b.createElement(c),b.head.insertBefore(e,b.querySelector("head > title"));ai(e,c,d);e[tb]=a;Jb(e);c=e;break a;case "link":var f=dj("link","href",b).get(c+(d.href||""));if(f)for(var g=0;g<f.length;g++)if(e=f[g],
e.getAttribute("href")===(null==d.href?null:d.href)&&e.getAttribute("rel")===(null==d.rel?null:d.rel)&&e.getAttribute("title")===(null==d.title?null:d.title)&&e.getAttribute("crossorigin")===(null==d.crossOrigin?null:d.crossOrigin)){f.splice(g,1);break b}e=b.createElement(c);ai(e,c,d);b.head.appendChild(e);break;case "meta":if(f=dj("meta","content",b).get(c+(d.content||"")))for(g=0;g<f.length;g++)if(e=f[g],e.getAttribute("content")===(null==d.content?null:""+d.content)&&e.getAttribute("name")===(null==
d.name?null:d.name)&&e.getAttribute("property")===(null==d.property?null:d.property)&&e.getAttribute("http-equiv")===(null==d.httpEquiv?null:d.httpEquiv)&&e.getAttribute("charset")===(null==d.charSet?null:d.charSet)){f.splice(g,1);break b}e=b.createElement(c);ai(e,c,d);b.head.appendChild(e);break;default:throw Error(r(468,c));}e[tb]=a;Jb(e);c=e}a.stateNode=c}else ej(e,a.type,a.stateNode);else a.stateNode=fj(e,d,a.memoizedProps);else if(b!==d)null===b?null!==c.stateNode&&(c=c.stateNode,c.parentNode.removeChild(c)):
b.count--,null===d?ej(e,a.type,a.stateNode):fj(e,d,a.memoizedProps);else if(null===d&&null!==a.stateNode&&(d=a.updateQueue,a.updateQueue=null,null!==d))try{var h=a.stateNode,l=a.memoizedProps;gj(h,d,a.type,c.memoizedProps,l);h[ub]=l}catch(u){X(a,a.return,u)}break;case 27:if(d&4&&null===a.alternate){e=a.stateNode;f=a.memoizedProps;for(g=e.firstChild;g;){var p=g.nextSibling,q=g.nodeName;g[Bb]||"HEAD"===q||"BODY"===q||"STYLE"===q||"LINK"===q&&"stylesheet"===g.rel.toLowerCase()||e.removeChild(g);g=p}g=
a.type;for(p=e.attributes;p.length;)e.removeAttributeNode(p[0]);ai(e,g,f);e[tb]=a;e[ub]=f}case 5:$i(b,a);cj(a);d&512&&null!==c&&ui(c,c.return);if(a.flags&32){b=a.stateNode;try{vc(b,"")}catch(u){X(a,a.return,u)}}if(d&4&&(d=a.stateNode,null!=d&&(b=a.memoizedProps,c=null!==c?c.memoizedProps:b,e=a.type,f=a.updateQueue,a.updateQueue=null,null!==f)))try{gj(d,f,e,c,b),d[ub]=b}catch(u){X(a,a.return,u)}break;case 6:$i(b,a);cj(a);if(d&4){if(null===a.stateNode)throw Error(r(162));c=a.stateNode;d=a.memoizedProps;
try{c.nodeValue=d}catch(u){X(a,a.return,u)}}break;case 3:hj=null;e=bj;bj=ij(b.containerInfo);$i(b,a);bj=e;cj(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{Wi(b.containerInfo)}catch(u){X(a,a.return,u)}break;case 4:c=bj;bj=ij(a.stateNode.containerInfo);$i(b,a);cj(a);bj=c;break;case 13:$i(b,a);cj(a);c=a.child;c.flags&8192&&null!==c.memoizedState&&(null===c.alternate||null===c.alternate.memoizedState)&&(jj=Qa());d&4&&(c=a.updateQueue,null!==c&&(a.updateQueue=null,Yi(a,c)));break;case 22:d&512&&
null!==c&&ui(c,c.return);h=null!==a.memoizedState;l=null!==c&&null!==c.memoizedState;if(a.mode&1){var w=pi,t=qi;pi=w||h;qi=t||l;$i(b,a);qi=t;pi=w}else $i(b,a);cj(a);b=a.stateNode;b._current=a;b._visibility&=-3;b._visibility|=b._pendingVisibility&2;if(d&8192&&(b._visibility=h?b._visibility&-2:b._visibility|1,h&&(b=pi||qi,null===c||l||b||0!==(a.mode&1)&&kj(a)),null===a.memoizedProps||"manual"!==a.memoizedProps.mode))a:for(c=null,b=a;;){if(5===b.tag||26===b.tag||27===b.tag){if(null===c){c=b;try{e=b.stateNode,
h?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(g=b.stateNode,p=b.memoizedProps.style,q=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null,g.style.display=null==q||"boolean"===typeof q?"":(""+q).trim())}catch(u){X(a,a.return,u)}}}else if(6===b.tag){if(null===c)try{b.stateNode.nodeValue=h?"":b.memoizedProps}catch(u){X(a,a.return,u)}}else if((22!==b.tag&&23!==b.tag||null===b.memoizedState||b===a)&&null!==b.child){b.child.return=
b;b=b.child;continue}if(b===a)break a;for(;null===b.sibling;){if(null===b.return||b.return===a)break a;c===b&&(c=null);b=b.return}c===b&&(c=null);b.sibling.return=b.return;b=b.sibling}d&4&&(c=a.updateQueue,null!==c&&(d=c.retryQueue,null!==d&&(c.retryQueue=null,Yi(a,d))));break;case 19:$i(b,a);cj(a);d&4&&(c=a.updateQueue,null!==c&&(a.updateQueue=null,Yi(a,c)));break;case 21:break;default:$i(b,a),cj(a)}}
function cj(a){var b=a.flags;if(b&2){try{if(27!==a.tag){b:{for(var c=a.return;null!==c;){if(Oi(c)){var d=c;break b}c=c.return}throw Error(r(160));}switch(d.tag){case 27:var e=d.stateNode,f=Pi(a);Ri(a,f,e);break;case 5:var g=d.stateNode;d.flags&32&&(vc(g,""),d.flags&=-33);var h=Pi(a);Ri(a,h,g);break;case 3:case 4:var l=d.stateNode.containerInfo,p=Pi(a);Qi(a,p,l);break;default:throw Error(r(161));}}}catch(q){X(a,a.return,q)}a.flags&=-3}b&4096&&(a.flags&=-4097)}
function Ki(a,b){if(b.subtreeFlags&8772)for(b=b.child;null!==b;)Ji(a,b.alternate,b),b=b.sibling}
function kj(a){for(a=a.child;null!==a;){var b=a;switch(b.tag){case 0:case 11:case 14:case 15:Ei(4,b,b.return);kj(b);break;case 1:ui(b,b.return);var c=b.stateNode;if("function"===typeof c.componentWillUnmount){var d=b,e=b.return;try{var f=d;c.props=f.memoizedProps;c.state=f.memoizedState;c.componentWillUnmount()}catch(g){X(d,e,g)}}kj(b);break;case 26:case 27:case 5:ui(b,b.return);kj(b);break;case 22:ui(b,b.return);null===b.memoizedState&&kj(b);break;default:kj(b)}a=a.sibling}}
function Mi(a,b,c){c=c&&0!==(b.subtreeFlags&8772);for(b=b.child;null!==b;){var d=b.alternate,e=a,f=b,g=f.flags;switch(f.tag){case 0:case 11:case 15:Mi(e,f,c);Gi(f,4);break;case 1:Mi(e,f,c);e=f.stateNode;if("function"===typeof e.componentDidMount)try{e.componentDidMount()}catch(l){X(f,f.return,l)}d=f.updateQueue;if(null!==d){var h=d.shared.hiddenCallbacks;if(null!==h)for(d.shared.hiddenCallbacks=null,d=0;d<h.length;d++)be(h[d],e)}c&&g&64&&Hi(f);ti(f,f.return);break;case 26:case 27:case 5:Mi(e,f,c);
c&&null===d&&g&4&&Ii(f);ti(f,f.return);break;case 12:Mi(e,f,c);break;case 13:Mi(e,f,c);c&&g&4&&Li(e,f);break;case 22:null===f.memoizedState&&Mi(e,f,c);ti(f,f.return);break;default:Mi(e,f,c)}b=b.sibling}}function lj(a,b){try{Fi(b,a)}catch(c){X(a,a.return,c)}}
function mj(a,b){var c=null;null!==a&&null!==a.memoizedState&&null!==a.memoizedState.cachePool&&(c=a.memoizedState.cachePool.pool);a=null;null!==b.memoizedState&&null!==b.memoizedState.cachePool&&(a=b.memoizedState.cachePool.pool);a!==c&&(null!=a&&a.refCount++,null!=c&&Nh(c))}function nj(a,b){a=null;null!==b.alternate&&(a=b.alternate.memoizedState.cache);b=b.memoizedState.cache;b!==a&&(b.refCount++,null!=a&&Nh(a))}
function oj(a,b,c,d){if(b.subtreeFlags&10256)for(b=b.child;null!==b;)pj(a,b,c,d),b=b.sibling}
function pj(a,b,c,d){var e=b.flags;switch(b.tag){case 0:case 11:case 15:oj(a,b,c,d);e&2048&&lj(b,9);break;case 3:oj(a,b,c,d);e&2048&&(a=null,null!==b.alternate&&(a=b.alternate.memoizedState.cache),b=b.memoizedState.cache,b!==a&&(b.refCount++,null!=a&&Nh(a)));break;case 23:break;case 22:var f=b.stateNode;null!==b.memoizedState?f._visibility&4?oj(a,b,c,d):b.mode&1?qj(a,b):(f._visibility|=4,oj(a,b,c,d)):f._visibility&4?oj(a,b,c,d):(f._visibility|=4,rj(a,b,c,d,0!==(b.subtreeFlags&10256)));e&2048&&mj(b.alternate,
b);break;case 24:oj(a,b,c,d);e&2048&&nj(b.alternate,b);break;default:oj(a,b,c,d)}}
function rj(a,b,c,d,e){e=e&&0!==(b.subtreeFlags&10256);for(b=b.child;null!==b;){var f=a,g=b,h=c,l=d,p=g.flags;switch(g.tag){case 0:case 11:case 15:rj(f,g,h,l,e);lj(g,8);break;case 23:break;case 22:var q=g.stateNode;null!==g.memoizedState?q._visibility&4?rj(f,g,h,l,e):g.mode&1?qj(f,g):(q._visibility|=4,rj(f,g,h,l,e)):(q._visibility|=4,rj(f,g,h,l,e));e&&p&2048&&mj(g.alternate,g);break;case 24:rj(f,g,h,l,e);e&&p&2048&&nj(g.alternate,g);break;default:rj(f,g,h,l,e)}b=b.sibling}}
function qj(a,b){if(b.subtreeFlags&10256)for(b=b.child;null!==b;){var c=a,d=b,e=d.flags;switch(d.tag){case 22:qj(c,d);e&2048&&mj(d.alternate,d);break;case 24:qj(c,d);e&2048&&nj(d.alternate,d);break;default:qj(c,d)}b=b.sibling}}var sj=8192;function tj(a){if(a.subtreeFlags&sj)for(a=a.child;null!==a;)uj(a),a=a.sibling}
function uj(a){switch(a.tag){case 26:tj(a);a.flags&sj&&null!==a.memoizedState&&vj(bj,a.memoizedState,a.memoizedProps);break;case 5:tj(a);break;case 3:case 4:var b=bj;bj=ij(a.stateNode.containerInfo);tj(a);bj=b;break;case 22:null===a.memoizedState&&(b=a.alternate,null!==b&&null!==b.memoizedState?(b=sj,sj=16777216,tj(a),sj=b):tj(a));break;default:tj(a)}}function wj(a){var b=a.alternate;if(null!==b&&(a=b.child,null!==a)){b.child=null;do b=a.sibling,a.sibling=null,a=b;while(null!==a)}}
function xj(a){var b=a.deletions;if(0!==(a.flags&16)){if(null!==b)for(var c=0;c<b.length;c++){var d=b[c];si=d;yj(d,a)}wj(a)}if(a.subtreeFlags&10256)for(a=a.child;null!==a;)zj(a),a=a.sibling}function zj(a){switch(a.tag){case 0:case 11:case 15:xj(a);a.flags&2048&&Ei(9,a,a.return);break;case 22:var b=a.stateNode;null!==a.memoizedState&&b._visibility&4&&(null===a.return||13!==a.return.tag)?(b._visibility&=-5,Aj(a)):xj(a);break;default:xj(a)}}
function Aj(a){var b=a.deletions;if(0!==(a.flags&16)){if(null!==b)for(var c=0;c<b.length;c++){var d=b[c];si=d;yj(d,a)}wj(a)}for(a=a.child;null!==a;){b=a;switch(b.tag){case 0:case 11:case 15:Ei(8,b,b.return);Aj(b);break;case 22:c=b.stateNode;c._visibility&4&&(c._visibility&=-5,Aj(b));break;default:Aj(b)}a=a.sibling}}
function yj(a,b){for(;null!==si;){var c=si;switch(c.tag){case 0:case 11:case 15:Ei(8,c,b);break;case 23:case 22:if(null!==c.memoizedState&&null!==c.memoizedState.cachePool){var d=c.memoizedState.cachePool.pool;null!=d&&d.refCount++}break;case 24:Nh(c.memoizedState.cache)}d=c.child;if(null!==d)d.return=c,si=d;else a:for(c=a;null!==si;){d=si;var e=d.sibling,f=d.return;Ni(d);if(d===c){si=null;break a}if(null!==e){e.return=f;si=e;break a}si=f}}}
var Bj={getCacheSignal:function(){return Qf(V).controller.signal},getCacheForType:function(a){var b=Qf(V),c=b.data.get(a);void 0===c&&(c=a(),b.data.set(a,c));return c}},Cj="function"===typeof WeakMap?WeakMap:Map,Dj=ea.ReactCurrentDispatcher,Ej=ea.ReactCurrentCache,Fj=ea.ReactCurrentOwner,Gj=ea.ReactCurrentBatchConfig,M=0,O=null,Z=null,N=0,P=0,Hj=null,Ij=!1,Ee=0,ci=0,df=null,ae=0,Jj=0,Kj=0,Lj=null,hf=null,jj=0,ei=Infinity,jf=null,Ng=!1,Og=null,Qg=null,Mj=!1,Nj=null,Oj=0,Pj=0,Qj=null,Rd=0,Sd=null;
function wg(a){if(0===(a.mode&1))return 2;if(0!==(M&2)&&0!==N)return N&-N;if(null!==Oh.transition)return a=of,0===a&&(0===We&&(We=jb()),a=We),a;a=H;if(0!==a)return a;a=window.event;a=void 0===a?32:Rj(a.type);return a}function dg(a,b,c){if(a===O&&2===P||null!==a.cancelPendingCommit)ef(a,0),ff(a,N);mb(a,c);if(0===(M&2)||a!==O)a===O&&(0===(M&2)&&(Jj|=c),4===ci&&ff(a,N)),Xe(a),2===c&&0===M&&0===(b.mode&1)&&(ei=Qa()+500,$e(!0))}
function mf(a,b){if(0!==(M&6))throw Error(r(327));var c=a.callbackNode;if(af()&&a.callbackNode!==c)return null;var d=gb(a,a===O?N:0);if(0===d)return null;b=0!==(d&60)||0!==(d&a.expiredLanes)||b?bf(a,d):Sj(a,d);if(0!==b){if(2===b){var e=d,f=ib(a,e);0!==f&&(d=f,b=cf(a,e,f))}if(1===b)throw c=df,ef(a,0),ff(a,d),Xe(a),c;if(6===b)ff(a,d);else{e=a.current.alternate;if(0===(d&60)&&!Tj(e)){b=bf(a,d);if(2===b){f=d;var g=ib(a,f);0!==g&&(d=g,b=cf(a,f,g))}if(1===b)throw c=df,ef(a,0),ff(a,d),Xe(a),c;}a.finishedWork=
e;a.finishedLanes=d;a:{switch(b){case 0:case 1:throw Error(r(345));case 4:if((d&8388480)===d){ff(a,d);break a}break;case 2:case 3:case 5:break;default:throw Error(r(329));}if((d&125829120)===d&&(b=jj+500-Qa(),10<b)){ff(a,d);if(0!==gb(a,0))break a;a.timeoutHandle=Uj(Vj.bind(null,a,e,hf,jf,d),b);break a}Vj(a,e,hf,jf,d)}}}Xe(a);lf(a,Qa());a=a.callbackNode===c?mf.bind(null,a):null;return a}
function cf(a,b,c){var d=Lj,e=a.current.memoizedState.isDehydrated;e&&(ef(a,c).flags|=256);c=bf(a,c);if(2!==c){if(Ij&&!e)return a.errorRecoveryDisabledLanes|=b,Jj|=b,4;a=hf;hf=d;null!==a&&Yh(a)}return c}function Yh(a){null===hf?hf=a:hf.push.apply(hf,a)}function Vj(a,b,c,d,e){if(0===(e&42)&&(Wj={stylesheets:null,count:0,unsuspend:Xj},uj(b),b=Yj(),null!==b)){a.cancelPendingCommit=b(gf.bind(null,a,c,d));ff(a,e);return}gf(a,c,d)}
function Tj(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!Zc(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function ff(a,b){b&=~Kj;b&=~Jj;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-ab(b),d=1<<c;a[c]=-1;b&=~d}}function Zj(a,b){var c=M;M|=1;try{return a(b)}finally{M=c,0===M&&(ei=Qa()+500,$e(!0))}}function ak(a){null!==Nj&&0===Nj.tag&&0===(M&6)&&af();var b=M;M|=1;var c=Gj.transition,d=H;try{if(Gj.transition=null,H=2,a)return a()}finally{H=d,Gj.transition=c,M=b,0===(M&6)&&$e(!1)}}
function bk(){if(null!==Z){if(0===P)var a=Z.return;else a=Z,Gh(),Kf(a),me=null,ne=0,a=Z;for(;null!==a;)gi(a.alternate,a),a=a.return;Z=null}}function ef(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,ck(c));c=a.cancelPendingCommit;null!==c&&(a.cancelPendingCommit=null,c());bk();O=a;Z=a=te(a.current,null);N=Ee=b;P=0;Hj=null;Ij=!1;ci=0;df=null;Kj=Jj=ae=0;hf=Lj=null;Md();return a}
function dk(a,b){Q=null;pf.current=Gf;Fj.current=null;b===ee?(b=le(),P=Uh()&&0===(ae&268435455)&&0===(Jj&268435455)?2:3):b===fe?(b=le(),P=4):P=b===Tg?8:null!==b&&"object"===typeof b&&"function"===typeof b.then?6:1;Hj=b;null===Z&&(ci=1,df=b)}function Uh(){if((N&8388480)===N)return null===Ie?!0:!1;var a=He.current;return null===a||(N&125829120)!==N&&0===(N&1073741824)?!1:a===Ie}function ek(){var a=Dj.current;Dj.current=Gf;return null===a?Gf:a}function fk(){var a=Ej.current;Ej.current=Bj;return a}
function uh(){ci=4;null===O||0===(ae&268435455)&&0===(Jj&268435455)||ff(O,N)}function bf(a,b){var c=M;M|=2;var d=ek(),e=fk();if(O!==a||N!==b)jf=null,ef(a,b);a:do try{if(0!==P&&null!==Z){b=Z;var f=Hj;switch(P){case 8:bk();ci=6;break a;default:P=0,Hj=null,gk(b,f)}}hk();break}catch(g){dk(a,g)}while(1);Gh();M=c;Dj.current=d;Ej.current=e;if(null!==Z)throw Error(r(261));O=null;N=0;Md();return ci}function hk(){for(;null!==Z;)ik(Z)}
function Sj(a,b){var c=M;M|=2;var d=ek(),e=fk();if(O!==a||N!==b)jf=null,ei=Qa()+500,ef(a,b);a:do try{if(0!==P&&null!==Z){b=Z;var f=Hj;b:switch(P){case 1:P=0;Hj=null;gk(b,f);break;case 2:if(he(f)){P=0;Hj=null;jk(b);break}b=function(){2===P&&O===a&&(P=7);Xe(a)};f.then(b,b);break a;case 3:P=7;break a;case 4:P=5;break a;case 7:he(f)?(P=0,Hj=null,jk(b)):(P=0,Hj=null,gk(b,f));break;case 5:switch(Z.tag){case 5:case 26:case 27:b=Z;P=0;Hj=null;var g=b.sibling;if(null!==g)Z=g;else{var h=b.return;null!==h?(Z=
h,kk(h)):Z=null}break b}P=0;Hj=null;gk(b,f);break;case 6:P=0;Hj=null;gk(b,f);break;case 8:bk();ci=6;break a;default:throw Error(r(462));}}lk();break}catch(l){dk(a,l)}while(1);Gh();Dj.current=d;Ej.current=e;M=c;if(null!==Z)return 0;O=null;N=0;Md();return ci}function lk(){for(;null!==Z&&!Oa();)ik(Z)}function ik(a){var b=mk(a.alternate,a,Ee);a.memoizedProps=a.pendingProps;null===b?kk(a):Z=b;Fj.current=null}
function jk(a){var b=a.alternate;switch(a.tag){case 2:a.tag=0;case 15:case 0:var c=a.type,d=a.pendingProps;d=a.elementType===c?d:Cg(c,d);var e=Sc(c)?Qc:Oc.current;e=Rc(a,e);b=gh(b,a,d,c,e,N);break;case 11:c=a.type.render;d=a.pendingProps;d=a.elementType===c?d:Cg(c,d);b=gh(b,a,d,c,a.ref,N);break;case 5:Kf(a);default:gi(b,a),a=Z=di(a,Ee),b=mk(b,a,Ee)}a.memoizedProps=a.pendingProps;null===b?kk(a):Z=b;Fj.current=null}
function gk(a,b){Gh();Kf(a);me=null;ne=0;var c=a.return;if(null===c||null===O)ci=1,df=b,Z=null;else{try{a:{var d=O,e=b;b=N;a.flags|=32768;if(null!==e&&"object"===typeof e&&"function"===typeof e.then){var f=e,g=a.tag;if(0===(a.mode&1)&&(0===g||11===g||15===g)){var h=a.alternate;h?(a.updateQueue=h.updateQueue,a.memoizedState=h.memoizedState,a.lanes=h.lanes):(a.updateQueue=null,a.memoizedState=null)}var l=He.current;if(null!==l){switch(l.tag){case 13:a.mode&1&&(null===Ie?uh():null===l.alternate&&0===
ci&&(ci=3));l.flags&=-257;Rg(l,c,a,d,b);if(f===ge)l.flags|=16384;else{var p=l.updateQueue;null===p?l.updateQueue=new Set([f]):p.add(f)}break;case 22:if(l.mode&1){l.flags|=65536;if(f===ge)l.flags|=16384;else{var q=l.updateQueue;if(null===q){var w={transitions:null,markerInstances:null,retryQueue:new Set([f])};l.updateQueue=w}else{var t=q.retryQueue;null===t?q.retryQueue=new Set([f]):t.add(f)}}break}default:throw Error(r(435,l.tag));}l.mode&1&&nk(d,f,b);break a}else if(1===d.tag){nk(d,f,b);uh();break a}else e=
Error(r(426))}else if(K&&a.mode&1&&(f=He.current,null!==f)){0===(f.flags&65536)&&(f.flags|=256);Rg(f,c,a,d,b);Id(Jg(e,a));break a}d=e=Jg(e,a);4!==ci&&(ci=2);null===Lj?Lj=[d]:Lj.push(d);d=c;do{switch(d.tag){case 3:var u=e;d.flags|=65536;b&=-b;d.lanes|=b;var z=Mg(d,u,b);Zd(d,z);break a;case 1:g=e;var B=d.type,R=d.stateNode;if(0===(d.flags&128)&&("function"===typeof B.getDerivedStateFromError||null!==R&&"function"===typeof R.componentDidCatch&&(null===Qg||!Qg.has(R)))){d.flags|=65536;z=b&-b;d.lanes|=
z;u=Pg(d,g,z);Zd(d,u);break a}}d=d.return}while(null!==d)}}catch(U){throw Z=c,U;}if(a.flags&32768)a:{do{c=fi(a.alternate,a);if(null!==c){c.flags&=32767;Z=c;break a}a=a.return;null!==a&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null);Z=a}while(null!==a);ci=6;Z=null}else kk(a)}}function kk(a){var b=a;do{a=b.return;var c=Xh(b.alternate,b,Ee);if(null!==c){Z=c;return}b=b.sibling;if(null!==b){Z=b;return}Z=b=a}while(null!==b);0===ci&&(ci=5)}
function gf(a,b,c){var d=H,e=Gj.transition;try{Gj.transition=null,H=2,ok(a,b,c,d)}finally{Gj.transition=e,H=d}return null}
function ok(a,b,c,d){do af();while(null!==Nj);if(0!==(M&6))throw Error(r(327));var e=a.finishedWork,f=a.finishedLanes;if(null===e)return null;a.finishedWork=null;a.finishedLanes=0;if(e===a.current)throw Error(r(177));a.callbackNode=null;a.callbackPriority=0;a.cancelPendingCommit=null;var g=e.lanes|e.childLanes;g|=Ld;nb(a,g);a===O&&(Z=O=null,N=0);0===(e.subtreeFlags&10256)&&0===(e.flags&10256)||Mj||(Mj=!0,Pj=g,Qj=c,pk(Ua,function(){af();return null}));c=0!==(e.flags&15990);if(0!==(e.subtreeFlags&15990)||
c){c=Gj.transition;Gj.transition=null;var h=H;H=2;var l=M;M|=4;Fj.current=null;xi(a,e);aj(e,a);qk(Ci);zi=!!yi;Ci=yi=null;a.current=e;Ji(a,e.alternate,e);Pa();M=l;H=h;Gj.transition=c}else a.current=e;Mj?(Mj=!1,Nj=a,Oj=f):rk(a,g);g=a.pendingLanes;0===g&&(Qg=null);Za(e.stateNode,d);Xe(a);if(null!==b)for(d=a.onRecoverableError,e=0;e<b.length;e++)f=b[e],g={digest:f.digest,componentStack:f.stack},d(f.value,g);if(Ng)throw Ng=!1,a=Og,Og=null,a;0!==(Oj&3)&&0!==a.tag&&af();g=a.pendingLanes;0!==(g&3)?a===Sd?
Rd++:(Rd=0,Sd=a):Rd=0;$e(!1);return null}function rk(a,b){0===(a.pooledCacheLanes&=b)&&(b=a.pooledCache,null!=b&&(a.pooledCache=null,Nh(b)))}
function af(){if(null!==Nj){var a=Nj,b=Pj;Pj=0;var c=qb(Oj),d=32>c?32:c;c=Gj.transition;var e=H;try{Gj.transition=null;H=d;if(null===Nj)var f=!1;else{d=Qj;Qj=null;var g=Nj,h=Oj;Nj=null;Oj=0;if(0!==(M&6))throw Error(r(331));var l=M;M|=4;zj(g.current);pj(g,g.current,h,d);M=l;$e(!1);if(Ya&&"function"===typeof Ya.onPostCommitFiberRoot)try{Ya.onPostCommitFiberRoot(Xa,g)}catch(p){}f=!0}return f}finally{H=e,Gj.transition=c,rk(a,b)}}return!1}
function sk(a,b,c){b=Jg(c,b);b=Mg(a,b,2);a=Xd(a,b,2);null!==a&&(mb(a,2),Xe(a))}function X(a,b,c){if(3===a.tag)sk(a,a,c);else for(;null!==b;){if(3===b.tag){sk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Qg||!Qg.has(d))){a=Jg(c,a);a=Pg(b,a,2);b=Xd(b,a,2);null!==b&&(mb(b,2),Xe(b));break}}b=b.return}}
function nk(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Cj;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(Ij=!0,e.add(c),a=tk.bind(null,a,b,c),b.then(a,a))}function tk(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);a.pingedLanes|=a.suspendedLanes&c;O===a&&(N&c)===c&&(4===ci||3===ci&&(N&125829120)===N&&500>Qa()-jj?0===(M&2)&&ef(a,0):Kj|=c);Xe(a)}function uk(a,b){0===b&&(b=0===(a.mode&1)?2:kb());a=Pd(a,b);null!==a&&(mb(a,b),Xe(a))}
function vh(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);uk(a,c)}function Zi(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;case 22:d=a.stateNode._retryCache;break;default:throw Error(r(314));}null!==d&&d.delete(b);uk(a,c)}var mk;
mk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Pc.current)Tf=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return Tf=!1,Ah(a,b,c);Tf=0!==(a.flags&131072)?!0:!1}else Tf=!1,K&&0!==(b.flags&1048576)&&jd(b,cd,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ih(a,b);a=b.pendingProps;var e=Rc(b,Oc.current);Wg(b,c);e=Bf(null,b,d,a,e,c);var f=If();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Sc(d)?(f=!0,Wc(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,Ud(b),e.updater=Eg,b.stateNode=e,e._reactInternals=b,Ig(b,d,a,c),b=jh(null,b,d,!0,f,c)):(b.tag=0,K&&f&&kd(b),Ug(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ih(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=vk(d);a=Cg(d,a);switch(e){case 0:b=ah(null,b,d,a,c);break a;case 1:b=hh(null,b,d,a,c);break a;case 11:b=Vg(null,b,d,a,c);break a;case 14:b=Yg(null,b,d,Cg(d.type,a),c);break a}throw Error(r(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Cg(d,e),ah(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Cg(d,e),hh(a,b,d,e,c);case 3:a:{kh(b);if(null===a)throw Error(r(387));e=b.pendingProps;f=b.memoizedState;d=f.element;Vd(a,b);$d(b,e,null,c);var g=b.memoizedState;e=g.cache;Bh(b,V,e);e!==f.cache&&Ih(b,V,c);e=g.element;if(f.isDehydrated)if(f={element:e,isDehydrated:!1,cache:g.cache},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){d=
Jg(Error(r(423)),b);b=lh(a,b,e,c,d);break a}else if(e!==d){d=Jg(Error(r(424)),b);b=lh(a,b,e,c,d);break a}else for(J=td(b.stateNode.containerInfo.firstChild),I=b,K=!0,md=null,nd=!0,c=Ae(b,null,e,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Hd();if(e===d){b=Xg(a,b,c);break a}Ug(a,b,e,c)}b=b.child}return b;case 26:return ch(a,b),c=b.memoizedState=wk(b.type,null===a?null:a.memoizedProps,b.pendingProps),null!==a||K||null!==c||(c=b.type,a=b.pendingProps,d=$h(Fa.current).createElement(c),d[tb]=
b,d[ub]=a,ai(d,c,a),Jb(d),b.stateNode=d),null;case 27:return Ka(b),null===a&&K&&(d=b.stateNode=Zh(b.type,b.pendingProps,Fa.current),I=b,nd=!0,J=td(d.firstChild)),d=b.pendingProps.children,null!==a||K?Ug(a,b,d,c):b.child=ze(b,null,d,c),ch(a,b),b.child;case 5:return Ka(b),null===a&&K&&((d=b.pendingProps,"script"===b.type?(e=d.onLoad,f=d.onError,d=!(d.async&&(e||f))):d=!0,d)?(e=d=J,e)?rd(b,e)||(xd(b)&&yd(),J=td(e.nextSibling),f=I,J&&rd(b,J)?od(f,e):(qd(I,b),K=!1,I=b,J=d)):(xd(b)&&yd(),qd(I,b),K=!1,I=
b,J=d):(b.flags=b.flags&-4097|2,K=!1,I=b)),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Fd(d,e)?g=null:null!==f&&Fd(d,f)&&(b.flags|=32),ch(a,b),Ug(a,b,g,c),b.child;case 6:return null===a&&K&&((d=""!==b.pendingProps,a=c=J,a&&d)?ud(b,a)||(xd(b)&&yd(),J=td(a.nextSibling),d=I,J&&ud(b,J)?od(d,a):(qd(I,b),K=!1,I=b,J=c)):(xd(b)&&yd(),qd(I,b),K=!1,I=b,J=c)),null;case 13:return ph(a,b,c);case 4:return Ga(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=ze(b,null,d,c):
Ug(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Cg(d,e),Vg(a,b,d,e,c);case 7:return Ug(a,b,b.pendingProps,c),b.child;case 8:return Ug(a,b,b.pendingProps.children,c),b.child;case 12:return Ug(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;Bh(b,d,g);if(null!==f)if(Zc(f.value,g)){if(f.children===e.children&&!Pc.current){b=Xg(a,b,c);break a}}else Ih(b,d,c);Ug(a,b,e.children,c);b=b.child}return b;case 9:return e=
b.type,d=b.pendingProps.children,Wg(b,c),e=Qf(e),d=d(e),b.flags|=1,Ug(a,b,d,c),b.child;case 14:return d=b.type,e=Cg(d,b.pendingProps),e=Cg(d.type,e),Yg(a,b,d,e,c);case 15:return $g(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Cg(d,e),ih(a,b),b.tag=1,Sc(d)?(a=!0,Wc(b)):a=!1,Wg(b,c),Gg(b,d,e),Ig(b,d,e,c),jh(null,b,d,!0,a,c);case 19:return zh(a,b,c);case 22:return bh(a,b,c);case 24:return Wg(b,c),d=Qf(V),null===a?(e=fh(),null===e&&(e=O,f=xg(),e.pooledCache=
f,f.refCount++,null!==f&&(e.pooledCacheLanes|=c),e=f),b.memoizedState={parent:d,cache:e},Ud(b),Bh(b,V,e)):(0!==(a.lanes&c)&&(Vd(a,b),$d(b,null,null,c)),e=a.memoizedState,f=b.memoizedState,e.parent!==d?(e={parent:d,cache:d},b.memoizedState=e,0===b.lanes&&(b.memoizedState=b.updateQueue.baseState=e),Bh(b,V,d)):(d=f.cache,Bh(b,V,d),d!==e.cache&&Ih(b,V,c))),Ug(a,b,b.pendingProps.children,c),b.child}throw Error(r(156,b.tag));};function pk(a,b){return Ma(a,b)}
function xk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.refCleanup=this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function pd(a,b,c,d){return new xk(a,b,c,d)}function Zg(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function vk(a){if("function"===typeof a)return Zg(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===ra)return 11;if(a===ua)return 14}return 2}
function te(a,b){var c=a.alternate;null===c?(c=pd(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&31457280;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;c.refCleanup=a.refCleanup;return c}
function di(a,b){a.flags&=31457282;var c=a.alternate;null===c?(a.childLanes=0,a.lanes=b,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,b=c.dependencies,a.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext});
return a}
function ve(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Zg(a)&&(g=1);else if("string"===typeof a)g=yk(a,c,Da.current)?26:"html"===a||"head"===a||"body"===a?27:5;else a:switch(a){case la:return xe(c.children,e,f,b);case ma:g=8;e|=8;0!==(e&1)&&(e|=16);break;case na:return a=pd(12,c,b,e|2),a.elementType=na,a.lanes=f,a;case sa:return a=pd(13,c,b,e),a.elementType=sa,a.lanes=f,a;case ta:return a=pd(19,c,b,e),a.elementType=ta,a.lanes=f,a;case xa:return qh(c,e,f,b);case ya:case wa:case za:return a=pd(24,
c,b,e),a.elementType=za,a.lanes=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case oa:g=10;break a;case pa:g=9;break a;case ra:g=11;break a;case ua:g=14;break a;case va:g=16;d=null;break a}throw Error(r(130,null==a?a:typeof a,""));}b=pd(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function xe(a,b,c,d){a=pd(7,a,d,b);a.lanes=c;return a}
function qh(a,b,c,d){a=pd(22,a,d,b);a.elementType=xa;a.lanes=c;var e={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=e._current;if(null===f)throw Error(r(456));if(0===(e._pendingVisibility&2)){var g=Pd(f,2);null!==g&&(e._pendingVisibility|=2,dg(g,f,2))}},attach:function(){var f=e._current;if(null===f)throw Error(r(456));if(0!==(e._pendingVisibility&2)){var g=Pd(f,2);null!==g&&(e._pendingVisibility&=-3,dg(g,f,2))}}};
a.stateNode=e;return a}function ue(a,b,c){a=pd(6,a,null,b);a.lanes=c;return a}function we(a,b,c){b=pd(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function zk(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null;this.callbackPriority=0;this.expirationTimes=lb(-1);this.entangledLanes=this.errorRecoveryDisabledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=lb(0);this.hiddenUpdates=
lb(null);this.identifierPrefix=d;this.onRecoverableError=e;this.pooledCache=null;this.pooledCacheLanes=0;this.mutableSourceEagerHydrationData=null;this.incompleteTransitions=new Map}function Ak(a,b,c,d,e,f,g,h,l){a=new zk(a,b,c,h,l);1===b?(b=1,!0===f&&(b|=24)):b=0;f=pd(3,null,null,b);a.current=f;f.stateNode=a;b=xg();b.refCount++;a.pooledCache=b;b.refCount++;f.memoizedState={element:d,isDehydrated:c,cache:b};Ud(f);return a}
function Bk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ka,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function Ck(a){if(!a)return Nc;a=a._reactInternals;a:{if(Hc(a)!==a||1!==a.tag)throw Error(r(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Sc(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(r(171));}if(1===a.tag){var c=a.type;if(Sc(c))return Vc(a,c,b)}return b}
function Dk(a,b,c,d,e,f,g,h,l){a=Ak(c,d,!0,a,e,f,g,h,l);a.context=Ck(null);c=a.current;d=wg(c);e=Wd(d);e.callback=void 0!==b&&null!==b?b:null;Xd(c,e,d);a.current.lanes=d;mb(a,d);Xe(a);return a}function Ek(a,b,c,d){var e=b.current,f=wg(e);c=Ck(c);null===b.context?b.context=c:b.pendingContext=c;b=Wd(f);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=Xd(e,b,f);null!==a&&(dg(a,e,f),Yd(a,e,f));return f}
function Fk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 27:case 5:return a.child.stateNode;default:return a.child.stateNode}}function Gk(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=fb(b.pendingLanes);0!==c&&(ob(b,c|2),Xe(b),0===(M&6)&&(ei=Qa()+500,$e(!1)))}break;case 13:ak(function(){var d=Pd(a,2);null!==d&&dg(d,a,2)}),Hk(a,2)}}
function Ik(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function Hk(a,b){Ik(a,b);(a=a.alternate)&&Ik(a,b)}function Jk(a){if(13===a.tag){var b=Pd(a,134217728);null!==b&&dg(b,a,134217728);Hk(a,134217728)}}function Kk(){return null}var Lk=!1;function Mk(a,b,c){if(Lk)return a(b,c);Lk=!0;try{return Zj(a,b,c)}finally{if(Lk=!1,null!==Cc||null!==Dc)ak(),Gc()}}
function Nk(a,b){var c=a.stateNode;if(null===c)return null;var d=Hb(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(r(231,b,typeof c));return c}var Ok=!1;if(Ob)try{var Pk={};Object.defineProperty(Pk,"passive",{get:function(){Ok=!0}});window.addEventListener("test",Pk,Pk);window.removeEventListener("test",Pk,Pk)}catch(a){Ok=!1}function Qk(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function Rk(){return!0}function Sk(){return!1}
function Tk(a){function b(c,d,e,f,g){this._reactName=c;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var h in a)a.hasOwnProperty(h)&&(c=a[h],this[h]=c?c(f):f[h]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?Rk:Sk;this.isPropagationStopped=Sk;return this}C(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():"unknown"!==typeof c.returnValue&&
(c.returnValue=!1),this.isDefaultPrevented=Rk)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():"unknown"!==typeof c.cancelBubble&&(c.cancelBubble=!0),this.isPropagationStopped=Rk)},persist:function(){},isPersistent:Rk});return b}
var Uk={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vk=Tk(Uk),Wk=C({},Uk,{view:0,detail:0}),Xk=Tk(Wk),Yk,Zk,$k,bl=C({},Wk,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==$k&&($k&&"mousemove"===a.type?(Yk=a.screenX-$k.screenX,Zk=a.screenY-$k.screenY):Zk=Yk=0,$k=a);return Yk},movementY:function(a){return"movementY"in a?a.movementY:Zk}}),cl=Tk(bl),dl=C({},bl,{dataTransfer:0}),el=Tk(dl),fl=C({},Wk,{relatedTarget:0}),gl=Tk(fl),hl=C({},Uk,{animationName:0,elapsedTime:0,pseudoElement:0}),il=Tk(hl),jl=C({},Uk,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),kl=Tk(jl),ll=C({},Uk,{data:0}),ml=Tk(ll),nl={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ol={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ql(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=pl[a])?!!b[a]:!1}function al(){return ql}
var rl=C({},Wk,{key:function(a){if(a.key){var b=nl[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Qk(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?ol[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(a){return"keypress"===a.type?Qk(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?Qk(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sl=Tk(rl),tl=C({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ul=Tk(tl),vl=C({},Wk,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),wl=Tk(vl),xl=C({},Uk,{propertyName:0,elapsedTime:0,pseudoElement:0}),yl=Tk(xl),zl=C({},bl,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Al=Tk(zl),Bl=!1,Cl=null,Dl=null,El=null,Fl=new Map,Gl=new Map,Hl=[],Il="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
function Jl(a,b){switch(a){case "focusin":case "focusout":Cl=null;break;case "dragenter":case "dragleave":Dl=null;break;case "mouseover":case "mouseout":El=null;break;case "pointerover":case "pointerout":Fl.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Gl.delete(b.pointerId)}}
function Kl(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Fb(b),null!==b&&Jk(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Ll(a,b,c,d,e){switch(b){case "focusin":return Cl=Kl(Cl,a,b,c,d,e),!0;case "dragenter":return Dl=Kl(Dl,a,b,c,d,e),!0;case "mouseover":return El=Kl(El,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Fl.set(f,Kl(Fl.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Gl.set(f,Kl(Gl.get(f)||null,a,b,c,d,e)),!0}return!1}
function Ml(a){var b=Db(a.target);if(null!==b){var c=Hc(b);if(null!==c)if(b=c.tag,13===b){if(b=Ic(c),null!==b){a.blockedOn=b;pb(a.priority,function(){if(13===c.tag){var d=wg(c),e=Pd(c,d);null!==e&&dg(e,c,d);Hk(c,d)}});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Nl(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Ol(a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);Ac=d;c.target.dispatchEvent(d);Ac=null}else return b=Fb(c),null!==b&&Jk(b),a.blockedOn=c,!1;b.shift()}return!0}function Pl(a,b,c){Nl(a)&&c.delete(b)}function Ql(){Bl=!1;null!==Cl&&Nl(Cl)&&(Cl=null);null!==Dl&&Nl(Dl)&&(Dl=null);null!==El&&Nl(El)&&(El=null);Fl.forEach(Pl);Gl.forEach(Pl)}
function Rl(a,b){a.blockedOn===b&&(a.blockedOn=null,Bl||(Bl=!0,ba.unstable_scheduleCallback(ba.unstable_NormalPriority,Ql)))}function Wi(a){function b(e){return Rl(e,a)}null!==Cl&&Rl(Cl,a);null!==Dl&&Rl(Dl,a);null!==El&&Rl(El,a);Fl.forEach(b);Gl.forEach(b);for(var c=0;c<Hl.length;c++){var d=Hl[c];d.blockedOn===a&&(d.blockedOn=null)}for(;0<Hl.length&&(c=Hl[0],null===c.blockedOn);)Ml(c),null===c.blockedOn&&Hl.shift()}var Sl=ea.ReactCurrentBatchConfig,zi=!0;
function Tl(a,b,c,d){var e=H,f=Sl.transition;Sl.transition=null;try{H=2,Ul(a,b,c,d)}finally{H=e,Sl.transition=f}}function Vl(a,b,c,d){var e=H,f=Sl.transition;Sl.transition=null;try{H=8,Ul(a,b,c,d)}finally{H=e,Sl.transition=f}}
function Ul(a,b,c,d){if(zi){var e=Ol(d);if(null===e)Wl(a,b,d,Xl,c),Jl(a,d);else if(Ll(e,a,b,c,d))d.stopPropagation();else if(Jl(a,d),b&4&&-1<Il.indexOf(a)){for(;null!==e;){var f=Fb(e);null!==f&&Gk(f);f=Ol(d);null===f&&Wl(a,b,d,Xl,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else Wl(a,b,d,null,c)}}
function Ol(a){a=Bc(a);a:{Xl=null;a=Db(a);if(null!==a){var b=Hc(a);if(null===b)a=null;else{var c=b.tag;if(13===c){a=Ic(b);if(null!==a)break a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated){a=3===b.tag?b.stateNode.containerInfo:null;break a}a=null}else b!==a&&(a=null)}}Xl=a;a=null}return a}var Xl=null;
function Rj(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 2;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 8;
case "message":switch(Ra()){case Sa:return 2;case Ta:return 8;case Ua:case Va:return 32;case Wa:return 536870912;default:return 32}default:return 32}}var Yl=null,Zl=null,$l=null;function am(){if($l)return $l;var a,b=Zl,c=b.length,d,e="value"in Yl?Yl.value:Yl.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $l=e.slice(a,1<d?1-d:void 0)}var bm=[9,13,27,32],cm=Ob&&"CompositionEvent"in window,dm=null;Ob&&"documentMode"in document&&(dm=document.documentMode);
var em=Ob&&"TextEvent"in window&&!dm,fm=Ob&&(!cm||dm&&8<dm&&11>=dm),gm=String.fromCharCode(32),im=!1;function jm(a,b){switch(a){case "keyup":return-1!==bm.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function km(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var lm=!1;
function mm(a,b){switch(a){case "compositionend":return km(b);case "keypress":if(32!==b.which)return null;im=!0;return gm;case "textInput":return a=b.data,a===gm&&im?null:a;default:return null}}
function nm(a,b){if(lm)return"compositionend"===a||!cm&&jm(a,b)?(a=am(),$l=Zl=Yl=null,lm=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return fm&&"ko"!==b.locale?null:b.data;default:return null}}
var om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!om[a.type]:"textarea"===b?!0:!1}function qm(a,b,c,d){Fc(d);b=rm(b,"onChange");0<b.length&&(c=new Vk("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var sm=null,tm=null;function um(a){vm(a,0)}function wm(a){var b=Gb(a);if(gc(b))return a}
function xm(a,b){if("change"===a)return b}var ym=!1;if(Ob){var zm;if(Ob){var Am="oninput"in document;if(!Am){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;");Am="function"===typeof Bm.oninput}zm=Am}else zm=!1;ym=zm&&(!document.documentMode||9<document.documentMode)}function Cm(){sm&&(sm.detachEvent("onpropertychange",Dm),tm=sm=null)}function Dm(a){if("value"===a.propertyName&&wm(tm)){var b=[];qm(b,tm,a,Bc(a));Mk(um,b)}}
function Em(a,b,c){"focusin"===a?(Cm(),sm=b,tm=c,sm.attachEvent("onpropertychange",Dm)):"focusout"===a&&Cm()}function Fm(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return wm(tm)}function Gm(a,b){if("click"===a)return wm(b)}function Hm(a,b){if("input"===a||"change"===a)return wm(b)}function Im(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Jm(a,b){var c=Im(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Im(c)}}function Km(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Km(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ai(){for(var a=window,b=hc();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=hc(a.document)}return b}function Bi(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function qk(a){var b=Ai(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Km(c.ownerDocument.documentElement,c)){if(null!==d&&Bi(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Jm(c,f);var g=Jm(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Lm=Ob&&"documentMode"in document&&11>=document.documentMode,Mm=null,Nm=null,Om=null,Pm=!1;
function Qm(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Pm||null==Mm||Mm!==hc(d)||(d=Mm,"selectionStart"in d&&Bi(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Om&&de(Om,d)||(Om=d,d=rm(Nm,"onSelect"),0<d.length&&(b=new Vk("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Mm)))}
function Rm(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Sm={animationend:Rm("Animation","AnimationEnd"),animationiteration:Rm("Animation","AnimationIteration"),animationstart:Rm("Animation","AnimationStart"),transitionend:Rm("Transition","TransitionEnd")},Tm={},Um={};
Ob&&(Um=document.createElement("div").style,"AnimationEvent"in window||(delete Sm.animationend.animation,delete Sm.animationiteration.animation,delete Sm.animationstart.animation),"TransitionEvent"in window||delete Sm.transitionend.transition);function Vm(a){if(Tm[a])return Tm[a];if(!Sm[a])return a;var b=Sm[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Um)return Tm[a]=b[c];return a}var Wm=Vm("animationend"),Xm=Vm("animationiteration"),Ym=Vm("animationstart"),Zm=Vm("transitionend"),$m=new Map,an="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function bn(a,b){$m.set(a,b);Mb(b,[a])}for(var cn=0;cn<an.length;cn++){var dn=an[cn],en=dn.toLowerCase(),fn=dn[0].toUpperCase()+dn.slice(1);bn(en,"on"+fn)}bn(Wm,"onAnimationEnd");bn(Xm,"onAnimationIteration");bn(Ym,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(Zm,"onTransitionEnd");Nb("onMouseEnter",["mouseout","mouseover"]);Nb("onMouseLeave",["mouseout","mouseover"]);Nb("onPointerEnter",["pointerout","pointerover"]);
Nb("onPointerLeave",["pointerout","pointerover"]);Mb("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mb("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mb("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mb("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mb("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mb("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ad="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gn=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ad));
function hn(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;oi(d,b,void 0,a);a.currentTarget=null}
function vm(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],l=h.instance,p=h.currentTarget;h=h.listener;if(l!==f&&e.isPropagationStopped())break a;hn(e,h,p);f=l}else for(g=0;g<d.length;g++){h=d[g];l=h.instance;p=h.currentTarget;h=h.listener;if(l!==f&&e.isPropagationStopped())break a;hn(e,h,p);f=l}}}if(ki)throw a=li,ki=!1,li=null,a;}
function L(a,b){var c=b[wb];void 0===c&&(c=b[wb]=new Set);var d=a+"__bubble";c.has(d)||(jn(b,a,2,!1),c.add(d))}function kn(a,b,c){var d=0;b&&(d|=4);jn(c,a,d,b)}var ln="_reactListening"+Math.random().toString(36).slice(2);function bi(a){if(!a[ln]){a[ln]=!0;Kb.forEach(function(c){"selectionchange"!==c&&(gn.has(c)||kn(c,!1,a),kn(c,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[ln]||(b[ln]=!0,kn("selectionchange",!1,b))}}
function jn(a,b,c,d){switch(Rj(b)){case 2:var e=Tl;break;case 8:e=Vl;break;default:e=Ul}c=e.bind(null,b,c,a);e=void 0;!Ok||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function Wl(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var l=g.tag;if(3===l||4===l)if(l=g.stateNode.containerInfo,l===e||8===l.nodeType&&l.parentNode===e)return;g=g.return}for(;null!==h;){g=Db(h);if(null===g)return;l=g.tag;if(5===l||6===l||26===l||27===l){d=f=g;continue a}h=h.parentNode}}d=d.return}Mk(function(){var p=
f,q=Bc(c),w=[];a:{var t=$m.get(a);if(void 0!==t){var u=Vk,z=a;switch(a){case "keypress":if(0===Qk(c))break a;case "keydown":case "keyup":u=sl;break;case "focusin":z="focus";u=gl;break;case "focusout":z="blur";u=gl;break;case "beforeblur":case "afterblur":u=gl;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":u=cl;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":u=
el;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":u=wl;break;case Wm:case Xm:case Ym:u=il;break;case Zm:u=yl;break;case "scroll":u=Xk;break;case "wheel":u=Al;break;case "copy":case "cut":case "paste":u=kl;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":u=ul}var B=0!==(b&4),R=!B&&"scroll"===a,U=B?null!==t?t+"Capture":null:t;B=[];for(var m=p,k;null!==
m;){var n=m;k=n.stateNode;n=n.tag;5!==n&&26!==n&&27!==n||null===k||null===U||(n=Nk(m,U),null!=n&&B.push(mn(m,n,k)));if(R)break;m=m.return}0<B.length&&(t=new u(t,z,null,c,q),w.push({event:t,listeners:B}))}}if(0===(b&7)){a:{t="mouseover"===a||"pointerover"===a;u="mouseout"===a||"pointerout"===a;if(t&&c!==Ac&&(z=c.relatedTarget||c.fromElement)&&(Db(z)||z[vb]))break a;if(u||t){t=q.window===q?q:(t=q.ownerDocument)?t.defaultView||t.parentWindow:window;if(u){if(z=c.relatedTarget||c.toElement,u=p,z=z?Db(z):
null,null!==z&&(R=Hc(z),B=z.tag,z!==R||5!==B&&27!==B&&6!==B))z=null}else u=null,z=p;if(u!==z){B=cl;n="onMouseLeave";U="onMouseEnter";m="mouse";if("pointerout"===a||"pointerover"===a)B=ul,n="onPointerLeave",U="onPointerEnter",m="pointer";R=null==u?t:Gb(u);k=null==z?t:Gb(z);t=new B(n,m+"leave",u,c,q);t.target=R;t.relatedTarget=k;n=null;Db(q)===p&&(B=new B(U,m+"enter",z,c,q),B.target=k,B.relatedTarget=R,n=B);R=n;if(u&&z)b:{B=u;U=z;m=0;for(k=B;k;k=nn(k))m++;k=0;for(n=U;n;n=nn(n))k++;for(;0<m-k;)B=nn(B),
m--;for(;0<k-m;)U=nn(U),k--;for(;m--;){if(B===U||null!==U&&B===U.alternate)break b;B=nn(B);U=nn(U)}B=null}else B=null;null!==u&&on(w,t,u,B,!1);null!==z&&null!==R&&on(w,R,z,B,!0)}}}a:{t=p?Gb(p):window;u=t.nodeName&&t.nodeName.toLowerCase();if("select"===u||"input"===u&&"file"===t.type)var v=xm;else if(pm(t))if(ym)v=Hm;else{v=Fm;var x=Em}else(u=t.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===t.type||"radio"===t.type)&&(v=Gm);if(v&&(v=v(a,p))){qm(w,v,c,q);break a}x&&x(a,t,p);"focusout"===a&&p&&
"number"===t.type&&null!=p.memoizedProps.value&&lc(t,"number",t.value)}x=p?Gb(p):window;switch(a){case "focusin":if(pm(x)||"true"===x.contentEditable)Mm=x,Nm=p,Om=null;break;case "focusout":Om=Nm=Mm=null;break;case "mousedown":Pm=!0;break;case "contextmenu":case "mouseup":case "dragend":Pm=!1;Qm(w,c,q);break;case "selectionchange":if(Lm)break;case "keydown":case "keyup":Qm(w,c,q)}var A;if(cm)b:{switch(a){case "compositionstart":var y="onCompositionStart";break b;case "compositionend":y="onCompositionEnd";
break b;case "compositionupdate":y="onCompositionUpdate";break b}y=void 0}else lm?jm(a,c)&&(y="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(y="onCompositionStart");y&&(fm&&"ko"!==c.locale&&(lm||"onCompositionStart"!==y?"onCompositionEnd"===y&&lm&&(A=am()):(Yl=q,Zl="value"in Yl?Yl.value:Yl.textContent,lm=!0)),x=rm(p,y),0<x.length&&(y=new ml(y,a,null,c,q),w.push({event:y,listeners:x}),A?y.data=A:(A=km(c),null!==A&&(y.data=A))));if(A=em?mm(a,c):nm(a,c))p=rm(p,"onBeforeInput"),0<p.length&&(q=new ml("onBeforeInput",
"beforeinput",null,c,q),w.push({event:q,listeners:p}),q.data=A)}vm(w,b)})}function mn(a,b,c){return{instance:a,listener:b,currentTarget:c}}function rm(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;e=e.tag;5!==e&&26!==e&&27!==e||null===f||(e=Nk(a,c),null!=e&&d.unshift(mn(a,e,f)),e=Nk(a,b),null!=e&&d.push(mn(a,e,f)));a=a.return}return d}function nn(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag&&27!==a.tag);return a?a:null}
function on(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,l=h.alternate,p=h.stateNode;h=h.tag;if(null!==l&&l===d)break;5!==h&&26!==h&&27!==h||null===p||(l=p,e?(p=Nk(c,f),null!=p&&g.unshift(mn(c,p,l))):e||(p=Nk(c,f),null!=p&&g.push(mn(c,p,l))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var pn=/\r\n?/g,qn=/\u0000|\uFFFD/g;function rn(a){return("string"===typeof a?a:""+a).replace(pn,"\n").replace(qn,"")}function Bd(a,b,c){b=rn(b);if(rn(a)!==b&&c)throw Error(r(425));}
function Cd(){}
function sn(a,b,c,d,e){switch(c){case "children":"string"===typeof d?"body"===b||"textarea"===b&&""===d||vc(a,d):"number"===typeof d&&"body"!==b&&vc(a,""+d);break;case "className":Ub(a,"class",d);break;case "tabIndex":Ub(a,"tabindex",d);break;case "dir":case "role":case "viewBox":case "width":case "height":Ub(a,c,d);break;case "style":xc(a,d);break;case "src":case "href":if(null==d||"function"===typeof d||"symbol"===typeof d||"boolean"===typeof d){a.removeAttribute(c);break}a.setAttribute(c,""+d);
break;case "action":case "formAction":if(null==d||"function"===typeof d||"symbol"===typeof d||"boolean"===typeof d){a.removeAttribute(c);break}a.setAttribute(c,""+d);break;case "onClick":null!=d&&(a.onclick=Cd);break;case "onScroll":null!=d&&L("scroll",a);break;case "dangerouslySetInnerHTML":if(null!=d){if("object"!==typeof d||!("__html"in d))throw Error(r(61));d=d.__html;if(null!=d){if(null!=e.children)throw Error(r(60));uc(a,d)}}break;case "multiple":a.multiple=d&&"function"!==typeof d&&"symbol"!==
typeof d;break;case "muted":a.muted=d&&"function"!==typeof d&&"symbol"!==typeof d;break;case "suppressContentEditableWarning":case "suppressHydrationWarning":case "defaultValue":case "defaultChecked":case "innerHTML":break;case "autoFocus":break;case "xlinkHref":if(null==d||"function"===typeof d||"boolean"===typeof d||"symbol"===typeof d){a.removeAttribute("xlink:href");break}a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+d);break;case "contentEditable":case "spellCheck":case "draggable":case "value":case "autoReverse":case "externalResourcesRequired":case "focusable":case "preserveAlpha":null!=
d&&"function"!==typeof d&&"symbol"!==typeof d?a.setAttribute(c,""+d):a.removeAttribute(c);break;case "allowFullScreen":case "async":case "autoPlay":case "controls":case "default":case "defer":case "disabled":case "disablePictureInPicture":case "disableRemotePlayback":case "formNoValidate":case "hidden":case "loop":case "noModule":case "noValidate":case "open":case "playsInline":case "readOnly":case "required":case "reversed":case "scoped":case "seamless":case "itemScope":d&&"function"!==typeof d&&
"symbol"!==typeof d?a.setAttribute(c,""):a.removeAttribute(c);break;case "capture":case "download":!0===d?a.setAttribute(c,""):!1!==d&&null!=d&&"function"!==typeof d&&"symbol"!==typeof d?a.setAttribute(c,d):a.removeAttribute(c);break;case "cols":case "rows":case "size":case "span":null!=d&&"function"!==typeof d&&"symbol"!==typeof d&&!isNaN(d)&&1<=d?a.setAttribute(c,d):a.removeAttribute(c);break;case "rowSpan":case "start":null==d||"function"===typeof d||"symbol"===typeof d||isNaN(d)?a.removeAttribute(c):
a.setAttribute(c,d);break;case "xlinkActuate":Vb(a,"http://www.w3.org/1999/xlink","xlink:actuate",d);break;case "xlinkArcrole":Vb(a,"http://www.w3.org/1999/xlink","xlink:arcrole",d);break;case "xlinkRole":Vb(a,"http://www.w3.org/1999/xlink","xlink:role",d);break;case "xlinkShow":Vb(a,"http://www.w3.org/1999/xlink","xlink:show",d);break;case "xlinkTitle":Vb(a,"http://www.w3.org/1999/xlink","xlink:title",d);break;case "xlinkType":Vb(a,"http://www.w3.org/1999/xlink","xlink:type",d);break;case "xmlBase":Vb(a,
"http://www.w3.org/XML/1998/namespace","xml:base",d);break;case "xmlLang":Vb(a,"http://www.w3.org/XML/1998/namespace","xml:lang",d);break;case "xmlSpace":Vb(a,"http://www.w3.org/XML/1998/namespace","xml:space",d);break;case "is":Tb(a,"is",d);break;default:if(!(2<c.length)||"o"!==c[0]&&"O"!==c[0]||"n"!==c[1]&&"N"!==c[1])e=zc.get(c)||c,Tb(a,e,d)}}
function tn(a,b,c,d,e){switch(c){case "style":xc(a,d);break;case "dangerouslySetInnerHTML":if(null!=d){if("object"!==typeof d||!("__html"in d))throw Error(r(61));b=d.__html;if(null!=b){if(null!=e.children)throw Error(r(60));uc(a,b)}}break;case "children":"string"===typeof d?vc(a,d):"number"===typeof d&&vc(a,""+d);break;case "onScroll":null!=d&&L("scroll",a);break;case "onClick":null!=d&&(a.onclick=Cd);break;case "suppressContentEditableWarning":case "suppressHydrationWarning":case "innerHTML":break;
default:Lb.hasOwnProperty(c)||("boolean"===typeof d&&(d=""+d),Tb(a,c,d))}}
function ai(a,b,c){switch(b){case "div":case "span":case "svg":case "path":case "a":case "g":case "p":case "li":break;case "input":L("invalid",a);var d=null,e=null,f=null,g=null,h=null,l=null;for(q in c)if(c.hasOwnProperty(q)){var p=c[q];if(null!=p)switch(q){case "name":d=p;break;case "type":e=p;break;case "checked":h=p;break;case "defaultChecked":l=p;break;case "value":f=p;break;case "defaultValue":g=p;break;case "children":case "dangerouslySetInnerHTML":if(null!=p)throw Error(r(137,b));break;default:sn(a,
b,q,p,c)}}mc(a,f,g,h,l,e,d,!1);fc(a);return;case "select":L("invalid",a);var q=e=f=null;for(d in c)if(c.hasOwnProperty(d)&&(g=c[d],null!=g))switch(d){case "value":f=g;break;case "defaultValue":e=g;break;case "multiple":q=g;default:sn(a,b,d,g,c)}b=f;c=e;a.multiple=!!q;null!=b?oc(a,!!q,b,!1):null!=c&&oc(a,!!q,c,!0);return;case "textarea":L("invalid",a);f=d=q=null;for(e in c)if(c.hasOwnProperty(e)&&(g=c[e],null!=g))switch(e){case "value":q=g;break;case "defaultValue":d=g;break;case "children":f=g;break;
case "dangerouslySetInnerHTML":if(null!=g)throw Error(r(91));break;default:sn(a,b,e,g,c)}qc(a,q,d,f);fc(a);return;case "option":for(g in c)if(c.hasOwnProperty(g)&&(q=c[g],null!=q))switch(g){case "selected":a.selected=q&&"function"!==typeof q&&"symbol"!==typeof q;break;default:sn(a,b,g,q,c)}return;case "dialog":L("cancel",a);L("close",a);break;case "iframe":case "object":L("load",a);break;case "video":case "audio":for(q=0;q<Ad.length;q++)L(Ad[q],a);break;case "image":L("error",a);L("load",a);break;
case "details":L("toggle",a);break;case "embed":case "source":case "img":case "link":L("error",a),L("load",a);case "area":case "base":case "br":case "col":case "hr":case "keygen":case "meta":case "param":case "track":case "wbr":case "menuitem":for(h in c)if(c.hasOwnProperty(h)&&(q=c[h],null!=q))switch(h){case "children":case "dangerouslySetInnerHTML":throw Error(r(137,b));default:sn(a,b,h,q,c)}return;default:if(yc(b)){for(l in c)c.hasOwnProperty(l)&&(q=c[l],null!=q&&tn(a,b,l,q,c));return}}for(f in c)c.hasOwnProperty(f)&&
(q=c[f],null!=q&&sn(a,b,f,q,c))}
function gj(a,b,c,d,e){switch(c){case "div":case "span":case "svg":case "path":case "a":case "g":case "p":case "li":break;case "input":var f=e.name,g=e.type,h=e.value,l=e.defaultValue;d=d.defaultValue;for(var p=e.checked,q=e.defaultChecked,w=0;w<b.length;w+=2){var t=b[w],u=b[w+1];switch(t){case "type":break;case "name":break;case "checked":break;case "defaultChecked":break;case "value":break;case "defaultValue":break;case "children":case "dangerouslySetInnerHTML":if(null!=u)throw Error(r(137,c));
break;default:sn(a,c,t,u,e)}}kc(a,h,l,d,p,q,g,f);return;case "select":f=e.value;g=e.defaultValue;h=e.multiple;l=d.multiple;for(d=0;d<b.length;d+=2)switch(p=b[d],q=b[d+1],p){case "value":break;default:sn(a,c,p,q,e)}null!=f?oc(a,!!h,f,!1):!!l!==!!h&&(null!=g?oc(a,!!h,g,!0):oc(a,!!h,h?[]:"",!1));return;case "textarea":f=e.value;g=e.defaultValue;for(h=0;h<b.length;h+=2)switch(l=b[h],d=b[h+1],l){case "value":break;case "children":break;case "dangerouslySetInnerHTML":if(null!=d)throw Error(r(91));break;
default:sn(a,c,l,d,e)}pc(a,f,g);return;case "option":for(f=0;f<b.length;f+=2)switch(g=b[f],h=b[f+1],g){case "selected":a.selected=h&&"function"!==typeof h&&"symbol"!==typeof h;break;default:sn(a,c,g,h,e)}return;case "img":case "link":case "area":case "base":case "br":case "col":case "embed":case "hr":case "keygen":case "meta":case "param":case "source":case "track":case "wbr":case "menuitem":for(f=0;f<b.length;f+=2)switch(g=b[f],h=b[f+1],g){case "children":case "dangerouslySetInnerHTML":if(null!=
h)throw Error(r(137,c));break;default:sn(a,c,g,h,e)}return;default:if(yc(c)){for(f=0;f<b.length;f+=2)tn(a,c,b[f],b[f+1],e);return}}for(f=0;f<b.length;f+=2)sn(a,c,b[f],b[f+1],e)}var yi=null,Ci=null;function $h(a){return 9===a.nodeType?a:a.ownerDocument}function Ha(a){switch(a){case "http://www.w3.org/2000/svg":return 1;case "http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}
function Ia(a,b){if(0===a)switch(b){case "svg":return 1;case "math":return 2;default:return 0}return 1===a&&"foreignObject"===b?0:a}function Fd(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Uj="function"===typeof setTimeout?setTimeout:void 0,ck="function"===typeof clearTimeout?clearTimeout:void 0,un="function"===typeof Promise?Promise:void 0,nf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof un?function(a){return un.resolve(null).then(a).catch(vn)}:Uj;function vn(a){setTimeout(function(){throw a;})}
function Vi(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);Wi(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);Wi(b)}function Di(a){var b=a.nodeType;if(9===b)wn(a);else if(1===b)switch(a.nodeName){case "HEAD":case "HTML":case "BODY":wn(a);break;default:a.textContent=""}}
function wn(a){var b=a.firstChild;b&&10===b.nodeType&&(b=b.nextSibling);for(;b;){var c=b;b=b.nextSibling;switch(c.nodeName){case "HTML":case "HEAD":case "BODY":wn(c);Cb(c);continue;case "STYLE":continue;case "LINK":if("stylesheet"===c.rel.toLowerCase())continue}a.removeChild(c)}}
function sd(a,b,c,d){for(;1===a.nodeType;){var e=c;if(a.nodeName.toLowerCase()!==b.toLowerCase()){if(!d)break}else{if(!d)return a;if(!a[Bb])switch(b){case "meta":if(!a.hasAttribute("itemprop"))break;return a;case "link":var f=a.getAttribute("rel");if("stylesheet"===f&&a.hasAttribute("data-precedence"))break;else if(f!==e.rel||a.getAttribute("href")!==(null==e.href?null:e.href)||a.getAttribute("crossorigin")!==(null==e.crossOrigin?null:e.crossOrigin)||a.getAttribute("title")!==(null==e.title?null:
e.title))break;return a;case "style":if(a.hasAttribute("data-precedence"))break;return a;case "script":if((f=a.getAttribute("src"))&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;else if(f!==(null==e.src?null:e.src)||a.getAttribute("type")!==(null==e.type?null:e.type)||a.getAttribute("crossorigin")!==(null==e.crossOrigin?null:e.crossOrigin))break;return a;default:return a}}a=td(a.nextSibling);if(null===a)break}return null}
function vd(a,b,c){if(""===b)return null;for(;3!==a.nodeType;){if(!c)return null;a=td(a.nextSibling);if(null===a)return null}return a}function td(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}function Eb(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}
function Zh(a,b,c){b=$h(c);switch(a){case "html":a=b.documentElement;if(!a)throw Error(r(452));return a;case "head":a=b.head;if(!a)throw Error(r(453));return a;case "body":a=b.body;if(!a)throw Error(r(454));return a;default:throw Error(r(451));}}var xn=new Map,yn=new Set;function ij(a){return"function"===typeof a.getRootNode?a.getRootNode():a.ownerDocument}var Dn={prefetchDNS:zn,preconnect:An,preload:Bn,preinit:Cn};
function En(a,b,c){var d=document;if("string"===typeof c&&c){var e=jc(c);e='link[rel="'+a+'"][href="'+e+'"]';"string"===typeof b&&(e+='[crossorigin="'+b+'"]');yn.has(e)||(yn.add(e),a={rel:a,crossOrigin:b,href:c},null===d.querySelector(e)&&(b=d.createElement("link"),ai(b,"link",a),Jb(b),d.head.appendChild(b)))}}function zn(a){En("dns-prefetch",null,a)}function An(a,b){En("preconnect",null==b||"string"!==typeof b.crossOrigin?null:"use-credentials"===b.crossOrigin?"use-credentials":"",a)}
function Bn(a,b){var c=document;if("string"===typeof a&&a&&"object"===typeof b&&null!==b&&c){var d=b.as,e=jc(a),f=e='link[rel="preload"][as="'+d+'"][href="'+e+'"]';switch(d){case "style":f=Fn(a);break;case "script":f=Gn(a)}xn.has(f)||(a={href:a,rel:"preload",as:d,crossOrigin:"font"===d?"":b.crossOrigin,integrity:b.integrity,type:b.type},xn.set(f,a),null!==c.querySelector(e)||"style"===d&&c.querySelector(Hn(f))||"script"===d&&c.querySelector("script[async]"+f)||(d=c.createElement("link"),ai(d,"link",
a),Jb(d),c.head.appendChild(d)))}}
function Cn(a,b){var c=document;if("string"===typeof a&&a&&"object"===typeof b&&null!==b)switch(b.as){case "style":var d=Ib(c).hoistableStyles,e=Fn(a),f=b.precedence||"default",g=d.get(e);if(g)break;var h={loading:0,preload:null};if(g=c.querySelector(Hn(e)))h.loading=1;else{a={rel:"stylesheet",href:a,"data-precedence":f,crossOrigin:b.crossOrigin};(b=xn.get(e))&&In(a,b);var l=g=c.createElement("link");Jb(l);ai(l,"link",a);l._p=new Promise(function(p,q){l.onload=p;l.onerror=q});l.addEventListener("load",
function(){h.loading|=1});l.addEventListener("error",function(){h.loading|=2});h.loading|=4;Jn(g,f,c)}g={type:"stylesheet",instance:g,count:1,state:h};d.set(e,g);break;case "script":d=Ib(c).hoistableScripts,e=Gn(a),f=d.get(e),f||(f=c.querySelector("script[async]"+e),f||(a={src:a,async:!0,crossOrigin:b.crossOrigin,integrity:b.integrity,nonce:b.nonce},(b=xn.get(e))&&Kn(a,b),f=c.createElement("script"),Jb(f),ai(f,"link",a),c.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},d.set(e,
f))}}
function wk(a,b,c){b=(b=Fa.current)?ij(b):null;if(!b)throw Error(r(446));switch(a){case "meta":case "title":return null;case "style":return"string"===typeof c.precedence&&"string"===typeof c.href?(c=Fn(c.href),b=Ib(b).hoistableStyles,a=b.get(c),a||(a={type:"style",instance:null,count:0,state:null},b.set(c,a)),a):{type:"void",instance:null,count:0,state:null};case "link":if("stylesheet"===c.rel&&"string"===typeof c.href&&"string"===typeof c.precedence){a=Fn(c.href);var d=Ib(b).hoistableStyles,e=d.get(a);
e||(b=b.ownerDocument||b,e={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(a,e),xn.has(a)||Ln(b,a,{rel:"preload",as:"style",href:c.href,crossOrigin:c.crossOrigin,integrity:c.integrity,media:c.media,hrefLang:c.hrefLang,referrerPolicy:c.referrerPolicy},e.state));return e}return null;case "script":return"string"===typeof c.src&&!0===c.async?(c=Gn(c.src),b=Ib(b).hoistableScripts,a=b.get(c),a||(a={type:"script",instance:null,count:0,state:null},b.set(c,a)),a):{type:"void",
instance:null,count:0,state:null};default:throw Error(r(444,a));}}function Fn(a){return'href="'+jc(a)+'"'}function Hn(a){return'link[rel="stylesheet"]['+a+"]"}function Mn(a){return C({},a,{"data-precedence":a.precedence,precedence:null})}
function Ln(a,b,c,d){xn.set(b,c);a.querySelector(Hn(b))||(a.querySelector('link[rel="preload"][as="style"]['+b+"]")?d.loading=1:(b=a.createElement("link"),d.preload=b,b.addEventListener("load",function(){return d.loading|=1}),b.addEventListener("error",function(){return d.loading|=2}),ai(b,"link",c),Jb(b),a.head.appendChild(b)))}function Gn(a){return'[src="'+jc(a)+'"]'}
function fj(a,b,c){b.count++;if(null===b.instance)switch(b.type){case "style":var d=a.querySelector('style[data-href~="'+jc(c.href)+'"]');if(d)return b.instance=d,Jb(d),d;var e=C({},c,{"data-href":c.href,"data-precedence":c.precedence,href:null,precedence:null});d=(a.ownerDocument||a).createElement("style");Jb(d);ai(d,"style",e);Jn(d,c.precedence,a);return b.instance=d;case "stylesheet":e=Fn(c.href);var f=a.querySelector(Hn(e));if(f)return b.instance=f,Jb(f),f;d=Mn(c);(e=xn.get(e))&&In(d,e);f=(a.ownerDocument||
a).createElement("link");Jb(f);var g=f;g._p=new Promise(function(h,l){g.onload=h;g.onerror=l});ai(f,"link",d);b.state.loading|=4;Jn(f,c.precedence,a);return b.instance=f;case "script":f=Gn(c.src);if(e=a.querySelector("script[async]"+f))return b.instance=e,Jb(e),e;d=c;if(e=xn.get(f))d=C({},c),Kn(d,e);a=a.ownerDocument||a;e=a.createElement("script");Jb(e);ai(e,"link",d);a.head.appendChild(e);return b.instance=e;case "void":return null;default:throw Error(r(443,b.type));}else"stylesheet"===b.type&&0===
(b.state.loading&4)&&(d=b.instance,b.state.loading|=4,Jn(d,c.precedence,a));return b.instance}function Jn(a,b,c){for(var d=c.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),e=d.length?d[d.length-1]:null,f=e,g=0;g<d.length;g++){var h=d[g];if(h.dataset.precedence===b)f=h;else if(f!==e)break}f?f.parentNode.insertBefore(a,f.nextSibling):(b=9===c.nodeType?c.head:c,b.insertBefore(a,b.firstChild))}
function In(a,b){null==a.crossOrigin&&(a.crossOrigin=b.crossOrigin);null==a.referrerPolicy&&(a.referrerPolicy=b.referrerPolicy);null==a.title&&(a.title=b.title)}function Kn(a,b){null==a.crossOrigin&&(a.crossOrigin=b.crossOrigin);null==a.referrerPolicy&&(a.referrerPolicy=b.referrerPolicy);null==a.integrity&&(a.referrerPolicy=b.integrity)}var hj=null;
function dj(a,b,c){if(null===hj){var d=new Map;var e=hj=new Map;e.set(c,d)}else e=hj,d=e.get(c),d||(d=new Map,e.set(c,d));if(d.has(a))return d;d.set(a,null);c=c.getElementsByTagName(a);for(e=0;e<c.length;e++){var f=c[e];if(!(f[Bb]||f[tb]||"link"===a&&"stylesheet"===f.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==f.namespaceURI){var g=f.getAttribute(b)||"";g=a+g;var h=d.get(g);h?h.push(f):d.set(g,[f])}}return d}
function ej(a,b,c){a=a.ownerDocument||a;a.head.insertBefore(c,"title"===b?a.querySelector("head > title"):null)}
function yk(a,b,c){if(1===c||null!=b.itemProp)return!1;switch(a){case "meta":case "title":return!0;case "style":if("string"!==typeof b.precedence||"string"!==typeof b.href||""===b.href)break;return!0;case "link":if("string"!==typeof b.rel||"string"!==typeof b.href||""===b.href||b.onLoad||b.onError)break;switch(b.rel){case "stylesheet":return a=b.disabled,"string"===typeof b.precedence&&null==a;default:return!0}case "script":if(!0===b.async&&!b.onLoad&&!b.onError&&"string"===typeof b.src&&b.src)return!0}return!1}
var Wj=null;function Xj(){}
function vj(a,b,c){if(null===Wj)throw Error(r(475));var d=Wj;if("stylesheet"===b.type&&("string"!==typeof c.media||!1!==matchMedia(c.media).matches)){if(null===b.instance){var e=Fn(c.href),f=a.querySelector(Hn(e));if(f){a=f._p;null!==a&&"object"===typeof a&&"function"===typeof a.then&&(d.count++,d=Nn.bind(d),a.then(d,d));b.state.loading|=4;b.instance=f;Jb(f);return}f=a.ownerDocument||a;c=Mn(c);(e=xn.get(e))&&In(c,e);f=f.createElement("link");Jb(f);var g=f;g._p=new Promise(function(h,l){g.onload=h;
g.onerror=l});ai(f,"link",c);b.instance=f}null===d.stylesheets&&(d.stylesheets=new Map);d.stylesheets.set(b,a);(a=b.state.preload)&&0===(b.state.loading&3)&&(d.count++,b=Nn.bind(d),a.addEventListener("load",b),a.addEventListener("error",b))}}
function Yj(){if(null===Wj)throw Error(r(475));var a=Wj;a.stylesheets&&0===a.count&&On(a,a.stylesheets);return 0<a.count?function(b){var c=setTimeout(function(){a.stylesheets&&On(a,a.stylesheets);if(a.unsuspend){var d=a.unsuspend;a.unsuspend=null;d()}},6E4);a.unsuspend=b;return function(){a.unsuspend=null;clearTimeout(c)}}:null}function Nn(){this.count--;if(0===this.count)if(this.stylesheets)On(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null;a()}}var Pn=null;
function On(a,b){a.stylesheets=null;null!==a.unsuspend&&(a.count++,Pn=new Map,b.forEach(Qn,a),Pn=null,Nn.call(a))}
function Qn(a,b){if(!(b.state.loading&4)){var c=Pn.get(a);if(c)var d=c.get("last");else{c=new Map;Pn.set(a,c);for(var e=a.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<e.length;f++){var g=e[f];if("link"===g.nodeName||"not all"!==g.getAttribute("media"))c.set("p"+g.dataset.precedence,g),d=g}d&&c.set("last",d)}e=b.instance;g=e.getAttribute("data-precedence");f=c.get("p"+g)||d;f===d&&c.set("last",e);c.set(g,e);this.count++;d=Nn.bind(this);e.addEventListener("load",d);e.addEventListener("error",
d);f?f.parentNode.insertBefore(e,f.nextSibling):(a=9===a.nodeType?a.head:a,a.insertBefore(e,a.firstChild));b.state.loading|=4}}var Rn=da.Dispatcher;"undefined"!==typeof document&&(Rn.current=Dn);var Sn="function"===typeof reportError?reportError:function(a){console.error(a)};function Tn(a){this._internalRoot=a}Un.prototype.render=Tn.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(r(409));Ek(a,b,null,null)};
Un.prototype.unmount=Tn.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;ak(function(){Ek(null,a,null,null)});b[vb]=null}};function Un(a){this._internalRoot=a}Un.prototype.unstable_scheduleHydration=function(a){if(a){var b=H;a={blockedOn:null,target:a,priority:b};for(var c=0;c<Hl.length&&0!==b&&b<Hl[c].priority;c++);Hl.splice(c,0,a);0===c&&Ml(a)}};function Vn(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}
function Wn(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function Xn(){}
function Yn(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var p=Fk(g);f.call(p)}}var g=Dk(b,d,a,0,null,!1,!1,"",Xn);a._reactRootContainer=g;a[vb]=g.current;bi(8===a.nodeType?a.parentNode:a);ak();return g}Di(a);if("function"===typeof d){var h=d;d=function(){var p=Fk(l);h.call(p)}}var l=Ak(a,0,!1,null,null,!1,!1,"",Xn);a._reactRootContainer=l;a[vb]=l.current;bi(8===a.nodeType?a.parentNode:a);ak(function(){Ek(b,l,c,d)});return l}
function Zn(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var l=Fk(g);h.call(l)}}Ek(b,g,a,e)}else g=Yn(c,b,a,e,d);return Fk(g)}var $n=da.Dispatcher;da.Events=[Fb,Gb,Hb,Fc,Gc,Zj];var ao={findFiberByHostInstance:Db,bundleType:0,version:"18.3.0-canary-aef7ce554-20230503",rendererPackageName:"react-dom"};
var bo={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ea.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Lc(a);return null===a?null:a.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||
Kk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.0-canary-aef7ce554-20230503"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{Xa=co.inject(bo),Ya=co}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=da;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Vn(b))throw Error(r(200));return Bk(a,b,null,c)};exports.createRoot=function(a,b){if(!Vn(a))throw Error(r(299));var c=!1,d="",e=Sn;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=Ak(a,1,!1,null,null,c,!1,d,e);a[vb]=b.current;Rn.current=Dn;bi(8===a.nodeType?a.parentNode:a);return new Tn(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(r(188));a=Object.keys(a).join(",");throw Error(r(268,a));}a=Lc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return ak(a)};exports.hydrate=function(a,b,c){if(!Wn(b))throw Error(r(200));return Zn(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!Vn(a))throw Error(r(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=Sn;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=Dk(b,null,a,1,null!=c?c:null,e,!1,f,g);a[vb]=b.current;Rn.current=Dn;bi(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=
[c,e]:b.mutableSourceEagerHydrationData.push(c,e);return new Un(b)};exports.preconnect=function(a,b){var c=$n.current;c&&c.preconnect(a,b)};exports.prefetchDNS=function(a){var b=$n.current;b&&b.prefetchDNS(a)};exports.preinit=function(a,b){var c=$n.current;c&&c.preinit(a,b)};exports.preload=function(a,b){var c=$n.current;c&&c.preload(a,b)};exports.render=function(a,b,c){if(!Wn(b))throw Error(r(200));return Zn(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!Wn(a))throw Error(r(40));return a._reactRootContainer?(ak(function(){Zn(null,null,a,!1,function(){a._reactRootContainer=null;a[vb]=null})}),!0):!1};exports.unstable_batchedUpdates=Zj;exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!Wn(c))throw Error(r(200));if(null==a||void 0===a._reactInternals)throw Error(r(38));return Zn(a,b,c,!1,d)};exports.version="18.3.0-canary-aef7ce554-20230503";


/***/ }),

/***/ 7618:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(8369);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 8369:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(7544);
} else {}


/***/ }),

/***/ 8634:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.server_context"),w=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),A=Symbol.for("react.default_value"),B=Symbol.iterator;
function C(a){if(null===a||"object"!==typeof a)return null;a=B&&a[B]||a["@@iterator"];return"function"===typeof a?a:null}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,F={};function G(a,b,c){this.props=a;this.context=b;this.refs=F;this.updater=c||D}G.prototype.isReactComponent={};
G.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};G.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function H(){}H.prototype=G.prototype;function I(a,b,c){this.props=a;this.context=b;this.refs=F;this.updater=c||D}var J=I.prototype=new H;
J.constructor=I;E(J,G.prototype);J.isPureReactComponent=!0;var K=Array.isArray,L=Object.prototype.hasOwnProperty,M={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};
function O(a,b,c){var d,e={},f=null,g=null;if(null!=b)for(d in void 0!==b.ref&&(g=b.ref),void 0!==b.key&&(f=""+b.key),b)L.call(b,d)&&!N.hasOwnProperty(d)&&(e[d]=b[d]);var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){for(var k=Array(h),m=0;m<h;m++)k[m]=arguments[m+2];e.children=k}if(a&&a.defaultProps)for(d in h=a.defaultProps,h)void 0===e[d]&&(e[d]=h[d]);return{$$typeof:l,type:a,key:f,ref:g,props:e,_owner:M.current}}
function aa(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function P(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(c){return b[c]})}var Q=/\/+/g;function R(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function S(a,b,c,d,e){var f=typeof a;if("undefined"===f||"boolean"===f)a=null;var g=!1;if(null===a)g=!0;else switch(f){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case l:case n:g=!0}}if(g)return g=a,e=e(g),a=""===d?"."+R(g,0):d,K(e)?(c="",null!=a&&(c=a.replace(Q,"$&/")+"/"),S(e,b,c,"",function(m){return m})):null!=e&&(P(e)&&(e=aa(e,c+(!e.key||g&&g.key===e.key?"":(""+e.key).replace(Q,"$&/")+"/")+a)),b.push(e)),1;g=0;d=""===d?".":d+":";if(K(a))for(var h=0;h<a.length;h++){f=
a[h];var k=d+R(f,h);g+=S(f,b,c,k,e)}else if(k=C(a),"function"===typeof k)for(a=k.call(a),h=0;!(f=a.next()).done;)f=f.value,k=d+R(f,h++),g+=S(f,b,c,k,e);else if("object"===f)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return g}
function T(a,b,c){if(null==a)return a;var d=[],e=0;S(a,d,"","",function(f){return b.call(c,f,e++)});return d}function ba(a){if(-1===a._status){var b=a._result;b=b();b.then(function(c){if(0===a._status||-1===a._status)a._status=1,a._result=c},function(c){if(0===a._status||-1===a._status)a._status=2,a._result=c});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}var U={current:null};function ca(){return new WeakMap}
function V(){return{s:0,v:void 0,o:null,p:null}}var W={current:null},X={transition:null},Y={ReactCurrentDispatcher:W,ReactCurrentCache:U,ReactCurrentBatchConfig:X,ReactCurrentOwner:M,ContextRegistry:{}},Z=Y.ContextRegistry;
exports.Children={map:T,forEach:function(a,b,c){T(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;T(a,function(){b++});return b},toArray:function(a){return T(a,function(b){return b})||[]},only:function(a){if(!P(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=G;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=I;exports.StrictMode=q;exports.Suspense=x;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y;
exports.cache=function(a){return function(){var b=U.current;if(!b)return a.apply(null,arguments);var c=b.getCacheForType(ca);b=c.get(a);void 0===b&&(b=V(),c.set(a,b));c=0;for(var d=arguments.length;c<d;c++){var e=arguments[c];if("function"===typeof e||"object"===typeof e&&null!==e){var f=b.o;null===f&&(b.o=f=new WeakMap);b=f.get(e);void 0===b&&(b=V(),f.set(e,b))}else f=b.p,null===f&&(b.p=f=new Map),b=f.get(e),void 0===b&&(b=V(),f.set(e,b))}if(1===b.s)return b.v;if(2===b.s)throw b.v;try{var g=a.apply(null,
arguments);c=b;c.s=1;return c.v=g}catch(h){throw g=b,g.s=2,g.v=h,h;}}};
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=E({},a.props),e=a.key,f=a.ref,g=a._owner;if(null!=b){void 0!==b.ref&&(f=b.ref,g=M.current);void 0!==b.key&&(e=""+b.key);if(a.type&&a.type.defaultProps)var h=a.type.defaultProps;for(k in b)L.call(b,k)&&!N.hasOwnProperty(k)&&(d[k]=void 0===b[k]&&void 0!==h?h[k]:b[k])}var k=arguments.length-2;if(1===k)d.children=c;else if(1<k){h=Array(k);
for(var m=0;m<k;m++)h[m]=arguments[m+2];d.children=h}return{$$typeof:l,type:a.type,key:e,ref:f,props:d,_owner:g}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=O;exports.createFactory=function(a){var b=O.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.createServerContext=function(a,b){var c=!0;if(!Z[a]){c=!1;var d={$$typeof:v,_currentValue:b,_currentValue2:b,_defaultValue:b,_threadCount:0,Provider:null,Consumer:null,_globalName:a};d.Provider={$$typeof:t,_context:d};Z[a]=d}d=Z[a];if(d._defaultValue===A)d._defaultValue=b,d._currentValue===A&&(d._currentValue=b),d._currentValue2===A&&(d._currentValue2=b);else if(c)throw Error("ServerContext: "+a+" already defined");return d};exports.forwardRef=function(a){return{$$typeof:w,render:a}};
exports.isValidElement=P;exports.lazy=function(a){return{$$typeof:z,_payload:{_status:-1,_result:a},_init:ba}};exports.memo=function(a,b){return{$$typeof:y,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=X.transition;X.transition={};try{a()}finally{X.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};exports.unstable_useCacheRefresh=function(){return W.current.useCacheRefresh()};exports.use=function(a){return W.current.use(a)};
exports.useCallback=function(a,b){return W.current.useCallback(a,b)};exports.useContext=function(a){return W.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return W.current.useDeferredValue(a)};exports.useEffect=function(a,b){return W.current.useEffect(a,b)};exports.useId=function(){return W.current.useId()};exports.useImperativeHandle=function(a,b,c){return W.current.useImperativeHandle(a,b,c)};
exports.useInsertionEffect=function(a,b){return W.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return W.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return W.current.useMemo(a,b)};exports.useReducer=function(a,b,c){return W.current.useReducer(a,b,c)};exports.useRef=function(a){return W.current.useRef(a)};exports.useState=function(a){return W.current.useState(a)};exports.useSyncExternalStore=function(a,b,c){return W.current.useSyncExternalStore(a,b,c)};
exports.useTransition=function(){return W.current.useTransition()};exports.version="18.3.0-canary-aef7ce554-20230503";


/***/ }),

/***/ 5784:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(8634);
} else {}


/***/ }),

/***/ 4640:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,q=e>>>1;d<q;){var m=2*(d+1)-1,D=a[m],n=m+1,x=a[n];if(0>g(D,c))n<e&&0>g(x,D)?(a[d]=x,a[n]=c,d=n):(a[d]=D,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}exports.unstable_now=void 0;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,r=p.now();exports.unstable_now=function(){return p.now()-r}}
var t=[],u=[],v=1,w=null,y=3,z=!1,A=!1,B=!1,C="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending?navigator.scheduling.isInputPending.bind(navigator.scheduling):null;
function G(a){for(var b=h(u);null!==b;){if(null===b.callback)k(u);else if(b.startTime<=a)k(u),b.sortIndex=b.expirationTime,f(t,b);else break;b=h(u)}}function H(a){B=!1;G(a);if(!A)if(null!==h(t))A=!0,I(J);else{var b=h(u);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{a:{G(b);for(w=h(t);null!==w&&(!(w.expirationTime>b)||a&&!M());){var d=w.callback;if("function"===typeof d){w.callback=null;y=w.priorityLevel;var e=d(w.expirationTime<=b);b=exports.unstable_now();if("function"===typeof e){w.callback=e;G(b);var q=!0;break a}else w===h(t)&&k(t),G(b)}else k(t);w=h(t)}if(null!==w)q=!0;else{var m=h(u);null!==m&&K(H,m.startTime-b);q=!1}}return q}finally{w=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){C(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=C(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(t)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:v++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(u,a),null===h(t)&&a===h(u)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(t,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 9954:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(4640);
} else {}


/***/ }),

/***/ 8018:
/***/ (function(module) {

var __dirname = "/";
(function(){"use strict";var n={};!function(){n.d=function(y,T){for(var C in T){if(n.o(T,C)&&!n.o(y,C)){Object.defineProperty(y,C,{enumerable:true,get:T[C]})}}}}();!function(){n.o=function(n,y){return Object.prototype.hasOwnProperty.call(n,y)}}();!function(){n.r=function(n){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(n,"__esModule",{value:true})}}();if(typeof n!=="undefined")n.ab=__dirname+"/";var y={};n.r(y);n.d(y,{getCLS:function(){return E},getFCP:function(){return g},getFID:function(){return F},getINP:function(){return O},getLCP:function(){return _},getTTFB:function(){return G},onCLS:function(){return E},onFCP:function(){return g},onFID:function(){return F},onINP:function(){return O},onLCP:function(){return _},onTTFB:function(){return G}});var T,C,w,P,I,k=-1,o=function(n){addEventListener("pageshow",(function(y){y.persisted&&(k=y.timeStamp,n(y))}),!0)},c=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},u=function(){var n=c();return n&&n.activationStart||0},f=function(n,y){var T=c(),C="navigate";return k>=0?C="back-forward-cache":T&&(C=document.prerendering||u()>0?"prerender":T.type.replace(/_/g,"-")),{name:n,value:void 0===y?-1:y,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:C}},s=function(n,y,T){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var C=new PerformanceObserver((function(n){y(n.getEntries())}));return C.observe(Object.assign({type:n,buffered:!0},T||{})),C}}catch(n){}},d=function(n,y){var T=function t(T){"pagehide"!==T.type&&"hidden"!==document.visibilityState||(n(T),y&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",T,!0),addEventListener("pagehide",T,!0)},l=function(n,y,T,C){var w,P;return function(I){y.value>=0&&(I||C)&&((P=y.value-(w||0))||void 0===w)&&(w=y.value,y.delta=P,y.rating=function(n,y){return n>y[1]?"poor":n>y[0]?"needs-improvement":"good"}(y.value,T),n(y))}},N=-1,v=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},m=function(){d((function(n){var y=n.timeStamp;N=y}),!0)},h=function(){return N<0&&(N=v(),m(),o((function(){setTimeout((function(){N=v(),m()}),0)}))),{get firstHiddenTime(){return N}}},g=function(n,y){y=y||{};var T,C=[1800,3e3],w=h(),P=f("FCP"),c=function(n){n.forEach((function(n){"first-contentful-paint"===n.name&&(k&&k.disconnect(),n.startTime<w.firstHiddenTime&&(P.value=n.startTime-u(),P.entries.push(n),T(!0)))}))},I=window.performance&&window.performance.getEntriesByName&&window.performance.getEntriesByName("first-contentful-paint")[0],k=I?null:s("paint",c);(I||k)&&(T=l(n,P,C,y.reportAllChanges),I&&c([I]),o((function(w){P=f("FCP"),T=l(n,P,C,y.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){P.value=performance.now()-w.timeStamp,T(!0)}))}))})))},j=!1,q=-1,E=function(n,y){y=y||{};var T=[.1,.25];j||(g((function(n){q=n.value})),j=!0);var C,i=function(y){q>-1&&n(y)},w=f("CLS",0),P=0,I=[],p=function(n){n.forEach((function(n){if(!n.hadRecentInput){var y=I[0],T=I[I.length-1];P&&n.startTime-T.startTime<1e3&&n.startTime-y.startTime<5e3?(P+=n.value,I.push(n)):(P=n.value,I=[n]),P>w.value&&(w.value=P,w.entries=I,C())}}))},k=s("layout-shift",p);k&&(C=l(i,w,T,y.reportAllChanges),d((function(){p(k.takeRecords()),C(!0)})),o((function(){P=0,q=-1,w=f("CLS",0),C=l(i,w,T,y.reportAllChanges)})))},x={passive:!0,capture:!0},z=new Date,L=function(n,y){T||(T=y,C=n,w=new Date,A(removeEventListener),S())},S=function(){if(C>=0&&C<w-z){var n={entryType:"first-input",name:T.type,target:T.target,cancelable:T.cancelable,startTime:T.timeStamp,processingStart:T.timeStamp+C};P.forEach((function(y){y(n)})),P=[]}},b=function(n){if(n.cancelable){var y=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;"pointerdown"==n.type?function(n,y){var t=function(){L(n,y),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,x),removeEventListener("pointercancel",r,x)};addEventListener("pointerup",t,x),addEventListener("pointercancel",r,x)}(y,n):L(y,n)}},A=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach((function(y){return n(y,b,x)}))},F=function(n,y){y=y||{};var w,I=[100,300],k=h(),N=f("FID"),v=function(n){n.startTime<k.firstHiddenTime&&(N.value=n.processingStart-n.startTime,N.entries.push(n),w(!0))},m=function(n){n.forEach(v)},j=s("first-input",m);w=l(n,N,I,y.reportAllChanges),j&&d((function(){m(j.takeRecords()),j.disconnect()}),!0),j&&o((function(){var k;N=f("FID"),w=l(n,N,I,y.reportAllChanges),P=[],C=-1,T=null,A(addEventListener),k=v,P.push(k),S()}))},J=0,K=1/0,Q=0,M=function(n){n.forEach((function(n){n.interactionId&&(K=Math.min(K,n.interactionId),Q=Math.max(Q,n.interactionId),J=Q?(Q-K)/7+1:0)}))},B=function(){return I?J:performance.interactionCount||0},D=function(){"interactionCount"in performance||I||(I=s("event",M,{type:"event",buffered:!0,durationThreshold:0}))},U=0,R=function(){return B()-U},V=[],W={},H=function(n){var y=V[V.length-1],T=W[n.interactionId];if(T||V.length<10||n.duration>y.latency){if(T)T.entries.push(n),T.latency=Math.max(T.latency,n.duration);else{var C={id:n.interactionId,latency:n.duration,entries:[n]};W[C.id]=C,V.push(C)}V.sort((function(n,y){return y.latency-n.latency})),V.splice(10).forEach((function(n){delete W[n.id]}))}},O=function(n,y){y=y||{};var T=[200,500];D();var C,w=f("INP"),a=function(n){n.forEach((function(n){(n.interactionId&&H(n),"first-input"===n.entryType)&&(!V.some((function(y){return y.entries.some((function(y){return n.duration===y.duration&&n.startTime===y.startTime}))}))&&H(n))}));var y,T=(y=Math.min(V.length-1,Math.floor(R()/50)),V[y]);T&&T.latency!==w.value&&(w.value=T.latency,w.entries=T.entries,C())},P=s("event",a,{durationThreshold:y.durationThreshold||40});C=l(n,w,T,y.reportAllChanges),P&&(P.observe({type:"first-input",buffered:!0}),d((function(){a(P.takeRecords()),w.value<0&&R()>0&&(w.value=0,w.entries=[]),C(!0)})),o((function(){V=[],U=B(),w=f("INP"),C=l(n,w,T,y.reportAllChanges)})))},X={},_=function(n,y){y=y||{};var T,C=[2500,4e3],w=h(),P=f("LCP"),c=function(n){var y=n[n.length-1];if(y){var C=y.startTime-u();C<w.firstHiddenTime&&(P.value=C,P.entries=[y],T())}},I=s("largest-contentful-paint",c);if(I){T=l(n,P,C,y.reportAllChanges);var v=function(){X[P.id]||(c(I.takeRecords()),I.disconnect(),X[P.id]=!0,T(!0))};["keydown","click"].forEach((function(n){addEventListener(n,v,{once:!0,capture:!0})})),d(v,!0),o((function(w){P=f("LCP"),T=l(n,P,C,y.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){P.value=performance.now()-w.timeStamp,X[P.id]=!0,T(!0)}))}))}))}},Y=function e(n){document.prerendering?addEventListener("prerenderingchange",(function(){return e(n)}),!0):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)},G=function(n,y){y=y||{};var T=[800,1800],C=f("TTFB"),w=l(n,C,T,y.reportAllChanges);Y((function(){var P=c();if(P){if(C.value=Math.max(P.responseStart-u(),0),C.value<0||C.value>performance.now())return;C.entries=[P],w(!0),o((function(){C=f("TTFB",0),(w=l(n,C,T,y.reportAllChanges))(!0)}))}}))};module.exports=y})();

/***/ }),

/***/ 9423:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isAPIRoute", ({
    enumerable: true,
    get: function() {
        return isAPIRoute;
    }
}));
function isAPIRoute(value) {
    return value === "/api" || Boolean(value == null ? void 0 : value.startsWith("/api/"));
}

//# sourceMappingURL=is-api-route.js.map

/***/ }),

/***/ 676:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return isError;
    },
    getProperError: function() {
        return getProperError;
    }
});
const _isplainobject = __webpack_require__(5306);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isplainobject.isPlainObject)(err) ? JSON.stringify(err) : err + "");
}

//# sourceMappingURL=is-error.js.map

/***/ }),

/***/ 2431:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 8754:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ _interop_require_default; },
/* harmony export */   "_interop_require_default": function() { return /* binding */ _interop_require_default; }
/* harmony export */ });
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}



/***/ }),

/***/ 1757:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ _interop_require_wildcard; },
/* harmony export */   "_interop_require_wildcard": function() { return /* binding */ _interop_require_wildcard; }
/* harmony export */ });
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/_next/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(2768);
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	_N_E = __webpack_exports__;
/******/ 	
/******/ })()
;