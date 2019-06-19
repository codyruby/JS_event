/*=======================================================================================
Fonctionnalité 1 :
On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer 
(portant le tag <footer>), tu vas afficher le mot "clique" en console.

Cette fonctionnalité doit être codée avec un addEventListener("click", 
function(){ } car c'est une bonne habitude à prendre ! 😇
=======================================================================================*/
/*=======================================================================================
Fonctionnalité 1-bis :
Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, 
tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.
=======================================================================================*/

function footerClick() {
    console.log(`clique numéro : ${footerClickNumber++}`)
}

let footerClickNumber = 1

document.querySelector("footer").addEventListener("click", footerClick)

/*=======================================================================================
Fonctionnalité 2 :
On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début 
mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? 
C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.

Tu vas faire que si quelqu'un clique sur ce bouton, 
l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, 
fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant 
l'Id navbarHeader
=======================================================================================*/

let hamburgerButton = document.querySelector("button.navbar-toggler");

function toggleCollapse() {
  const navBar = document.getElementById("navbarHeader");
  
  navBar.classList.toggle("collapse")
}

hamburgerButton.addEventListener("click", toggleCollapse)

/*=======================================================================================
Fonctionnalité 3 :
À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, 
le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). 
À toi de jouer !
=======================================================================================*/

let editButton = document.querySelector(".album .container .row div:first-of-type .btn-group button:last-of-type");


function toRed(){
    let text = document.querySelector(".card-text");
  
	text.style.color = 'red';
}

editButton.addEventListener("click", toRed)

/*=======================================================================================
Fonctionnalité 4 :
On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : 
si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. 
Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches 
comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.
=======================================================================================*/

let editGreenButton = document.querySelector(".album .container .row div:nth-of-type(2) .btn-group button:last-of-type");

//fonction qui va changer la couleur du texte, soit en vert si le texte etait noir, soit en noir si le texte etait en vert. 
function toggleGreen(e) {
    let text = e.target.parentNode.parentNode.parentNode.querySelector(".card-text");
  //partie du code qui vérifie de quelle couleur était le text pour le changer en vert ou noir. 
  text.style.color =  (text.style.color === "green") ? "rgb(33, 37, 41)" : "green";
}

//appel de la fonction qui change la couleur du texte quand l'user clique sur le bouton "edit" de la deuxième card. 
editGreenButton.addEventListener("click", toggleGreen);

/*=======================================================================================
Fonctionnalité 5 :
Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. 
Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : 
si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît 
et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. 
Si possible, rends cette fonctionnalité réversible 
(un nouveau double-clic fait tout revenir à la normale).
=======================================================================================*/

const navbar = document.querySelector("header")

function toggleBootstrap() {
  const boostrapLink = document.head.querySelector("link")

  //Cette fonction marche dans les deux sens,
  boostrapLink.disabled = (boostrapLink.disabled) ? false : true
}

navbar.addEventListener("dblclick", toggleBootstrap)

/*=======================================================================================
Fonctionnalité 6 :
T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! 
On va commencer à corser les choses.

La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" 
d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, 
l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. 
Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !
=======================================================================================*/

const viewBtns = document.querySelectorAll(".album .container .row div .btn-group button:first-of-type")

//fonction pour réduit la carte. 
function reduceCard(elt) {
  elt.querySelector(".card-text").style.display = "none"
  elt.querySelector("img").style.width = "20%"
  elt.classList.add("reduced")
}

//fonction qui permet de remettre les cards à leur taille originale
function expendCard(elt) {
  elt.querySelector(".card-text").style = ""
  elt.querySelector("img").style = ""
  elt.classList.remove("reduced")
}

//fonction qui permet de determiner la taille des cards afin de déterminer si au passage de la souris il faut la réduire ou l'agrandir.
function toggleCard(e) {
  const card = e.target.parentNode.parentNode.parentNode.parentNode

  if (card.classList.contains("reduced")) {
    expendCard(card)
  } else {
    reduceCard(card)
  } 
}

viewBtns.forEach(card => card.addEventListener("mouseover", toggleCard))

/*=======================================================================================
Fonctionnalité 7 :
Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, 
la dernière card (en bas à droite) va passer en premier (en haut à gauche). 
On va pouvoir faire tourner les cards !


Petite remarque : tu vas réaliser que si tu mélanges les cards, 
il est fort probable que la fonctionnalité 6 va se mettre à faire n'importe quoi. 
Si tu survoles un bouton "View", c'est une autre card qui va se réduire. 
Si tu arrives à corriger ça, c'est cool mais la consigne est d'ignorer ce souci pour le moment.
=======================================================================================*/


/*=======================================================================================
Fonctionnalité 8 :
Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. 
Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier. 
À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, 
celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈
=======================================================================================*/


// séléction des deux liens <== et ==>
const arrowLeft = document.querySelector("main section.jumbotron a:first-of-type")
const arrowRight = document.querySelector("main section.jumbotron a:last-of-type")


function forwardCard() {
  const Cards = document.querySelector(".album > .container > .row")

  CardToMove = Cards.removeChild(Cards.lastElementChild)
  Cards.prepend(CardToMove)
}

function backwardCard(e) {
  const Cards = document.querySelector(".album > .container > .row")

  e.preventDefault()
  CardToMove = Cards.removeChild(Cards.firstElementChild)
  Cards.appendChild(CardToMove)
}

arrowRight.addEventListener("click", forwardCard)
arrowLeft.addEventListener("click", backwardCard)


/*=======================================================================================
Fonctionnalité 9 :
Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge. 
Du coup je t'ai concocté une fonctionnalité de derrière les fagots, spécialement conçue pour 
les moussaillons pas piqués des hannetons (this sentence is brought to you by www.vieilles-expressions.fr). 
Voici ce qu'elle va devoir faire :

La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné 
et qu'on appuie sur une touche spécifique du clavier.
Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 
4 colonnes Bootstrap à gauche de l'écran.
Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 
4 colonnes Bootstrap au milieu de l'écran.
Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 
4 colonnes Bootstrap à droite de l'écran.
Si l'utilisateur presse la touche "b", tout redevient normal.
=======================================================================================*/