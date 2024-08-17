document.addEventListener('DOMContentLoaded', function () {
    const signOutButton = document.getElementById('SignOutButton');
    
    console.log(signOutButton); if (signOutButton) {
        signOutButton.addEventListener('click', function () {
            window.location.href = '../pc/signin.html';
        });
    } else {
        console.error('SignOutButton not found.');
    }
});
