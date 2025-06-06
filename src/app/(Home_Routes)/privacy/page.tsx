"use client";

import LogoComp from "@/components/LogoComp";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 text-gray-900 dark:text-gray-100">
      <LogoComp />
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Privacy Policy
      </h1>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-8 text-center">
        <strong>Last Updated:</strong> May 27, 2025
      </p>

      <section className="mb-8 space-y-4">
        <p>
          At Cute Boka, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          personal information when you visit or make a purchase from our
          website.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, shipping address, payment details.
          </li>
          <li>
            <strong>Technical Information:</strong> IP address, browser type,
            device information, and browsing behavior.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies
            to enhance your experience and analyze website traffic.
          </li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>To process and fulfill your orders.</li>
          <li>
            To communicate with you about your orders and customer service.
          </li>
          <li>To improve our website, products, and services.</li>
          <li>To send promotional emails and offers (only if you opted in).</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          3. Data Sharing and Disclosure
        </h2>
        <p className="text-sm sm:text-base">
          We do not sell, trade, or rent your personal information to third
          parties. We may share your data with trusted service providers who
          assist in operating our website, delivering your orders, or conducting
          business, under strict confidentiality agreements.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">4. Data Security</h2>
        <p className="text-sm sm:text-base">
          We implement reasonable security measures to protect your data from
          unauthorized access, alteration, or disclosure. However, no method of
          transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">5. Your Rights</h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>
            You have the right to access, update, or delete your personal data.
          </li>
          <li>
            You may opt-out of receiving marketing communications at any time.
          </li>
          <li>
            You can contact us to request information or data corrections.
          </li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">6. Cookies</h2>
        <p className="text-sm sm:text-base">
          Our website uses cookies to enhance user experience. You can manage or
          disable cookies in your browser settings, but this may affect the
          website functionality.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          7. Changes to This Privacy Policy
        </h2>
        <p className="text-sm sm:text-base">
          We may update this Privacy Policy periodically. Any changes will be
          posted on this page with a new revision date.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <ul className="space-y-4 text-base sm:text-lg">
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-purple-600" />
            <a href="mailto:support@cuteboka.com" className="hover:underline">
              support@cuteboka.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaPhone className="text-purple-600" />
            <a href="tel:+9779800000000" className="hover:underline">
              +977-9800000000
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-600" />
            Kathmandu, Nepal
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
