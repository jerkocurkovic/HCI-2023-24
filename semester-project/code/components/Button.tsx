import { ReactNode, MouseEvent } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  green?: boolean;
  grey?: boolean;
  className?: string;
  iconClassName?: string;
};

const Button = ({
  children,
  className,
  iconClassName,
  onClick,
  green,
  grey,
}: ButtonProps) => {
  const buttonClasses = cn(
    "transition duration-300 ease-in-out transform group-hover:translate-x-1",
    "group flex items-center gap-2 text-lg max-w-min whitespace-nowrap",
    "px-6 py-3 rounded-3xl font-abeezee font-medium",
    {
      "bg-brand-green-500 hover:bg-brand-green-600 text-white":
        green,
      "bg-brand-grey-50 hover:bg-brand-grey-500": grey,
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span>{children}</span>{" "}
    </button>
  );
};

export default Button;
