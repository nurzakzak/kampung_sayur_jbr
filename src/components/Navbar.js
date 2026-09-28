"use client"; // butuh "use client" karena ada tombol menu yang bisa diklik (useState)
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { menu } from "@/data/dataSitus";

export default function Navbar() {
  const [terbuka, setTerbuka] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-garis bg-warm/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:h-20">
        <a href="#" className="font-heading text-lg font-bold leading-tight text-forest-900">
          Kampung Sayur<br />Jum&apos;at Barokah
        </a>

        {/* Menu desktop */}
        <ul className="hidden gap-8 text-sm font-semibold md:flex">
          {menu.map((m) => (
            <li key={m.nama}><a href={m.link} className="hover:text-gold-700">{m.nama}</a></li>
          ))}
        </ul>
        <a href="#donasi" className="tombol-emas hidden h-11 md:inline-flex">Ayo Donasi</a>

        {/* Tombol menu HP */}
        <button className="md:hidden" aria-label="Buka menu" onClick={() => setTerbuka(!terbuka)}>
          {terbuka ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {terbuka && (
        <ul className="flex flex-col gap-4 border-t border-garis px-4 py-4 text-sm font-semibold md:hidden">
          {menu.map((m) => (
            <li key={m.nama}><a href={m.link} onClick={() => setTerbuka(false)}>{m.nama}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
