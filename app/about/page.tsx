import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Barrel & Vine Designs - Custom Laser Engraving Experts | Washington DC Metro",
  description:
    "Learn about Barrel & Vine Designs, your trusted partner for premium laser engraving services in the DMV region. Specializing in custom solutions for wineries and breweries.",
  keywords:
    "laser engraving company, custom engraving services, DMV laser engraving, winery branding experts, brewery merchandise specialists",
  openGraph: {
    title: "About Barrel & Vine Designs - Custom Laser Engraving Experts",
    description:
      "Learn about Barrel & Vine Designs, your trusted partner for premium laser engraving services in the DMV region.",
    images: [
      { url: "/images/about-hero.png", width: 1200, height: 630, alt: "Barrel & Vine Designs Laser Engraving Process" },
    ],
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">About Barrel & Vine Designs</h1>

      <div className="mb-8">
        <h2 className="text-4xl font-bold text-stone-800 mb-6 font-playfair">Our Story</h2>
        <p className="text-lg">
          Founded in the heart of the DMV, Barrel & Vine Designs was born from a passion for craftsmanship and a love
          for the region's thriving winery and brewery scene. We saw an opportunity to provide custom laser engraving
          services that elevate brands and create lasting impressions.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 font-playfair">Our Mission</h2>
        <p className="text-lg">
          To empower wineries and breweries with premium laser engraving solutions that enhance their brand identity,
          captivate their audience, and drive business growth.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Precision Craftsmanship</h3>
        <p className="text-lg">
          We utilize state-of-the-art laser technology and meticulous attention to detail to ensure every engraving is
          flawless.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Premium Quality</h3>
        <p className="text-lg">
          We source only the finest materials to guarantee the durability and longevity of our engraved products.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-stone-800 mb-4 font-playfair">Creative Partnership</h3>
        <p className="text-lg">
          We collaborate closely with our clients to bring their vision to life, offering expert guidance and innovative
          design solutions.
        </p>
      </div>
    </div>
  )
}
