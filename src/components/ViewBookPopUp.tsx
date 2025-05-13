import Link from "next/link";
import { FaCheck } from "react-icons/fa";

interface PopUpFormProps {
  onClose: () => void;
}
export const PopUpForm: React.FC<PopUpFormProps> = ({ onClose }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-opacity-50">
      <div className="w-[390px] h-[398px] md:h-[440px] md:w-[448px] flex flex-col items-center justify-center bg-[#252525] rounded-2xl p-9">
        <div className="mb-5 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] rounded-full p-3 md:p-5 tracking-widest">
          <FaCheck className="text-white h-4 w-4 md:h-6 md:w-6" />
        </div>
        <h1 className="horizon-outlined text-base md:text-xl text-white tracking-widest mb-6">
          Booking <span className="horizon">Confirmed</span>
        </h1>
        <p className="text-[#8C9092] text-sm md:text-base mt-1 text-center mb-9">
          Your studio session has been successfully booked. Check your email for
          details.
        </p>
        <Link
          href="/viewbooking"
          className="text-base text-white bg-gradient-to-r from-[#7C3AED] to-[#DB2777] rounded-xl w-full text-center py-4 mb-4"
        >
          View Booking
        </Link>
        <button
          onClick={onClose}
          className="text-base border border-[#374151] text-white w-full text-center py-4 rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
};
