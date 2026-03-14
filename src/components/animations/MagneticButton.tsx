import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  [key: string]: unknown;
}

const MagneticButton = ({ children, className, as = "button", ...props }: MagneticButtonProps) => {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouse = (e: React.MouseEvent) => {
    if (shouldReduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - centerX) * 0.3,
      y: (e.clientY - centerY) * 0.3,
    });
  };

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <Component
      ref={ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default MagneticButton;
