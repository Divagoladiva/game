document.addEventListener('DOMContentLoaded', (event) => {
    const hostBtn = document.getElementById('hostBtn');
    const joinBtn = document.getElementById('joinBtn');
    const joinPanel = document.getElementById('joinPanel');
    const joinForm = document.getElementById('joinForm');

    joinBtn.addEventListener('click', () => {
        joinPanel.classList.remove('hidden');
    });

    joinForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const pseudo = document.getElementById('pseudo').value;
        alert(`Vous avez rejoint la partie avec le pseudo : ${pseudo}`);
        // Ajoutez ici le code pour traiter l'envoi du pseudo au serveur
    });
});
