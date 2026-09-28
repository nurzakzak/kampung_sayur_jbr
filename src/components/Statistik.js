import { statistik } from "@/data/dataSitus";

export default function Statistik() {
  return (
    <section id="dampak" className="border-y border-garis bg-warm">
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        <h2 className="text-center font-heading text-2xl font-bold text-forest-900 md:text-3xl">Alhamdulillah, 6 Tahun Melangkah</h2>
        <dl className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {statistik.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-heading text-3xl font-bold text-forest-900">{s.angka}</dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
