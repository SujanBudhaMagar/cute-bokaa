import { FeatureProps } from "@/types";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";

interface PricingCardProps {
  features: FeatureProps[]
  isPremium?: boolean
}


const PricingCard = ({ features, isPremium = false }: PricingCardProps) => {
  return (
    <ul className="space-y-5 h-[290px] md:h-[230px]">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          {feature.available ? (
            <FaCheckCircle
              className={`w-5 h-5 ${
                isPremium ? "text-[#74A419]" : "text-[#74A419]"
              }`}
            />
          ) : (
            <GoXCircleFill  className="w-5 h-5 text-[#B03C3F]" />
          )}
          <span className="text-sm text-white ">{feature.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default PricingCard;
