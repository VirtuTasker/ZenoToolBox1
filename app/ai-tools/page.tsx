export const metadata = {
  title: 'AI Tools Directory - ZenoToolBox',
  description: 'Explore the best AI tools for writing, video, SEO, and more at ZenoToolBox.',
  keywords: 'AI tools, best AI tools, AI writing tools',
};

export default function AITools() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Tools Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold">Jasper</h3>
          <p className="text-gray-600">AI-powered writing assistant.</p>
          <a href="https://jasper.ai" className="text-accent font-semibold">Visit</a>
        </div>
        <div className="border p-4 rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold">Canva</h3>
          <p className="text-gray-600">AI-enhanced design platform.</p>
          <a href="https://canva.com" className="text-accent font-semibold">Visit</a>
        </div>
      </div>
    </div>
  );
}