"use client";

import LogoComp from "@/components/LogoComp";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 text-gray-900 dark:text-gray-100">
        <LogoComp/>
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Terms and Conditions
      </h1>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-8 text-center">
        <strong>Last Updated:</strong> May 27, 2025
      </p>

      <section className="mb-8 space-y-4">
        <p>
          Welcome to Cute Boka! By accessing or using our website, you agree to
          comply with and be bound by these Terms and Conditions. Please read
          them carefully.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
          1. Use of Website
        </h2>
        <p className="text-sm sm:text-base">
          You agree to use our website only for lawful purposes and not to
          engage in any activity that may harm or disrupt the website or its
          users.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
          2. Orders and Payments
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
          <li>
            All orders are subject to availability and confirmation of the order
            price.
          </li>
          <li>
            Payment must be completed through the provided payment gateways
            before order processing.
          </li>
          <li>
            We reserve the right to refuse or cancel any orders at our
            discretion.
          </li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          3. Shipping and Delivery
        </h2>
        <p className="text-sm sm:text-base">
          We aim to deliver your orders within the estimated time frame but
          cannot guarantee exact delivery dates. Delays may occur due to
          unforeseen circumstances.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          4. Returns and Refunds
        </h2>
        <p className="text-sm sm:text-base">
          Returns are accepted within 7 days of delivery for defective or
          damaged items only. Please contact our support team to initiate a
          return.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          5. Intellectual Property
        </h2>
        <p className="text-sm sm:text-base">
          All content on this website including text, graphics, logos, and
          images is the property of Cute Boka and protected by intellectual
          property laws.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          6. Limitation of Liability
        </h2>
        <p className="text-sm sm:text-base">
          Cute Boka shall not be liable for any indirect, incidental, or
          consequential damages arising from the use or inability to use the
          website or products.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          7. Changes to Terms
        </h2>
        <p className="text-sm sm:text-base">
          We reserve the right to update or change these Terms and Conditions at
          any time without prior notice. Your continued use of the site means
          you accept the changes.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
        <p className="text-sm sm:text-base">
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:support@cuteboka.com"
            className="text-purple-600 hover:underline"
          >
            support@cuteboka.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
