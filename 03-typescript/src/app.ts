import { findHeroById } from "./services/hero.services"

const hero = findHeroById(3)
// console.log(hero?.name)
console.log(hero?.name ?? 'hero not found!!')
