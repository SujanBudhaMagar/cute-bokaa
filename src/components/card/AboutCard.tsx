import { AboutCardProps } from "@/types";
import Image from "next/image";

const AboutCard: React.FC<AboutCardProps> = ({
  img,
  title,
  des,
  btn,
  btnClass,
}) => {
  return (
    <div className="h-[300px] w-[350px] md:h-[260px] md:w-[540px] bg-[#1F2937] rounded-xl flex flex-col items-start gap-4 p-4 md:p-3 mb-4">
      <div className="h-[290px] w-full rounded-xl overflow-hidden">
        <Image
          src={img}
          alt="None"
          height={1000}
          width={1000}
          className="object-cover rounded-xl h-full w-full"
        />
      </div>
      <div>
        <p className="text-white text-sm space-grotesk mt-1">{title}</p>
        <p className="text-sm text-[#9CA3AF] space-grotesk">{des}</p>
        <button className={`font-medium text-sm space-grotesk ${btnClass}`}>
          {btn}
        </button>
      </div>
    </div>
  );
};

export default AboutCard;
