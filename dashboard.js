// Dashboard Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        alert('Silakan login terlebih dahulu!');
        window.location.href = 'login.html';
        return;
    }

    // Set Greeting
    setGreeting();
    
    // Update time every second
    setInterval(updateTime, 1000);
    updateTime();

    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Yakin ingin logout?')) {
                localStorage.removeItem('currentUser');
                window.location.href = 'login.html';
            }
        });
    }
});

function setGreeting() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const greetingText = document.getElementById('greetingText');
    const hour = new Date().getHours();
    let greeting = '';

    if (hour >= 5 && hour < 11) {
        greeting = 'Selamat Pagi';
    } else if (hour >= 11 && hour < 15) {
        greeting = 'Selamat Siang';
    } else if (hour >= 15 && hour < 18) {
        greeting = 'Selamat Sore';
    } else {
        greeting = 'Selamat Malam';
    }

    greetingText.textContent = greeting + ', ' + currentUser.nama + '!';
}

function updateTime() {
    const currentTime = document.getElementById('currentTime');
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    currentTime.textContent = now.toLocaleDateString('id-ID', options);
}