// Login Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const lupaPasswordBtn = document.getElementById('lupaPasswordBtn');
    const daftarBtn = document.getElementById('daftarBtn');
    const lupaPasswordModal = document.getElementById('lupaPasswordModal');
    const daftarModal = document.getElementById('daftarModal');
    const closeBtns = document.getElementsByClassName('close');

    // Login Form Submit
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validasi dengan data dummy
        const user = dataUser.find(u => u.email === email && u.password === password);

        if (user) {
            // Simpan data user ke localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert('Login berhasil! Selamat datang ' + user.nama);
            window.location.href = 'dashboard.html';
        } else {
            alert('Email atau password yang anda masukkan salah!');
        }
    });

    // Open Modal Lupa Password
    lupaPasswordBtn.addEventListener('click', function(e) {
        e.preventDefault();
        lupaPasswordModal.style.display = 'block';
    });

    // Open Modal Daftar
    daftarBtn.addEventListener('click', function(e) {
        e.preventDefault();
        daftarModal.style.display = 'block';
    });

    // Close Modal
    Array.from(closeBtns).forEach(btn => {
        btn.addEventListener('click', function() {
            lupaPasswordModal.style.display = 'none';
            daftarModal.style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === lupaPasswordModal) {
            lupaPasswordModal.style.display = 'none';
        }
        if (e.target === daftarModal) {
            daftarModal.style.display = 'none';
        }
    });

    // Lupa Password Form
    document.getElementById('lupaPasswordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('resetEmail').value;
        alert('Link reset password telah dikirim ke ' + email);
        lupaPasswordModal.style.display = 'none';
    });

    // Daftar Form
    document.getElementById('daftarForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('namaLengkap').value;
        const email = document.getElementById('emailDaftar').value;
        const password = document.getElementById('passwordDaftar').value;
        const konfirmasi = document.getElementById('konfirmasiPassword').value;

        if (password !== konfirmasi) {
            alert('Password dan konfirmasi password tidak cocok!');
            return;
        }

        if (password.length < 6) {
            alert('Password minimal 6 karakter!');
            return;
        }

        alert('Pendaftaran berhasil! Silakan login dengan akun baru Anda.');
        daftarModal.style.display = 'none';
        document.getElementById('daftarForm').reset();
    });
});