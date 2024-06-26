import { ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | "small";

interface TypographyProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  p: "p",
  small: "p"
};

const sizes: Record<Variant, string> = {
  h1: "text-3xl font-serif md:text-4xl lg:text-5xl xl:text-6xl",
  h2: "text-2xl font-serif md:text-3xl lg:text-4xl",
  h3: "text-xl md:text-2xl lg:text-3xl",
  h4: "text-lg md:text-xl lg:text-2xl",
  h5: "text-base md:text-lg lg:text-xl",
  p: "text-sm md:text-base lg:text-lg",
  small: "text-xs md:text-sm lg:text-base",
};

export const Typography = ({ variant, children, className, as }: TypographyProps) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};
