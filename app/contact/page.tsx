export const metadata = {
  title: 'Contact Us - ZenoToolBox',
  description: 'Get in touch with ZenoToolBox for support or inquiries.',
  keywords: 'contact ZenoToolBox, support, inquiries',
};

export default function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-md mx-auto">
        <label htmlFor="name" className="block font-semibold mb-2">Name:</label>
        <input type="text" id="name" name="name" className="w-full p-2 border rounded-lg mb-4" required />
        <label htmlFor="email" className="block font-semibold mb-2">Email:</label>
        <input type="email" id="email" name="email" className="w-full p-2 border rounded-lg mb-4" required />
        <label htmlFor="message" className="block font-semibold mb-2">Message:</label>
        <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded-lg mb-4" required></textarea>
        <button type="submit" className="bg-accent text-white px-6 py-2 rounded-full">Send</button>
      </form>
    </div>
  );
}