export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b bg-white sticky top-0">
        <h1 className="text-xl font-bold">Peter Web Studio</h1>

        <div className="flex gap-6 text-sm">
          <a href="#services" className="hover:text-gray-500 transition">Services</a>
          <a href="#work" className="hover:text-gray-500 transition">Work</a>
          <a href="#about" className="hover:text-gray-500 transition">About</a>
          <a href="#contact" className="hover:text-gray-500 transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-40 px-6 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight max-w-4xl mx-auto">
          High-Performance Websites That Grow Your Business
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          I design and build modern, fast, conversion-focused websites for businesses that want real results.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 hover:scale-105 transition duration-300">
            Get a Website
          </button>

          <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
            View Work
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold">About Me</h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          I am a web designer focused on building fast, modern, conversion-driven websites that help businesses grow.
        </p>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold">My Work</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          <div className="border p-8 rounded-xl hover:shadow-xl hover:-translate-y-2 transition duration-300">
            Business Website
          </div>

          <div className="border p-8 rounded-xl hover:shadow-xl hover:-translate-y-2 transition duration-300">
            E-commerce Store
          </div>

          <div className="border p-8 rounded-xl hover:shadow-xl hover:-translate-y-2 transition duration-300">
            Landing Page
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 text-center bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-semibold">Let’s Work Together</h2>

        <p className="mt-4 text-gray-600">
          Ready to build a powerful website for your business? Let’s get started.
        </p>

        <p className="mt-6">📧 yourname@email.com</p>

        <button className="mt-6 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 hover:scale-105 transition duration-300">
          Contact Me
        </button>
      </section>

    </main>
  )
}