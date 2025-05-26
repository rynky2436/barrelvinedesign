import Image from "next/image"
import Link from "next/link"

export default function WineryPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Crafting Exceptional Wineries</h1>
          <p className="text-xl text-gray-700 mb-8">
            Designing and building wineries that blend artistry with functionality.
          </p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Start Your Project
          </Link>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/winery-hero.jpg"
            alt="Winery Interior"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Image
                src="/images/winery-design.jpg"
                alt="Winery Design"
                width={500}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Winery Design</h3>
              <p className="text-gray-700">Innovative and functional designs tailored to your specific needs.</p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Image
                src="/images/winery-construction.jpg"
                alt="Winery Construction"
                width={500}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Winery Construction</h3>
              <p className="text-gray-700">Expert construction services ensuring quality and durability.</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Image
                src="/images/winery-renovation.jpg"
                alt="Winery Renovation"
                width={500}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Winery Renovation</h3>
              <p className="text-gray-700">Transforming existing spaces into modern and efficient wineries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Explore Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Image
                src="/images/winery-project-1.jpg"
                alt="Winery Project 1"
                width={500}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vineyard Estate Winery</h3>
              <p className="text-gray-700 mb-4">A stunning winery nestled in the heart of wine country.</p>
              <Link
                href="/contact"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Image
                src="/images/winery-project-2.jpg"
                alt="Winery Project 2"
                width={500}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Cellar Winery</h3>
              <p className="text-gray-700 mb-4">A contemporary winery with state-of-the-art facilities.</p>
              <Link
                href="/contact"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Image
                src="/images/winery-project-3.jpg"
                alt="Winery Project 3"
                width={500}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rustic Vineyard Winery</h3>
              <p className="text-gray-700 mb-4">A charming winery with a rustic and inviting atmosphere.</p>
              <Link
                href="/contact"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-red-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Create Your Winery's Legacy</h2>
          <p className="text-xl text-gray-700 mb-8">Let us help you build a winery that stands the test of time.</p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}
