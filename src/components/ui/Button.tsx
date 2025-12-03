import { type ReactNode, type AnchorHTMLAttributes } from "react";
import { gsap } from "gsap";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50",
  secondary:
    "group rounded-full border-2 border-white/20 bg-white/5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10",
  ghost: "group font-semibold text-gray-400 transition-all duration-300 hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-6 py-2 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-5 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <a
      href={href}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {variant === "primary" && (
        <>
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </>
      )}
      {variant !== "primary" && children}
    </a>
  );
}
