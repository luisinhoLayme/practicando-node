"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const hero_services_1 = require("./services/hero.services");
const hero = (0, hero_services_1.findHeroById)(3);
// console.log(hero?.name)
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'hero not found!!');
