
let div = document.createElement('div');

const envoyer = () => {
    //recuperation du text dans une variable
    var textarea = document.getElementById('text').value;
    //on récupère le nombre de caractère
    var taille = textarea.length;
    //on récupère le nombre d'espace
    var mot = textarea.split(/\b\w+\b/).length-1
    var compt = 0;
    //calcul du nombre de e
    for (var i=0;i<taille;i++){
        if (textarea.charAt(i) ==='e'){
            compt +=1;
        }
    }

    //denombrement :

    var code = textarea.charCodeAt(i);
    var lettre = [];
    lettre = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var occurence = [];
    for (i=0;i<textarea.length;i++){
        code = textarea.charAt(i);
        for (var j = 0;j<26;j++){
            if (code == lettre[i]){
                occurence[i] += 1 
            }
        }
        
    }
    //on a deux tableaus : un tableau (lettre)qui sont les lettre correspondante (pas très utile) et un tableau (occurence) nombre de fois apparu.
    
    for (i=0; i<26;i++){
        if (occurence[i] !=0){
            div.innerHTML+="La lettre " + lettre[i] + " a " + occurence[i] + " nombre d'occurence";
        }
    }

    
    div.innerHTML = " - Il y a " + taille + " caractères dans le texte.";
    div.innerHTML += '<br />' + " - Il y a " + mot + " mots dans le texte."
    div.innerHTML += '<br />' + " - Il y a " + compt + " e dans le texte."
    document.querySelector('.nbCaracteres').appendChild(div);

}