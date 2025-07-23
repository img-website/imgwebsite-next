
import Link from "next/link";
import Svg from "@/components/svg";
import React from "react";

/**
 * Global Button Component
 * @param {Object} props
 * @param {"default"|"glass"} [props.variant] - Button style variant
 * @param {string} [props.from] - Gradient start color
 * @param {string} [props.to] - Gradient end color
 * @param {string} [props.iconBg] - Icon background color
 * @param {string} [props.icon] - Svg icon name
 * @param {string} [props.href] - Link href
 * @param {string} [props.show] - Label htmlFor
 * @param {React.ReactNode} [props.children] - Button text
 */
const Btn = ({
  variant = "default",
  from = "#4E94FF",
  to = "#216CFF",
  iconBg = "white",
  icon = "arrowCall",
  href,
  show,
  children = "Consult Our Experts",
  ...rest
}) => {
  // If neither href nor show is provided, default to show="leadPopup"
  if (!href && !show) show = "leadPopup";

  // Variant-based classes
  const baseBtn =
    "cursor-pointer xl:text-base text-sm font-semibold text-[var(--btn-icon-bg)] inline-flex items-center xl:py-3 py-2.5 xl:ps-6 ps-4 xl:pe-3 pe-2.5 xl:gap-3 gap-2 rounded-full duration-300 group/btn";

  // Use CSS variables for colors
  const btnClass = `${baseBtn} ${variant === "glass" ? "bg-white/10 border border-white/30 backdrop-blur-md text-[var(--btn-icon-bg)] hover:lg:ring-4 hover:lg:ring-inset" : "bg-gradient-to-b hover:lg:ring-4 hover:lg:ring-inset"}`;

  // Inline style for CSS variables
  const styleVars = {
    '--btn-from': from,
    '--btn-to': to,
    '--btn-icon-bg': iconBg,
  };

  // Use CSS vars in Tailwind with [var(--btn-from)] syntax
  const defaultBgVars = 'from-[var(--btn-from)] to-[var(--btn-to)] hover:lg:ring-[var(--btn-to)]';
  const glassBgVars = 'hover:lg:ring-[var(--btn-to)]';
  const btnClassVars = `${btnClass} ${variant === "glass" ? glassBgVars : defaultBgVars}`;

  const iconClass = `inline-flex items-center justify-center shrink-0 xl:size-7 size-6 rounded-full bg-[var(--btn-icon-bg)] group-hover/btn:lg:scale-110 relative group-hover/btn:lg:bg-[var(--btn-from)] before:absolute before:inset-0 before:rounded-full before:bg-white before:duration-300 before:scale-0 group-hover/btn:lg:before:scale-100 duration-300`;
  const svgClass = `size-3 relative z-10 text-[var(--btn-from)]`;

  // Render as Link, label, or button
  if (href) {
    return (
      <Link href={href} className={btnClassVars} style={styleVars} {...rest}>
        <span>{children}</span>
        <div className={iconClass}>
          <Svg name={icon} className={svgClass} />
        </div>
      </Link>
    );
  }
  return (
    <label htmlFor={show} className={btnClassVars} style={styleVars} {...rest}>
      <span>{children}</span>
      <div className={iconClass}>
        <Svg name={icon} className={svgClass} />
      </div>
    </label>
  );
};

export default Btn;