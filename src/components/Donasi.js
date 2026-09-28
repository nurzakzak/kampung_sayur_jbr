"use client"; // butuh "use client" karena nominal yang dipilih disimpan di useState
import { useState } from "react";
import { Heart, Landmark } from "lucide-react";
import { kampanyeMingguIni, pilihanNominal, kontak } from "@/data/dataSitus";

const rupiah = (angka) => "Rp " + angka.toLocaleString("id-ID");

export default function Donasi() {
  const [nominal, setNominal] = useState(pilihanNominal[1]);
  const persen = Math.round((kampanyeMingguIni.terkumpul / kampanyeMingguIni.target) * 100);

  // Tombol donasi membuka WhatsApp dengan pesan yang sudah terisi
  const pesan = encodeURIComponent(`Assalamu'alaikum, saya ingin donasi ${rupiah(nominal)} untuk Jum'at Berkah.`);
  const linkWa = `https://wa.me/${kontak.whatsapp}?text=${pesan}`;

  return (
    <section id="donasi" className="bg-forest-950 pb-28 pt-14 text-ivory md:pb-16">
      <div className="mx-auto max-w-[720px] px-4">
        <h2 className="font-heading text-2xl font-bold md:text-3xl">Mari Donasi Sekarang</h2>

        {/* Progres minggu ini */}
        <div className="mt-6">
          <p className="text-sm text-ivory/85">
            {kampanyeMingguIni.judul}: {kampanyeMingguIni.terkumpul} dari {kampanyeMingguIni.target} paket
          </p>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-forest-800">
            <div className="h-full rounded-full bg-gold-400" style={{ width: `${persen}%` }} />
          </div>
        </div>

        {/* Pilihan nominal */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {pilihanNominal.map((n) => (
            <button
              key={n}
              onClick={() => setNominal(n)}
              className={`h-12 rounded-xl border text-sm font-bold transition ${
                nominal === n ? "border-gold-400 bg-gold-400 text-forest-950" : "border-gold-600/50 hover:bg-forest-800"
              }`}
            >
              {rupiah(n)}
            </button>
          ))}
        </div>

        <a href={linkWa} target="_blank" rel="noopener noreferrer" className="tombol-emas mt-6 w-full">
          <Heart size={18} /> Donasi {rupiah(nominal)} via WhatsApp
        </a>

        {/* Transfer bank manual */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-gold-600/40 p-4 text-sm">
          <Landmark size={20} className="mt-0.5 shrink-0 text-gold-400" />
          <div>
            <p className="font-bold">Transfer Bank</p>
            <p>{kontak.bank}</p>
            <p className="text-ivory/70">{kontak.atasNama}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
