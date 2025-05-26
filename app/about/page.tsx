import Image from "next/image"

const AboutPage = () => {
  return (
    <div className="container mx-auto py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Creating custom laser engraving solutions for wineries and breweries across the DMV
        </p>
        <div className="flex justify-center mt-8">
          <Image
            src="/images/about-hero.jpg" // Replace with your image path
            alt="Laser Engraving Example"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700">
            We started as a small workshop with a passion for precision and a love for the craft. Over the years, we've
            honed our skills and expanded our capabilities to become a trusted partner for businesses seeking unique and
            high-quality laser engraving services. We are dedicated to providing exceptional results and building
            lasting relationships with our clients.
          </p>
        </div>
        <div>
          <Image
            src="/images/our-story.jpg" // Replace with your image path
            alt="Workshop"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Precision</h3>
            <p className="text-gray-700">We are committed to delivering accurate and flawless results every time.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-700">
              We use only the finest materials and the latest technology to ensure superior quality.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-gray-700">We prioritize our clients' needs and strive to exceed their expectations.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Create Together</h2>
        <p className="text-gray-600 text-lg mb-8">
          Ready to work with a team that understands your craft and shares your commitment to excellence? We'd love to
          hear about your vision.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Your Project
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Get a Quote
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
