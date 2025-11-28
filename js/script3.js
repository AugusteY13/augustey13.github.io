function rediriger() {
    let valeur = document.getElementById("userInput").value.toLowerCase();
    
    // Liste des pages associées aux entrées
    let pages = {
        "dragon" : "interactive dragon.html",
        "smiley" : "smiley.html",
        "seche" : "seche.html",
        "noelie" : "happy birtday.html",
        "aetheria" : "https://docs.google.com/document/d/1QtS9tzhbet8Yr-0J8mPBJFF-uzzJFUpUzwMjKH1GnKk/edit?usp=sharing",
        "hibiscus" : "https://docs.google.com/document/d/1F7p4HRatPLGH74AcphkRJdD2rU2XL5ulMONGL43dqRo/edit?usp=sharing",
        "casino" : "https://docs.google.com/document/d/16bmJEaa0GNEs8iXPI0gsoUrysb_4WH0mmymG_c4KAEk/edit?usp=sharing",
        "fakes" : "https://docs.google.com/document/d/1Gr0qLRNe_ZuQ4i6itQ5sHU2DDsX_0u1iEa0lzM6hSbw/edit?usp=sharing",
        "roman" : "https://sites.google.com/view/lesechosduplaisir",
    };

    if (pages[valeur]) {
        window.open(pages[valeur], "_blank");
    } else {
        alert("Page non trouvée !");
    }
}
