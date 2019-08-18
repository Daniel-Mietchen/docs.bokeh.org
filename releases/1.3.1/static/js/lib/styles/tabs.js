"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./root");
var _a = require("../core/dom");
_a.styles.append(".bk-root .bk-tabs-header {\n  display: flex;\n  display: -webkit-flex;\n  flex-wrap: nowrap;\n  -webkit-flex-wrap: nowrap;\n  align-items: center;\n  -webkit-align-items: center;\n  overflow: hidden;\n  user-select: none;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.bk-root .bk-tabs-header .bk-btn-group {\n  height: auto;\n  margin-right: 5px;\n}\n.bk-root .bk-tabs-header .bk-btn-group > .bk-btn {\n  flex-grow: 0;\n  -webkit-flex-grow: 0;\n  height: auto;\n  padding: 4px 4px;\n}\n.bk-root .bk-tabs-header .bk-headers-wrapper {\n  flex-grow: 1;\n  -webkit-flex-grow: 1;\n  overflow: hidden;\n  color: #666666;\n}\n.bk-root .bk-tabs-header.bk-above .bk-headers-wrapper {\n  border-bottom: 1px solid #e6e6e6;\n}\n.bk-root .bk-tabs-header.bk-right .bk-headers-wrapper {\n  border-left: 1px solid #e6e6e6;\n}\n.bk-root .bk-tabs-header.bk-below .bk-headers-wrapper {\n  border-top: 1px solid #e6e6e6;\n}\n.bk-root .bk-tabs-header.bk-left .bk-headers-wrapper {\n  border-right: 1px solid #e6e6e6;\n}\n.bk-root .bk-tabs-header.bk-above,\n.bk-root .bk-tabs-header.bk-below {\n  flex-direction: row;\n  -webkit-flex-direction: row;\n}\n.bk-root .bk-tabs-header.bk-above .bk-headers,\n.bk-root .bk-tabs-header.bk-below .bk-headers {\n  flex-direction: row;\n  -webkit-flex-direction: row;\n}\n.bk-root .bk-tabs-header.bk-left,\n.bk-root .bk-tabs-header.bk-right {\n  flex-direction: column;\n  -webkit-flex-direction: column;\n}\n.bk-root .bk-tabs-header.bk-left .bk-headers,\n.bk-root .bk-tabs-header.bk-right .bk-headers {\n  flex-direction: column;\n  -webkit-flex-direction: column;\n}\n.bk-root .bk-tabs-header .bk-headers {\n  position: relative;\n  display: flex;\n  display: -webkit-flex;\n  flex-wrap: nowrap;\n  -webkit-flex-wrap: nowrap;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.bk-root .bk-tabs-header .bk-tab {\n  padding: 4px 8px;\n  border: solid transparent;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.bk-root .bk-tabs-header .bk-tab:hover {\n  background-color: #f2f2f2;\n}\n.bk-root .bk-tabs-header .bk-tab.bk-active {\n  color: #4d4d4d;\n  background-color: white;\n  border-color: #e6e6e6;\n}\n.bk-root .bk-tabs-header .bk-tab .bk-close {\n  margin-left: 10px;\n}\n.bk-root .bk-tabs-header.bk-above .bk-tab {\n  border-width: 3px 1px 0px 1px;\n  border-radius: 4px 4px 0 0;\n}\n.bk-root .bk-tabs-header.bk-right .bk-tab {\n  border-width: 1px 3px 1px 0px;\n  border-radius: 0 4px 4px 0;\n}\n.bk-root .bk-tabs-header.bk-below .bk-tab {\n  border-width: 0px 1px 3px 1px;\n  border-radius: 0 0 4px 4px;\n}\n.bk-root .bk-tabs-header.bk-left .bk-tab {\n  border-width: 1px 0px 1px 3px;\n  border-radius: 4px 0 0 4px;\n}\n.bk-root .bk-close {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  vertical-align: middle;\n  background-image: url('data:image/svg+xml;utf8,\\\n      <svg viewPort=\"0 0 10 10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\\\n        <line x1=\"1\" y1=\"9\" x2=\"9\" y2=\"1\" stroke=\"gray\" stroke-width=\"2\"/>\\\n        <line x1=\"1\" y1=\"1\" x2=\"9\" y2=\"9\" stroke=\"gray\" stroke-width=\"2\"/>\\\n      </svg>');\n}\n.bk-root .bk-close:hover {\n  background-image: url('data:image/svg+xml;utf8,\\\n      <svg viewPort=\"0 0 10 10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\\\n        <line x1=\"1\" y1=\"9\" x2=\"9\" y2=\"1\" stroke=\"red\" stroke-width=\"2\"/>\\\n        <line x1=\"1\" y1=\"1\" x2=\"9\" y2=\"9\" stroke=\"red\" stroke-width=\"2\"/>\\\n      </svg>');\n}\n");
exports.bk_tabs_header = "bk-tabs-header";
exports.bk_headers_wrapper = "bk-headers-wrapper";
exports.bk_headers = "bk-headers";
exports.bk_tab = "bk-tab";
exports.bk_close = "bk-close";