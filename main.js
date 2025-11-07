function greetingTime() {
  const jam = new Date().getHours();
  let greet = '';
  if (jam < 12) greet = 'Selamat Pagi';
  else if (jam < 18) greet = 'Selamat Siang';
  else greet = 'Selamat Sore';
  document.getElementById('greeting').textContent = greet + ',';
}
function tampilkanUser() {
  const email = localStorage.getItem('userEmail');
  if (email) {
    document.getElementById('userEmail').textContent = 'Login sebagai: ' + email;
  }
}
function hitungBuku() {
  if (typeof dataKatalogBuku !== 'undefined') {
    document.getElementById('jumlahBuku').textContent = dataKatalogBuku.length;
  }
}
if (document.getElementById('greeting')) {
  greetingTime();
  tampilkanUser();
  hitungBuku();
}