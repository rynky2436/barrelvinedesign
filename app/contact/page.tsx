const ContactPage = () => {
  return (
    <div className="container mx-auto py-16">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bring Your Vision to Life</h1>
        <p className="text-gray-600">
          Ready to start your custom laser engraving project? We'd love to help bring your vision to life.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Start Your Project</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* Contact Information Card */}
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-4">Contact us today to discuss your project and get a free quote.</p>
          <p className="text-gray-600 mb-2">Email: info@example.com</p>
          <p className="text-gray-600 mb-2">Address: 123 Main St, Anytown USA</p>
          <a
            href="tel:301-748-8360"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Call Now: (301) 748-8360
          </a>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
