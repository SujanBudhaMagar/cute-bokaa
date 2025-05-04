"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  price: string | number;
  isIncluded?: boolean;
  isTBD?: boolean;
}

interface PricingSectionProps {
  services: Service[];
}

export default function PricingSection({ services }: PricingSectionProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  const toggleService = (id: string) => {
    setSelectedServices((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  useEffect(() => {
    const newTotal = services
      .filter(
        (service) =>
          selectedServices.includes(service.id) &&
          !service.isIncluded &&
          !service.isTBD
      )
      .reduce((sum, service) => sum + Number(service.price), 0);

    setTotal(newTotal);
  }, [selectedServices, services]);

  const formatPrice = (
    price: string | number,
    isIncluded?: boolean,
    isTBD?: boolean
  ) => {
    if (isIncluded) return "Included";
    if (isTBD) return "TBD";
    return typeof price === "number" ? `$${price}` : price;
  };

  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-[#252525] p-6 rounded-lg">
            <div className="flex justify-between mb-1">
              <div className="flex-1">
                <h3 className="text-white">{service.title}</h3>
                <p className="text-xs text-[#8C9092] mb-2">
                  {service.description}
                </p>
                <p
                  className={`${
                    service.isIncluded
                      ? "text-[#34D399]"
                      : service.isTBD
                      ? "text-[#F472B6] text-xl"
                      : "text-[#F472B6] text-xl"
                  }`}
                >
                  {formatPrice(
                    service.price,
                    service.isIncluded,
                    service.isTBD
                  )}
                </p>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service.id)}
                  onChange={() => toggleService(service.id)}
                  className="w-5 h-5 accent-[#F472B6] rounded-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="bg-[#252525] p-6 mt-12 rounded-lg">
        <div className="flex justify-between items-center pt-4">
          <div>
            <p className="font-medium text-xl text-white">Total</p>
            <p className="text-xs text-gray-500">
              Selected items: {selectedServices.length}
            </p>
          </div>
          <p className="text-2xl text-white">${total.toFixed(2)}</p>
        </div>

        {/* Buy Now Button */}
        <div className="flex justify-end mt-4">
          <Link
            href="/mixingform"
            className="bg-gradient-to-r from-[#945AED] to-[#E6499E] px-8 py-4 rounded-lg text-white hover:opacity-90 transition-opacity text-sm md:text-xl border-[1px] border-[#8C9092]"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
