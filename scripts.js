document.addEventListener('DOMContentLoaded', function() {
    const loginDiscordButton = document.getElementById('login-discord');
    const profileSettingsSection = document.getElementById('profile-settings');
    const profileForm = document.getElementById('profile-form');

    // Simular autenticación con Discord (para este ejemplo)
    loginDiscordButton.addEventListener('click', function() {
        alert('Autenticado con Discord');
        profileSettingsSection.classList.remove('hidden');
    });

    // Guardar cambios del perfil (simulado)
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const profilePic = document.getElementById('profile-pic').value;
        const backgroundColor = document.getElementById('background-color').value;
        const gradientColor = document.getElementById('gradient-color').value;

        // Simular guardado (en realidad aquí iría el código para guardar en una base de datos o backend)
        console.log('Perfil guardado:');
        console.log(`Nombre: ${name}`);
        console.log(`Descripción: ${description}`);
        console.log(`Foto de Perfil: ${profilePic}`);
        console.log(`Color de Fondo: ${backgroundColor}`);
        console.log(`Color Degradado: ${gradientColor}`);

        alert('Cambios guardados exitosamente');
    });
});
