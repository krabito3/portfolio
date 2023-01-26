let texte ="Vous etes à la recherche d'un developpeur web?";
let indice =0;
let longueur= texte.length;


function ecrire() {
    indice++;
    document.getElementById("anim").innerText = texte.substr(0, indice);
    if (indice < longueur) {
      setTimeout(function () {
        ecrire();
      }, 100);
    }
  }
  ecrire();


