export const metadata = {
  title: 'Blog - ZenoToolBox',
  description: 'Read the latest articles on AI tools, productivity, and free online utilities.',
  keywords: 'AI tools blog, free tools blog, productivity tips',
};

export default function Blog() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold">10 Free AI Tools</h3>
          <p className="text-gray-500 text-sm">Posted on June 26, 2025</p>
          <p className="text-gray-600">Discover the best free AI tools...</p>
          <a href="/blog/10-free-ai-tools" className="text-accent font-semibold">Read More</a>
        </div>
      </div>
    </div>
  );
}