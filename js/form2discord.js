document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const webhookURL = "https://discord.com/api/webhooks/1454110994849861663/5A27ArDyxumz9fAfjTASG19mL1vZfHEe0IsS4RZ4O16C3GKg7C8_GF59RCyM1lT1W-Wz";

    const formData = new FormData(e.target);

    const payload = {
        username: "Formulaire Site Web",
        embeds: [{
            title: "📨 Nouveau message de contact",
            color: 0x5865f2,
            fields: [
                {
                    name: "👤 Nom",
                    value: formData.get("Nom") || "Non renseigné",
                },
                {
                    name: "📧 Email",
                    value: formData.get("Email") || "Non renseigné",
                },
                {
                    name: "🎮 Pseudo Discord",
                    value: formData.get("Pseudo Discord") || "Non renseigné"
                },
                {
                    name: "📌 Objet",
                    value: formData.get("Objet") || "Non renseigné"
                },
                {
                    name: "💬 Message",
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
