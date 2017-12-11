// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Link        = require("../../bindings/gatsby/link.js");
var React       = require("react");
var Styles      = require("../styles/Styles.js");
var Helpers     = require("../utils/Helpers.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Index");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, React.createElement("input", {
                      className: Styles.Index[/* searchInput */0]
                    }), React.createElement("div", {
                      className: Styles.Index[/* links */1]
                    }, ReasonReact.element(/* None */0, /* None */0, Link.make("/packages", /* None */0, /* array */[Helpers.text("Packages")])), ReasonReact.element(/* None */0, /* None */0, Link.make("/keywords", /* None */0, /* array */[Helpers.text("Keywords")])), ReasonReact.element(/* None */0, /* None */0, Link.make("/about", /* None */0, /* array */[Helpers.text("About")]))));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function () {
        return make(/* array */[]);
      }));

exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
exports.__esModule= true;
/* component Not a pure module */
