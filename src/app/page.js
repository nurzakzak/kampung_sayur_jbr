// Halaman beranda = susunan komponen dari atas ke bawah.
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KegiatanTerbaru from "@/components/KegiatanTerbaru";
import Statistik from "@/components/Statistik";
import Donasi from "@/components/Donasi";
import Footer from "@/components/Footer";

export default function Beranda() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <KegiatanTerbaru />
        <Statistik />
        <Donasi />
      </main>
      <Footer />

      {/* Tombol donasi menempel di bawah layar HP */}
      <a href="#donasi" className="tombol-emas fixed inset-x-4 bottom-4 z-50 md:hidden">
        Donasi Sekarang
      </a>
    </>
  );
}
