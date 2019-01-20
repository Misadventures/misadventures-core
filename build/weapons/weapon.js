"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULTS = __importStar(require("./defaults"));
var Weapon = /** @class */ (function () {
    function Weapon(options) {
        this.name = options.name || DEFAULTS.DEFAULT_NAME;
        this.damage = options.damage || DEFAULTS.DEFAULT_DAMAGE;
    }
    return Weapon;
}());
exports.Weapon = Weapon;
