'use client';
import { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export default function QRCodeGenerator() {
  const [input, setInput] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (input && canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, input, { width: 200 }, (err) => {
        if (err) console.error(err);
      });
    }
  }, [input]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">QR Code Generator</h1>
      <input
        type="text"
        className="w-full p-4 border rounded-lg mb-4"
        placeholder="Enter URL or text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="text-center">
        <canvas ref={canvasRef}></canvas>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Related Tools</h3>
        <a href="/tools/word-counter" className="text-accent">Word Counter</a>
      </div>
    </div>
  );
}  <canvas ref={canvasRef}></canvas>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Related Tools</h3>
        <a href="/tools/word-counter" className="text-accent">Word Counter</a>
      </div>
    </div>
  );
}