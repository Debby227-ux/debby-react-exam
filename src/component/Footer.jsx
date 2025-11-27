// src/components/Footer.jsx
// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding / About */}
        <div>
          <h1 className="text-2xl font-bold mb-4">MyWebsite</h1>
          <p className="text-gray-300">
            MyWebsite is your go-to platform for amazing services and solutions. We are dedicated to providing high-quality experiences and value to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-4">
            Subscribe to our newsletter to get the latest news and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-gray-900 flex-grow"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
