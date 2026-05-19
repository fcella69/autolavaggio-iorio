import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className
}: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${className || ""}`;

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classNames}>
      {children}
    </button>
  );
}
