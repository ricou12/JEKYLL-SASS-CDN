---
layout: coursWeb/mdForme
title: Javascript pour le web
---

# <center>Éléments du DOM</center>

## Modifiez le contenu d'un élément
Les deux principales sont : `innerHTML` et textContent.

## Document : récupérer des éléments

### Trouver cet élément
```
<p id="my-anchor">My content</p>
const myAnchor = document.getElementById('my-anchor');
```
### Retourne la liste des éléments
```
const contents = document.getElementsByClassName('content');
const firstContent = contents[0];
```
### Retourne tous les éléments nom de balise
```
const articles = document.getElementsByTagName('article');
const thirdArticle = articles[2];
```
### Retourne le premier élément qui correspond à la recherche
`document.querySelector("#myId p.article > a");`

### Retourne la liste des éléments
`document.querySelectorAll();`

## Élément

### Retourne la liste des enfants :

 ***element.children***

***Retourne l'élément parent***

***element.parentElement***
*Permettent de naviguer vers l'élément suivant / précédent de même niveau que notre élément :*
`element.nextElementSibling / element.previousElementSibling`
```
let elt = document.getElementById('main');
elt.innerHTML = "<ul><li>Elément 1</li><li>Elément 2</li></ul>";
_Résultat_
<div id="main">
  <ul>
    <li>Elément 1</li>
    <li>Elément 2</li>
  </ul>
</div>
```
### Propriété classList :
Accéder directement à la liste des classes

**Ajoute une classe à l'élément**
```
elt.classList.add("nouvelleClasse");
```

**Supprime une classe**
```
elt.classList.remove("nouvelleClasse");
```

**Rechercher une class renvoi un booléen**
```
elt.classList.contains("nouvelleClasse")
```

**Rechercher et remplacer**
```
elt.classList.replace("oldClass", "newClass");
```

### Propriété styles
```
elt.style.color = "#fff";  // Change la couleur du texte de l'élément à blanche
elt.style.backgroundColor = "#000"; // Change la couleur de fond de l'élément en noir
elt.style.fontWeight = "bold"; // Met le texte de l'élément en gras
```

### Modifiez les attributs
Définir ou remplacer les attributs d'un élément
```
element.setAttribute(<name>, <value> ) ;
```

### Créez un nouvel élément
L’élément ne fait pas encore partie du document
```
const newElt = document.createElement("div");
```

### Ajouter le nouvel élément
```
const newElt = document.createElement("div");
let elt = document.getElementById("main");
{ elt.appendChild(newElt);
ou
document.getElementById("main").appendChild(document.createElement("div"));
```
### Supprimez et remplacez des éléments
```
const newElt = document.createElement("div");
let elt = document.getElementById("main");
// ajoute l’élément
elt.appendChild(newElt);  
// Supprime l'élément newElt de l'élément elt
elt.removeChild(newElt); 
// Remplace l'élément newElt par un nouvel élément de type article
elt.replaceChild(document.createElement("article"), newElt);
```
### Les événements
```
// Ecoute cet evenement
element.addEventListener('click', onClick);
// On récupère l'élément sur lequel on veut détecter le clic
const elt = document.getElementById('mon-lien'); 
// On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici.
elt.addEventListener('click', function() { 
 // On change le contenu de notre élément pour afficher "C'est cliqué !" 
elt.innerHTML = "C'est cliqué !"; 
});
```
**Empêchera le formulaire de s'envoyer au serveur lors d’un événement onsubmit,  donc ne rafraichi la page.**
```
// On récupère l'élément sur lequel on veut détecter le clic.
const elt = document.getElementById('mon-lien'); 
elt.addEventListener('click', function(event) { 
// On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici.
```
**Empêcher la propagation de l'événement vers son parent.**
```
elementInterieur.addEventListener('click', function(event) {
event.stopPropagation();
elementAvecMessage.innerHTML = "Message de l'élément intérieur";
});
```
**Mouvement de la souris**
*`Mousemove`* fournit un objet de type **`MouseEvent`**
Dès que la souris bouge notre fonction *callback* sera appelée avec un paramètre de type *MouseEvent*.
* `clientX` / `clientY` : position de la souris dans les coordonnées locales (contenu du DOM) ;

