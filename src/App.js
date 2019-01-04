"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./App.scss");
var StartPage_1 = require("./components/StartPage");
var ForecastPage_1 = require("./components/ForecastPage");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<section className="hero is-fullheight is-background">
        <div className="hero-body">
          <div className="container has-text-centered">
            <react_router_dom_1.BrowserRouter>
              <>
                <react_router_dom_1.Route exact path="/" component={StartPage_1["default"]}/>
                <react_router_dom_1.Route exact path="/forecast/:location" component={ForecastPage_1["default"]}/>
              </>
            </react_router_dom_1.BrowserRouter>
          </div>
        </div>
      </section>);
    };
    return App;
}(react_1.Component));
exports["default"] = App;
