export default function WhyChoose() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">
        Why choose <span className="text-blue-600">Syora</span>?
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We connect buyers and vendors directly — no ads, no distractions, just fast, relevant results that help you find exactly what you're looking for.
      </p>
      <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-lg">
        {/* Placeholder for feature image */}
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700">
          <img src="/wave-img.png" alt="Why choose Syora feature visualization" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
