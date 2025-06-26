'use client';
import { useState } from 'react';

export const metadata = {
  title: 'Free Word Counter - ZenoToolBox',
  description: 'Count words in your text instantly with ZenoToolBox\'s free word counter tool.',
  keywords: 'word counter, free word counter, online word count tool',
};

export default function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Word Counter</h1>
      <textarea
        className="w-full p-4 border rounded-lg"
        rows={6}
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-4 text-lg">Word Count: {wordCount}</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Related Tools</h3>
        <a href="/tools/qr-code-generator" className="text-accent">QR Code Generator</a>
      </div>
    </div>
  );
}