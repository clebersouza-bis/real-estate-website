export default function AboutPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Bridging the Gap Between You and Your Funds</h1>
        <div className="prose prose-slate text-lg text-slate-600 space-y-6">
          <p>
            Every year, thousands of properties are sold at tax auctions across the country. Often, these properties sell for more than the taxes owed, creating a <strong>Surplus</strong>. 
          </p>
          <p>
            Government agencies are not required to notify you about this money. Without professional intervention, these funds eventually escheat or become permanent property of the state. 
          </p>
          <p className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 italic">
            Our mission is simple: To ensure that no homeowner loses their equity to the government due to a lack of information or legal resources.
          </p>
          <p>
            We operate on a <strong>Success-Only basis</strong>. We invest our time, legal fees, and research costs upfront. We only receive a fee if we successfully put money back in your pocket.
          </p>
        </div>
      </div>
    </div>
  );
}