function rediriger() {
    let valeur = document.getElementById("userInput").value.toLowerCase();
    
    // Liste des pages associées aux entrées
    let pages = {
        "dragon" : "interactive dragon.html",
        "smiley" : "smiley.html",
        "seche" : "seche.html",
        "karen2026" : "birthday-cake.html"
    };

    if (pages[valeur]) {
        window.open(pages[valeur], "_blank");
    } else {
        alert("Page non trouvée !");
    }
}
