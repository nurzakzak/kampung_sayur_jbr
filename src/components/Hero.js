import { Play, Heart } from "lucide-react";
import { hero } from "@/data/dataSitus";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800 text-ivory">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        <div>
          <p className="font-heading text-2xl font-semibold text-gold-400 md:text-3xl">{hero.label}</p>
          <h1 className="mt-2 font-heading text-3xl font-bold leading-[1.15] md:text-5xl">{hero.judul}</h1>
          <p className="mt-4 max-w-md text-base text-ivory/85">{hero.subjudul}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#kegiatan" className="tombol-putih"><Play size={18} /> Lihat Kegiatan</a>
            <a href="#donasi" className="tombol-emas"><Heart size={18} /> Ayo Donasi</a>
          </div>
        </div>

        {/* Foto kegiatan. Kalau belum ada foto, tampil kotak penanda. */}
        <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-gold-600/40 bg-forest-800">
          {hero.foto ? (
            <img src={hero.foto} alt="Kegiatan Kampung Sayur Jum'at Barokah" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-ivory/60">Foto kegiatan (isi di dataSitus.js)</div>
          )}
        </div>
      </div>
    </section>
  );
}
