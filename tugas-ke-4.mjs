const transaksi = [
    { id: 1, barang: "Buku", harga: 15000, qty: 2, kategori: "ATK" },
    { id: 2, barang: "Pulpen", harga: 5000, qty: 3, kategori: "ATK" },
    { id: 3, barang: "Laptop", harga: 7500000, qty: 1, kategori: "Elektronik" },
    { id: 4, barang: "Pensil", harga: 3000, qty: 5, kategori: "ATK" },
    { id: 5, barang: "Mouse", harga: 100000, qty: 2, kategori: "Elektronik" },
    { id: 6, barang: "Penghapus", harga: 2000, qty: 4, kategori: "ATK" }
];

// 1. Destructuring dan arrow function
const tampilkanTransaksi = ({ id, barang, harga, qty, kategori }) => ({
    id,
    barang,
    harga,
    qty,
    kategori
});

// 2. filter() untuk menyaring kategori ATK
const transaksiATK = transaksi.filter(
    ({ kategori }) => kategori === "ATK"
);

// 3. map() untuk menghitung subtotal setiap barang
const hitungSubtotal = (data) =>
    data.map(({ id, barang, harga, qty, kategori }) => ({
        id,
        barang,
        harga,
        qty,
        kategori,
        subtotal: harga * qty
    }));

// 4. Menghitung subtotal transaksi kategori ATK
const hasilATK = hitungSubtotal(transaksiATK);

// 5. reduce() untuk menghitung total keseluruhan kategori ATK
const totalATK = hasilATK.reduce(
    (total, { subtotal }) => total + subtotal,
    0
);

// 6. map() untuk menghitung subtotal seluruh transaksi
const semuaSubtotal = hitungSubtotal(transaksi);

// 7. reduce() untuk menghitung total seluruh transaksi belanja
const totalKeseluruhan = semuaSubtotal.reduce(
    (total, { subtotal }) => total + subtotal,
    0
);

// Menampilkan hasil program
console.log("=== DATA TRANSAKSI BELANJA ===");
console.table(transaksi.map(tampilkanTransaksi));

console.log("\n=== TRANSAKSI KATEGORI ATK ===");
console.table(hasilATK);

console.log(
    "Total belanja kategori ATK: Rp" +
    totalATK.toLocaleString("id-ID")
);

console.log("\n=== SUBTOTAL SELURUH TRANSAKSI ===");
console.table(semuaSubtotal);

console.log(
    "Total keseluruhan belanja: Rp" +
    totalKeseluruhan.toLocaleString("id-ID")
);