export const metadata = {
  title: 'Free Online Tools - ZenoToolBox',
  description: 'Use free online tools like word counter, QR code generator, and more at ZenoToolBox.',
  keywords: 'free online tools, word counter, QR code generator',
};

export default function Tools() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Free Online Tools</h1>
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
    </div>
  );
}