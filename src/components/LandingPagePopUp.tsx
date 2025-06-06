import Link from "next/link";
import { IoMdClose } from "react-icons/io";

interface LandingPagePopUpProps {
  onclose: () => void;
}
export const LandingPagePopUpForm: React.FC<LandingPagePopUpProps> = ({
  onclose,
}) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative h-[307px] w-[340px] md:h-[350px] md:w-[450px] flex flex-col items-center justify-center bg-[#252525] rounded-2xl py-8 px-5 text-white">
        <IoMdClose
          className="absolute top-4 right-5 h-6 w-6 md:h-8 md:w-8 cursor-pointer"
          onClick={onclose}
        />
        <h1 className="horizon-outlined tracking-widest text-xl md:text-3xl mb-1">
          $25 off
        </h1>
        <h2 className="horizon text-xs md:text-base mb-6 tracking-widest">
          On Your First Order!
        </h2>
        <input
          type="text"
          placeholder="Enter your email address"
          className="border border-[#374151] bg-primary text-[#8C9092] w-full rounded-xl py-3 pl-4 mb-4"
        />
        <Link
          href="/signup"
          className="bg-gradient-to-r from-[#8C57E4] to-[#F03F98] text-white py-3 text-base md:text-2xl rounded-xl w-full text-center"
        >
          Sign Up
        </Link>
        <p className="text-center text-[#8C9092] text-xs tracking-wide mt-2 w-2xs md:w-xs">
          By signing up, you agree to our{" "}
          <Link
            href={"/termandcondition"}
            className="text-[#60A5FA] hover:underline"
          >
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            href={"/termandcondition"}
            className="text-[#60A5FA] hover:underline"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};
