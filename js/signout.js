document.addEventListener('DOMContentLoaded', function () {
    const signOutButton = document.getElementById('SignOutButton');
    
    if (signOutButton) {
        signOutButton.addEventListener('click', function () {
            alert('You have been signed out.');
            
        });
    } else {
        console.error('SignOutButton not found.');
    }
});
