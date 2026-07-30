document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const webhookURL = "https://discord.com/api/webhooks/1498267504194097262/5d5brNUFAf6vkn-dDrXni-tP5ujuIAqiAdkIEHUodQmN3ruAOnYBCk2GcjKm3kifHnab";

    const formData = new FormData(e.target);

    const payload = {
        username: "Formulaire Site Web",
        embeds: [{
            title: "📨 Nouveau message de contact",
            color: 0x5865f2,
            fields: [
                {
                    name: "👤 Pseudo Discord",
                    value: formData.get("Pseudo Discord") || "Non renseigné"
                },
                {
                    name: "📧 Email",
                    value: formData.get("Email") || "Non renseigné",
                },
                {
                    name: "📌 Type de projet",
                    value: formData.get("Type de projet") || "Non renseigné"
                },
                {
                    name: "💰 Budget approximatif",
                    value: formData.get("Budget approximatif") || "Non renseigné",
                },
                {
                    name: "💬 Description du projet",
                    value: formData.get("Message") || "Aucun message"
                }
            ],
            footer: {
                text: "Message envoyé depuis le site"
            },
            timestamp: new Date()
        }]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("✅ Message envoyé avec succès !");
            e.target.reset();
        } else {
            alert("❌ Erreur lors de l'envoi du message.");
        }
    })
    .catch(error => {
        console.error("Erreur :", error);
        alert("❌ Erreur réseau.");
    });
});
