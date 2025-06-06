"use client";
import { IoMdClose } from "react-icons/io";
import { FaStripe } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

interface CheckoutModalProps {
  isOpen: boolean;
  onclose: () => void;
}

const CheckoutModal = ({ isOpen, onclose }: CheckoutModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center w-full bg-black/80">
      <div className="relative w-[90%] max-w-[850px] h-[95vh] rounded-lg bg-[#252525] p-6 md:p-9 shadow-lg border border-[#E5E7EB]/10">
        <button
          onClick={onclose}
          className="absolute right-4 top-4 text-white hover:text-gray-300"
        >
          <IoMdClose size={24} />
        </button>

        {/* Header */}
        <div className="mt-10 md:mt-6 text-center">
          <h2 className="text-xl md:text-3xl horizon text-white">
            <span>COMPLETE</span>{" "}
            <span className="horizon-outlined">YOUR CHECKOUT</span>
          </h2>
          <p className="mt-2 mb-6 md:mb-9 text-[10px] md:text-[14px] text-[#8C9092] px-0 md:px-20">
            To finalize your order, please provide a few more details. This
            helps us ensure a smooth delivery and personalized experience.
          </p>
        </div>

        {/* Scrollable Form Wrapper */}
        <div className="overflow-y-auto max-h-[calc(90vh-180px)] pr-2 space-y-4 scrollbar-hide">
          <form className="space-y-4 ">
            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="mb-2 ml-2 block text-sm font-medium text-gray-300"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your street address..."
                className="w-full rounded-lg bg-primary p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* City and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="mb-2 ml-2 block text-sm font-medium text-gray-300"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city..."
                  className="w-full rounded-lg bg-primary p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="mb-2 ml-2 block text-sm font-medium text-gray-300"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter your country..."
                  className="w-full rounded-lg bg-primary p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Phone and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 ml-2 block text-sm font-medium text-gray-300"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number..."
                  className="w-full rounded-lg bg-primary p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 ml-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email..."
                  className="w-full rounded-lg bg-primary p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label
                htmlFor="notes"
                className="mb-2 ml-2 block text-sm font-medium text-gray-300"
              >
                Additional Notes
              </label>
              <textarea
                id="notes"
                rows={4}
                placeholder="Any special instructions for delivery?"
                className="w-full rounded-lg bg-primary p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>

            {/* Payment Buttons */}
            <div className="mt-6 space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#9659EB] to-[#E249A1] text-white py-3 transition hover:from-purple-600 hover:to-purple-800"
              >
                <FaWallet className="mr-2" size={20} />
                Pay with Esewa
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#E249A1] to-[#9659EB] py-3 text-white transition hover:from-purple-600 hover:to-purple-800"
              >
                <FaStripe className="mr-2" size={24} />
                Pay with Stripe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
