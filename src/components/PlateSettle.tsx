"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PlateSettle({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className ? `plate-settle ${className}` : "plate-settle"}
      initial={reduce ? false : { filter: "blur(6px)", opacity: 0.86 }}
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
    />
  );
}
