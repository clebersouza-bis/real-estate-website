export default function ServicesPage() {
  const services = [
    { title: "Forensic Records Audit", desc: "Our team meticulously audits county tax sale records to identify surplus funds that haven't been claimed by former owners." },
    { title: "Legal Claim Filing", desc: "We handle the entire legal petition process, working with specialized attorneys to ensure all court requirements are met." },
    { title: "Asset Recovery Research", desc: "Using advanced skip-tracing technology, we find the rightful heirs or owners of unclaimed government-held assets." }
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Our Expertise</h1>
        <p className="text-xl text-slate-600 mb-16">Turning complex government procedures into successful recoveries.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-blue-700 mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}