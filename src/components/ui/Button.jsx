import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-105",
    secondary:
      "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black",
    ghost:
      "text-white hover:text-yellow-400",
  };

  const styles = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}