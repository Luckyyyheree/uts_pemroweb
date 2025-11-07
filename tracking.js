// Tracking Functionality
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cariBtn').addEventListener('click', cariPengiriman);
    
    // Enter key support
    document.getElementById('nomorDO').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            cariPengiriman();
        }
    });
});

function cariPengiriman() {
    const nomorDO = document.getElementById('nomorDO').value.trim().toUpperCase();
    
    if (!nomorDO) {
        alert('Masukkan nomor delivery order!');
        return;
    }
    
    const tracking = dataTracking.find(t => t.nomorDO === nomorDO);
    
    if (tracking) {
        tampilkanHasil(tracking);
    } else {
        alert('Nomor delivery order tidak ditemukan!');
        document.getElementById('trackingResult').style.display = 'none';
    }
}

function tampilkanHasil(tracking) {
    // Tampilkan section hasil
    document.getElementById('trackingResult').style.display = 'block';
    
    // Isi informasi
    document.getElementById('resultDO').textContent = tracking.nomorDO;
    document.getElementById('resultNama').textContent = tracking.namaPemesan;
    document.getElementById('resultTanggal').textContent = formatTanggal(tracking.tanggalKirim);
    document.getElementById('resultEkspedisi').textContent = tracking.ekspedisi;
    document.getElementById('resultPaket').textContent = tracking.jenisPaket;
    document.getElementById('resultTotal').textContent = 'Rp ' + tracking.totalPembayaran.toLocaleString('id-ID');
    
    // Update progress bar
    updateProgressBar(tracking.status);
    
    // Tampilkan history
    tampilkanHistory(tracking.history);
    
    // Scroll ke hasil
    document.getElementById('trackingResult').scrollIntoView({ behavior: 'smooth' });
}

function updateProgressBar(status) {
    const progressFill = document.getElementById('progressFill');
    const steps = document.querySelectorAll('.step');
    
    // Reset semua step
    steps.forEach(step => step.classList.remove('active'));
    
    // Aktifkan step sesuai status
    for (let i = 0; i < status; i++) {
        steps[i].classList.add('active');
    }
    
    // Update progress bar width
    const percentage = (status / 4) * 100;
    progressFill.style.width = percentage + '%';
}

function tampilkanHistory(history) {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    
    history.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = '<strong>' + item.tanggal + '</strong><br>' + item.status;
        historyList.appendChild(li);
    });
}

function formatTanggal(tanggal) {
    const date = new Date(tanggal);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}