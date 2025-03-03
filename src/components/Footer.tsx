import React, { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '7d3166a4-eaef-4141-b017-7777a87ab40a',
          email,
          from: 'Friends',
          subject: 'New Waitlist Signup',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Success! Thank you for joining our waitlist.');
        setEmail('');
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      id="footer"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 mb-64"
    >
      <div
        ref={sectionRef}
        className="flex flex-col items-center justify-center opacity-0 translate-y-10 transform transition-all duration-1000 ease-out"
      >
        <h1 className="text-5xl tracking-tight font-black text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-4 text-center">
          Be the <span className="text-primary">First</span>
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-gray-500 mb-12 text-center max-w-2xl">
          We&apos;re launching soon! Get early access and exclusive perks 🎉
        </p>

        {/* Email Waitlist Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="relative">
            <div className="relative flex items-center">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2.5 p-2.5 text-primary hover:opacity-75 transition-opacity"
                aria-label="Submit email"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
            {status && (
              <p
                className={`mt-4 text-center ${
                  status.includes('Success') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
