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
var Character = /** @class */ (function () {
    function Character(options) {
        this.name = options.name || DEFAULTS.DEFAULT_NAME;
        this.age = options.age || DEFAULTS.DEFAULT_AGE;
        this.health = options.health || DEFAULTS.DEFAULT_HEALTH;
    }
    return Character;
}());
exports.Character = Character;
