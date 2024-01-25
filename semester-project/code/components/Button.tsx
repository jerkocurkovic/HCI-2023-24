import { ReactNode, MouseEvent } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  green?: boolean;
  grey?: boolean;
  black?: boolean;
  blue?: boolean;
  yellow?: boolean;
  brown?: boolean;
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
  black,
  blue,
  yellow,
  brown,
}: ButtonProps) => {
  const buttonClasses = cn(
    "transition duration-300 ease-in-out transform group-hover:translate-x-1",
    "group flex items-center gap-2 text-lg max-w-min whitespace-nowrap",
    "px-6 py-3 rounded-3xl font-abeezee font-medium",
    {
      "bg-brand-green-500 hover:bg-brand-green-600 text-white":
        green,
      "bg-brand-grey-50 hover:bg-brand-grey-500": 
        grey,
      "bg-brand-black-500 hover:bg-brand-black-600 text-white": black,
      "bg-brand-blue-500 hover:bg-brand-blue-600 text-white":
        blue,
      "bg-brand-yellow-500 hover:bg-brand-yellow-600 text-white":
        yellow,
      "bg-brand-brown-500 hover:bg-brand-brown-600 text-white":
        brown,

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
