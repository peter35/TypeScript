//// [privateAccessInSubclass1.ts]
class Base {
  private options: any;
}

class D extends Base {
  myMethod() {
    this.options;
  }
}

//// [privateAccessInSubclass1.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base = (function () {
    function Base() {
    }
    return Base;
}());
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    D.prototype.myMethod = function () {
        this.options;
    };
    return D;
}(Base));
