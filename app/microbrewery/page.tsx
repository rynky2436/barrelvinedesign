const MicrobreweryPage = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Crafting Unique Microbreweries</h1>
        <p className="text-gray-600 mb-8">
          We help you design and build the perfect microbrewery to bring your vision to life.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Your Project
        </button>
      </section>

      {/* Product Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Product Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Microbrewery Design"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Custom Brewery Design</h2>
            <p className="text-gray-700">
              We create bespoke brewery designs tailored to your specific needs and space.
            </p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Get Started
            </button>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/400x300" alt="Brewing Equipment" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">High-Quality Equipment</h2>
            <p className="text-gray-700">Source the best brewing equipment for optimal performance and longevity.</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Get Started
            </button>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Installation & Support"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Installation & Ongoing Support</h2>
            <p className="text-gray-700">Professional installation and ongoing support to ensure smooth operation.</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Create Something Special</h2>
        <p className="text-gray-600 mb-8">Ready to take the next step? Let's discuss your microbrewery project.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </section>
    </div>
  )
}

export default MicrobreweryPage
