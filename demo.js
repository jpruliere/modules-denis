// ancienne syntaxe
// NB : pas besoin de .js
// const mod = require('./module')
// ici, on peut utiliser mod.add, mod.sub etc.

// nouvelle syntaxe avec destructuration
const { add, sub } = require('./arithmetics')
// nous permet d'utiliser directement add, sub etc.

console.log(sub(14, 7))

// les modules natifs de Node, c'est sympa
// on trouve leur doc facilement sur Google ;-)
// bon, par contre, j'avoue, os n'est pas le module le plus fun qui soit :-D
const os = require('node:os')

console.log(os.arch())