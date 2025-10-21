export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block border-t-2 border-gray-300 w-24 mb-4"></div>
          <h2 className="text-2xl font-bold">HOW IT WORKS</h2>
          <p className="text-gray-600 mt-2">
            A simple three-step process that makes product discovery effortless
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
          {/* Step 1 */}
          
          <div className="order-1">
      <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
      <h3 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-none">
      01
     </h3>
     <h4 className="text-2xl font-semibold text-gray-900">Ask Naturally</h4>
     </div>
     <p className="text-gray-600 text-sm mt-2">
     Type in what you're looking for, and SYORA's AI agent will understand exactly what you're after.
    </p>
</div>


          <div className="order-2 flex justify-center">
            <div className="w-64 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-500">
              <img
                src="/Girl-read.jpg"
                alt="Person using laptop for natural search query"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-3"></div> {/* Empty for spacing */}
          
          {/* Step 2 */}
          <div className="order-4"></div> {/* Empty for spacing */}
          
          <div className="order-5 flex justify-center">
            <div className="w-64 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-500">
              <img
                src="/Girl-tech.jpg"
                alt="Person using mobile phone with AI matching interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        <div className="order-6">
      <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
      <h3 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-none">
      02
     </h3>
     <h4 className="text-2xl font-semibold text-gray-900">AI Matching</h4>
     </div>
     <p className="text-gray-600 text-sm mt-2">
    SYORA scans multiple social platforms and matches you with vendors who have exactly what you need, instantly.
    </p>
</div>


          {/* Step 3 */}
          <div className="order-7">
      <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
      <h3 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-none">
      03
     </h3>
     <h4 className="text-2xl font-semibold text-gray-900">Connect Directly</h4>
     </div>
     <p className="text-gray-600 text-sm mt-2">
     Click through to WhatsApp, Instagram, or TikTok to reach out and complete your purchase via the vendor's website.
    </p>
</div>

          <div className="order-8 flex justify-center">
            <div className="w-64 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-500">
              <img
                src="/Connection.jpg"
                alt="Computer screen showing connection interface with social platforms"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-9"></div> {/* Empty for spacing */}
        </div>
      </div>
    </section>
  );
}
