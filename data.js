// Data Katalog Buku
const dataKatalogBuku = [
    {
        id: 1,
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        kategori: "Fiksi",
        harga: 85000,
        stok: 15,
        deskripsi: "Novel tentang perjuangan anak-anak Belitung"
    },
    {
        id: 2,
        judul: "Bumi Manusia",
        penulis: "Pramoedya Ananta Toer",
        kategori: "Fiksi",
        harga: 95000,
        stok: 10,
        deskripsi: "Tetralogi Pulau Buru bagian pertama"
    },
    {
        id: 3,
        judul: "Atomic Habits",
        penulis: "James Clear",
        kategori: "Non-Fiksi",
        harga: 120000,
        stok: 20,
        deskripsi: "Cara mudah membangun kebiasaan baik"
    },
    {
        id: 4,
        judul: "Clean Code",
        penulis: "Robert C. Martin",
        kategori: "Teknologi",
        harga: 150000,
        stok: 8,
        deskripsi: "Panduan menulis kode yang bersih"
    },
    {
        id: 5,
        judul: "Matematika Diskrit",
        penulis: "Rinaldi Munir",
        kategori: "Pendidikan",
        harga: 98000,
        stok: 12,
        deskripsi: "Buku matematika untuk ilmu komputer"
    },
    {
        id: 6,
        judul: "Sapiens",
        penulis: "Yuval Noah Harari",
        kategori: "Non-Fiksi",
        harga: 135000,
        stok: 18,
        deskripsi: "Sejarah singkat manusia"
    },
    {
        id: 7,
        judul: "JavaScript: The Good Parts",
        penulis: "Douglas Crockford",
        kategori: "Teknologi",
        harga: 110000,
        stok: 7,
        deskripsi: "Bagian terbaik dari JavaScript"
    },
    {
        id: 8,
        judul: "Cantik Itu Luka",
        penulis: "Eka Kurniawan",
        kategori: "Fiksi",
        harga: 92000,
        stok: 14,
        deskripsi: "Novel magis realis Indonesia"
    }
];

// Data User untuk Login
const dataUser = [
    {
        email: "admin@tokobuku.com",
        password: "admin123",
        nama: "Administrator"
    },
    {
        email: "user@tokobuku.com",
        password: "user123",
        nama: "User Demo"
    }
];

// Data Tracking Pengiriman
const dataTracking = [
    {
        nomorDO: "DO001",
        namaPemesan: "Budi Santoso",
        tanggalKirim: "2024-11-01",
        ekspedisi: "JNE",
        jenisPaket: "REG",
        totalPembayaran: 350000,
        status: 4,
        history: [
            { tanggal: "2024-11-01 10:00", status: "Pesanan dikemas" },
            { tanggal: "2024-11-01 14:30", status: "Paket dikirim dari gudang" },
            { tanggal: "2024-11-02 08:15", status: "Paket tiba di Jakarta" },
            { tanggal: "2024-11-03 09:45", status: "Paket diterima oleh penerima" }
        ]
    },
    {
        nomorDO: "DO002",
        namaPemesan: "Siti Aminah",
        tanggalKirim: "2024-11-03",
        ekspedisi: "SiCepat",
        jenisPaket: "BEST",
        totalPembayaran: 240000,
        status: 3,
        history: [
            { tanggal: "2024-11-03 09:00", status: "Pesanan dikemas" },
            { tanggal: "2024-11-03 15:00", status: "Paket dikirim dari gudang" },
            { tanggal: "2024-11-04 10:30", status: "Paket tiba di Bandung" }
        ]
    },
    {
        nomorDO: "DO003",
        namaPemesan: "Ahmad Fauzi",
        tanggalKirim: "2024-11-05",
        ekspedisi: "J&T",
        jenisPaket: "EZ",
        totalPembayaran: 180000,
        status: 2,
        history: [
            { tanggal: "2024-11-05 11:00", status: "Pesanan dikemas" },
            { tanggal: "2024-11-05 16:00", status: "Paket dikirim dari gudang" }
        ]
    }
];

// Data Pesanan
let dataPesanan = [];

// Counter untuk ID
let nextBookId = dataKatalogBuku.length + 1;
let nextOrderId = 1;