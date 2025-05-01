import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the email to a server
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-orange-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get weekly recipe inspiration, cooking tips, and exclusive content
            delivered straight to your inbox.
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg max-w-md mx-auto">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm mt-1">Look out for delicious recipes in your inbox soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-grow py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;