document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  if(email === 'admin@mail.com' && pass === '12345') {
    localStorage.setItem('userEmail', email);
    alert('Login berhasil!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Email atau password salah!');
  }
});
const modal = document.getElementById('modalBox');
const closeBtn = document.querySelector('.close');
const forgotBtn = document.getElementById('forgotBtn');
const registerBtn = document.getElementById('registerBtn');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
forgotBtn?.addEventListener('click', () => {
  modal.style.display = 'block';
  modalTitle.textContent = 'Lupa Password';
  modalText.textContent = 'Silakan hubungi admin untuk reset password.';
});
registerBtn?.addEventListener('click', () => {
  modal.style.display = 'block';
  modalTitle.textContent = 'Daftar Akun Baru';
  modalText.textContent = 'Form pendaftaran sedang dalam pengembangan.';
});
closeBtn?.addEventListener('click', () => modal.style.display = 'none');