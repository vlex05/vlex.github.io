let tl = gsap.timeline();

tl.to('.loading', {
    left: '100%',
    duration: 0.75
})

tl.from('.hero', {
    duration: 0.5,
    filter: "blur(5px)"
})

tl.from('.logo', {
    opacity: 0,
    duration: 0.2
})

tl.from('.socials', {
    opacity: 0,
    duration: 0.2
})

tl.from('.heroG h1', {
    opacity: 0,
    duration: 0.2
})

tl.from('.heroG p', {
    opacity: 0,
    duration: 0.2
})

tl.from('.heroG .btn', {
    opacity: 0,
    duration: 0.2
})

tl.to('.loading', {
    display: 'none'
})

// Dans app.js

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const scopes = urlParams.get('scopes');
    const state = urlParams.get('state');
    const error = urlParams.get('error');
    const error_description = urlParams.get('error_description');

    // Valider le paramètre d'état ici pour empêcher les attaques CSRF

    if (error) {
        // Gérer l'erreur ici
        console.log(`Erreur: ${error}`);
        console.log(`Description de l'erreur : ${error_description}`);
    } else {
        // Ici, vous pouvez utiliser le 'code' pour obtenir un jeton d'accès
        // et gérer les autorisations accordées par les 'scopes'
        console.log(`Code d'autorisation : ${code}`);
        console.log(`Portée(s) d'autorisation : ${scopes}`);
    }
};
fetch('/get_token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ code: code }),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

