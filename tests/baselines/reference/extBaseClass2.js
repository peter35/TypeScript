//// [extBaseClass2.ts]
module N {
    export class C4 extends M.B {
    }
}

module M {
    export class C5 extends B {
    }
}


//// [extBaseClass2.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var N;
(function (N) {
    var C4 = (function (_super) {
        __extends(C4, _super);
        function C4() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return C4;
    }(M.B));
    N.C4 = C4;
})(N || (N = {}));
var M;
(function (M) {
    var C5 = (function (_super) {
        __extends(C5, _super);
        function C5() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return C5;
    }(B));
    M.C5 = C5;
})(M || (M = {}));
