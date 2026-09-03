"use client";

import { motion } from "motion/react";
import {
  BadgeCheck,
  Clock3,
  Eye,
  Lock,
  ShoppingBag,
} from "lucide-react";

import type { ProjectAvailability } from "@/lib/projects";

interface AvailabilityBadgeProps {
  availability: ProjectAvailability;
}

const availabilityConfig = {
  FOR_SALE: {
    label: "For Sale",
    icon: ShoppingBag,
    description: "Available for purchase",
  },

  PAY_AS_YOU_USE: {
    label: "Pay As You Use",
    icon: Clock3,
    description: "Usage-based access",
  },

  DEMO: {
    label: "Demo Available",
    icon: Eye,
    description: "Explore the system",
  },

  PRIVATE: {
    label: "Private Project",
    icon: Lock,
    description: "Private access",
  },
};

export default function AvailabilityBadge({
  availability,
}: AvailabilityBadgeProps) {
  const config = availabilityConfig[availability];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="inline-flex items-center gap-3 border border-[#2f7bff]/30 bg-[#2f7bff]/[0.06] px-4 py-2.5"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2f7bff] opacity-40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2f7bff]" />
      </span>

      <Icon
        size={14}
        strokeWidth={1.4}
        className="text-[#7dd3fc]"
      />

      <div className="flex flex-col">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/70">
          {config.label}
        </span>

        <span className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25">
          {config.description}
        </span>
      </div>
    </motion.div>
  );
}