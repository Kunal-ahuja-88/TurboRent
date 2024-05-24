import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";
import { useRouter, useSearchParams } from "next/navigation";


const InsightCard = ({ imgUrl, title, subtitle, index, isForm, form }) => {
    const searchParams = useSearchParams();
    const option = searchParams.get("option");
    const router = useRouter();
    return (
      <motion.div
        variants={fadeIn("up", "string", index * 0.5, 1)}
        className="flex justify-center md:flex-row flex-col gap-4"
      >
        <img
          src={imgUrl}
          className="md:w-[350px] w-full h-[250px] rounded-[32px] object-cover"
          alt=""
        />
        <div>
          <div className="flex justify-between">
            <h4 className="font-extrabold text-slate-500 lg:text-[42px] text-[26px]">
              {title}
            </h4>
            
          </div>
          <p className="mt-4 font-normal lg:text-lg text-sm text-slate-400">
            {subtitle}
          </p>
        </div>
      </motion.div>
    );
  };
  
  export default InsightCard;