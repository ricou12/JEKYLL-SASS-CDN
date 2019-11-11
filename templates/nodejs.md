---
layout: nodejs
title: Node JS
---
Inspiré des cours OPENCLASSROOMS

Node.js utilise le langage JavaScript (basé sur les évènements), il offre un environnement côté serveur en dehors du navigateur !

C'est un modèle non bloquant : execute les commandes les unes après les autres sans attendre qu' elles se terminent.

Node.js est monothread (une seule version du programme qui peut tourner à la fois en mémoire)

***


**Installation** : télécharger soit le .msi, soit le .exe

**Creer un serveur web simple** : *server.js*
~~~html 
var http = require('http');
var server = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.end('<p>Voici un paragraphe <strong>HTML</strong> !</p>');
});

server.listen(8080);
~~~

**Lancer le serveur**
A partir d'un terminal : *node server.js*


**Ouvrir le navigateur a l'adresse:**

http://localhost:8080 ou http://localhost:8080/mapage ou http://localhost:8080/dossier/autrepage

*** 

**les types MIME**

Le serveur doit indiquer le type de données
* Du texte brut : text/plain
* Du HTML : text/html
* Du CSS : text/css
* Une image JPEG : image/jpeg
* Une vidéo MPEG4 : video/mp4
* Un fichier ZIP : application/zip
* etc

Ex : res.writeHead(200, {"Content-Type": "text/html"});

**inclure ce module pour utiliser le protocole http**
```
var http = require('http');
```

**HTML dans la réponse**
```
res.end('<p>Voici un paragraphe <strong>HTML</strong> !</p>');
var http = require('http');
```

**Code structure html valide**
~~~html
var server = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.write(
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Ma page Node.js !</title>
</head>
<body>
<p>Voici un paragraphe <strong>HTML</strong> !</p>
</body>
</html>);
    res.end();
});
server.listen(8080);
~~~

**Récupérer la page demandée**
```
var url = require("url");
```

**obtenir le nom de la page demandée**
```
url.parse(req.url).pathname;
```

**Récupérer les paramètres passés dans l'url**

ex:http://localhost:8080/page?prenom=Robert&nom=Dupont
```
url.parse(req.url).query
```

**Pour découper la chaine inclure ce module**
```
var querystring = require('querystring');
```

**Récuperer un tableau de paramètres "params".**
```
var params = querystring.parse(url.parse(req.url).query);
```

**exemple de code**
```
var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    }
    else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
    }
    res.end();
});
server.listen(8080);
```
server.on('close', function() {
// Faire quelque chose quand le serveur est arrêté
})

**Export de function (accessible a partir d'un autre js)**
```
var direBonjour = function() {
    console.log('Bonjour !');
}

var direByeBye = function() {
    console.log('Bye bye !');
}

exports.direBonjour = direBonjour;
exports.direByeBye = direByeBye;
```

## INSTALLER DES MODULES
**Les modules seront installés** via la commande **npm "install nomdumodule"** et disponible avec node.

**Par défaut** à l'intérieur du projet : "npm install markdown"

Ou **de manière globale** : "npm install markdown -g"
```
Utilisation dans le code :
var markdown = require('markdown').markdown;
```
Mise à jour des modules : npm update
Fixer les version de dépendances (éviter les riques d'incompatibilité ) : Utiliser fichier package.json et indiquer les versions de dépendances.
```
"dependencies": {
    "markdown": "0.3.5" // Version 0.3.5 uniquement
}
```