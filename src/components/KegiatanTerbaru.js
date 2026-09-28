import { ArrowRight } from "lucide-react";
import { kegiatan } from "@/data/dataSitus";

export default function KegiatanTerbaru() {
  return (
    <section id="kegiatan" className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
      <h2 className="font-heading text-2xl font-bold text-forest-900 md:text-3xl">Update Kegiatan Terbaru</h2>
      <p className="mt-2 text-muted">Lihat bagaimana keberkahan terus tumbuh bersama warga.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {kegiatan.map((k) => (
          <article key={k.id} className="kartu overflow-hidden">
            <div className="aspect-video bg-forest-800/10">
              {k.foto ? (
                <img src={k.foto} alt={k.judul} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-xs text-muted">Foto kegiatan</div>
              )}
            </div>
            <div className="p-5">
              <span className="text-xs font-medium text-gold-700">{k.kategori}</span>
              <h3 className="mt-1 font-heading text-lg font-semibold leading-snug">{k.judul}</h3>
              <p className="mt-1 text-xs font-medium text-muted">{k.tanggal}</p>
              <p className="mt-2 line-clamp-3 text-sm text-ink/80">{k.ringkas}</p>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-forest-900">
                Selengkapnya <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
