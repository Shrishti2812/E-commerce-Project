
function Contact(){
    return(
        <>
   <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
          Contact Support
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We're Here To Help
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Need help with an order, returns, shipping, or have a question?
          Our support team is ready to assist you.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.7fr_1fr] gap-10">

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
          <h2 className="text-2xl font-semibold mb-6">
            Send us a message
          </h2>

          <form className="space-y-5">

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Order Number (Optional)"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <textarea
              rows={6}
              placeholder="How can we help?"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-semibold mb-6">
              Customer Support
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4 items-start">
                <div className="h-11 w-11 rounded-xl bg-indigo-100 flex items-center justify-center">
                  📧
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">
                    support@shopsphere.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-11 w-11 rounded-xl bg-indigo-100 flex items-center justify-center">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">
                    +1 (123) 456-7890
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-11 w-11 rounded-xl bg-indigo-100 flex items-center justify-center">
                  🕒
                </div>
                <div>
                  <p className="text-sm text-gray-500">Support Hours</p>
                  <p className="font-medium">
                    Mon – Fri · 9AM – 6PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-11 w-11 rounded-xl bg-indigo-100 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">
                    123 Main Street, New York
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="max-w-6xl mx-auto px-6 pb-20">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 mt-2">
        Quick answers to common questions.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
        <h3 className="font-semibold text-lg mb-3">
          Track My Order
        </h3>
        <p className="text-gray-600">
          Log into your account and visit the "My Orders"
          section to view tracking details.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
        <h3 className="font-semibold text-lg mb-3">
          Return Policy
        </h3>
        <p className="text-gray-600">
          Most products can be returned within 30 days of
          delivery.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
        <h3 className="font-semibold text-lg mb-3">
          International Shipping
        </h3>
        <p className="text-gray-600">
          We deliver to selected countries worldwide.
        </p>
      </div>

    </div>
  </section>
</div>
        </>
    )
}
export default Contact;