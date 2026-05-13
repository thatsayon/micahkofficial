"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface CreditPlan {
  percentage: string;
  duration: string;
  description: string;
  highlighted?: boolean;
}

const PLANS: CreditPlan[] = [
  {
    percentage: "50%",
    duration: "3-Year Plan",
    description:
      "50% of your Rejuvenation cost applied toward a new system when you upgrade.",
    highlighted: false,
  },
  {
    percentage: "100%",
    duration: "5-Year Plan",
    description:
      "Full Rejuvenation cost back as credit toward a new system when you upgrade.",
    highlighted: true,
  },
];

export function CreditCard() {
  return (
    <Card className="overflow-hidden rounded-[20px] border-0 bg-[#121F37] p-6">
      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8E98AA]">
        Your Credit Toward a New System
      </p>

      <div className="grid grid-cols-2 gap-3">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.duration}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className={`rounded-[14px] p-4 ${
              plan.highlighted ? "bg-[#DE7B42]" : "bg-white"
            }`}
          >
            <p
              className={`text-3xl font-extrabold leading-none sm:text-4xl ${
                plan.highlighted ? "text-white" : "text-[#121F37]"
              }`}
            >
              {plan.percentage}
            </p>
            <p
              className={`mt-1.5 text-[11px] font-bold uppercase tracking-wider ${
                plan.highlighted ? "text-white" : "text-[#121F37]"
              }`}
            >
              {plan.duration}
            </p>
            <p
              className={`mt-2.5 text-xs leading-relaxed ${
                plan.highlighted ? "text-white/85" : "text-[#6B6B6B]"
              }`}
            >
              {plan.description}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="mt-4 text-[10.5px] leading-relaxed text-[#8E98AA]">
        Credit available with Honest HVAC NOW membership. Valid on upgrade within the membership term.
      </p>
    </Card>
  );
}