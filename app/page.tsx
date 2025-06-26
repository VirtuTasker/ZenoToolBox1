export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <section className="text-center py-12 bg-gray-100 rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to ZenoToolBox</h1>
        <p className="text-lg mb-6">Free AI tools and online utilities for everyone.</p>
        <a href="/tools" className="bg-accent text-white px-6 py-3 rounded-full font-semibold">Explore Tools</a>
      </section>
      <section className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Featured Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">Word Counter</h3>
            <p className="text-gray-600">Count words in your text instantly.</p>
            <a href="/tools/word-counter" className="text-accent font-semibold">Try Now</a>
          </div>
          <div className="border p-4 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">QR Code Generator</h3>
            <p className="text-gray-600">Create QR codes for URLs or text.</p>
            <a href="/tools/qr-code-generator" className="text-accent font-semibold">Try Now</a>
          </div>
        </div>
      </section>
      <section className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">10 Free AI Tools</h3>
            <p className="text-gray-600">Discover the best free AI tools...</p>
            <a href="/blog/10-free-ai-tools" className="text-accent font-semibold">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
}