// Checkout Functionality
let keranjang = [];

document.addEventListener('DOMContentLoaded', function() {
    loadPilihBuku();
    
    // Tambah ke Keranjang
    document.getElementById('tambahKeranjangBtn').addEventListener('click', tambahKeKeranjang);
    
    // Checkout Form
    document.getElementById('checkoutForm').addEventListener('submit', prosesCheckout);
    
    loadKeranjang();
});

function loadPilihBuku() {
    const select = document.getElementById('pilihBuku');
    select.innerHTML = '<option value="">-- Pilih Buku --</option>';
    
    dataKatalogBuku.forEach(buku => {
        if (buku.stok > 0) {
            const option = document.createElement('option');
            option.value = buku.id;
            option.textContent = `${buku.judul} - Rp ${buku.harga.toLocaleString('id-ID')} (Stok: ${buku.stok})`;
            option.dataset.harga = buku.harga;
            option.dataset.stok = buku.stok;
            select.appendChild(option);
        }
    });
}

function tambahKeKeranjang() {
    const select = document.getElementById('pilihBuku');
    const jumlah = parseInt(document.getElementById('jumlahBuku').value);
    
    if (!select.value) {
        alert('Pilih buku terlebih dahulu!');
        return;
    }
    
    const bukuId = parseInt(select.value);
    const buku = dataKatalogBuku.find(b => b.id === bukuId);
    
    if (jumlah > buku.stok) {
        alert('Stok tidak mencukupi! Stok tersedia: ' + buku.stok);
        return;
    }
    
    // Cek apakah buku sudah ada di keranjang
    const existingItem = keranjang.find(item => item.id === bukuId);
    
    if (existingItem) {
        existingItem.jumlah += jumlah;
    } else {
        keranjang.push({
            id: buku.id,
            judul: buku.judul,
            harga: buku.harga,
            jumlah: jumlah
        });
    }
    
    loadKeranjang();
    alert('Buku berhasil ditambahkan ke keranjang!');
    
    // Reset form
    select.value = '';
    document.getElementById('jumlahBuku').value = 1;
}

function loadKeranjang() {
    const tbody = document.getElementById('keranjangBody');
    tbody.innerHTML = '';
    
    let total = 0;
    
    keranjang.forEach((item, index) => {
        const subtotal = item.harga * item.jumlah;
        total += subtotal;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.judul}</td>
            <td>Rp ${item.harga.toLocaleString('id-ID')}</td>
            <td>
                <input type="number" value="${item.jumlah}" min="1" 
                       onchange="updateJumlah(${index}, this.value)" 
                       style="width: 60px;">
            </td>
            <td>Rp ${subtotal.toLocaleString('id-ID')}</td>
            <td>
                <button onclick="hapusDariKeranjang(${index})" class="btn-delete">Hapus</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    document.getElementById('totalHarga').textContent = total.toLocaleString('id-ID');
}

function updateJumlah(index, jumlahBaru) {
    jumlahBaru = parseInt(jumlahBaru);
    
    if (jumlahBaru < 1) {
        alert('Jumlah minimal 1');
        return;
    }
    
    const item = keranjang[index];
    const buku = dataKatalogBuku.find(b => b.id === item.id);
    
    if (jumlahBaru > buku.stok) {
        alert('Stok tidak mencukupi! Stok tersedia: ' + buku.stok);
        return;
    }
    
    keranjang[index].jumlah = jumlahBaru;
    loadKeranjang();
}

function hapusDariKeranjang(index) {
    if (confirm('Hapus item ini dari keranjang?')) {
        keranjang.splice(index, 1);
        loadKeranjang();
    }
}

function prosesCheckout(e) {
    e.preventDefault();
    
    if (keranjang.length === 0) {
        alert('Keranjang masih kosong!');
        return;
    }
    
    const nama = document.getElementById('namaPemesan').value;
    const email = document.getElementById('emailPemesan').value;
    const telepon = document.getElementById('teleponPemesan').value;
    const alamat = document.getElementById('alamatPemesan').value;
    const pembayaran = document.querySelector('input[name="pembayaran"]:checked').value;
    
    const total = keranjang.reduce((sum, item) => sum + (item.harga * item.jumlah), 0);
    
    const nomorDO = 'DO' + String(nextOrderId++).padStart(3, '0');
    
    const pesanan = {
        nomorDO: nomorDO,
        tanggal: new Date().toISOString().split('T')[0],
        pemesan: {
            nama: nama,
            email: email,
            telepon: telepon,
            alamat: alamat
        },
        items: [...keranjang],
        pembayaran: pembayaran,
        total: total,
        status: 'Diproses'
    };
    
    // Simpan pesanan
    dataPesanan.push(pesanan);
    
    alert(`Pesanan berhasil! Nomor DO: ${nomorDO}\nTotal: Rp ${total.toLocaleString('id-ID')}\n\nSimpan nomor DO untuk tracking pengiriman.`);
    
    // Reset
    keranjang = [];
    loadKeranjang();
    document.getElementById('checkoutForm').reset();
}