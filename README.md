# Les modules

## Petits rappels

- Le fichier `package.json` contient les dépendances de ton projet, c'est-à-dire les modules créés par d'autres développeurs dont tu as besoin pour faire tourner ton application.

- Pour éviter de te faire télécharger des modules qu'on trouve déjà sur NPM, le dossier `node_modules` n'est pas inclus dans ce repo Git. Mais puisque tout est dans le `package.json`, il te suffit de lancer la commande `npm i` (raccourci pour `npm install`) pour recréer ce dossier.

## Exercice

- Commence par te documenter un peu sur Express via [le site officiel](http://expressjs.com/). Tu as compris quelques bases mais il y a encore des petits détails à acquérir qui vont bien t'aider par la suite. Je te conseille de commencer par la section `Getting started`.

- Quand tu penses avoir compris le principe, ajoute une route `/add/20/11` à ton serveur, qui répondra `20 + 11 = 31`. Ecris d'abord tout ça "en dur".

- Puis importe notre petit module maison et utilise la fonction `add` (j'ai renommé le module, il s'appelle `arithmetics` maintenant) pour faire le calcul et concaténer le résultat dans la réponse.

- Déclare ensuite 2 variables a et b contenant 20 et 11, et concatène tout ça dans la réponse.

- Cherche un moyen de rendre l'url (on parle de "route") dynamique, c'est-à-dire de faire en sorte que si j'accède à `/add/13/3`, la réponse soit `13 + 3 = 16` et que tout soit automatisé.

- Si l'utilisateur rentre autre chose qu'un nombre, renvoie un code 400 avec un message comme `L'un des paramètres passés n'est pas un nombre`

- Fais la même chose avec la fonction `sub` puis avec une fonction `mult` (pour `multiply`) que tu vas d'abord créer et exporter

- Crée un module `conversion` contenant 2 fonctions qui convertissent des Celsius en Fahrenheit et des Euros en Yen. Ces deux fonctions devront utiliser les fonctions du module `arithmetics` s'il y a des calculs à faire.

- Crée 2 dernières routes `/celsius-to-fahrenheit/{temp}` (où `{temp}` sera une température en degrés Celsius) et `eur-to-jpy/{amount}` (où `{amout}` est un montant en euros)