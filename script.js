document.addEventListener('DOMContentLoaded', (event) => {
    const hostBtn = document.getElementById('hostBtn');
    const joinBtn = document.getElementById('joinBtn');
    const joinPanel = document.getElementById('joinPanel');
    const joinForm = document.getElementById('joinForm');
    const hostPanel = document.getElementById('hostPanel');
    const pseudoList = document.getElementById('pseudoList');

    let pseudos = [];

    joinBtn.addEventListener('click', () => {
        joinPanel.classList.remove('hidden');
        hostPanel.classList.add('hidden');
    });

    hostBtn.addEventListener('click', () => {
        hostPanel.classList.remove('hidden');
        joinPanel.classList.add('hidden');
        displayPseudos();
    });

    joinForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const pseudo = document.getElementById('pseudo').value;
        pseudos.push(pseudo);
        alert(`Vous avez rejoint la partie avec le pseudo : ${pseudo}`);
        joinPanel.classList.add('hidden');
        document.getElementById('pseudo').value = '';
    });

    function displayPseudos() {
        pseudoList.innerHTML = '';
        pseudos.forEach(pseudo => {
            const li = document.createElement('li');
            li.textContent = pseudo;
            pseudoList.appendChild(li);
        });
    }
});
