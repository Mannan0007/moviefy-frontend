import React from "react";
import NavBar from "./NavBar";

const PrivacyPolicy = () => {
    return (
        <>
            <div className="bg-gray-900">

        <NavBar/>
            </div>
        <div className="bg-gray-900 text-white min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-red-500 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-300 text-lg mb-6 text-center">
          Last Updated: March 2025
        </p>

        {/* Introduction */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-red-400 mb-3">
            🔒 Your Privacy Matters
          </h2>
          <p className="text-gray-300">
            Welcome to{" "}
            <span className="text-red-400 font-semibold">Moviefy</span>. Your
            privacy is important to us, and we are committed to protecting any
            personal information you share with us. 
          </p>
        </div>

        {/* What Information We Collect */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-red-400 mb-3">
            📋 Information We Collect
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>✅ **Personal Data** – Name, email, and preferences.</li>
            <li>
              ✅ **Usage Data** – Pages visited, movies searched, and watchlist
              activity.
            </li>
            <li>
              ✅ **Cookies & Tracking Technologies** – To enhance user
              experience.
            </li>
          </ul>
        </div>

        {/* How We Use Your Data */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-red-400 mb-3">
            📌 How We Use Your Data
          </h2>
          <p className="text-gray-300">
            - To personalize recommendations and enhance your **movie-watching
            experience**. <br />
            - To improve website performance and **provide customer support**.{" "}
            <br />- To send occasional updates about **new movies, features, or
            promotions**.
          </p>
        </div>

        {/* Data Security */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold text-red-400 mb-3">
            🔐 Data Protection & Security
          </h2>
          <p className="text-gray-300">
            We implement advanced **security measures** to ensure your data is
            safe. Your information will **never be sold or shared** without your
            consent.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 text-center">
          <h2 className="text-2xl font-semibold text-red-400 mb-3">
            📩 Contact Us
          </h2>
          <p className="text-gray-300">
            Have questions about our privacy policy? Reach out to us at:
          </p>
          <a
            href="mailto:support@moviefy.com"
            className="inline-block mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
          >
            support@moviefy.com
          </a>
        </div>
      </div>
    </div>
            </>
  );
};

export default PrivacyPolicy;
