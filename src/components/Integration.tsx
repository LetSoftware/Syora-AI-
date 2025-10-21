// src/components/Integration.tsx
export default function Integration() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Seamlessly integrated with
        </h2>
        <p className="text-center text-gray-900 text-lg mb-6">
          the platforms you already use
        </p>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Connected to WhatsApp, Instagram, TikTok, and Shopify — where buyers and vendors already are.
        </p>

        {/* Floating Icons + Center Box */}
        <div className="relative flex justify-center items-center h-72 mb-20">
          {/* small decorative dots could be added here if needed */}

          {/* TikTok (top-left) */}
          <img
            src="/tiktok.png"
            alt="TikTok"
            className="absolute top-6 left-20 w-12 h-12 object-contain z-30"
          />

          {/* WhatsApp (left center) */}
          <img
            src="/WALogo.png"
            alt="WhatsApp"
            className="absolute left-12 top-1/2 -translate-y-1/2 w-16 h-16 object-contain z-30 shadow-md rounded-full"
          />

          {/* Center red box (centered and above layout) */}
          <div className="relative z-20">
  <img
    src="/Mailbox.png" 
    alt="SYORA Red Box"
    className=" h-64 object-contain rounded-lg "
  />
</div>


          {/* Shopify (right center) */}
          <img
            src="/Shopify.png"
            alt="Shopify"
            className="absolute right-12 top-1/2 -translate-y-1/2 w-16 h-16 object-contain z-30 shadow-md rounded-lg"
          />

          {/* Instagram (top-right) */}
          <img
            src="/IGLogo.png"
            alt="Instagram"
            className="absolute top-6 right-20 w-12 h-12 object-contain z-30"
          />
        </div>

        {/* Feature cards — two rows */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Row 1: Image on RIGHT, text card overlapping left/top of image */}
          <div className="relative flex items-center justify-end">
            {/* Image container aligned right */}
            <div className="w-full md:w-3/5 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/FAI.jpg"
                alt="Woman on laptop holding red box"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Overlapping text card (on top-left of the image) */}
            <div className="absolute md:top-6 md:left-6 left-4 top-4 md:w-80 bg-white rounded-3xl shadow-lg p-8 z-40">
              <h3 className="text-xl font-bold mb-3">Find Anything Instantly</h3>
              <p className="text-gray-600 text-sm mb-6">
                From fashion to real estate, SYORA makes product discovery easy, fast, smart, and conversational.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow">
                Search Now
              </button>
            </div>
          </div>

          {/* Row 2: Image on LEFT, text card overlapping right/top of image */}
          <div className="relative flex items-center justify-start">
            {/* Image container aligned left */}
            <div className="w-full md:w-3/5 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/GWA.jpg"
                alt="Person with afro celebrating"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Overlapping text card placed to the right/top of image */}
            <div className="absolute md:top-6 md:right-6 right-4 top-4 md:w-80 bg-white rounded-3xl shadow-lg p-8 z-40">
              <h3 className="text-xl font-bold mb-3">Grow Without Ads</h3>
              <p className="text-gray-600 text-sm mb-6">
                Upload via WhatsApp, connect Shopify or Instagram, and your products are searchable instantly.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow">
                Become a Vendor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
