const express = require('express')
const server = express()

// une fonction home (ou plus exactement, une fonction stockée dans une variable home)
const home = (req, res) => {
  res.send('Hello World from home')
}

// une autre fonction
const meteo = (req, res) => {
	res.send('A Paris, il fait 13°C')
}

// je mentionne la variable home, je ne l'exécute pas
// je dis à mon serveur que si quelqu'un veut accéder à "/" (la racine), alors c'est home qu'il faudra lancer
server.get('/', home)

server.get('/meteo', meteo)

server.listen(3000)