* `offsetX` / `offsetY` : position de la souris par rapport à l'élément sur lequel on écoute l'événement ;

* `pageX` / `pageY` : position de la souris par rapport au document entier ;

* `screenX` / `screenY` : position de la souris par rapport à la fenêtre du navigateur ;

* `movementX` / `movementY` : position de la souris par rapport à la position de la souris lors du dernier événement `mousemove`.
```
document.getElementById('result').addEventListener('mousemove',function(e){
document.getElementById('mouse-x').innerHTML = e.offsetX;
document.getElementById('mouse-y').innerHTML = e.offsetY;
});
```
**Contenu d'un champ texte, événement change**
Fonctionne avec les éléments de type <`input>`, <`select>` et <`textarea>`,  `checkbox,`  `radio`.
Avoir la valeur dès que l'utilisateur ajoute ou supprime une lettre
```
input.addEventListener('input', function(event) {
output.innerHTML = event.target.value;
});
```
**Input text**
```
document.getElementById('name').addEventListener('input',function(e){
document.getElementById('res-name').innerHTML = e.target.value ;
ou
document.getElementById('res-name').textContent =  e.target.value ;
});
```
**Bouton d’option**
```
document.getElementById('gender').addEventListener('change',function(e){
document.getElementById('res-gender').innerHTML = e.target.value;
});
```
## Les services web
Programme s'exécutant sur un serveur répondant à des **requêtes utilisant le protocole http (*HyperText Transfer Protocol*).

* L’envoi de mail (_SMTP_)
* La réception de mail (_IMAP_)
* Ressources web (_HTTP)_
* Transferts de fichiers (_FTP_)

### Les codes HTTP.

* **100 à 199** sont des codes d'**information**

* **200 à 299** sont des codes de **succès**.

* **300 à 399** sont les codes de **redirection**

* **400 à 499** sont des codes d'**erreur** liés à l'**utilisation du service web**

* **500 à 599** sont des codes d'**erreur** venant du **service web**

### Les méthodes http
* **GET** : permet de **récupérer** des ressources, comme par exemple le temps actuel sur un service de météo ;
* **POST** : permet de **créer** ou **modifier** une ressource, comme la création d'un nouvel utilisateur sur votre application ;
* **PUT** : permet de **modifier** une ressource, comme le nom de l'utilisateur que vous venez de créer avec _POST_ ;
* **DELETE** : Permet de **supprimer** une ressource, comme un commentaire dans un fil de discussion.

_**API**_  _Signifie _Application Programming Interface__
*Interface* mettant à disposition des *points d'accès* vers les ressources de l'application.

_**AJAX**_  signifie en fait _Asynchronous JavaScript And XML_.
*Ensemble d'objets et de fonctions* pour des requêtes HTTP de manière asynchrone, sans avoir besoin de recharger la page du navigateur.

**Méthode GET** Envoyer une requête (AJAX)
Les données sont renvoyées dans un *format Json*.`
```
var request = new XMLHttpRequest();
request.open("GET", "http://url-service-web.com/api/users");
request.send();
```
[Préférer l'API fetch()](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)  fournit une interface JavaScript plus simple pour récupérer des ressources à travers le réseau de manière asynchrone (dispo dans les nouveaux navigateur)
```
var myImage = document.querySelector('img');
fetch('flowers.jpg')
.then(function(response) {
return response.blob();
})
.then(function(myBlob) {
var objectURL = URL.createObjectURL(myBlob);
myImage.src = objectURL;
});
```
Données au format JSON _JavaScript Object Notation_

**Validez les données saisies par vos utilisateurs**
Never trust user input ! *Ne faites jamais confiance aux données saisies par vos utilisateurs !*
```
myInput.addEventListener('input', function(e) {
var value = e.target.value;
if (value.startsWith('Hello ')) {
isValid = true;
} else {
isValid = false;
}
});
```
**Avec des regex**

format spécial qui permet de _matcher_ du texte
