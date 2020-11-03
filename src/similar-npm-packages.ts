import { Categories, Weight } from "./internals/types";

export const categories: Categories = {
  "browser-http-request": {
    name: "HTTP client libraries for Browser",
    tags: [
      { tag: "http", weight: Weight.NORMAL },
      { tag: "get", weight: Weight.NORMAL },
      { tag: "post", weight: Weight.NORMAL },
      { tag: "ajax", weight: Weight.HIGH },
      { tag: "url", weight: Weight.MIN },
      { tag: "request", weight: Weight.HIGH },
      { tag: "agent", weight: Weight.LOW },
      { tag: "xhr", weight: Weight.NORMAL },
      { tag: "browser", weight: Weight.NORMAL },
    ],
    similar: ["axios", "ky", "superagent", "whatwg-fetch", "unfetch"],
  },

  "classname-strings": {
    name: "Classname string construction",
    tags: [
      { tag: "class", weight: Weight.HIGH },
      { tag: "classnames", weight: Weight.HIGH },
      { tag: "string", weight: Weight.LOW },
      { tag: "construct", weight: Weight.LOW },
      { tag: "conditional", weight: Weight.LOW },
    ],
    similar: ["clsx", "classnames", "classcat", "merge-class-names"],
  },

  clipboard: {
    name: "Clipboard Utilities",
    tags: [
      { tag: "clipboard", weight: Weight.MAX },
      { tag: "copy", weight: Weight.LOW },
      { tag: "cut", weight: Weight.LOW },
    ],
    similar: [
      "clipboard",
      "clipboardy",
      "clipboard-copy",
      "copy-text-to-clipboard",
      "clipboard-polyfill",
    ],
  },

  "color-manipulation": {
    name: "Color parsing and manipulation",
    tags: [{ tag: "color convert parse manipulate", weight: Weight.NORMAL }],
    similar: ["chroma-js", "color", "tinycolor2", "colors.js", "color2k"],
  },

  cookie: {
    name: "Cookie Manipulation",
    tags: [
      { tag: "cookie", weight: Weight.MAX },
      { tag: "manipulate", weight: Weight.NORMAL },
      { tag: "http", weight: Weight.LOW },
      { tag: "client", weight: Weight.LOW },
      { tag: "parse", weight: Weight.LOW },
      { tag: "parser", weight: Weight.LOW },
      { tag: "jar", weight: Weight.NORMAL },
      { tag: "browser", weight: Weight.MIN },
    ],
    similar: ["cookie", "tough-cookie", "js-cookie", "tiny-cookie"],
  },

  "css-in-js": {
    name: "CSS in JS libraries",
    tags: [
      { tag: "css js", weight: Weight.NORMAL },
      { tag: "styles", weight: Weight.NORMAL },
      { tag: "inline", weight: Weight.NORMAL },
      { tag: "in", weight: Weight.LOW },
    ],
    similar: ["styled-components", "jss", "emotion", "linaria", "goober"],
  },

  "date-nlp": {
    name: "Natural language date-time utilities",
    tags: [
      { tag: "date", weight: Weight.HIGH },
      { tag: "time", weight: Weight.HIGH },
      { tag: "parse", weight: Weight.LOW },
      { tag: "parser", weight: Weight.LOW },
      { tag: "nlp", weight: Weight.HIGH },
      { tag: "natural language", weight: Weight.HIGH },
      { tag: "format", weight: Weight.LOW },
      { tag: "human", weight: Weight.LOW },
    ],
    similar: ["chrono-node", "its-a-date", "parse-messy-time"],
  },

  "deep-equality": {
    name: "Deep Equality Check",
    tags: [
      { tag: "deep equal", weight: Weight.NORMAL },
      { tag: "object", weight: Weight.LOW },
      { tag: "compare", weight: Weight.NORMAL },
      { tag: "isequal", weight: Weight.HIGH },
    ],
    similar: ["fast-deep-equal", "deep-eql", "deep-equal", "lodash.isequal"],
  },

  "drag-and-drop": {
    name: "Drag & Drop Libraries",
    tags: [
      { tag: "drag drop", weight: Weight.NORMAL },
      { tag: "sort", weight: Weight.LOW },
      { tag: "order", weight: Weight.LOW },
    ],
    similar: [
      "@shopify/draggable",
      "dragula",
      "muuri",
      "sortablejs",
      "draggabilly",
      "interactjs",
    ],
  },

  "excel-parsers": {
    name: "Excel File Readers, Manipulators & Writers",
    tags: [
      { tag: "excel", weight: Weight.MAX },
      { tag: "read", weight: Weight.MIN },
      { tag: "write", weight: Weight.MIN },
      { tag: "manipulate", weight: Weight.MIN },
      { tag: "parse", weight: Weight.MIN },
    ],
    similar: ["xlsx", "exceljs", "node-xlsx", "excel4node"],
  },

  "fetch-polyfill": {
    name: "Fetch polyfills",
    tags: [
      { tag: "fetch", weight: Weight.HIGH },
      { tag: "polyfill", weight: Weight.NORMAL },
      { tag: "xhr", weight: Weight.NORMAL },
      { tag: "http", weight: Weight.LOW },
      { tag: "request", weight: Weight.LOW },
    ],
    similar: ["whatwg-fetch", "node-fetch", "unfetch", "make-fetch-happen"],
  },

  "full-text-search": {
    name: "Text search",
    tags: [
      { tag: "search", weight: Weight.NORMAL },
      { tag: "solr", weight: Weight.HIGH },
      { tag: "fuzzy", weight: Weight.NORMAL },
      { tag: "text", weight: Weight.NORMAL },
    ],
    similar: ["flexsearch", "lunr", "minisearch", "js-search", "fuse.js"],
  },

  "general-purpose-3d": {
    name: "General purpose 3D libraries",
    tags: [
      { tag: "3d", weight: Weight.MAX },
      { tag: "webgl", weight: Weight.MAX },
      { tag: "gl", weight: Weight.HIGH },
    ],
    similar: ["three", "babylonjs", "aframe"],
  },

  "general-purpose-animation": {
    name: "General purpose animation libraries",
    tags: [
      { tag: "animation", weight: Weight.HIGH },
      { tag: "tween", weight: Weight.NORMAL },
      { tag: "easing", weight: Weight.LOW },
      { tag: "morph", weight: Weight.LOW },
      { tag: "transform", weight: Weight.NORMAL },
      { tag: "motion", weight: Weight.NORMAL },
      { tag: "svg", weight: Weight.LOW },
      { tag: "physics", weight: Weight.LOW },
      { tag: "dom", weight: Weight.LOW },
    ],
    similar: ["gsap", "animejs", "velocity-animate", "popmotion"],
  },

  "general-purpose-charting": {
    name: "General purpose Charting libraries",
    tags: [
      { tag: "dom", weight: Weight.LOW },
      { tag: "visualization", weight: Weight.HIGH },
      { tag: "dataviz", weight: Weight.HIGH },
      { tag: "svg", weight: Weight.MIN },
      { tag: "canvas", weight: Weight.LOW },
      { tag: "charts", weight: Weight.MAX },
      { tag: "data", weight: Weight.LOW },
    ],
    similar: [
      "d3",
      "chart.js",
      "echarts",
      "chartist",
      "frappe-charts",
      "highcharts",
      "uplot",
    ],
  },

  "general-purpose-date-time": {
    name: "General purpose date-time utilities",
    tags: [
      { tag: "date", weight: Weight.HIGH },
      { tag: "time", weight: Weight.HIGH },
      { tag: "parse", weight: Weight.LOW },
      { tag: "parser", weight: Weight.LOW },
      { tag: "format", weight: Weight.LOW },
    ],
    similar: ["moment", "luxon", "dayjs", "date-fns"],
  },

  "graphql-client": {
    name: "GraphQL Clients",
    tags: [
      { tag: "graphql", weight: Weight.HIGH },
      { tag: "client", weight: Weight.LOW },
      { tag: "js", weight: Weight.LOW },
      { tag: "javascript", weight: Weight.LOW },
    ],
    similar: [
      "@apollo/client",
      "graphql.js",
      "lokka",
      "graphql",
      "relay-runtime",
      "urql",
    ],
  },

  "html-sanitization": {
    name: "HTML Sanitization",
    tags: [
      { tag: "html", weight: Weight.NORMAL },
      { tag: "dom", weight: Weight.NORMAL },
      { tag: "sanitize", weight: Weight.HIGH },
      { tag: "untrusted", weight: Weight.MIN },
      { tag: "escape", weight: Weight.LOW },
      { tag: "filter", weight: Weight.NORMAL },
      { tag: "xss", weight: Weight.HIGH },
      { tag: "whitelist", weight: Weight.MIN },
    ],
    similar: ["sanitize-html", "xss", "dompurify", "sanitizer"],
  },

  i18n: {
    name: "Internationalization",
    tags: [
      { tag: "i18n", weight: Weight.HIGH },
      { tag: "intl", weight: Weight.HIGH },
      { tag: "internation", weight: Weight.HIGH },
      { tag: "language", weight: Weight.LOW },
    ],
    similar: ["fbt", "globalize", "i18next", "node-polyglot", "@lingui/core"],
  },

  "icu-message-fromatter": {
    name: "ICU message string formatters",
    tags: [
      { tag: "icu", weight: Weight.HIGH },
      { tag: "message", weight: Weight.NORMAL },
      { tag: "format", weight: Weight.LOW },
      { tag: "plural", weight: Weight.LOW },
      { tag: "gender", weight: Weight.LOW },
      { tag: "parse", weight: Weight.MIN },
    ],
    similar: ["messageformat", "intl-messageformat"],
  },

  "image-color-extraction": {
    name: "Image color extraction",
    tags: [
      { tag: "color", weight: Weight.HIGH },
      { tag: "image", weight: Weight.HIGH },
      { tag: "extract", weight: Weight.HIGH },
      { tag: "dominant", weight: Weight.HIGH },
      { tag: "palette", weight: Weight.HIGH },
      { tag: "pixels", weight: Weight.LOW },
    ],
    similar: [
      "img-color-extractor",
      "color-thief-browser",
      "colority",
      "node-vibrant",
    ],
  },

  "immutable-data-structures": {
    name: "Immutable Data",
    tags: [
      { tag: "immutable", weight: Weight.HIGH },
      { tag: "persistent", weight: Weight.NORMAL },
      { tag: "functional", weight: Weight.LOW },
      { tag: "collection", weight: Weight.NORMAL },
      { tag: "structure", weight: Weight.NORMAL },
      { tag: "tree", weight: Weight.LOW },
      { tag: "freeze", weight: Weight.LOW },
      { tag: "cursor", weight: Weight.LOW },
    ],
    similar: [
      "immutable",
      "seamless-immutable",
      "immutability-helper",
      "baobab",
    ],
  },

  "lazy-load-content": {
    name: "Lazy Loading Content",
    tags: [
      { tag: "lazy", weight: Weight.NORMAL },
      { tag: "load", weight: Weight.NORMAL },
      { tag: "lazyload", weight: Weight.HIGH },
      { tag: "image", weight: Weight.NORMAL },
      { tag: "iframe", weight: Weight.LOW },
      { tag: "video", weight: Weight.LOW },
    ],
    similar: ["lazysizes", "lozad", "vanilla-lazyload"],
  },

  "markdown-parser": {
    name: "Markdown parsers",
    tags: [
      { tag: "markdown", weight: Weight.HIGH },
      { tag: "parse", weight: Weight.NORMAL },
      { tag: "parser", weight: Weight.NORMAL },
      { tag: "ast", weight: Weight.LOW },
      { tag: "abstract syntax tree", weight: Weight.LOW },
      { tag: "md", weight: Weight.HIGH },
    ],
    similar: ["marked", "markdown-it", "showdown", "remarkable", "snarkdown"],
  },

  memoization: {
    name: "Memoization",
    tags: [
      { tag: "memoize", weight: Weight.HIGH },
      { tag: "cache", weight: Weight.NORMAL },
      { tag: "performance", weight: Weight.LOW },
    ],
    similar: [
      "memoize",
      "memoize-one",
      "lodash.memoize",
      "mem",
      "fast-memoize",
    ],
  },

  "node-http-request": {
    name: "HTTP client libraries for Node.js",
    tags: [
      { tag: "http", weight: Weight.NORMAL },
      { tag: "get", weight: Weight.NORMAL },
      { tag: "post", weight: Weight.NORMAL },
      { tag: "ajax", weight: Weight.HIGH },
      { tag: "url", weight: Weight.MIN },
      { tag: "request", weight: Weight.HIGH },
      { tag: "agent", weight: Weight.LOW },
      { tag: "xhr", weight: Weight.NORMAL },
      { tag: "node node.js", weight: Weight.NORMAL },
    ],
    similar: ["got", "phin", "axios", "node-fetch", "superagent"],
  },

  "number-manipulation": {
    name: "Number and Currency Formatting",
    tags: [
      { tag: "format", weight: Weight.NORMAL },
      { tag: "manipulate", weight: Weight.NORMAL },
      { tag: "currency", weight: Weight.HIGH },
      { tag: "money", weight: Weight.HIGH },
      { tag: "number", weight: Weight.HIGH },
    ],
    similar: ["numeral", "numbro", "accounting", "currency.js", "dinero.js"],
  },

  "pdf-generator": {
    name: "Client-side PDF Creation",
    tags: [
      { tag: "pdf", weight: Weight.HIGH },
      { tag: "generate", weight: Weight.LOW },
      { tag: "create", weight: Weight.LOW },
      { tag: "document", weight: Weight.LOW },
      { tag: "client", weight: Weight.NORMAL },
      { tag: "browser", weight: Weight.NORMAL },
    ],
    similar: ["jspdf", "pdfkit", "pdfmake", "@react-pdf/renderer"],
  },

  "promise-polyfill": {
    name: "Promise polyfills",
    tags: [
      { tag: "promise", weight: Weight.HIGH },
      { tag: "polyfill", weight: Weight.LOW },
      { tag: "es6", weight: Weight.LOW },
      { tag: "aplus", weight: Weight.HIGH },
      { tag: "async", weight: Weight.LOW },
      { tag: "implementation", weight: Weight.LOW },
    ],
    similar: [
      "promise",
      "es6-promise",
      "promise-polyfill",
      "es6-promise-polyfill",
    ],
  },

  "querystring-parser": {
    name: "Query String Parsers",
    tags: [
      { tag: "query string", weight: Weight.NORMAL },
      { tag: "querystring", weight: Weight.HIGH },
      { tag: "parse", weight: Weight.LOW },
      { tag: "parser", weight: Weight.LOW },
      { tag: "url", weight: Weight.LOW },
      { tag: "search params", weight: Weight.LOW },
      { tag: "qs", weight: Weight.LOW },
      { tag: "parameter", weight: Weight.NORMAL },
      { tag: "params", weight: Weight.NORMAL },
    ],
    similar: ["qs", "query-string", "querystringify", "querystring"],
  },

  "react-animation": {
    name: "React based animation",
    tags: [
      { tag: "react", weight: Weight.NORMAL },
      { tag: "animation", weight: Weight.HIGH },
      { tag: "transform", weight: Weight.NORMAL },
      { tag: "motion", weight: Weight.NORMAL },
    ],
    similar: ["react-spring", "framer-motion", "react-motion", "react-move"],
  },

  "react-autocomplete": {
    name: "React based autocomplete components",
    tags: [
      { tag: "react", weight: Weight.NORMAL },
      { tag: "autocomplete", weight: Weight.NORMAL },
      { tag: "autosuggest", weight: Weight.NORMAL },
      { tag: "typeahead", weight: Weight.NORMAL },
    ],
    similar: [
      "react-autosuggest",
      "downshift",
      "react-autowhatever",
      "react-autocomplete",
      "react-select",
    ],
  },

  "react-form": {
    name: "React based form builders & validators",
    tags: [
      { tag: "react", weight: Weight.NORMAL },
      { tag: "redux", weight: Weight.LOW },
      { tag: "form", weight: Weight.HIGH },
      { tag: "validate", weight: Weight.MIN },
    ],
    similar: [
      "formik",
      "react-final-form",
      "react-form",
      "formsy-react",
      "react-hook-form",
    ],
  },

  "react-head-meta": {
    name: "React based meta tags management",
    tags: [
      { tag: "react", weight: Weight.NORMAL },
      { tag: "head", weight: Weight.LOW },
      { tag: "document", weight: Weight.LOW },
      { tag: "title", weight: Weight.LOW },
      { tag: "meta tags", weight: Weight.LOW },
    ],
    similar: ["react-helment", "react-meta-tags", "react-document-title"],
  },

  "react-i18n": {
    name: "React based internationalization",
    tags: [
      { tag: "react", weight: Weight.NORMAL },
      { tag: "i18n", weight: Weight.HIGH },
      { tag: "intl", weight: Weight.HIGH },
      { tag: "internation", weight: Weight.HIGH },
    ],
    similar: [
      "react-intl",
      "react-i18next",
      "react-intl-universal",
      "eo-locale",
      "@lingui/react",
    ],
  },

  "react-slider": {
    name: "Slider components for React",
    tags: [
      { tag: "react", weight: Weight.NORMAL },
      { tag: "slider", weight: Weight.MAX },
      { tag: "range", weight: Weight.NORMAL },
    ],
    similar: ["rc-slider", "react-slider", "react-input-slider", "rheostat"],
  },

  "rich-text-editors": {
    name: "Rich Text Editors",
    tags: [
      {
        tag: "richtext rich text editor WYSIWYG contenteditable",
        weight: Weight.NORMAL,
      },
    ],
    similar: ["slate", "quill", "draft-js", "medium-editor", "froala-editor"],
  },

  "schema-validation": {
    name: "JSON schema validation",
    tags: [
      { tag: "JSON", weight: Weight.LOW },
      { tag: "object", weight: Weight.LOW },
      { tag: "schema", weight: Weight.NORMAL },
      { tag: "validator", weight: Weight.HIGH },
      { tag: "JSON", weight: Weight.NORMAL },
      { tag: "assert", weight: Weight.MIN },
      { tag: "check", weight: Weight.MIN },
      { tag: "structure", weight: Weight.LOW },
    ],
    similar: ["jsonschema", "joi", "ajv", "superstruct", "yup", "validate.js"],
  },

  "site-tour": {
    name: "Site Tours",
    tags: [
      { tag: "walkthrough", weight: Weight.NORMAL },
      { tag: "focus", weight: Weight.LOW },
      { tag: "tour", weight: Weight.NORMAL },
      { tag: "guide", weight: Weight.NORMAL },
      { tag: "user", weight: Weight.MIN },
      { tag: "tutorial", weight: Weight.NORMAL },
      { tag: "step", weight: Weight.LOW },
    ],
    similar: ["driver.js", "shepherd.js", "intro.js"],
  },

  "state-management": {
    name: "State Management Libraries",
    tags: [
      { tag: "state management", weight: Weight.NORMAL },
      { tag: "copy-on-write", weight: Weight.LOW },
      { tag: "immutable", weight: Weight.LOW },
      { tag: "flux", weight: Weight.HIGH },
      { tag: "reducer", weight: Weight.HIGH },
    ],
    similar: ["mobx", "redux", "immer", "freactal", "xstate"],
  },

  "svg-manipulation": {
    name: "SVG manipulation libraries",
    tags: [
      { tag: "svg", weight: Weight.HIGH },
      { tag: "vector", weight: Weight.HIGH },
      { tag: "manipulate", weight: Weight.NORMAL },
      { tag: "graphics", weight: Weight.LOW },
      { tag: "animation", weight: Weight.LOW },
      { tag: "javascript", weight: Weight.MIN },
      { tag: "two dimensional", weight: Weight.LOW },
    ],
    similar: ["raphael", "snapsvg", "two.js"],
  },

  "template-engine": {
    name: "Template engines",
    tags: [
      { tag: "template", weight: Weight.MAX },
      { tag: "partial", weight: Weight.HIGH },
      { tag: "html", weight: Weight.NORMAL },
    ],
    similar: ["handlebars", "eta"],
  },

  "timezone-formatting": {
    name: "Timezone Formatting",
    tags: [
      { tag: "date", weight: Weight.NORMAL },
      { tag: "time", weight: Weight.NORMAL },
      { tag: "timezone", weight: Weight.MAX },
      { tag: "parse", weight: Weight.LOW },
      { tag: "format", weight: Weight.LOW },
    ],
    similar: [
      "moment-timezone",
      "date-time-format-timezone",
      "spacetime",
      "date-fns-timezone",
    ],
  },

  uuid: {
    name: "Unique ID generators",
    tags: [
      { tag: "uuid", weight: Weight.HIGH },
      { tag: "guid", weight: Weight.HIGH },
      { tag: "random", weight: Weight.LOW },
      { tag: "unique", weight: Weight.NORMAL },
      { tag: "id", weight: Weight.NORMAL },
    ],
    similar: ["uuid", "shortid", "nanoid", "cuid"],
  },

  "vanilla-carousel": {
    name: "Vanilla JS Sliders & Carousels",
    tags: [
      { tag: "touch swipe", weight: Weight.LOW },
      { tag: "vanilla", weight: Weight.NORMAL },
      { tag: "carousel", weight: Weight.MAX },
      { tag: "slider", weight: Weight.MAX },
    ],
    similar: ["glider-js", "slick-carousel", "swiper", "flickity"],
  },

  "vanilla-tooltip": {
    name: "Tooltip Libraries",
    tags: [
      { tag: "tooltip", weight: Weight.MAX },
      { tag: "popover", weight: Weight.NORMAL },
      { tag: "hint", weight: Weight.NORMAL },
    ],
    similar: ["tooltip.js", "tippy.js", "balloon-css", "hint.css", "microtip"],
  },

  "virtual-dom-engine": {
    name: "Virtual DOM implementations",
    tags: [
      { tag: "virtual", weight: Weight.NORMAL },
      { tag: "dom", weight: Weight.NORMAL },
      { tag: "render", weight: Weight.NORMAL },
      { tag: "dominant", weight: Weight.HIGH },
      { tag: "palette", weight: Weight.HIGH },
      { tag: "pixels", weight: Weight.LOW },
    ],
    similar: ["hyperhtml", "snabbdom", "virtual-dom"],
  },

  "vue-carousel": {
    name: "Vue JS Sliders & Carousels",
    tags: [
      { tag: "vue", weight: Weight.HIGH },
      { tag: "touch swipe", weight: Weight.LOW },
      { tag: "carousel", weight: Weight.NORMAL },
      { tag: "slider", weight: Weight.NORMAL },
    ],
    similar: [
      "vue-awesome-swiper",
      "vue-carousel",
      "vue-slick",
      "vue-tiny-slider",
    ],
  },
};
