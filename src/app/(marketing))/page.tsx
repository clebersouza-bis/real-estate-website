import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* O MENU FOI REMOVIDO DAQUI POIS AGORA ESTÁ NO LAYOUT.TSX */}

      {/* Hero Section */}
      <section className="py-24 text-center px-4 bg-linear-to-b from-white to-slate-50">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl text-slate-900">
          Recover Your <span className="text-blue-600 italic">Tax Sale Surplus</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-600 leading-relaxed">
          Did your property sell at a tax auction for more than the taxes owed? 
          The government might be holding your money. We help you get it back.
        </p>
        <div className="mt-12">
          <Link href="/auth/login" className="text-lg font-bold bg-blue-600 text-white px-10 py-5 rounded-full hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all hover:scale-105 inline-block">
            Start Your Recovery Now
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <ServiceCard 
            title="Forensic Auditing" 
            desc="We identify hidden excess proceeds from government tax sales across the US using proprietary tracking data." 
          />
          <ServiceCard 
            title="Legal Representation" 
            desc="Our legal partners handle all filings, petitions, and court hearings required for a successful fund recovery." 
          />
          <ServiceCard 
            title="No Upfront Fees" 
            desc="Our success-based model means you pay nothing. We invest all legal and research costs ourselves." 
          />
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
      <div className="w-12 h-1 bg-blue-600 mb-6 group-hover:w-20 transition-all"></div>
      <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}