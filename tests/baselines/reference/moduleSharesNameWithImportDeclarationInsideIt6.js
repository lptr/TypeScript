//// [moduleSharesNameWithImportDeclarationInsideIt6.ts]
module Z.M {
    export function bar() {
        return "";
    }
}
module A.M {
    import M = Z.M;
    export function bar() {
    }
}

//// [moduleSharesNameWithImportDeclarationInsideIt6.js]
var Z;
(function (Z) {
    var M;
    (function (M) {
        function bar() {
            return "";
        }
        M.bar = bar;
    })(M = Z.M || (Z.M = {}));
})(Z || (Z = {}));
var A;
(function (A) {
    var M;
    (function (M) {
        function bar() {
        }
        M.bar = bar;
    })(M = A.M || (A.M = {}));
})(A || (A = {}));
