document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const button = document.getElementById('button');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        button.classList.toggle('active');
    }

    if (button) {
        button.addEventListener('click', toggleSidebar);
    }
});