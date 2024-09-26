// Função para alternar o modo escuro
function toggleDarkMode() {
    const body = document.body;
    const isDarkModeEnabled = body.classList.toggle('dark-mode');

    // Salvar a preferência do usuário somente se houver alteração
    localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
}

// Função para carregar a preferência do usuário
function loadDarkModePreference() {
    const darkModePreference = localStorage.getItem('darkMode');

    // Aplica o modo escuro se a preferência for 'enabled'
    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Carregar a preferência do usuário quando a página for carregada
document.addEventListener('DOMContentLoaded', loadDarkModePreference);

// Adicionar evento de clique ao botão de alternância do modo escuro
const darkModeToggle = document.querySelector('.dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}
