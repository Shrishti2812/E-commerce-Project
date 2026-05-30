
function Contact(){
    return(
        <>
   <div className="min-h-screen bg-gray-100">
    <section className="bg-gray-50 py-8">
  <div className="max-w-5xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Contact Us
      </h1>

      <p className="text-gray-600 max-w-xl mx-auto">
        Questions about your order, shipping, returns, or anything else?
        We're here to help.
      </p>
    </div>

    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-20">

      {/* Form */}
      <div>
        <h2 className="text-xl font-semibold mb-5">
          Send us a message
        </h2>

        <form className="space-y-4">

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2.5 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2.5 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <input
            type="text"
            placeholder="Order Number (Optional)"
            className="w-full px-3 py-2.5 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            rows={5}
            placeholder="How can we help?"
            className="w-full px-3 py-2.5 bg-white rounded-lg border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
          >
            Send Message
          </button>

        </form>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-8 items-center">
        <h2 className="text-xl font-semibold mb-5">
          Customer Support
        </h2>

        <div className="space-y-5">

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
              Email
            </p>
            <p className="font-medium">
              support@yourstore.com
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
              Phone
            </p>
            <p className="font-medium">
              +1 (123) 456-7890
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
              Support Hours
            </p>
            <p className="font-medium">
              Mon – Fri · 9AM – 6PM
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
              Address
            </p>
            <p className="font-medium">
              123 Main Street, New York
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
    <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2>Frequently Asked Questions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <div className="border border-gray-300 shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">How can I track my order?</h3>
            <p className="text-gray-600">You can track your order by logging into your account and visiting the "My Orders" section.</p>
          </div>
          <div className="border border-gray-300 shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">What is your return policy?</h3>
            <p className="text-gray-600">We offer a 30-day return policy for most items. Please visit our Returns page for more details.</p>
          </div>
          <div className="border border-gray-300 shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">Do you offer international shipping?</h3>
            <p className="text-gray-600">Yes, we ship to select countries worldwide. Please check our Shipping Information page for the list of available countries.</p>
          </div>
        </div>
        </section>
    </div>
 
        </>
    )
}
export default Contact;