// SEMUA ISI TEKS SITUS ADA DI SINI (sementara sebelum pakai Supabase).
// Angka & rekening di bawah ini DUMMY. Ganti dengan data asli sebelum dipublikasikan.

export const hero = {
  label: "Milad ke-6",
  judul: "Enam Tahun Berbagi Keberkahan di Kampung Sayur Jum'at Barokah",
  subjudul: "Terus menebar kebaikan dan merawat harapan bersama warga sejak 21 Agustus 2020",
  foto: null, // contoh nanti: "/foto/hero.webp" (file taruh di folder public/foto)
};

export const menu = [
  { nama: "Beranda", link: "#" },
  { nama: "Kegiatan", link: "#kegiatan" },
  { nama: "Dampak", link: "#dampak" },
  { nama: "Donasi", link: "#donasi" },
];

export const kegiatan = [
  { id: 1, kategori: "Kunjungan", judul: "Kunjungan Milad ke-6", tanggal: "Jum'at, 21 Agustus 2026", ringkas: "Silaturahmi bersama komunitas dan warga Kampung Sayur Jum'at Barokah.", foto: null },
  { id: 2, kategori: "Distribusi", judul: "Pembagian 200 Paket Sayur", tanggal: "Jum'at, 14 Agustus 2026", ringkas: "Paket sayuran segar dibagikan kepada warga yang membutuhkan.", foto: null },
  { id: 3, kategori: "Distribusi", judul: "Pembagian Paket Sembako", tanggal: "Jum'at, 7 Agustus 2026", ringkas: "Paket sembako untuk keluarga penerima manfaat.", foto: null },
];

export const statistik = [
  { angka: "6", label: "Tahun berbagi" },
  { angka: "200+", label: "Warga terbantu per minggu" },
  { angka: "50+", label: "Relawan aktif" },
  { angka: "Rp 000", label: "Total donasi disalurkan" }, // GANTI dengan angka asli
];

export const kampanyeMingguIni = {
  judul: "Jum'at Berkah minggu ini",
  target: 200, // jumlah paket
  terkumpul: 130,
};

export const pilihanNominal = [10000, 25000, 50000, 100000];

export const kontak = {
  whatsapp: "6281234567890", // GANTI: pakai awalan 62, tanpa + dan tanpa 0
  bank: "Nama Bank - 1234567890",
  atasNama: "a.n. Kampung Sayur Jum'at Barokah",
};
