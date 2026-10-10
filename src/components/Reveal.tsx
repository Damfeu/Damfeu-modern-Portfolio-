import type { HTMLAttributes } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const Reveal = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const ref = useReveal<HTMLDivElement>();
  return <div ref={ref} className={cn("reveal", className)} {...props} />;
};

export default Reveal;
